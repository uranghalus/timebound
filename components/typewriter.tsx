'use client'

import { useEffect, useState } from 'react'

type Props = {
    text: string
    delay?: number
    onDone?: () => void
}

export function Typewriter({ text, delay = 22, onDone }: Props) {
    const [displayed, setDisplayed] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= text.length) {
            onDone?.()
            return
        }

        const t = setTimeout(() => {
            setDisplayed(prev => prev + text[index])
            setIndex(i => i + 1)
        }, delay)

        return () => clearTimeout(t)
    }, [index, text, delay, onDone])

    return <span className="soft-fade">{displayed}</span>
}
