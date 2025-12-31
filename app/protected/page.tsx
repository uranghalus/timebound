import { redirect } from 'next/navigation'

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

export default function ProtectedPage() {
    const now = getWITANow()
    const unlock = getUnlockDateWITA()

    if (now < unlock) {
        redirect('/')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">💌 Hai</h1>
            <p className="mt-4 max-w-sm text-muted-foreground">
                Kalau kamu sampai di sini,
                berarti waktunya memang sudah tepat.
            </p>
        </main>
    )
}
