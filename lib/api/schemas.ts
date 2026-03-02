import { z } from 'zod'

// ============================================================
// Shared primitives
// ============================================================

/** UUID v4 string */
const uuid = z.string().uuid()

/** ISO date string (YYYY-MM-DD) */
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected YYYY-MM-DD date format')

/** BAS account number — always a string of 4 digits */
const accountNumber = z.string().regex(/^\d{4}$/, 'Account number must be exactly 4 digits')

/** Positive monetary amount (> 0) */
const positiveAmount = z.number().positive()

/** Non-negative monetary amount (>= 0) */
const nonNegativeAmount = z.number().nonnegative()

/** Time string (HH:MM or HH:MM:SS) */
const timeString = z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/, 'Expected HH:MM or HH:MM:SS time format')

// ============================================================
// Enum schemas (matching types/index.ts)
// ============================================================

export const EntityTypeSchema = z.enum(['enskild_firma', 'aktiebolag'])

export const CustomerTypeSchema = z.enum([
  'individual',
  'swedish_business',
  'eu_business',
  'non_eu_business',
])

export const SupplierTypeSchema = z.enum([
  'swedish_business',
  'eu_business',
  'non_eu_business',
])

export const InvoiceStatusSchema = z.enum([
  'draft', 'sent', 'paid', 'overdue', 'cancelled', 'credited',
])

export const InvoiceDocumentTypeSchema = z.enum([
  'invoice', 'proforma', 'delivery_note',
])

export const SupplierInvoiceStatusSchema = z.enum([
  'registered', 'approved', 'paid', 'partially_paid', 'overdue', 'disputed', 'credited',
])

export const VatTreatmentSchema = z.enum([
  'standard_25', 'reduced_12', 'reduced_6', 'reverse_charge', 'export', 'exempt',
])

export const AccountingMethodSchema = z.enum(['accrual', 'cash'])

export const CurrencySchema = z.enum(['SEK', 'EUR', 'USD', 'GBP', 'NOK', 'DKK'])

export const TransactionCategorySchema = z.enum([
  'income_services',
  'income_products',
  'income_other',
  'expense_equipment',
  'expense_software',
  'expense_travel',
  'expense_office',
  'expense_marketing',
  'expense_professional_services',
  'expense_education',
  'expense_representation',
  'expense_consumables',
  'expense_vehicle',
  'expense_telecom',
  'expense_bank_fees',
  'expense_card_fees',
  'expense_currency_exchange',
  'expense_other',
  'private',
  'uncategorized',
])

export const JournalEntrySourceTypeSchema = z.enum([
  'manual',
  'bank_transaction',
  'invoice_created',
  'invoice_paid',
  'invoice_cash_payment',
  'credit_note',
  'salary_payment',
  'opening_balance',
  'year_end',
  'storno',
  'correction',
  'import',
  'system',
  'supplier_invoice_registered',
  'supplier_invoice_paid',
  'supplier_invoice_cash_payment',
  'supplier_credit_note',
])

export const AccountTypeSchema = z.enum([
  'asset', 'equity', 'liability', 'revenue', 'expense',
])

export const NormalBalanceSchema = z.enum(['debit', 'credit'])

export const MappingRuleTypeSchema = z.enum([
  'mcc_code', 'merchant_name', 'description_pattern', 'amount_threshold', 'combined',
])

