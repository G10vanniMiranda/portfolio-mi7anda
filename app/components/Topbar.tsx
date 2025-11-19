"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Topbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fecha menu quando muda de rota/hash
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const links = [
        { name: "Início", href: "/" },
        { name: "Sobre", href: "/sobre" },
        { name: "Projetos", href: "/projetos" },
        { name: "Contato", href: "/contato" },
    ];
    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${scrolled ? "bg-black/70 border-b border-white/10 shadow-lg" : "bg-transparent"}`}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                    <motion.div className="flex items-center cursor-pointer" whileHover={{ scale: 1.05 }}>
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="Logo Giovanni Miranda"
                                width={100}
                                height={100}
                                priority
                                className="drop-shadow-[0_0_12px_rgba(56,189,248,0.45)] rounded"
                            />
                        </Link>
                    </motion.div>
                    <nav className="hidden md:flex items-center gap-8">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`text-sm font-medium transition-all cursor-pointer ${pathname === l.href ? "text-sky-400" : "text-gray-300 hover:text-white"}`}
                            >
                                {l.name}
                            </Link>
                        ))}
                    </nav>
                    <motion.div whileHover={{ scale: 1.05 }} className="hidden md:inline-block">
                        <Link
                            href="https://wa.me/5569999787798?text=Ol%C3%A1%20Giovanni!%20Quero%20criar%20meu%20site%20profissional%20com%20voc%C3%AA."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-linear-to-r from-sky-500 to-blue-600 text-white text-sm px-5 py-2 rounded-full font-medium shadow-lg hover:shadow-sky-500/30 transition-all cursor-pointer"
                        >
                            Fale comigo
                        </Link>
                    </motion.div>
                    <div className="md:hidden flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 text-2xl cursor-pointer"
                        >
                            {menuOpen ? "✕" : "☰"}
                        </motion.button>
                    </div>
                </div>
                <motion.div
                    className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-sky-500/40 to-transparent"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.header>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-2xl flex flex-col justify-center items-center z-40"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menu de navegação"
                    >
                        {links.map((l, index) => (
                            <motion.div key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.07 * index }}>
                                <Link
                                    href={l.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block text-2xl md:text-3xl my-4 font-semibold transition-all cursor-pointer ${pathname === l.href ? "text-sky-400" : "text-gray-200 hover:text-sky-400"}`}
                                >
                                    {l.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link
                                href="https://wa.me/5569999787798?text=Ol%C3%A1%20Giovanni!%20Quero%20criar%20meu%20site%20profissional%20com%20voc%C3%AA."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-10 inline-block bg-linear-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-sky-500/40 transition-all cursor-pointer"
                            >
                                Fale comigo 🚀
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
