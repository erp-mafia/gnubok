import { randomBytes } from 'crypto'
import type { AccountingProvider } from '@/types'

export function generateCsrfToken(): string {
  return randomBytes(32).toString('hex')
}

interface OAuthConfig {
  clientId: string
  clientSecret: string
  authorizeUrl: string
  tokenUrl: string
  scopes: string[]
}

function getOAuthConfig(provider: 'fortnox' | 'visma'): OAuthConfig {
  if (provider === 'fortnox') {
    return {
      clientId: process.env.FORTNOX_CLIENT_ID || '',
      clientSecret: process.env.FORTNOX_CLIENT_SECRET || '',
      authorizeUrl: 'https://apps.fortnox.se/oauth-v1/auth',
      tokenUrl: 'https://apps.fortnox.se/oauth-v1/token',
      scopes: ['bookkeeping', 'companyinformation'],
    }
  }

  // Visma eEkonomi
  return {
    clientId: process.env.VISMA_CLIENT_ID || '',
    clientSecret: process.env.VISMA_CLIENT_SECRET || '',
    authorizeUrl: 'https://identity.vismaonline.com/connect/authorize',
    tokenUrl: 'https://identity.vismaonline.com/connect/token',
    scopes: ['ea:api', 'ea:sales', 'ea:purchase', 'ea:accounting', 'offline_access'],
  }
}

function getRedirectUri(): string {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  return `${baseUrl}/api/connections/oauth/callback`
}

export function buildAuthUrl(provider: 'fortnox' | 'visma', state: string): string {
  const config = getOAuthConfig(provider)
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: getRedirectUri(),
    response_type: 'code',
    scope: config.scopes.join(' '),
    state,
  })

  if (provider === 'visma') {
    params.set('acr_values', 'service:44927')
  }

  return `${config.authorizeUrl}?${params.toString()}`
}

export interface TokenResponse {
  access_token: string
  refresh_token?: string
  expires_in?: number
  token_type: string
}

export async function exchangeCodeForTokens(
  provider: 'fortnox' | 'visma',
  code: string,
): Promise<TokenResponse> {
  const config = getOAuthConfig(provider)
  const credentials = Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: getRedirectUri(),
  })

  const res = await fetch(config.tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${credentials}`,
    },
    body: body.toString(),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Token exchange failed for ${provider}: ${res.status} ${text}`)
  }

  return res.json()
}

export async function refreshAccessToken(
  provider: 'fortnox' | 'visma',
  refreshToken: string,
): Promise<TokenResponse> {
  const config = getOAuthConfig(provider)
  const credentials = Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  })

  const res = await fetch(config.tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${credentials}`,
    },
    body: body.toString(),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Token refresh failed for ${provider}: ${res.status} ${text}`)
  }

  return res.json()
}

export function isOAuthProvider(provider: AccountingProvider): provider is 'fortnox' | 'visma' {
  return provider === 'fortnox' || provider === 'visma'
}
