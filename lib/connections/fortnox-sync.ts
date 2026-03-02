/**
 * Fortnox SIE Data Sync
 *
 * Orchestrates fetching SIE4 data from Fortnox and importing it
 * through the existing SIE import pipeline. Once journal entries
 * are created as 'posted', they automatically appear in dashboard,
 * bookkeeping, and reports — no additional UI changes needed.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { SIESyncResult } from '@/types'
import type { AccountMapping, SIEAccountMappingRecord } from '@/lib/import/types'
import { refreshAccessToken } from '@/lib/connections/oauth'
import { fetchFortnoxSIE } from '@/lib/connections/fortnox-api'
import { parseSIEFile, detectEncoding, decodeBuffer } from '@/lib/import/sie-parser'
import { suggestMappings } from '@/lib/import/account-mapper'
import { executeSIEImport, checkDuplicateImport } from '@/lib/import/sie-import'
import { BAS_REFERENCE } from '@/lib/bookkeeping/bas-data'
import { getBASReference } from '@/lib/bookkeeping/bas-reference'
import { fetchAllRows } from '@/lib/supabase/fetch-all'

/**
 * Sync SIE accounting data from Fortnox for a specific financial year.
 *
 * Flow: get tokens → refresh if needed → fetch SIE4 → detect encoding →
 * parse → auto-map accounts → validate → auto-activate accounts → execute import
 *
 * Never throws — always returns a SIESyncResult.
 */
