export interface BrioxTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

export async function exchangeBrioxToken(applicationToken: string): Promise<BrioxTokenResponse> {
  const clientId = process.env.BRIOX_CLIENT_ID || ''

  const body = new URLSearchParams({
    grant_type: 'application_token',
    clientid: clientId,
    applicationtoken: applicationToken,
  })

  const res = await fetch('https://api.briox.se/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Briox token exchange failed: ${res.status} ${text}`)
  }

  return res.json()
}

export interface BjornLundenTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

export async function getBjornLundenToken(): Promise<BjornLundenTokenResponse> {
  const clientId = process.env.BJORN_LUNDEN_CLIENT_ID || ''
  const clientSecret = process.env.BJORN_LUNDEN_CLIENT_SECRET || ''
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    scope: 'accounting',
  })

  const res = await fetch('https://auth.bjornlunden.se/connect/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${credentials}`,
    },
    body: body.toString(),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Björn Lundén token exchange failed: ${res.status} ${text}`)
  }

  return res.json()
}
