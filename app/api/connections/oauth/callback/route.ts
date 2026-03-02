import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { exchangeCodeForTokens } from '@/lib/connections/oauth'
import { fetchFortnoxCompanyInfo } from '@/lib/connections/fortnox-api'

function getAdminClient() {
  return createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

/**
 * GET /api/connections/oauth/callback
 * OAuth callback for Fortnox and Visma.
 * Validates CSRF, exchanges code for tokens, activates connection.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  if (error) {
    const errorMessage = errorDescription || error
    console.error('OAuth provider error:', errorMessage)
    return NextResponse.redirect(
      `${baseUrl}/import?tab=providers&error=${encodeURIComponent(errorMessage)}`
    )
  }

  if (!code || !state) {
    return NextResponse.redirect(
      `${baseUrl}/import?tab=providers&error=${encodeURIComponent('Missing OAuth parameters')}`
    )
  }

  // Parse state: provider:connectionId:csrfToken
  const parts = state.split(':')
  if (parts.length !== 3) {
    return NextResponse.redirect(
      `${baseUrl}/import?tab=providers&error=${encodeURIComponent('Invalid state parameter')}`
    )
  }

  const [provider, connectionId, csrfToken] = parts as [string, string, string]

  if (provider !== 'fortnox' && provider !== 'visma') {
    return NextResponse.redirect(
      `${baseUrl}/import?tab=providers&error=${encodeURIComponent('Invalid provider')}`
    )
  }

  const supabase = getAdminClient()

  try {
    // Validate CSRF token
    const { data: oauthState, error: stateError } = await supabase
      .from('provider_oauth_states')
      .select('*')
      .eq('connection_id', connectionId)
      .eq('csrf_token', csrfToken)
      .gt('expires_at', new Date().toISOString())
      .single()

    if (stateError || !oauthState) {
      return NextResponse.redirect(
        `${baseUrl}/import?tab=providers&error=${encodeURIComponent('Invalid or expired OAuth state')}`
      )
    }

    // Clean up used state
    await supabase
      .from('provider_oauth_states')
      .delete()
      .eq('id', oauthState.id)

    // Exchange code for tokens
    const tokenResponse = await exchangeCodeForTokens(provider, code)

    const tokenExpiresAt = tokenResponse.expires_in
      ? new Date(Date.now() + tokenResponse.expires_in * 1000).toISOString()
      : null

    // Store tokens
    const { error: tokenError } = await supabase
      .from('provider_connection_tokens')
      .insert({
        connection_id: connectionId,
        access_token: tokenResponse.access_token,
        refresh_token: tokenResponse.refresh_token || null,
        token_expires_at: tokenExpiresAt,
      })

    if (tokenError) {
      throw new Error(`Failed to store tokens: ${tokenError.message}`)
    }

    // Activate connection
    const { error: updateError } = await supabase
      .from('provider_connections')
      .update({
        status: 'active',
        connected_at: new Date().toISOString(),
      })
      .eq('id', connectionId)

    if (updateError) {
      throw new Error(`Failed to activate connection: ${updateError.message}`)
    }

    // Fetch company info from provider (non-blocking — failures are logged only)
    if (provider === 'fortnox') {
      try {
        const companyInfo = await fetchFortnoxCompanyInfo(tokenResponse.access_token)
        if (companyInfo) {
          await supabase
            .from('provider_connections')
            .update({ provider_company_name: companyInfo.companyName })
            .eq('id', connectionId)

          await supabase
            .from('provider_connection_tokens')
            .update({
              provider_company_id: companyInfo.databaseNumber != null
                ? String(companyInfo.databaseNumber)
                : null,
              extra_data: companyInfo,
            })
            .eq('connection_id', connectionId)
        }
      } catch (err) {
        console.error('Failed to fetch/store provider company info:', err)
      }
    }

    return NextResponse.redirect(
      `${baseUrl}/import?tab=providers&connected=${provider}`
    )
  } catch (err) {
    console.error('OAuth callback error:', err)

    // Mark connection as error
    try {
      await supabase
        .from('provider_connections')
        .update({
          status: 'error',
          error_message: err instanceof Error ? err.message : 'OAuth callback failed',
        })
        .eq('id', connectionId)
    } catch {
      // Ignore cleanup errors
    }

    return NextResponse.redirect(
      `${baseUrl}/import?tab=providers&error=${encodeURIComponent('Connection failed')}`
    )
  }
}