export const RiskLevelSchema = z.enum(['NONE', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH'])

export const DeadlineTypeSchema = z.enum([
  'delivery', 'invoicing', 'report', 'tax', 'other',
])

export const DeadlinePrioritySchema = z.enum(['critical', 'important', 'normal'])

export const TaxDeadlineTypeSchema = z.enum([
  'moms_monthly',
  'moms_quarterly',
  'moms_yearly',
  'f_skatt',
  'arbetsgivardeklaration',
  'inkomstdeklaration_ef',
  'inkomstdeklaration_ab',
  'arsredovisning',
  'periodisk_sammanstallning',
  'bokslut',
])

export const DeadlineSourceSchema = z.enum(['system', 'user'])

export const MomsPeriodSchema = z.enum(['monthly', 'quarterly', 'yearly'])

export const DocumentUploadSourceSchema = z.enum([
  'camera', 'file_upload', 'email', 'e_invoice', 'scan', 'api', 'system',
])

// ============================================================
// Invoice schemas
// ============================================================

export const CreateInvoiceItemSchema = z.object({
  description: z.string().min(1, 'Item description is required'),
  quantity: z.number().positive('Quantity must be positive'),
  unit: z.string().min(1, 'Unit is required'),
  unit_price: z.number(),
  vat_rate: z.number().min(0).max(100).optional(),
})

export const CreateInvoiceSchema = z.object({
  customer_id: uuid,
  invoice_date: isoDate,
  due_date: isoDate,
  currency: CurrencySchema,
  document_type: InvoiceDocumentTypeSchema.optional(),
  your_reference: z.string().optional(),
  our_reference: z.string().optional(),
  notes: z.string().optional(),
  items: z.array(CreateInvoiceItemSchema).min(1, 'At least one item is required'),
})

export const CreateCreditNoteSchema = z.object({
  credited_invoice_id: uuid,
  reason: z.string().optional(),
})

export const MarkInvoicePaidSchema = z.object({
  payment_date: isoDate.optional(),
  exchange_rate_difference: z.number().optional(),
  notes: z.string().optional(),
})

// ============================================================
// Customer schemas
// ============================================================

export const CreateCustomerSchema = z.object({
  name: z.string().min(1, 'Customer name is required'),
  customer_type: CustomerTypeSchema,
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  postal_code: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  org_number: z.string().optional(),
  vat_number: z.string().optional(),
  default_payment_terms: z.number().int().positive().optional(),
  notes: z.string().optional(),
})

export const UpdateCustomerSchema = CreateCustomerSchema.partial()

// ============================================================
// Supplier schemas
// ============================================================

export const CreateSupplierSchema = z.object({
  name: z.string().min(1, 'Supplier name is required'),
  supplier_type: SupplierTypeSchema,
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  postal_code: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  org_number: z.string().optional(),
  vat_number: z.string().optional(),
  bankgiro: z.string().optional(),
  plusgiro: z.string().optional(),
  bank_account: z.string().optional(),
  iban: z.string().optional(),
  bic: z.string().optional(),
  default_expense_account: accountNumber.optional(),
  default_payment_terms: z.number().int().positive().optional(),
  default_currency: CurrencySchema.nullable().optional(),
  notes: z.string().optional(),
})

export const UpdateSupplierSchema = CreateSupplierSchema.partial()

// ============================================================
// Supplier invoice schemas
// ============================================================

export const CreateSupplierInvoiceItemSchema = z.object({
  description: z.string().min(1, 'Item description is required'),
  amount: z.number().optional(),
  account_number: accountNumber,
  vat_rate: z.number().min(0).max(100).optional(),
  vat_code: z.string().optional(),
  quantity: z.number().optional(),
  unit: z.string().optional(),
  unit_price: z.number().optional(),
})

export const CreateSupplierInvoiceSchema = z.object({
  supplier_id: uuid,
  supplier_invoice_number: z.string().min(1, 'Supplier invoice number is required'),
  invoice_date: isoDate,
  due_date: isoDate,
  delivery_date: isoDate.optional(),
  currency: CurrencySchema.optional(),
  exchange_rate: z.number().positive().optional(),
  vat_treatment: VatTreatmentSchema.optional(),
  reverse_charge: z.boolean().optional(),
  payment_reference: z.string().optional(),
  notes: z.string().optional(),
  items: z.array(CreateSupplierInvoiceItemSchema).min(1, 'At least one item is required'),
})

export const MarkSupplierInvoicePaidSchema = z.object({
  amount: z.number().positive().optional(),
  payment_date: isoDate.optional(),
  exchange_rate_difference: z.number().optional(),
  notes: z.string().optional(),
})

export const UpdateSupplierInvoiceSchema = z.object({
  supplier_invoice_number: z.string().min(1).optional(),
  invoice_date: isoDate.optional(),
  due_date: isoDate.optional(),
  delivery_date: isoDate.optional(),
  payment_reference: z.string().optional(),
  notes: z.string().optional(),
})

// ============================================================
// Journal entry schemas
// ============================================================

export const CreateJournalEntryLineSchema = z.object({
  account_number: accountNumber,
  debit_amount: nonNegativeAmount.default(0),
  credit_amount: nonNegativeAmount.default(0),
  line_description: z.string().optional(),
  currency: z.string().optional(),
  amount_in_currency: z.number().optional(),
  exchange_rate: z.number().positive().optional(),
  tax_code: z.string().optional(),
  cost_center: z.string().optional(),
  project: z.string().optional(),
})

export const CreateJournalEntrySchema = z.object({
  fiscal_period_id: uuid,
  entry_date: isoDate,
  description: z.string().min(1, 'Description is required'),
  source_type: JournalEntrySourceTypeSchema.default('manual'),
  source_id: z.string().optional(),
  voucher_series: z.string().optional(),
  lines: z.array(CreateJournalEntryLineSchema).min(2, 'At least two lines are required for double-entry'),
})

export const CorrectJournalEntrySchema = z.object({
  lines: z.array(CreateJournalEntryLineSchema).min(2, 'At least two lines are required for double-entry'),
})

// ============================================================
// Transaction schemas
// ============================================================

export const CategorizeTransactionSchema = z.object({
  is_business: z.boolean(),
  category: TransactionCategorySchema.optional(),
  template_id: z.string().optional(),
  vat_treatment: VatTreatmentSchema.optional(),
  account_override: accountNumber.optional(),
  user_description: z.string().max(500).optional(),
  inbox_item_id: z.string().uuid().optional(),
})

export const BookTransactionSchema = z.object({
  fiscal_period_id: uuid,
  entry_date: isoDate,
  description: z.string().min(1, 'Description is required'),
  lines: z.array(CreateJournalEntryLineSchema).min(1, 'At least one line is required'),
})

export const MatchInvoiceSchema = z.object({
  invoice_id: uuid,
})

export const MatchSupplierInvoiceSchema = z.object({
  supplier_invoice_id: uuid,
})

export const DescribeTransactionSchema = z.object({
  description: z.string().min(3).max(500),
})

export const BatchDescribeSchema = z.object({
  merchant_name: z.string().min(1),
  template_id: z.string().min(1),
  is_business: z.boolean(),
  user_description: z.string().max(500).optional(),
})

// ============================================================
// Settings schemas
// ============================================================

export const UpdateSettingsSchema = z.object({
  entity_type: EntityTypeSchema.optional(),
  company_name: z.string().optional(),
  org_number: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  postal_code: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  f_skatt: z.boolean().optional(),
  vat_registered: z.boolean().optional(),
  vat_number: z.string().optional(),
  moms_period: MomsPeriodSchema.nullable().optional(),
  fiscal_year_start_month: z.number().int().min(1).max(12).optional(),
  preliminary_tax_monthly: z.number().nullable().optional(),
  bank_name: z.string().optional(),
  clearing_number: z.string().optional(),
  account_number: z.string().optional(),
  iban: z.string().optional(),
  bic: z.string().optional(),
  accounting_method: AccountingMethodSchema.optional(),
  invoice_prefix: z.string().nullable().optional(),
  next_invoice_number: z.number().int().positive().optional(),
  invoice_default_days: z.number().int().positive().optional(),
  invoice_default_notes: z.string().nullable().optional(),
  email: z.string().email().optional(),
  pays_salaries: z.boolean().optional(),
  sector_slug: z.string().nullable().optional(),
}).refine(
  (data) => {
    // BFL 3 kap.: Enskild firma must have fiscal year starting January
    if (data.entity_type === 'enskild_firma' && data.fiscal_year_start_month !== undefined) {
      return data.fiscal_year_start_month === 1
    }
    return true
  },
  {
    message: 'Enskild firma must have fiscal year starting in January (BFL 3 kap.)',
    path: ['fiscal_year_start_month'],
  }
)

// ============================================================
// Fiscal period schemas
// ============================================================

export const CreateFiscalPeriodSchema = z.object({
  name: z.string().min(1, 'Period name is required'),
  period_start: isoDate,
  period_end: isoDate,
}).refine(
  (data) => data.period_start < data.period_end,
  {
    message: 'Period start must be before period end',
    path: ['period_end'],
  }
)

// ============================================================
// Mapping rule schemas
// ============================================================

export const CreateMappingRuleSchema = z.object({
  rule_name: z.string().min(1, 'Rule name is required'),
  rule_type: MappingRuleTypeSchema,
  priority: z.number().int().min(0).optional(),
  mcc_codes: z.array(z.string()).optional(),
  merchant_pattern: z.string().optional(),
  description_pattern: z.string().optional(),
  amount_min: z.number().optional(),
  amount_max: z.number().optional(),
  debit_account: accountNumber,
  credit_account: accountNumber,
  vat_treatment: z.string().optional(),
  risk_level: RiskLevelSchema.optional(),
  default_private: z.boolean().optional(),
  requires_review: z.boolean().optional(),
  confidence_score: z.number().min(0).max(1).optional(),
})

export const EvaluateMappingRulesSchema = z.union([
  z.object({ transaction_id: uuid }),
  z.object({
    description: z.string().optional(),
    amount: z.number(),
  }).passthrough(),
])

// ============================================================
// Deadline schemas
// ============================================================

export const CreateDeadlineSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  due_date: isoDate,
  due_time: timeString.optional(),
  deadline_type: DeadlineTypeSchema,
  priority: DeadlinePrioritySchema.optional(),
  customer_id: uuid.optional(),
  notes: z.string().optional(),
  tax_deadline_type: TaxDeadlineTypeSchema.optional(),
  tax_period: z.string().optional(),
  source: DeadlineSourceSchema.optional(),
  linked_report_type: z.string().optional(),
  linked_report_period: z.record(z.string(), z.unknown()).optional(),
})

