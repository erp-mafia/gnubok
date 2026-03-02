# Björn Lundén Integration - Implementation Status

## Overview

The Björn Lundén integration allows advisors to fetch SIE accounting data from clients using the BL Bokslut API. The integration supports two connection methods:

1. **Manual User-Key entry** (current/sandbox) - Advisor manually enters the client's User-Key
2. **OAuth2-like redirect flow** (production) - Client authorizes via Lundify, User-Key is passed automatically

## Current State

| Component | Status |
|-----------|--------|
| Client Credentials API flow | Working |
| Manual User-Key entry | Working |
| OAuth redirect flow | Ready (needs production key) |
| Multi-year SIE fetching | Working |
| SIE parsing & storage | Working |

## How It Works

### API Authentication (Client Credentials)

The BL API uses OAuth2 Client Credentials for server-to-server authentication. Each API call requires:
- `Authorization: Bearer {access_token}` - From client credentials flow
- `User-Key: {guid}` - Company-specific key that grants access to their data

Tokens are cached in memory with a 55-minute TTL (tokens expire at 60 min).

### Connection Methods

#### Manual Flow (Current)
```
Advisor clicks "Anslut till Björn Lundén"
    → System checks if OAuth is enabled
    → OAuth not configured → Shows User-Key input field
    → Advisor enters User-Key from client
    → POST /api/advisor/bjornlunden/process with userKey in body
    → Fetch company details, financial years, SIE files
```

#### OAuth Redirect Flow (Production)
```
Advisor clicks "Anslut till Björn Lundén"
    → POST /api/advisor/bjornlunden/connect
    → OAuth enabled → Returns Lundify activation URL
    → Redirect to lundify.com/activate-integration/{key}/{redirectUrl}?extra={state}
    → Client authorizes in Lundify
    → Lundify redirects to /api/bjornlunden/callback?publicKey={userKey}&extra={state}
    → Callback stores session, redirects to frontend with blSessionId
    → Frontend calls POST /api/advisor/bjornlunden/process?sessionId={id}
    → Process extracts User-Key from session, fetches SIE data
```

## Key Files

### API Routes
- `app/api/advisor/bjornlunden/connect/route.ts` - Initiates OAuth redirect
- `app/api/bjornlunden/callback/route.ts` - Handles Lundify callback
- `app/api/advisor/bjornlunden/process/route.ts` - Fetches and processes SIE data

### Library
- `lib/bjornlunden.ts` - BL API client with token caching

### Database
- `lib/db/supabase/bl-auth-sessions.ts` - OAuth session CRUD
- `lib/db/supabase/connections.ts` - BL connection CRUD

### Frontend
- `app/advisor/clients/add/page.tsx` - Connection UI and callback handling

## Database Tables

| Table | Purpose |
|-------|---------|
| `bl_connections` | Stores connection metadata and User-Key |
| `bl_financial_years` | Available accounting periods per connection |
| `bl_sie_files` | Raw SIE file content (links to sie_uploads) |
| `bl_auth_sessions` | Temporary OAuth sessions (10-min TTL) |

## Environment Variables

```env
# Required (already configured)
BJORN_LUNDEN_CLIENT_ID=<client-id>
BJORN_LUNDEN_CLIENT_SECRET=<client-secret>
BJORN_LUNDEN_AUTH_URL=https://apigateway.blinfo.se/auth/oauth/v2/token
BJORN_LUNDEN_API_BASE_URL=https://apigateway.blinfo.se/bla-api/v1/sp

# Required for OAuth redirect flow (get from BL for production)
BJORN_LUNDEN_INTEGRATION_ACTIVATION_KEY=<activation-key>
BJORN_LUNDEN_REDIRECT_URL=https://yourdomain.com/api/bjornlunden/callback
```

## Going to Production

1. Contact api.se@bjornlunden.com
2. Request production access and `INTEGRATION_ACTIVATION_KEY`
3. Register your callback URL: `https://yourdomain.com/api/bjornlunden/callback`
4. Add the activation key to environment variables
5. OAuth redirect flow will automatically activate

## Sandbox Testing

Use the sandbox company with Public Key: `69f15a2d-c71e-4b38-b085-4d7a5e95e1b5`

The manual User-Key flow works in sandbox. OAuth redirect requires production credentials.
