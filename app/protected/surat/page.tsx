'use client'
import { Typewriter } from '@/components/typewriter'
import { useEffect, useRef, useState } from 'react'

export default function FinalPage() {
    const [stopRain, setStopRain] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [shootStar, setShootStar] = useState(false)
    /* =====================
    PLAY MUSIC (HALUS)
  ===================== */
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.volume = 0.25
        audio.play().catch(() => { })
    }, [])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.volume = 0.25

        const play = () => {
            audio.play().catch(() => { })
            window.removeEventListener('click', play)
        }

        window.addEventListener('click', play)

        return () => window.removeEventListener('click', play)
    }, [])
    return (
        <>
            <main className={`night-bg reveal-enter flex min-h-screen items-center ${shootStar ? 'shoot-star' : ''} justify-center px-4 py-12 ${stopRain ? 'stop-rain' : ''
                } `}>
                <audio ref={audioRef} loop preload="auto">
                    <source
                        src="https://rtyixpytpdszwxqxztqg.supabase.co/storage/v1/object/public/velora/Virgoun%20-%20Surat%20Cinta%20Untuk%20Starla%20(Official%20Lyric%20Visualizer).mp3"
                        type="audio/mpeg"
                    />
                </audio>
                <article
                    className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-white/20
          bg-white/10
          p-6
          md:p-10
          backdrop-blur-2xl
          shadow-2xl
        "
                >
                    {/* HEADER */}
                    <header className="mb-8 text-center">
                        <h1 className="text-2xl">💌</h1>
                        <p className="mt-2 text-sm italic text-muted-foreground">
                            Dibaca pelan-pelan ya…
                        </p>
                    </header>

                    {/* ISI SURAT */}
                    <section className="text-gray-50 space-y-5 text-sm leading-relaxed md:text-base">

                        <p><Typewriter text="Halo sayang…..😘" /></p>

                        <p>
                            <Typewriter text="Gimana kabar tuan putriku yang satu ini yaa..? hee.. Ku harap orang ini bakalan bahagia terus sepanjang waktu…" />
                        </p>

                        <p>
                            <Typewriter text="Emmmm gini… aku mau ngomong sesuatu ajaa… dibaca pelan-pelan ya sayang… kalo cepet-cepet ku tabok ntar 😌 ini ngebaca bukan mau berak yaa." />
                        </p>

                        <p>
                            <Typewriter text="Jauh sebelum sama dedee, hampir 5 tahun rasanya aku memendam rasaku. Gak ada tempat buat cerita, layaknya aku cerita ke dedee seperti ini." />
                        </p>

                        <p>
                            <Typewriter text="Dulu kan apa-apa aku cerita ke mama… hidup kita sama sebenernya, dedee gak ada tempat buat manja, dan aku gak ada tempat buat didengarkan." />
                        </p>

                        <p>
                            <Typewriter text="Selama 5 tahun itu aku udah terbiasa memendam semuanya. Bukan karena kuat, tapi karena merasa gak penting dan gak ada yang ngerti." />
                        </p>

                        <p>
                            <Typewriter text="Aku tau orang ngeliatku tengil, kaya orang brengsek. Jadi bodo amat lah orang mau nganggep aku gimana. Mereka ku maafin… karena mereka gak tau." />
                        </p>

                        <p>
                            <Typewriter text="Aku masih inget momen dimana aku harus ditinggalkan mama. Walau cuma penglihatan, rasanya hancur banget. Aku gak karuan makan seminggu." />
                        </p>

                        <p>
                            <Typewriter text="Mau nangis pun gak bisa. Dan aku baru bisa nangis di hadapan mama… waktu itu aku benar-benar gak tau harus ngapain." />
                        </p>

                        <p>
                            <Typewriter text="Gak ada yang tau cerita ini… selain dedee dan mama." />
                        </p>

                        <p>
                            <Typewriter text="Tapi tau gak… semenjak kehadiran dedee, hidupku berubah pelan-pelan. Aku bisa senyum tanpa nutupin luka. Bisa ketawa tanpa pura-pura kuat." />
                        </p>

                        <p>
                            <Typewriter text="Trauma kadang masih datang, tapi gak apa-apa. Semua itu terbayarkan oleh kehadiran seseorang bernama Maulida Salsabilla." />
                        </p>

                        <p>
                            <Typewriter text="Ini adalah salah satu doa mama yang Allah kabulkan." />
                        </p>

                        <blockquote className="border-l-2 border-white/30 pl-4 italic text-muted-foreground">
                            <Typewriter
                                delay={26}
                                text="“Allah kada mungkin meandak sesuatu dan melapas tanpa ada gantinya. Pasti ada yang lebih baik lagi kenanya.”"
                            />
                        </blockquote>

                        <p>
                            <Typewriter text="Sekarang aku sadar… doa mama benar-benar terkabul. Aku dihadirkan seseorang yang mirip banget sama mama. Versi bocilnya sih 😌" />
                        </p>

                        <p>
                            <Typewriter text="Dedee sudah jadi rumahku. Tempat aku pulang. Tempat aku cerita tanpa dihakimi. Tempat aku disayang dengan tulus." />
                        </p>

                        <p>
                            <Typewriter text="Setiap kali dedee nangis denger ceritaku, aku keinget nabi yang juga sering nangis ngeliat keadaanku dulu. Itu kenapa aku gak tega liat dedee sedih." />
                        </p>

                        <p>
                            <Typewriter text="Maaf kalo kadang aku cemburu buta. Aku gak mau rumahku diisi orang lain. Aku udah nemu nyaman, dan aku gak mau berbagi." />
                        </p>

                        <p>
                            <Typewriter text="Ini egoisku… tapi ini jujur." />
                        </p>

                        <p>
                            <Typewriter text="Dan akhirnya 2025 berakhir. Aku cuma mau bilang: terima kasih ya Allah, sudah menghadirkan wanita seimut ini." />
                        </p>

                        <p>
                            <Typewriter text="Sekarang aku bisa lebih tenang menjalani hidup. Lebih terang melihat kasih sayang nabi dan Allah lewat pertemuan ini." />
                        </p>

                        <p>
                            <Typewriter text="Sehat-sehat terus yaa mamahnya Zaidul dan Putri 🤍" />
                        </p>

                        <p className="font-semibold">
                            <Typewriter text="Aku sayang bangeeeeeeeeeeeeeeeeeeeeeeeet sama kamu. Pokoknya kek gini aja terus. Gak boleh ke lain. Harus sama aku. Mari berproses bareng ya sayang." />
                        </p>

                        <p>
                            <Typewriter text="Mungkin itu dulu isi hatiku saat ini… akhirnya plon juga kepalaku wkwk." />
                        </p>

                        <p className="mt-8 text-center font-medium">
                            <Typewriter text="Lopyuuuu Cappybaraku 🤍" onDone={() => { setStopRain(true); setShootStar(true) }} />
                        </p>
                    </section>

                    {/* FOOTER */}
                    <footer className="mt-10 text-center text-sm italic text-muted-foreground">
                        — Dari Ultramannya Bebelll
                    </footer>
                </article>


            </main>
            <button
                onClick={() => {
                    if (!audioRef.current) return
                    audioRef.current.muted = !audioRef.current.muted
                }}
                className="
    fixed
    bottom-4
    right-4
    rounded-full
    bg-white/10
    p-3
    text-xs
    backdrop-blur
    border
    border-white/20
  "
            >
                🔊
            </button>
        </>
    )
}
