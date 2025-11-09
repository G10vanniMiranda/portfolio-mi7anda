"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const [text, setText] = useState("");
    const [boot, setBoot] = useState(true);
    const fullText =
        "Desenvolvedor Full Stack especializado em soluções modernas e inteligentes.";

    // Efeito de digitação IA
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Simula o boot do sistema (fade inicial)
    useEffect(() => {
        const timer = setTimeout(() => setBoot(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 bg-linear-to-b from-black via-neutral-950 to-black overflow-hidden"
        >
            <ParticlesBackground />
            {/* EFEITO DE BOOT (ACENDENDO O SISTEMA) */}
            <AnimateBootOverlay active={boot} />
            {/* EFEITOS DE FUNDO */}
            <div className="absolute inset-0">
                {/* Grid sutil */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

                {/* Glow fixo central */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

                {/* Luz esquerda (ancorada - sempre visível) */}
                <motion.div
                    className="absolute left-[-180px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-linear-to-r from-sky-400/55 via-cyan-500/40 to-transparent blur-[220px] mix-blend-screen pointer-events-none"
                    animate={{
                        x: ["-8%", "6%", "-8%"],
                        y: ["-35%", "35%", "-25%"],
                        opacity: [0.75, 1, 0.85],
                        scale: [1, 1.06, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Luz direita (ancorada - escondida em mobile) */}
                <motion.div
                    className="hidden md:block absolute right-[-180px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-linear-to-r from-cyan-400/50 via-sky-500/35 to-transparent blur-[200px] mix-blend-screen pointer-events-none"
                    animate={{
                        x: ["8%", "-5%", "8%"],
                        y: ["30%", "-30%", "20%"],
                        opacity: [0.7, 0.95, 0.8],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* TÍTULO */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.3, duration: 1 }}
                className="text-5xl md:text-7xl font-extrabold text-transparent bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text drop-shadow-[0_0_25px_rgba(56,189,248,0.4)] relative z-10"
            >
                Giovanni Miranda
            </motion.h1>

            {/* SUBTEXTO DIGITADO */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
                className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed h-[60px] relative z-10"
            >
                {text}
                <span className="animate-pulse text-sky-400">|</span>
            </motion.p>

            {/* BOTÕES */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="mt-10 flex flex-wrap gap-6 justify-center relative z-10"
            >
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
            </motion.div>
        </section>
    );
}

// COMPONENTE INTERNO: Overlay de Boot
function AnimateBootOverlay({ active }: { active: boolean }) {
    if (!active) return null;
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-linear-to-b from-sky-950 via-black to-black flex items-center justify-center z-40"
        >
            <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-[300px] h-[300px] rounded-full bg-sky-500/30 blur-[100px]"
            />
        </motion.div>
    );
}
