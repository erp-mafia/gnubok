import { loadExtensions } from '@/lib/extensions/loader'
import { setContextFactory } from '@/lib/extensions/registry'
import { createExtensionContext } from '@/lib/extensions/context-factory'
import { registerSupplierInvoiceHandler } from '@/lib/bookkeeping/handlers/supplier-invoice-handler'
import { createLogger } from '@/lib/logger'

const log = createLogger('init')

let initialized = false

const REQUIRED_CORE_VARS = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'NEXT_PUBLIC_APP_URL',
  'CRON_SECRET',
] as const

const REQUIRED_EXTENSION_VARS = [
  'ENABLE_BANKING_APP_ID',
  'ENABLE_BANKING_PRIVATE_KEY',
  'ANTHROPIC_API_KEY',
  'OPENAI_API_KEY',
] as const

const OPTIONAL_VARS = [
  'SENTRY_DSN',
  'LANGFUSE_SECRET_KEY',
  'LANGFUSE_PUBLIC_KEY',
] as const

function validateEnvironment(): void {
  // During builds (CI, Docker, Vercel), env vars may be absent or set to
  // placeholder sentinels. Skip validation so Next.js page collection
  // doesn't fail — real validation happens at runtime.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!supabaseUrl || supabaseUrl.startsWith('__')) return

  const missing: string[] = []

  for (const v of REQUIRED_CORE_VARS) {
    if (!process.env[v]) missing.push(v)
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }

  const missingExt: string[] = []
  for (const v of REQUIRED_EXTENSION_VARS) {
    if (!process.env[v]) missingExt.push(v)
  }

  if (missingExt.length > 0) {
    log.warn(`Missing extension environment variables (extensions needing them may not work): ${missingExt.join(', ')}`)
  }

  for (const v of OPTIONAL_VARS) {
    if (!process.env[v]) {
      log.warn(`Optional environment variable ${v} is not set`)
    }
  }
}

/**
 * Ensure the system is initialized (extensions loaded, context factory wired,
 * core event handlers registered).
 * Called from API routes that emit events.
 * Idempotent — safe to call multiple times.
 */
export function ensureInitialized(): void {
  if (initialized) return

  validateEnvironment()
  setContextFactory(createExtensionContext)
  registerSupplierInvoiceHandler()
  loadExtensions()

  initialized = true
}
