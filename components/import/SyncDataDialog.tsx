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
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2, Download } from 'lucide-react'

interface SyncDataDialogProps {
  open: boolean
  providerName: string
  onClose: () => void
  onSubmit: (financialYear: number) => Promise<void>
  isLoading: boolean
}

const FINANCIAL_YEAR_OPTIONS = [
  { value: '0', label: 'Innevarande räkenskapsår' },
  { value: '1', label: 'Föregående räkenskapsår' },
  { value: '2', label: '2 år sedan' },
]

export default function SyncDataDialog({
  open,
  providerName,
  onClose,
  onSubmit,
  isLoading,
}: SyncDataDialogProps) {
  const [financialYear, setFinancialYear] = useState('0')
  const [error, setError] = useState<string | null>(null)

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen && !isLoading) {
      setFinancialYear('0')
      setError(null)
      onClose()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      await onSubmit(parseInt(financialYear, 10))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Kunde inte hämta data')
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Hämta bokföringsdata</DialogTitle>
            <DialogDescription>
              Importera kontoplan, saldon och verifikationer från {providerName}.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="financial-year">Räkenskapsår</Label>
              <Select value={financialYear} onValueChange={setFinancialYear}>
                <SelectTrigger id="financial-year">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FINANCIAL_YEAR_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Välj vilket räkenskapsår du vill importera data från.
              </p>
            </div>

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
                  Hämtar data...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Hämta data
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
