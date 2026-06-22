"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "../lib/site"

const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
})

export default function HeroSection() {
  return (
    <section
      id="home"
      className="from-background via-muted/20 to-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-b px-6 text-center"
    >
      <ParticlesBackground />

      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_65%)]" />
        <div className="hero-glow absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[130px]" />
        <div className="hero-glow hero-glow-delayed absolute top-1/3 -right-40 hidden h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[130px] md:block" />
      </div>

      <h1 className="hero-reveal relative z-10 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)] md:text-7xl">
        Giovanni Miranda
      </h1>

      <p className="hero-reveal hero-reveal-delayed text-muted-foreground relative z-10 mt-4 max-w-2xl text-lg leading-relaxed md:text-xl">
        Desenvolvedor Full Stack especializado em soluções modernas e
        inteligentes.
      </p>

      <div className="hero-reveal hero-reveal-actions relative z-10 mt-10 flex flex-wrap justify-center gap-6">
        <Button
          asChild
          size="lg"
          className="rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-8 text-white"
        >
          <Link href="/projetos">Ver Projetos</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full border-sky-500/40 px-8 text-sky-500"
        >
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale comigo
          </Link>
        </Button>
      </div>
    </section>
  )
}
