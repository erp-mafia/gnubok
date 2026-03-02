'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import type { AccountingProvider, ProviderInfo } from '@/types'

interface ConnectProviderDialogProps {
  provider: ProviderInfo | null
  open: boolean
  onClose: () => void
  onSubmit: (data: Record<string, string>) => Promise<void>
  isLoading: boolean
}

export default function ConnectProviderDialog({
  provider,
  open,
  onClose,
  onSubmit,
  isLoading,
}: ConnectProviderDialogProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [error, setError] = useState<string | null>(null)

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setFormData({})
      setError(null)
      onClose()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      await onSubmit(formData)
      setFormData({})
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Anslutningen misslyckades')
    }
  }

  if (!provider) return null

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Anslut {provider.name}</DialogTitle>
            <DialogDescription>
              Ange dina uppgifter för att ansluta till {provider.name}.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {provider.id === 'briox' && (
              <BrioxFields formData={formData} setFormData={setFormData} />
            )}
            {provider.id === 'bokio' && (
              <BokioFields formData={formData} setFormData={setFormData} />
            )}
            {provider.id === 'bjorn_lunden' && (
              <BjornLundenFields formData={formData} setFormData={setFormData} />
            )}

            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
              Avbryt
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Ansluter...
                </>
              ) : (
                'Anslut'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function BrioxFields({
  formData,
  setFormData,
}: {
  formData: Record<string, string>
  setFormData: (data: Record<string, string>) => void
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="application_token">Applikationstoken</Label>
      <Input
        id="application_token"
        type="password"
        placeholder="Klistra in din applikationstoken"
        value={formData.application_token || ''}
        onChange={(e) => setFormData({ ...formData, application_token: e.target.value })}
        required
      />
      <p className="text-xs text-muted-foreground">
        Du hittar din applikationstoken under Inställningar &gt; Integrationer i Briox.
      </p>
    </div>
  )
}

function BokioFields({
  formData,
  setFormData,
}: {
  formData: Record<string, string>
  setFormData: (data: Record<string, string>) => void
}) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="api_key">API-nyckel</Label>
        <Input
          id="api_key"
          type="password"
          placeholder="Ange din API-nyckel"
          value={formData.api_key || ''}
          onChange={(e) => setFormData({ ...formData, api_key: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company_id">Företags-ID</Label>
        <Input
          id="company_id"
          placeholder="Ange ditt företags-ID"
          value={formData.company_id || ''}
          onChange={(e) => setFormData({ ...formData, company_id: e.target.value })}
          required
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Du hittar dessa uppgifter under Inställningar &gt; API-integration i Bokio.
      </p>
    </>
  )
}

function BjornLundenFields({
  formData,
  setFormData,
}: {
  formData: Record<string, string>
  setFormData: (data: Record<string, string>) => void
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="company_key">Företagsnyckel (GUID)</Label>
      <Input
        id="company_key"
        placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        value={formData.company_key || ''}
        onChange={(e) => setFormData({ ...formData, company_key: e.target.value })}
        required
      />
      <p className="text-xs text-muted-foreground">
        Kontakta Björn Lundén support för att få din företagsnyckel.
      </p>
    </div>
  )
}
