"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

export default function AILightEffect() {
    // 🧠 Captura a posição do mouse
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Viewport dimensions (definidos após mount para evitar SSR window usage)
    const [vw, setVw] = useState(1)
    const [vh, setVh] = useState(1)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    // 🔵 Cria leve movimento de parallax baseado no mouse
    useEffect(() => {
        const updateSize = () => {
            setVw(window.innerWidth || 1)
            setVh(window.innerHeight || 1)
        }
        updateSize()
        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize)
    }, [])

    const translateX = useTransform(mouseX, [0, vw], ["-10%", "10%"])
    const translateY = useTransform(mouseY, [0, vh], ["-5%", "5%"])

    // 💡 Cria animação de pulso contínuo
    useEffect(() => {
        if (!vw) return
        const controls = animate(mouseX, [0, vw], {
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            repeatType: "mirror",
        })
        return controls.stop
    }, [mouseX, vw])

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* 🔹 Fundo base */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

            {/* 🔹 Núcleo IA pulsante */}
            <motion.div
                className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/25 blur-[200px]"
                style={{ x: translateX, y: translateY }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* 🔹 Luz vibrante flutuante (movimento independente) */}
            <motion.div
                className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(0,140,255,0.45)_0%,transparent_70%)] blur-[260px]"
                animate={{
                    x: ["-40%", "50%", "-30%"],
                    y: ["-30%", "40%", "-20%"],
                    opacity: [0.3, 0.8, 0.4],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* 🔹 Reflexo elétrico que reage ao scroll */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,255,255,0.12),transparent_70%)]"
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    x: ["0%", "10%", "0%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 🔹 Luz auxiliar no canto */}
            <motion.div
                className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] rounded-full bg-blue-500/40 blur-[180px]"
                animate={{
                    scale: [0.9, 1.3, 0.9],
                    opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    )
}
