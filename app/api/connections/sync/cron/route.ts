import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { syncProviderConnection } from '@/lib/connections/sync'
import type { AccountingProvider } from '@/types'

/**
 * GET /api/connections/sync/cron
 * Daily cron job: sync all active provider connections.
 * Prioritizes connections that have never been synced (last_synced_at IS NULL).
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const adminClient = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // Fetch active connections, prioritizing never-synced ones
  const { data: connections, error } = await adminClient
    .from('provider_connections')
    .select('id, provider')
    .eq('status', 'active')
    .order('last_synced_at', { ascending: true, nullsFirst: true })
    .limit(20)

  if (error) {
    console.error('Cron: failed to fetch connections:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!connections || connections.length === 0) {
    return NextResponse.json({ data: { processed: 0, synced: 0, errors: 0, tokenExpired: 0 } })
  }

  let synced = 0
  let errors = 0
  let tokenExpired = 0

  for (const conn of connections) {
    try {
      const result = await syncProviderConnection(
        adminClient,
        conn.id,
        conn.provider as AccountingProvider,
      )

      if (result.status === 'synced') synced++
      else if (result.status === 'token_expired') tokenExpired++
      else errors++
    } catch {
      errors++
    }
  }

  return NextResponse.json({
    data: {
      processed: connections.length,
      synced,
      errors,
      tokenExpired,
    },
  })
}