export async function syncFortnoxSIEData(
  adminClient: SupabaseClient,
  supabase: SupabaseClient,
  connectionId: string,
  userId: string,
  financialYear: number,
): Promise<SIESyncResult> {
  const result: SIESyncResult = {
    success: false,
    accountsActivated: 0,
    journalEntriesCreated: 0,
    openingBalanceCreated: false,
    fiscalPeriodId: null,
    importId: null,
    fiscalYearStart: null,
    fiscalYearEnd: null,
    companyName: null,
    warnings: [],
    errors: [],
  }

  try {
    // 1. Fetch current tokens
    const { data: tokenRow, error: tokenError } = await adminClient
      .from('provider_connection_tokens')
      .select('*')
      .eq('connection_id', connectionId)
      .single()

    if (tokenError || !tokenRow) {
      result.errors.push('Inga inloggningsuppgifter hittades för anslutningen')
      return result
    }

    let accessToken: string = tokenRow.access_token

    // 2. Refresh token if expired (5 min buffer)
    if (tokenRow.token_expires_at) {
      const expiresAt = new Date(tokenRow.token_expires_at)
      const now = new Date()

      if (expiresAt.getTime() - now.getTime() < 5 * 60 * 1000) {
        if (!tokenRow.refresh_token) {
          result.errors.push('Token har gått ut och ingen refresh-token finns tillgänglig')
          return result
        }

        try {
          const newTokens = await refreshAccessToken('fortnox', tokenRow.refresh_token)
          accessToken = newTokens.access_token

          const tokenExpiresAt = newTokens.expires_in
            ? new Date(Date.now() + newTokens.expires_in * 1000).toISOString()
            : null

          await adminClient
            .from('provider_connection_tokens')
            .update({
              access_token: newTokens.access_token,
              refresh_token: newTokens.refresh_token || tokenRow.refresh_token,
              token_expires_at: tokenExpiresAt,
            })
            .eq('connection_id', connectionId)
        } catch (err) {
          result.errors.push(
            `Kunde inte förnya token: ${err instanceof Error ? err.message : 'Okänt fel'}`
          )
          return result
        }
      }
    }

    // 3. Fetch SIE4 data from Fortnox
    const sieBuffer = await fetchFortnoxSIE(accessToken, financialYear)

    if (!sieBuffer) {
      result.errors.push('Kunde inte hämta SIE-data från Fortnox')
      return result
    }

    if (sieBuffer.byteLength === 0) {
      result.errors.push('Fortnox returnerade tom SIE-fil')
      return result
    }

    // 4. Detect encoding and decode
    const encoding = detectEncoding(sieBuffer)
    const content = decodeBuffer(sieBuffer, encoding)

    // 5. Parse SIE file
    const parsed = parseSIEFile(content)

    result.companyName = parsed.header.companyName

    if (parsed.header.fiscalYears.length > 0) {
      const fy = parsed.header.fiscalYears[0]
      result.fiscalYearStart = fy.start.toISOString().split('T')[0]
      result.fiscalYearEnd = fy.end.toISOString().split('T')[0]
    }

    // Collect parse warnings
    for (const issue of parsed.issues) {
      if (issue.severity === 'error') {
        result.errors.push(`Parsningsfel rad ${issue.line}: ${issue.message}`)
      } else if (issue.severity === 'warning') {
        result.warnings.push(`Varning rad ${issue.line}: ${issue.message}`)
      }
    }

    // Abort if critical parse errors
    if (result.errors.length > 0) {
      return result
    }

    // 6. Check for duplicate import
    const existingImport = await checkDuplicateImport(supabase, userId, content)
    if (existingImport) {
      result.errors.push('Data redan importerad — samma SIE-data har redan hämtats')
      return result
    }

    // 7. Auto-map accounts using BAS reference + stored mappings
    const { data: storedMappings } = await supabase
      .from('sie_account_mappings')
      .select('*')
      .eq('user_id', userId)

    const mappings: AccountMapping[] = suggestMappings(
      parsed.accounts,
      BAS_REFERENCE,
      (storedMappings as SIEAccountMappingRecord[]) || undefined
    )

    // 8. Validate all accounts are mapped
    const unmapped = mappings.filter((m) => !m.targetAccount)
    if (unmapped.length > 0) {
      const accountList = unmapped.slice(0, 5).map((m) => `${m.sourceAccount} (${m.sourceName})`).join(', ')
      const suffix = unmapped.length > 5 ? ` och ${unmapped.length - 5} till` : ''
      result.errors.push(`${unmapped.length} konton kunde inte mappas automatiskt: ${accountList}${suffix}`)
      return result
    }

    // 9. Auto-activate mapped BAS accounts not yet in user's chart
    const mappedAccountNumbers = [
      ...new Set(mappings.filter((m) => m.targetAccount).map((m) => m.targetAccount)),
    ]

    const existingAccounts = await fetchAllRows(({ from, to }) =>
      supabase
        .from('chart_of_accounts')
        .select('account_number')
        .eq('user_id', userId)
        .in('account_number', mappedAccountNumbers)
        .range(from, to)
    )

    // Build a lookup from SIE mappings for account names (used for bas_range accounts)
    const mappingNameLookup = new Map<string, string>()
    for (const m of mappings) {
      if (m.targetAccount) {
        mappingNameLookup.set(m.targetAccount, m.targetName || m.sourceName)
      }
    }

    const existingNumbers = new Set(existingAccounts.map((a) => a.account_number))
    const accountsToActivate = mappedAccountNumbers
      .filter((num) => !existingNumbers.has(num))
      .map((num) => {
        const ref = getBASReference(num)
        if (ref) {
          return {
            user_id: userId,
            account_number: ref.account_number,
            account_name: ref.account_name,
            account_class: ref.account_class,
            account_group: ref.account_group,
            account_type: ref.account_type,
            normal_balance: ref.normal_balance,
            plan_type: 'full_bas' as const,
            is_active: true,
            is_system_account: false,
            description: ref.description,
            sru_code: ref.sru_code,
            sort_order: parseInt(ref.account_number),
          }
        }

        // Sub-account not in BAS reference — derive metadata from account number
        const accountClass = parseInt(num.charAt(0), 10)
        const accountGroup = num.substring(0, 2)
        const accountName = mappingNameLookup.get(num) || `Konto ${num}`
        const accountType =
          accountClass === 1 ? 'asset'
            : accountClass === 2 ? 'liability'
              : accountClass === 3 ? 'revenue'
                : 'expense'
        const normalBalance =
          accountClass <= 1 || accountClass >= 4 ? 'debit' : 'credit'

        return {
          user_id: userId,
          account_number: num,
          account_name: accountName,
          account_class: accountClass,
          account_group: accountGroup,
          account_type: accountType,
          normal_balance: normalBalance,
          plan_type: 'full_bas' as const,
          is_active: true,
          is_system_account: false,
          description: accountName,
          sru_code: null,
          sort_order: parseInt(num),
        }
      })

    if (accountsToActivate.length > 0) {
      const { error: activateError } = await supabase
        .from('chart_of_accounts')
        .insert(accountsToActivate)

      if (activateError) {
        result.errors.push(`Kunde inte aktivera konton: ${activateError.message}`)
        return result
      }
    }

    result.accountsActivated = accountsToActivate.length

    // 10. Execute the SIE import
    const yearLabel = financialYear === 0
      ? 'innevarande'
      : financialYear === 1
        ? 'föregående'
        : `${financialYear} år sedan`

    const importResult = await executeSIEImport(
      supabase,
      userId,
      parsed,
      mappings,
      {
        filename: `fortnox-sie4-${yearLabel}.se`,
        fileContent: content,
        createFiscalPeriod: true,
        importOpeningBalances: true,
        importTransactions: true,
        voucherSeries: 'B',
      }
    )

    result.importId = importResult.importId
    result.fiscalPeriodId = importResult.fiscalPeriodId
    result.openingBalanceCreated = importResult.openingBalanceEntryId !== null
    result.journalEntriesCreated = importResult.journalEntriesCreated
    result.warnings.push(...importResult.warnings)

    if (!importResult.success) {
      result.errors.push(...importResult.errors)
      return result
    }

    result.success = true
    return result
  } catch (err) {
    result.errors.push(
      `Oväntat fel: ${err instanceof Error ? err.message : 'Okänt fel'}`
    )
    return result
  }
}
