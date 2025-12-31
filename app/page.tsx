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
import Link from 'next/link'

function getWITANow() {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  return new Date(utc + 8 * 60 * 60 * 1000)
}

function getUnlockDateWITA() {
  const now = getWITANow()
  const unlock = new Date(now)
  unlock.setMonth(now.getMonth() + 1)
  unlock.setDate(1)
  unlock.setHours(0, 0, 0, 0)
  return unlock
}

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
      text: 'Jangan ke mana-mana ya.\nIni sudah sangat dekat.',
    }
  }

  if (diff < hour * 6) {
    return {
      title: '⏳ Hampir',
      text: 'Waktunya makin dekat.\nSabar sedikit lagi.',
    }
  }

  if (diff < hour * 24) {
    return {
      title: '👀 Sebentar lagi',
      text: 'Sudah kelihatan tandanya.\nTunggu ya.',
    }
  }

  return {
    title: '😴 Santai dulu',
    text: 'Masih terlalu cepat.\nDia belum siap sekarang.',
  }
}

export default function HomePage() {
  const [open, setOpen] = useState(false)
  const [remaining, setRemaining] = useState(0)
  const [unlocking, setUnlocking] = useState(false)
  useEffect(() => {
    const unlock = getUnlockDateWITA()

    const timer = setInterval(() => {
      const now = getWITANow()
      setRemaining(unlock.getTime() - now.getTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dialog = getDialogText(remaining)

  const h = Math.max(0, Math.floor(remaining / (1000 * 60 * 60)))
  const m = Math.max(0, Math.floor((remaining / (1000 * 60)) % 60))
  const s = Math.max(0, Math.floor((remaining / 1000) % 60))

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
        <DialogContent className={`text-center ${unlocking ? 'unlock-fade unlock-glass' : ''
          }`}>
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
              <Button onClick={() => {
                setUnlocking(true)
                setTimeout(() => {
                  window.location.href = '/protected'
                }, 800)
              }}>
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
