import type { SupabaseClient } from '@supabase/supabase-js'
import type { AccountingProvider } from '@/types'
import { refreshAccessToken, isOAuthProvider } from '@/lib/connections/oauth'
import { fetchFortnoxCompanyInfo } from '@/lib/connections/fortnox-api'

export type SyncStatus = 'synced' | 'error' | 'token_expired'

export interface SyncResult {
  status: SyncStatus
  provider: AccountingProvider
  companyName?: string
  error?: string
}

/**
 * Sync a single provider connection: refresh tokens if needed, fetch company info, update DB.
 * Uses a service-role client to access the tokens table (USING(false) RLS).
 * Never throws — returns a result object.
 */
export async function syncProviderConnection(
  adminClient: SupabaseClient,
  connectionId: string,
  provider: AccountingProvider,
): Promise<SyncResult> {
  try {
    // 1. Fetch current tokens
    const { data: tokenRow, error: tokenError } = await adminClient
      .from('provider_connection_tokens')
      .select('*')
      .eq('connection_id', connectionId)
      .single()

    if (tokenError || !tokenRow) {
      await markError(adminClient, connectionId, 'No tokens found for connection')
      return { status: 'error', provider, error: 'No tokens found' }
    }

    let accessToken: string = tokenRow.access_token

    // 2. Refresh token if expired (only for OAuth providers)
    if (isOAuthProvider(provider) && tokenRow.token_expires_at) {
      const expiresAt = new Date(tokenRow.token_expires_at)
      const now = new Date()
      // Refresh if expired or within 5 minutes of expiry
      if (expiresAt.getTime() - now.getTime() < 5 * 60 * 1000) {
        if (!tokenRow.refresh_token) {
          await markError(adminClient, connectionId, 'Token expired and no refresh token available')
          return { status: 'token_expired', provider, error: 'No refresh token' }
        }

        try {
          const newTokens = await refreshAccessToken(provider, tokenRow.refresh_token)
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
          const msg = err instanceof Error ? err.message : 'Token refresh failed'
          await markError(adminClient, connectionId, msg)
          return { status: 'token_expired', provider, error: msg }
        }
      }
    }

    // 3. Fetch company info from provider
    let companyName: string | undefined

    if (provider === 'fortnox') {
      const companyInfo = await fetchFortnoxCompanyInfo(accessToken)
      if (companyInfo) {
        companyName = companyInfo.companyName

        await adminClient
          .from('provider_connections')
          .update({
            provider_company_name: companyInfo.companyName,
            last_synced_at: new Date().toISOString(),
            error_message: null,
          })
          .eq('id', connectionId)

        await adminClient
          .from('provider_connection_tokens')
          .update({
            provider_company_id: companyInfo.databaseNumber != null
              ? String(companyInfo.databaseNumber)
              : null,
            extra_data: companyInfo,
          })
          .eq('connection_id', connectionId)
      } else {
        // API call returned null but didn't throw — mark as synced with a warning
        await adminClient
          .from('provider_connections')
          .update({
            last_synced_at: new Date().toISOString(),
            error_message: 'Could not fetch company info from provider',
          })
          .eq('id', connectionId)
      }
    } else {
      // Non-Fortnox providers: just update last_synced_at for now
      await adminClient
        .from('provider_connections')
        .update({
          last_synced_at: new Date().toISOString(),
          error_message: null,
        })
        .eq('id', connectionId)
    }

    return { status: 'synced', provider, companyName }
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Sync failed'
    await markError(adminClient, connectionId, msg)
    return { status: 'error', provider, error: msg }
  }
}

async function markError(
  adminClient: SupabaseClient,
  connectionId: string,
  message: string,
) {
  try {
    await adminClient
      .from('provider_connections')
      .update({
        status: 'error',
        error_message: message,
      })
      .eq('id', connectionId)
  } catch {
    // Ignore cleanup errors
  }
}
