"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projetos = [
    {
        nome: "Zalenda Advogados",
        descricao:
            "Landing page profissional com foco em conversão, design jurídico e SEO otimizado.",
        link: "https://zalendaadvogados.com",
    },
    {
        nome: "Beco Gastronômico",
        descricao:
            "Site completo para espaço gastronômico com 5 restaurantes — design moderno e responsivo.",
        link: "https://becogastronomico.com.br",
    },
    {
        nome: "Mi7anda Soluções",
        descricao:
            "Agência de desenvolvimento web e marketing digital com foco em automação e performance.",
        link: "https://giovannimiranda.com.br",
    },
];

export default function ProjetosClient() {
    return (
        <main className="relative min-h-screen bg-linear-to-b from-black via-neutral-950 to-black text-white overflow-hidden px-6 py-32">
            {/* ⚡️ CAMADAS DE LUZ IA FLUTUANTE */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Base suave */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)]" />

                {/* Núcleo de energia azul (centro) */}
                <motion.div
                    className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[180px]"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Luz esquerda (ancorada à esquerda - sempre visível) */}
                <motion.div
                    className="absolute left-[220px] top-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-[radial-gradient(circle,rgba(0,160,255,0.55)_0%,rgba(0,160,255,0.35)_20%,transparent_75%)] blur-[320px] mix-blend-screen pointer-events-none"
                    animate={{
                        x: ["-10%", "8%", "-10%"],
                        y: ["-35%", "35%", "-25%"],
                        opacity: [0.55, 0.9, 0.6],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Luz direita (ancorada à direita - escondida em mobile) */}
                <motion.div
                    className="hidden md:block absolute right-[-220px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,200,255,0.5)_0%,rgba(0,140,255,0.25)_25%,transparent_75%)] blur-[260px] mix-blend-screen pointer-events-none"
                    animate={{
                        x: ["10%", "-6%", "10%"],
                        y: ["30%", "-30%", "20%"],
                        opacity: [0.4, 0.85, 0.5],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Reflexo elétrico diagonal */}
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,255,255,0.1),transparent_60%)]"
                    animate={{ opacity: [0.1, 0.25, 0.1], x: ["0%", "10%", "0%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Brilho IA pulsando no canto (mais intenso) */}
                <motion.div
                    className="absolute bottom-[-220px] right-[-170px] w-[780px] h-[780px] rounded-full bg-blue-500/40 blur-[220px] mix-blend-screen"
                    animate={{
                        scale: [0.85, 1.3, 0.85],
                        opacity: [0.5, 0.95, 0.55],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* TÍTULO */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
                Projetos&nbsp;<span className="text-sky-400">Futuristas</span>
            </motion.h1>

            {/* LISTA DE PROJETOS */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {projetos.map((p, index) => (
                    <motion.div
                        key={p.nome}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative p-0.5 rounded-2xl bg-linear-to-br from-sky-500/40 to-blue-600/30 hover:from-blue-600/50 hover:to-sky-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                    >
                        <div className="bg-black rounded-2xl h-full p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold text-sky-400 mb-3 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">{p.nome}</h2>
                                <p className="text-gray-300 text-sm leading-relaxed">{p.descricao}</p>
                            </div>
                            <Link
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block text-sm font-medium text-white border border-sky-500/40 rounded-full px-5 py-2 hover:bg-sky-500/10 transition-all"
                            >
                                Ver Projeto →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* BOTÃO VOLTAR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center mt-20"
            >
                <Link
                    href="/"
                    className="px-8 py-3 rounded-full border border-sky-500/40 hover:bg-sky-500/10 transition-all text-sky-400 font-medium"
                >
                    ← Voltar para Início
                </Link>
            </motion.div>
        </main>
    );
}
