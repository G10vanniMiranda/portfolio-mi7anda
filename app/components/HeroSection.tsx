"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { siteConfig } from "../lib/site";

const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b from-black via-neutral-950 to-black px-6 text-center"
    >
      <ParticlesBackground />

      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_65%)]" />
        <div className="hero-glow absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[130px]" />
        <div className="hero-glow hero-glow-delayed absolute -right-40 top-1/3 hidden h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[130px] md:block" />
      </div>

      <h1 className="hero-reveal relative z-10 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)] md:text-7xl">
        Giovanni Miranda
      </h1>

      <p className="hero-reveal hero-reveal-delayed relative z-10 mt-4 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
        Desenvolvedor Full Stack especializado em soluções modernas e inteligentes.
      </p>

      <div className="hero-reveal hero-reveal-actions relative z-10 mt-10 flex flex-wrap justify-center gap-6">
        <Link
          href="/projetos"
          className="rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-8 py-3 font-medium text-white shadow-lg shadow-sky-600/30 transition-transform hover:scale-[1.03]"
        >
          Ver Projetos
        </Link>
        <Link
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-sky-500/40 px-8 py-3 font-medium text-sky-400 transition-colors hover:bg-sky-500/10"
        >
          Fale comigo
        </Link>
      </div>
    </section>
  );
}
