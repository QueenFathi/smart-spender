"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface SaveProgressModalProps {
  open: boolean;
  onClose: () => void;
  chapterSlug: string;
}

export function SaveProgressModal({ open, onClose, chapterSlug }: SaveProgressModalProps) {
  const router = useRouter()

  const handleLogin = () => {
    router.push(`/login?callbackUrl=/learn/${chapterSlug}`)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save your progress?</DialogTitle>
          <DialogDescription>
            Create an account or login to continue learning where you left off.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Not now
          </Button>

          <Button onClick={handleLogin}>
            Save & Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
