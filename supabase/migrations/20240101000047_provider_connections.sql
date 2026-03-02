-- Provider connections: external accounting system integrations
-- Supports OAuth 2.0 (Fortnox, Visma), application tokens (Briox),
-- static API keys (Bokio), and client credentials (Bjorn Lunden).

-- ============================================================
-- 1. provider_connections — one row per connected provider
-- ============================================================

CREATE TABLE public.provider_connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  provider TEXT NOT NULL CHECK (provider IN ('fortnox', 'visma', 'briox', 'bokio', 'bjorn_lunden')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'expired', 'error', 'revoked')),
  provider_company_name TEXT,
  error_message TEXT,
  connected_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Only one active (non-revoked) connection per provider per user
CREATE UNIQUE INDEX idx_provider_connections_unique_active
  ON public.provider_connections (user_id, provider)
  WHERE status != 'revoked';

-- RLS
ALTER TABLE public.provider_connections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own provider connections"
  ON public.provider_connections FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own provider connections"
  ON public.provider_connections FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own provider connections"
  ON public.provider_connections FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own provider connections"
  ON public.provider_connections FOR DELETE
  USING (auth.uid() = user_id);

-- updated_at trigger
CREATE TRIGGER set_provider_connections_updated_at
  BEFORE UPDATE ON public.provider_connections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- 2. provider_connection_tokens — server-side only token storage
-- ============================================================

CREATE TABLE public.provider_connection_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  connection_id UUID REFERENCES public.provider_connections ON DELETE CASCADE NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TIMESTAMPTZ,
  provider_company_id TEXT,
  extra_data JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS: no direct user access — service role only
ALTER TABLE public.provider_connection_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No direct access to provider tokens"
  ON public.provider_connection_tokens FOR ALL
  USING (false);

-- updated_at trigger
CREATE TRIGGER set_provider_connection_tokens_updated_at
  BEFORE UPDATE ON public.provider_connection_tokens
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- 3. provider_oauth_states — CSRF protection for OAuth flows
-- ============================================================

CREATE TABLE public.provider_oauth_states (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  provider TEXT NOT NULL,
  csrf_token TEXT NOT NULL,
  connection_id UUID REFERENCES public.provider_connections ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '10 minutes'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS: no direct user access — service role only
ALTER TABLE public.provider_oauth_states ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No direct access to oauth states"
  ON public.provider_oauth_states FOR ALL
  USING (false);
