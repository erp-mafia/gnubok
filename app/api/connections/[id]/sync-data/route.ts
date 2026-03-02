import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { validateBody } from '@/lib/api/validate'
import { SyncDataRequestSchema } from '@/lib/api/schemas'
import { syncFortnoxSIEData } from '@/lib/connections/fortnox-sync'

/**
 * POST /api/connections/[id]/sync-data
 * Fetch SIE accounting data from a connected provider and import it.
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await validateBody(request, SyncDataRequestSchema)
  if (!body.success) return body.response

  const { financialYear } = body.data

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

  if (connection.provider !== 'fortnox') {
    return NextResponse.json(
      { error: 'SIE data sync is only supported for Fortnox' },
      { status: 400 }
    )
  }

  const adminClient = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const result = await syncFortnoxSIEData(
    adminClient,
    supabase,
    connection.id,
    user.id,
    financialYear,
  )

  if (!result.success) {
    return NextResponse.json(
      { error: result.errors[0] || 'Sync failed', data: result },
      { status: 400 }
    )
  }

  return NextResponse.json({ data: result })
}
