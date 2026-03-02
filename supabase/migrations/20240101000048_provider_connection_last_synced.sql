-- Add last_synced_at column to provider_connections for sync tracking
ALTER TABLE public.provider_connections ADD COLUMN last_synced_at TIMESTAMPTZ;
