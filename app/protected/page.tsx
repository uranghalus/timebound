'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedPage() {
    const router = useRouter()
    const [count, setCount] = useState(10)
    const [secret, setSecret] = useState(false)
    const [clicks, setClicks] = useState(0)

    /* =====================
       REDIRECT SETELAH 10s
    ===================== */
    useEffect(() => {
        if (count <= 0) {
            router.push('/protected/chapt-1')
            return
        }

        const t = setTimeout(() => setCount(c => c - 1), 1000)
        return () => clearTimeout(t)
    }, [count, router])

    /* =====================
       EASTER EGG (3 KLIK)
    ===================== */
    useEffect(() => {
        if (clicks >= 3) setSecret(true)
    }, [clicks])

    return (
        <main className="reveal-enter relative flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">💌 Hai</h1>

            <p
                className="mt-4 max-w-sm cursor-default text-muted-foreground"
                onClick={() => setClicks(c => c + 1)}
            >
                Kamu sudah sampai di sini.
                <br />
                Tenang dulu sebentar ya…
            </p>

            {/* COUNTDOWN KECIL */}
            <div
                key={count}
                className="mt-6 text-xs font-mono text-muted-foreground animate-fade"
            >
                {count}…
            </div>

            {/* EASTER EGG */}
            {secret && (
                <div
                    className="
            mt-6
            rounded-lg
            border
            border-white/20
            bg-white/10
            px-4
            py-3
            text-xs
            backdrop-blur-xl
          "
                >
                    🧠 Kamu teliti sekali.
                    <br />
                    Tidak semua orang berhenti dan memperhatikan.
                </div>
            )}
        </main>
    )
}