// ============================================================
// Account schemas
// ============================================================

export const CreateAccountSchema = z.object({
  account_number: accountNumber,
  account_name: z.string().min(1, 'Account name is required'),
  account_type: AccountTypeSchema,
  normal_balance: NormalBalanceSchema,
  plan_type: z.enum(['k1', 'full_bas']).optional(),
  description: z.string().optional(),
})

export const UpdateAccountSchema = z.object({
  account_name: z.string().min(1).optional(),
  is_active: z.boolean().optional(),
  description: z.string().nullable().optional(),
  default_vat_code: z.string().nullable().optional(),
  sru_code: z.string().nullable().optional(),
})

// ============================================================
// Bank reconciliation schemas
// ============================================================

export const BankLinkSchema = z.object({
  transaction_id: uuid,
  journal_entry_id: uuid,
})

export const BankUnlinkSchema = z.object({
  transaction_id: uuid,
})

export const RunReconciliationSchema = z.object({
  date_from: isoDate.optional(),
  date_to: isoDate.optional(),
  dry_run: z.boolean().optional(),
})

// ============================================================
// Report query schemas
// ============================================================

export const VatDeclarationQuerySchema = z.object({
  periodType: z.enum(['monthly', 'quarterly', 'yearly']),
  year: z.coerce.number().int().min(2000).max(2100),
  period: z.coerce.number().int().min(1).max(12),
})

