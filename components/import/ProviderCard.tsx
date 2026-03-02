'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Loader2, ExternalLink, RefreshCw, Download } from 'lucide-react'
import type { ProviderInfo, ProviderConnection } from '@/types'

interface ProviderCardProps {
  provider: ProviderInfo
  connection: ProviderConnection | null
  isLoading: boolean
  isSyncing?: boolean
  isSyncingData?: boolean
  onConnect: () => void
  onDisconnect: () => void
  onSync?: () => void
  onSyncData?: () => void
}

const STATUS_CONFIG: Record<string, { label: string; variant: 'success' | 'destructive' | 'secondary' }> = {
  active: { label: 'Ansluten', variant: 'success' },
  pending: { label: 'Väntar', variant: 'secondary' },
  expired: { label: 'Utgången', variant: 'destructive' },
  error: { label: 'Fel', variant: 'destructive' },
}

function formatRelativeTime(dateStr: string): string {
  const now = Date.now()
  const then = new Date(dateStr).getTime()
  const diffMs = now - then

  const minutes = Math.floor(diffMs / 60000)
  if (minutes < 1) return 'just nu'
  if (minutes < 60) return `${minutes} min sedan`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} tim sedan`

  const days = Math.floor(hours / 24)
  return `${days} dag${days > 1 ? 'ar' : ''} sedan`
}

export default function ProviderCard({
  provider,
  connection,
  isLoading,
  isSyncing = false,
  isSyncingData = false,
  onConnect,
  onDisconnect,
  onSync,
  onSyncData,
}: ProviderCardProps) {
  const isConnected = connection?.status === 'active'
  const hasError = connection?.status === 'error' || connection?.status === 'expired'
  const statusConfig = connection ? STATUS_CONFIG[connection.status] : null

  return (
    <div
      className={`rounded-xl border bg-card p-4 transition-colors ${
        isConnected
          ? 'border-success/30'
          : hasError
            ? 'border-destructive/30'
            : 'border-border/50 hover:border-primary/50'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Image
            src={provider.logo}
            alt={provider.name}
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{provider.name}</span>
            {statusConfig && (
              <Badge variant={statusConfig.variant} className="text-xs">
                {statusConfig.label}
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {isConnected && connection.provider_company_name
              ? connection.provider_company_name
              : provider.description}
          </p>
          {isConnected && connection.last_synced_at && (
            <p className="text-xs text-muted-foreground/70 mt-0.5">
              Senast synkad {formatRelativeTime(connection.last_synced_at)}
            </p>
          )}
        </div>

        <div className="shrink-0 flex items-center gap-2">
          {isConnected ? (
            <>
              {onSyncData && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSyncData}
                  disabled={isSyncingData || isSyncing || isLoading}
                >
                  <Download className={`mr-2 h-3.5 w-3.5 ${isSyncingData ? 'animate-bounce' : ''}`} />
                  Hämta data
                </Button>
              )}
              {onSync && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onSync}
                  disabled={isSyncing || isSyncingData || isLoading}
                >
                  <RefreshCw className={`mr-2 h-3.5 w-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                  Synka
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={onDisconnect}
                disabled={isLoading || isSyncing || isSyncingData}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                ) : null}
                Koppla från
              </Button>
            </>
          ) : (
            <Button
              variant={hasError ? 'outline' : 'default'}
              size="sm"
              onClick={onConnect}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
              ) : (
                <ExternalLink className="mr-2 h-3.5 w-3.5" />
              )}
              Anslut
            </Button>
          )}
        </div>
      </div>

      {connection?.error_message && (
        <p className="mt-2 text-xs text-destructive pl-[52px]">
          {connection.error_message}
        </p>
      )}
    </div>
  )
}
