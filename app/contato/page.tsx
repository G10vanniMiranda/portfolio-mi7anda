"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"
import AILightEffect from "../components/AILightEffect"

export default function Contato() {
    // Remove scroll apenas enquanto esta página está montada
    useEffect(() => {
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [])

    return (
        <main className="relative min-h-screen bg-linear-to-b from-black via-neutral-950 to-black text-white overflow-hidden px-6 flex flex-col justify-center">
            <AILightEffect /> {/* ⚡️ Luz IA Global */}

            {/* TÍTULO */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-10 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
                Conecte-se&nbsp;<span className="text-sky-400">com o Futuro</span>
            </motion.h1>

            {/* TEXTO PERSUASIVO */}
            <div className="max-w-3xl mx-auto text-center px-2">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-gray-300 text-lg leading-relaxed mb-6"
                >
                    Cada vez que um cliente acessa seu site, ele decide em poucos segundos se sua marca transmite confiança ou não.
                    <br />
                    E é exatamente aqui que eu entro: eu crio experiências digitais que fazem o cliente <strong>parar, prestar atenção e agir.</strong>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-gray-400 leading-relaxed mb-6"
                >
                    Se você quer um site moderno, rápido e com o mesmo padrão que as grandes marcas usam, então é hora de dar o próximo passo.
                    <br />
                    Porque no mundo digital, quem atrai mais atenção... conquista mais clientes.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="text-gray-400 italic leading-relaxed mb-10"
                >
                    🚀 Transforme sua presença online em uma máquina de conversão — com design, performance e estratégia.
                </motion.p>
            </div>

            {/* CTA PULSANTE IA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex justify-center"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                            "0 0 20px rgba(56,189,248,0.5)",
                            "0 0 50px rgba(56,189,248,0.8)",
                            "0 0 20px rgba(56,189,248,0.5)",
                        ],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Link
                        href="https://wa.me/5569999787798?text=Ol%C3%A1%20Giovanni!%20Quero%20criar%20meu%20site%20profissional%20com%20voc%C3%AA."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-10 py-4 bg-linear-to-r from-sky-500 to-blue-600 rounded-full text-white text-lg font-medium shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:from-blue-600 hover:to-sky-500 transition-all"
                    >
                        💬 Falar com Giovanni Agora
                        <motion.span
                            className="absolute inset-0 rounded-full bg-linear-to-r from-sky-400/20 to-blue-600/20 blur-md"
                            animate={{
                                opacity: [0.4, 0.9, 0.4],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            {/* TEXTO DE FECHAMENTO */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="text-center text-gray-500 mt-12"
            >
                *Respondo pessoalmente todas as mensagens — porque cada projeto merece atenção total.*
            </motion.p>
        </main>
    )
}