export const ReportPeriodQuerySchema = z.object({
  fiscal_period_id: uuid.optional(),
  year: z.coerce.number().int().min(2000).max(2100).optional(),
  month: z.coerce.number().int().min(1).max(12).optional(),
})

// ============================================================
// VAT validation schemas
// ============================================================

export const ValidateVatNumberSchema = z.object({
  vat_number: z.string().min(4, 'VAT number must be at least 4 characters'),
  customer_id: uuid.optional(),
})

// ============================================================
// Pagination schemas
// ============================================================

export const PaginationQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().nonnegative().default(0),
})

// ============================================================
// Provider connection schemas
// ============================================================

export const AccountingProviderSchema = z.enum([
  'fortnox', 'visma', 'briox', 'bokio', 'bjorn_lunden',
])

export const InitiateOAuthSchema = z.object({
  provider: z.enum(['fortnox', 'visma']),
})

export const ConnectBrioxSchema = z.object({
  provider: z.literal('briox'),
  application_token: z.string().min(1, 'Application token is required'),
})

export const ConnectBokioSchema = z.object({
  provider: z.literal('bokio'),
  api_key: z.string().min(1, 'API key is required'),
  company_id: z.string().min(1, 'Company ID is required'),
})

export const ConnectBjornLundenSchema = z.object({
  provider: z.literal('bjorn_lunden'),
  company_key: z.string().uuid('Company key must be a valid UUID'),
})

export const ConnectProviderSchema = z.discriminatedUnion('provider', [
  ConnectBrioxSchema,
  ConnectBokioSchema,
  ConnectBjornLundenSchema,
])

export const SyncDataRequestSchema = z.object({
  financialYear: z.number().int().min(0).max(5),
})
