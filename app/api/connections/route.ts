import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { validateBody } from '@/lib/api/validate'
import { ConnectProviderSchema } from '@/lib/api/schemas'
import { getProvider } from '@/lib/connections/providers'
import { exchangeBrioxToken, getBjornLundenToken } from '@/lib/connections/token-exchange'

function getAdminClient() {
  return createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

/**
 * GET /api/connections
 * List all provider connections for the current user.
 */
export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('provider_connections')
    .select('*')
    .eq('user_id', user.id)
    .neq('status', 'revoked')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}

/**
 * POST /api/connections
 * Create a non-OAuth provider connection (Briox, Bokio, Bjorn Lunden).
 */
export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const result = await validateBody(request, ConnectProviderSchema)
  if (!result.success) return result.response
  const { data } = result

  const providerInfo = getProvider(data.provider)
  if (!providerInfo) {
    return NextResponse.json({ error: 'Unknown provider' }, { status: 400 })
  }

  // Create connection record
  const { data: connection, error: insertError } = await supabase
    .from('provider_connections')
    .insert({
      user_id: user.id,
      provider: data.provider,
      status: 'pending',
    })
    .select()
    .single()

  if (insertError) {
    if (insertError.code === '23505') {
      return NextResponse.json(
        { error: 'An active connection for this provider already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  // Exchange tokens server-side
  const adminClient = getAdminClient()

  try {
    let accessToken: string | null = null
    let tokenExpiresAt: string | null = null
    let extraData: Record<string, unknown> = {}

    if (data.provider === 'briox') {
      const tokenResponse = await exchangeBrioxToken(data.application_token)
      accessToken = tokenResponse.access_token
      if (tokenResponse.expires_in) {
        tokenExpiresAt = new Date(Date.now() + tokenResponse.expires_in * 1000).toISOString()
      }
    } else if (data.provider === 'bokio') {
      // Bokio uses static API key + company ID — store as-is
      accessToken = data.api_key
      extraData = { company_id: data.company_id }
    } else if (data.provider === 'bjorn_lunden') {
      const tokenResponse = await getBjornLundenToken()
      accessToken = tokenResponse.access_token
      if (tokenResponse.expires_in) {
        tokenExpiresAt = new Date(Date.now() + tokenResponse.expires_in * 1000).toISOString()
      }
      extraData = { company_key: data.company_key }
    }

    // Store tokens via admin client (bypasses RLS)
    const { error: tokenError } = await adminClient
      .from('provider_connection_tokens')
      .insert({
        connection_id: connection.id,
        access_token: accessToken,
        token_expires_at: tokenExpiresAt,
        extra_data: Object.keys(extraData).length > 0 ? extraData : null,
      })

    if (tokenError) {
      throw new Error(`Failed to store tokens: ${tokenError.message}`)
    }

    // Mark connection as active
    const { error: updateError } = await supabase
      .from('provider_connections')
      .update({
        status: 'active',
        connected_at: new Date().toISOString(),
      })
      .eq('id', connection.id)

    if (updateError) {
      throw new Error(`Failed to activate connection: ${updateError.message}`)
    }

    return NextResponse.json({
      data: { ...connection, status: 'active', connected_at: new Date().toISOString() },
    })
  } catch (err) {
    // Mark connection as error
    await supabase
      .from('provider_connections')
      .update({
        status: 'error',
        error_message: err instanceof Error ? err.message : 'Connection failed',
      })
      .eq('id', connection.id)

    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Connection failed' },
      { status: 500 }
    )
  }
}
