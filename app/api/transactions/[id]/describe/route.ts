import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { ensureInitialized } from '@/lib/init'
import { validateBody } from '@/lib/api/validate'
import { DescribeTransactionSchema } from '@/lib/api/schemas'
import { extensionRegistry } from '@/lib/extensions/registry'
import { findMatchingTemplates, type TemplateMatch } from '@/lib/bookkeeping/booking-templates'
import type { Transaction, EntityType, VatTreatment } from '@/types'
import type { Extension } from '@/lib/extensions/types'

interface DescriptionAnalysisInput {
  description: string
  transactionAmount: number
  transactionDate: string
  transactionDescription: string
  merchantName: string | null
  currency: string
  entityType: EntityType
}

interface DescriptionAnalysisResult {
  debitAccount: string
  creditAccount: string
  vatTreatment: VatTreatment | null
  category: string
  confidence: number
  reasoning: string
  warnings: string[]
  templateId: string | null
}

ensureInitialized()

async function getTemplateMatches(
  aiExt: Extension | undefined,
  transaction: Transaction,
  entityType: EntityType,
  description: string
): Promise<TemplateMatch[]> {
  if (aiExt?.services?.findSimilarTemplates) {
    return aiExt.services.findSimilarTemplates(transaction, entityType, 10, description)
  }
  return findMatchingTemplates(transaction, entityType)
}

async function getAiAnalysis(
  aiExt: Extension | undefined,
  transaction: Transaction,
  entityType: EntityType,
  description: string
): Promise<DescriptionAnalysisResult | null> {
  if (!aiExt?.services?.analyzeDescription) return null

  try {
    const input: DescriptionAnalysisInput = {
      description,
      transactionAmount: transaction.amount,
      transactionDate: transaction.date,
      transactionDescription: transaction.description,
      merchantName: transaction.merchant_name,
      currency: transaction.currency,
      entityType,
    }
    return await aiExt.services.analyzeDescription(input)
  } catch (error) {
    console.error('[describe] AI analysis failed, continuing with templates only:', error)
    return null
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient()
  const { id } = await params

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const validation = await validateBody(request, DescribeTransactionSchema)
  if (!validation.success) return validation.response
  const { description } = validation.data

  // Fetch the transaction (validates ownership)
  const { data: transaction, error: fetchError } = await supabase
    .from('transactions')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single()

  if (fetchError || !transaction) {
    return NextResponse.json({ error: 'Transaction not found' }, { status: 404 })
  }

  // Fetch entity type
  const { data: settings } = await supabase
    .from('company_settings')
    .select('entity_type')
    .eq('user_id', user.id)
    .single()

  const entityType: EntityType = (settings?.entity_type as EntityType) || 'enskild_firma'

  const aiExt = extensionRegistry.get('ai-categorization')

  // Run template matching and AI analysis in parallel
  const [templates, aiSuggestion] = await Promise.all([
    getTemplateMatches(aiExt, transaction as Transaction, entityType, description),
    getAiAnalysis(aiExt, transaction as Transaction, entityType, description),
  ])

  // AI rescues weak templates: needs_more_detail is false when AI provided a suggestion
  const needsMoreDetail = aiSuggestion
    ? false
    : templates.length === 0 || templates[0].confidence < 0.55

  // Count uncategorized sibling transactions from same merchant
  let batchCandidateCount = 0
  if (transaction.merchant_name) {
    const { count } = await supabase
      .from('transactions')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('merchant_name', transaction.merchant_name)
      .is('journal_entry_id', null)
      .neq('id', id)

    batchCandidateCount = count || 0
  }

  return NextResponse.json({
    data: {
      templates: templates.map((m) => ({
        template_id: m.template.id,
        name_sv: m.template.name_sv,
        name_en: m.template.name_en,
        group: m.template.group,
        debit_account: m.template.debit_account,
        credit_account: m.template.credit_account,
        confidence: m.confidence,
        description_sv: m.template.description_sv,
        vat_rate: m.template.vat_rate,
        vat_treatment: m.template.vat_treatment,
        deductibility: m.template.deductibility,
        deductibility_note_sv: m.template.deductibility_note_sv || null,
        special_rules_sv: m.template.special_rules_sv || null,
        risk_level: m.template.risk_level,
      })),
      ai_suggestion: aiSuggestion ? {
        debit_account: aiSuggestion.debitAccount,
        credit_account: aiSuggestion.creditAccount,
        vat_treatment: aiSuggestion.vatTreatment,
        category: aiSuggestion.category,
        confidence: aiSuggestion.confidence,
        reasoning: aiSuggestion.reasoning,
        warnings: aiSuggestion.warnings,
        template_id: aiSuggestion.templateId,
      } : null,
      needs_more_detail: needsMoreDetail,
      user_description: description,
      batch_candidate_count: batchCandidateCount,
      merchant_name: transaction.merchant_name,
    },
  })
}
