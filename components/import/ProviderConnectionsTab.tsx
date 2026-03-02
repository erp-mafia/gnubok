'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import ProviderCard from './ProviderCard'
import ConnectProviderDialog from './ConnectProviderDialog'
import SyncDataDialog from './SyncDataDialog'
import SyncResultsDialog from './SyncResultsDialog'
import { PROVIDERS } from '@/lib/connections/providers'
import type { ProviderConnection, ProviderInfo, AccountingProvider, SIESyncResult } from '@/types'

export default function ProviderConnectionsTab() {
  const { toast } = useToast()
  const searchParams = useSearchParams()

  const [connections, setConnections] = useState<ProviderConnection[]>([])
  const [loadingProvider, setLoadingProvider] = useState<AccountingProvider | null>(null)
  const [syncingProvider, setSyncingProvider] = useState<AccountingProvider | null>(null)
  const [dialogProvider, setDialogProvider] = useState<ProviderInfo | null>(null)
  const [dialogLoading, setDialogLoading] = useState(false)
  const [syncDataProvider, setSyncDataProvider] = useState<ProviderInfo | null>(null)
  const [syncDataLoading, setSyncDataLoading] = useState(false)
  const [syncDataResult, setSyncDataResult] = useState<SIESyncResult | null>(null)

  const fetchConnections = useCallback(async () => {
    try {
      const res = await fetch('/api/connections')
      if (res.ok) {
        const { data } = await res.json()
        setConnections(data || [])
      }
    } catch {
      // Silently fail — cards will show "not connected"
    }
  }, [])

  useEffect(() => {
    fetchConnections()
  }, [fetchConnections])

  // Show toast after OAuth redirect
  useEffect(() => {
    const connected = searchParams.get('connected')
    const error = searchParams.get('error')

    if (connected) {
      const provider = PROVIDERS.find((p) => p.id === connected)
      toast({
        title: `${provider?.name || connected} ansluten`,
        description: 'Bokföringssystemet har kopplats till ditt konto.',
      })
    } else if (error) {
      toast({
        title: 'Anslutningen misslyckades',
        description: decodeURIComponent(error),
        variant: 'destructive',
      })
    }
  }, [searchParams, toast])

  const getConnection = (providerId: AccountingProvider): ProviderConnection | null => {
    return connections.find((c) => c.provider === providerId && c.status !== 'revoked') || null
  }

  const handleConnect = async (provider: ProviderInfo) => {
    if (provider.authStrategy === 'oauth2') {
      // OAuth flow: call initiate, then redirect
      setLoadingProvider(provider.id)
      try {
        const res = await fetch('/api/connections/oauth/initiate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ provider: provider.id }),
        })

        const json = await res.json()

        if (!res.ok) {
          toast({
            title: 'Fel',
            description: json.error || 'Kunde inte starta OAuth-flödet',
            variant: 'destructive',
          })
          return
        }

        // Redirect to provider's auth page
        window.location.href = json.data.authUrl
      } catch {
        toast({
          title: 'Fel',
          description: 'Kunde inte starta anslutningen',
          variant: 'destructive',
        })
      } finally {
        setLoadingProvider(null)
      }
    } else {
      // Non-OAuth: open dialog
      setDialogProvider(provider)
    }
  }

  const handleDialogSubmit = async (formData: Record<string, string>) => {
    if (!dialogProvider) return

    setDialogLoading(true)
    try {
      const body = { provider: dialogProvider.id, ...formData }
      const res = await fetch('/api/connections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error || 'Anslutningen misslyckades')
      }

      toast({
        title: `${dialogProvider.name} ansluten`,
        description: 'Bokföringssystemet har kopplats till ditt konto.',
      })

      setDialogProvider(null)
      await fetchConnections()
    } catch (err) {
      throw err // Let the dialog display the error
    } finally {
      setDialogLoading(false)
    }
  }

  const handleDisconnect = async (provider: ProviderInfo) => {
    const connection = getConnection(provider.id)
    if (!connection) return

    setLoadingProvider(provider.id)
    try {
      const res = await fetch(`/api/connections/${connection.id}`, { method: 'DELETE' })

      if (!res.ok) {
        const json = await res.json()
        toast({
          title: 'Fel',
          description: json.error || 'Kunde inte koppla från',
          variant: 'destructive',
        })
        return
      }

      toast({
        title: `${provider.name} frånkopplad`,
        description: 'Anslutningen har tagits bort.',
      })

      await fetchConnections()
    } catch {
      toast({
        title: 'Fel',
        description: 'Kunde inte koppla från',
        variant: 'destructive',
      })
    } finally {
      setLoadingProvider(null)
    }
  }

  const handleSync = async (provider: ProviderInfo) => {
    const connection = getConnection(provider.id)
    if (!connection) return

    setSyncingProvider(provider.id)
    try {
      const res = await fetch(`/api/connections/${connection.id}/sync`, {
        method: 'POST',
      })

      const json = await res.json()

      if (!res.ok) {
        toast({
          title: 'Synkronisering misslyckades',
          description: json.error || 'Kunde inte synka',
          variant: 'destructive',
        })
        return
      }

      toast({
        title: `${provider.name} synkad`,
        description: json.data?.companyName
          ? `Ansluten till ${json.data.companyName}`
          : 'Data har uppdaterats.',
      })

      await fetchConnections()
    } catch {
      toast({
        title: 'Fel',
        description: 'Kunde inte synka',
        variant: 'destructive',
      })
    } finally {
      setSyncingProvider(null)
    }
  }

  const handleSyncData = (provider: ProviderInfo) => {
    setSyncDataProvider(provider)
  }

  const handleSyncDataSubmit = async (financialYear: number) => {
    if (!syncDataProvider) return

    const connection = getConnection(syncDataProvider.id)
    if (!connection) return

    setSyncDataLoading(true)
    try {
      const res = await fetch(`/api/connections/${connection.id}/sync-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ financialYear }),
      })

      const json = await res.json()

      if (!res.ok && !json.data) {
        throw new Error(json.error || 'Kunde inte hämta data')
      }

      // Show results dialog (even on partial failure, data field has the result)
      setSyncDataResult(json.data)
      setSyncDataProvider(null)

      if (json.data?.success) {
        await fetchConnections()
      }
    } catch (err) {
      throw err // Let the dialog display the error
    } finally {
      setSyncDataLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Bokföringssystem</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Anslut ditt bokföringssystem för att importera data.
        </p>
      </div>

      <div className="space-y-3">
        {PROVIDERS.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            connection={getConnection(provider.id)}
            isLoading={loadingProvider === provider.id}
            isSyncing={syncingProvider === provider.id}
            isSyncingData={syncDataLoading && syncDataProvider?.id === provider.id}
            onConnect={() => handleConnect(provider)}
            onDisconnect={() => handleDisconnect(provider)}
            onSync={() => handleSync(provider)}
            onSyncData={provider.id === 'fortnox' ? () => handleSyncData(provider) : undefined}
          />
        ))}
      </div>

      <ConnectProviderDialog
        provider={dialogProvider}
        open={dialogProvider !== null}
        onClose={() => setDialogProvider(null)}
        onSubmit={handleDialogSubmit}
        isLoading={dialogLoading}
      />

      <SyncDataDialog
        open={syncDataProvider !== null}
        providerName={syncDataProvider?.name || ''}
        onClose={() => setSyncDataProvider(null)}
        onSubmit={handleSyncDataSubmit}
        isLoading={syncDataLoading}
      />

      <SyncResultsDialog
        open={syncDataResult !== null}
        result={syncDataResult}
        onClose={() => setSyncDataResult(null)}
      />
    </div>
  )
}
