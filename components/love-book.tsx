'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, ChevronLeft, ChevronRight, Heart, MessageCircle, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const slides = [
    {
        type: "text",
        text: "Haloo... Sayaanng :) btw ini aku mau cerita sedikit yaa...",
        bg: "bg-rose-200",
    },
    {
        type: "text",
        text: "Sebelumnyaa aku mau ucapin selamat tahun baru 2026 yaa sayanggg....",
        bg: "bg-pink-200",
    },
    {
        type: "text",
        text: "Semoga di tahun ini semua harapan dan impian kita bisa terwujud yaa..amiin",
        bg: "bg-red-200",
    },
    {
        type: "text",
        text: "Emmmm,,,,, aku mau bilang sesuatu nihh....",
        bg: "bg-pink-200",
    },
    {
        type: "text",
        text: "Jadiii,,,, ehhh kepanjangan nanti dehh,,wwkk scrolll kesamping aja yaa...",
        bg: "bg-rose-200",
    },
    {
        type: "cta",
        text: "Aku punya satu hal terakhir yang ingin kamu lihat 🤍",
        buttonText: "Buka Halaman",
        href: "/protected/surat",
        bg: "bg-gradient-to-br from-rose-200 to-pink-300",
    },
];

export default function LoveBook() {
    const [index, setIndex] = useState(0);


    const next = () => setIndex((i) => (i + 1) % slides.length);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);


    return (
        <div className="reveal-enter flex justify-center items-center min-h-screen bg-neutral-100">
            <div className="w-[360px] rounded-md overflow-hidden shadow-xl bg-white">
                {/* Header ala Instagram */}
                <div className="flex items-center justify-between px-4 py-3 border-b ">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://rtyixpytpdszwxqxztqg.supabase.co/storage/v1/object/public/velora/WhatsApp%20Image%202025-10-31%20at%2013.37.24%20(1).jpeg" alt="@shadcn" />
                            <AvatarFallback>OS</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-">
                            <div className="text-sm font-semibold">Suara Hati</div>
                            <div className="text-xs font-semibold text-gray-500">Ultaramannya Bebel</div>
                        </div>
                    </div>
                </div>


                {/* Carousel */}
                <div className="relative aspect-square">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute inset-0 flex items-center justify-center text-center px-6 ${slides[index].bg ?? "bg-neutral-200"}`}
                        >
                            {slides[index].type === "text" ? (
                                <p className="text-xl font-medium text-neutral-800 leading-relaxed">
                                    {slides[index].text}
                                </p>
                            ) : slides[index].type === "cta" ? (
                                <div className="flex flex-col items-center gap-6">
                                    <p className="text-xl font-semibold text-neutral-800 leading-relaxed">
                                        {slides[index].text}
                                    </p>
                                    <a
                                        href={slides[index].href}
                                        className="px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold shadow-md active:scale-95 transition"
                                    >
                                        {slides[index].buttonText}
                                    </a>
                                </div>
                            ) : null}
                        </motion.div>
                    </AnimatePresence>


                    {/* Navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>


                {/* Dots Indicator */}
                <div className="space-y-2 py-5 px-4">
                    <div className="flex justify-center items-center gap-2">
                        {slides.map((_, i) => {
                            const distance = Math.abs(i - index)

                            const size =
                                distance === 0
                                    ? "w-2.5 h-2.5"
                                    : distance === 1
                                        ? "w-2 h-2"
                                        : "w-1.5 h-1.5"

                            const color =
                                distance === 0 ? "bg-neutral-800" : "bg-neutral-400"

                            return (
                                <div
                                    key={i}
                                    className={`rounded-full transition-all duration-300 ${size} ${color}`}
                                />
                            )
                        })}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <Heart className="size-7 text-red-500" />
                            <MessageCircle className="size-6 text-gray-600" />
                            <Send className="size-6 text-gray-600" />
                        </div>
                        <Bookmark className="size-6 text-gray-600" />
                    </div>

                    <div className="flex items-center gap-1">
                        <Heart fill="#fb2c36" color="#fb2c36" className="size-4" />
                        <div className="text-xs text-gray-500">999+ Likes</div>
                    </div>

                    <p className="text-xs text-gray-500">
                        .... Surat ku dipenghujung 2025 ini
                    </p>
                </div>

            </div>
        </div>
    );
}
