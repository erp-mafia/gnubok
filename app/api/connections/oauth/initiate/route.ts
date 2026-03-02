import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { validateBody } from '@/lib/api/validate'
import { InitiateOAuthSchema } from '@/lib/api/schemas'
import { generateCsrfToken, buildAuthUrl } from '@/lib/connections/oauth'

/**
 * POST /api/connections/oauth/initiate
 * Start an OAuth flow for Fortnox or Visma.
 * Creates a pending connection, stores CSRF state, returns authUrl.
 */
export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const result = await validateBody(request, InitiateOAuthSchema)
  if (!result.success) return result.response
  const { provider } = result.data

  // Check for existing active connection
  const { data: existing } = await supabase
    .from('provider_connections')
    .select('id, status')
    .eq('user_id', user.id)
    .eq('provider', provider)
    .neq('status', 'revoked')
    .single()

  if (existing?.status === 'active') {
    return NextResponse.json(
      { error: 'An active connection for this provider already exists' },
      { status: 409 }
    )
  }

  // Clean up stale pending/error connections before creating a new one
  if (existing) {
    await supabase
      .from('provider_connections')
      .update({ status: 'revoked' })
      .eq('id', existing.id)
  }

  // Create pending connection
  const { data: connection, error: insertError } = await supabase
    .from('provider_connections')
    .insert({
      user_id: user.id,
      provider,
      status: 'pending',
    })
    .select()
    .single()

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  // Generate CSRF token and store via admin client (bypasses RLS on USING(false) table)
  const csrfToken = generateCsrfToken()
  const adminClient = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error: stateError } = await adminClient
    .from('provider_oauth_states')
    .insert({
      user_id: user.id,
      provider,
      csrf_token: csrfToken,
      connection_id: connection.id,
    })

  if (stateError) {
    console.error('OAuth state insert error:', stateError)
    return NextResponse.json({ error: 'Failed to create OAuth state', details: stateError.message }, { status: 500 })
  }

  // Build state parameter: provider:connectionId:csrfToken
  const state = `${provider}:${connection.id}:${csrfToken}`
  const authUrl = buildAuthUrl(provider, state)

  return NextResponse.json({ data: { authUrl, connectionId: connection.id } })
}
