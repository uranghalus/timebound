'use client'

import { useState, useEffect } from "react"

function getWITANow() {
    const now = new Date()
    const utc = now.getTime() + now.getTimezoneOffset() * 60000
    return new Date(utc + 8 * 60 * 60 * 1000)
}

function getNextMidnightWITA() {
    const now = getWITANow()
    const midnight = new Date(now)
    midnight.setHours(24, 0, 0, 0)
    return midnight
}
export default function page() {
    const [open, setOpen] = useState(true)
    const [remaining, setRemaining] = useState(0)

    useEffect(() => {
        const target = getNextMidnightWITA()

        const timer = setInterval(() => {
            const now = getWITANow()
            const diff = target.getTime() - now.getTime()

            if (diff <= 0) {
                clearInterval(timer)
                window.location.href = '/protected'
            } else {
                setRemaining(diff)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const h = Math.floor(remaining / (1000 * 60 * 60))
    const m = Math.floor((remaining / (1000 * 60)) % 60)
    const s = Math.floor((remaining / 1000) % 60)
    return (
        <div className="flex items-center justify-center h-screen relative flex-col gap-4 bg-primary">
            {/* <div className="absolute inset-0 backdrop-blur-md bg-black/40" /> */}
            <div className="text-center space-y-3">
                <p className="text-muted-foreground">
                    <span className="text-sm sm:text-lg">Ada kejutan nanti pada pukul</span>
                    <br />
                    <b className="text-sm sm:text-lg">00:00 WITA</b>
                </p>

                <div
                    className="
                        relative
                        inline-flex
                        items-center
                        justify-center
                        rounded-md
                        px-10
                        py-6
                        text-4xl
                        font-mono
                        tracking-widest
                        text-white
                        backdrop-blur-2xl
                        bg-white/10
                        border
                        border-white/20
                        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                        transition-all
                        duration-300
                        ease-out
                    "
                >
                    {/* Gradient shine */}
                    <div
                        className="
      pointer-events-none
      absolute
      inset-0
      rounded-md
      bg-gradient-to-br
      from-white/30
      via-white/5
      to-transparent
      opacity-40
    "
                    />

                    {/* Glow ring */}
                    <div
                        className="
      pointer-events-none
      absolute
      inset-0
      rounded-md
      ring-1
      ring-white/20
    "
                    />

                    {/* Soft pulse aura */}
                    <div
                        className="
      pointer-events-none
      absolute
      -inset-2
      rounded-md
      bg-white/10
      blur-xl
      opacity-40
      animate-pulse
    "
                    />

                    {/* Time */}
                    <span className="relative z-10 sm:text-6xl text-2xl">
                        {String(h).padStart(2, '0')}:
                        {String(m).padStart(2, '0')}:
                        {String(s).padStart(2, '0')}
                    </span>
                </div>



                <p className="text-xs text-muted-foreground">
                    Halaman akan terbuka otomatis
                </p>
            </div>
        </div>
    )
}
