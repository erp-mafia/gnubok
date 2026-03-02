import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

/**
 * DELETE /api/connections/[id]
 * Disconnect a provider — sets status to 'revoked' and deletes tokens.
 */
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Verify ownership
  const { data: connection, error: findError } = await supabase
    .from('provider_connections')
    .select('id')
    .eq('id', id)
    .eq('user_id', user.id)
    .single()

  if (findError || !connection) {
    return NextResponse.json({ error: 'Connection not found' }, { status: 404 })
  }

  // Delete tokens via admin client (bypasses RLS on USING(false) table)
  const adminClient = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  await adminClient
    .from('provider_connection_tokens')
    .delete()
    .eq('connection_id', id)

  // Set status to revoked
  const { error: updateError } = await supabase
    .from('provider_connections')
    .update({ status: 'revoked' })
    .eq('id', id)

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json({ data: { success: true } })
}
