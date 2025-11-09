"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import AILightEffect from "../components/AILightEffect"

export default function Sobre() {
    return (
        <main className="relative min-h-screen bg-linear-to-b from-black via-neutral-950 to-black text-white overflow-hidden px-6 py-32">
            <AILightEffect /> {/* 🔥 Efeito IA Global */}

            {/* TÍTULO */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-20 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
                Sobre&nbsp;<span className="text-sky-400">Giovanni Miranda</span>
            </motion.h1>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* FOTO COM BRILHO FUTURISTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-sky-500 to-blue-700 blur-[80px] opacity-40 group-hover:opacity-70 transition-all" />
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sky-500/30 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                        <Image
                            src="/perfil-giovanni.jpg" // 🖼️ Coloca tua foto aqui (na pasta public)
                            alt="Foto de Giovanni Miranda"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* TEXTO DE APRESENTAÇÃO */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-center md:text-left max-w-xl"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-sky-400">
                        Desenvolvedor Full Stack & Criador de Experiências Digitais
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Sou apaixonado por tecnologia, design e inteligência artificial.
                        Meu objetivo é transformar ideias em experiências digitais poderosas,
                        com interfaces modernas, performance impecável e um toque de inovação IA.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        Trabalho com <span className="text-sky-400 font-medium">Next.js, React, Node.js, Tailwind e Supabase</span>,
                        criando sistemas e sites de alta conversão, integrados a automações e fluxos inteligentes.
                        Cada projeto que entrego é pensado para impressionar visualmente e gerar resultados reais.
                    </p>

                    {/* BOTÕES */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
                        <Link
                            href="/projetos"
                            className="px-8 py-3 rounded-full bg-linear-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 transition-all font-medium shadow-lg shadow-sky-600/30 text-white"
                        >
                            Ver Projetos
                        </Link>
                        <Link
                            href="https://wa.me/5569999787798?text=Ol%C3%A1%20Giovanni!%20Quero%20criar%20meu%20site%20profissional%20com%20voc%C3%AA."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-sky-500/40 hover:bg-sky-500/10 transition-all text-sky-400 font-medium"
                        >
                            Fale comigo
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* EFEITO DE LUZ INFERIOR */}
            <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[180px]"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
        </main>
    )
}
