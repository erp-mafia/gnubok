import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { syncProviderConnection } from '@/lib/connections/sync'
import type { AccountingProvider } from '@/types'

/**
 * POST /api/connections/[id]/sync
 * Manually trigger a sync for a connected provider.
 */
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Verify ownership and active status
  const { data: connection, error: findError } = await supabase
    .from('provider_connections')
    .select('id, provider, status')
    .eq('id', id)
    .eq('user_id', user.id)
    .single()

  if (findError || !connection) {
    return NextResponse.json({ error: 'Connection not found' }, { status: 404 })
  }

  if (connection.status !== 'active') {
    return NextResponse.json(
      { error: 'Connection is not active' },
      { status: 400 }
    )
  }

  const adminClient = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const result = await syncProviderConnection(
    adminClient,
    connection.id,
    connection.provider as AccountingProvider,
  )

  if (result.status === 'error' || result.status === 'token_expired') {
    return NextResponse.json(
      { error: result.error || 'Sync failed' },
      { status: 500 }
    )
  }

  return NextResponse.json({ data: result })
}
