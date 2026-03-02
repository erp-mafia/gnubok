'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import type { SIESyncResult } from '@/types'
import Link from 'next/link'

interface SyncResultsDialogProps {
  open: boolean
  result: SIESyncResult | null
  onClose: () => void
}

export default function SyncResultsDialog({
  open,
  result,
  onClose,
}: SyncResultsDialogProps) {
  if (!result) return null

  const hasErrors = result.errors.length > 0
  const hasWarnings = result.warnings.length > 0

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {result.success ? (
              <>
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Import klar
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5 text-destructive" />
                Import misslyckades
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {result.success
              ? `Bokföringsdata har importerats${result.companyName ? ` från ${result.companyName}` : ''}.`
              : 'Det uppstod fel vid importen.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {result.success && (
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="text-muted-foreground text-xs">Konton aktiverade</p>
                <p className="text-lg font-semibold">{result.accountsActivated}</p>
              </div>
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="text-muted-foreground text-xs">Verifikationer</p>
                <p className="text-lg font-semibold">{result.journalEntriesCreated}</p>
              </div>
              {result.openingBalanceCreated && (
                <div className="col-span-2 rounded-lg border bg-muted/50 p-3">
                  <p className="text-muted-foreground text-xs">Ingående balans</p>
                  <p className="text-sm font-medium">Skapad</p>
                </div>
              )}
              {result.fiscalYearStart && result.fiscalYearEnd && (
                <div className="col-span-2 rounded-lg border bg-muted/50 p-3">
                  <p className="text-muted-foreground text-xs">Räkenskapsår</p>
                  <p className="text-sm font-medium">
                    {result.fiscalYearStart} — {result.fiscalYearEnd}
                  </p>
                </div>
              )}
            </div>
          )}

          {hasErrors && (
            <div className="space-y-2">
              {result.errors.map((error, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              ))}
            </div>
          )}

          {hasWarnings && (
            <div className="space-y-2">
              {result.warnings.map((warning, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-3 text-sm">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 shrink-0" />
                  <span>{warning}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <DialogFooter>
          {result.success && (
            <Button variant="outline" asChild>
              <Link href="/bookkeeping">Visa bokföring</Link>
            </Button>
          )}
          <Button onClick={onClose}>Stäng</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
