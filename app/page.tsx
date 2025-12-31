'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

/* =====================
   UNLOCK TIME (FINAL)
   01 TANGGAL 1
   JAM 00:00 WITA
   UTC +8
===================== */
const UNLOCK_AT = new Date(
  '2026-01-01T00:00:00+08:00'
).getTime()

function getDialogText(diff: number) {
  const hour = 1000 * 60 * 60

  if (diff <= 0) {
    return {
      title: '🎉 Akhirnya!',
      text: 'Dia sudah siap.\nDan sepertinya menunggumu 💙',
    }
  }

  if (diff < hour) {
    return {
      title: '💓 Dikit lagi',
      text: 'Semakin dekat → semakin gemas.\nTahan ya…',
    }
  }

  if (diff < hour * 6) {
    return {
      title: '⏳ Hampir',
      text: 'Waktunya makin dekat.\nHangat rasanya.',
    }
  }

  if (diff < hour * 24) {
    return {
      title: '👀 Sebentar lagi',
      text: 'Sudah kelihatan tandanya.\nPelan-pelan ya.',
    }
  }

  return {
    title: '😴 Santai dulu',
    text: 'Masih terlalu cepat.\nDia belum siap sekarang.',
  }
}

export default function HomePage() {
  const [open, setOpen] = useState(false)
  const [now, setNow] = useState(Date.now())
  const [unlocking, setUnlocking] = useState(false)

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(i)
  }, [])

  const remaining = Math.max(0, UNLOCK_AT - now)
  const dialog = getDialogText(remaining)

  const h = Math.floor(remaining / 1000 / 60 / 60)
  const m = Math.floor((remaining / 1000 / 60) % 60)
  const s = Math.floor((remaining / 1000) % 60)

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-3xl font-semibold">
        🌙 Sebuah Halaman yang Menunggu
      </h1>

      <p className="max-w-sm text-sm text-muted-foreground">
        Beberapa hal tidak dibuka dengan paksa.
        Tapi dengan waktu.
      </p>

      <Button
        size="lg"
        className="rounded-full px-10"
        onClick={() => setOpen(true)}
      >
        Buka
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`text-center ${unlocking ? 'unlock-fade unlock-glass' : ''
            }`}
        >
          <DialogHeader>
            <DialogTitle>{dialog.title}</DialogTitle>
          </DialogHeader>

          <p className="whitespace-pre-line text-sm text-muted-foreground">
            {dialog.text}
          </p>

          {/* Countdown */}
          {remaining > 0 && (
            <div className="mt-4 flex justify-center gap-3">
              {[h, m, s].map((v, i) => (
                <div
                  key={i}
                  className="
                    rounded-xl
                    bg-white/10
                    px-4
                    py-3
                    text-xl
                    font-mono
                    backdrop-blur-xl
                    border
                    border-white/20
                  "
                >
                  {String(v).padStart(2, '0')}
                </div>
              ))}
            </div>
          )}

          <DialogFooter className="mt-6 flex justify-center">
            {remaining <= 0 ? (
              <Button
                onClick={() => {
                  setUnlocking(true)
                  setTimeout(() => {
                    window.location.href = '/protected'
                  }, 900)
                }}
              >
                Ayoo dibuka yaa...
              </Button>
            ) : (
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Aku tunggu
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
