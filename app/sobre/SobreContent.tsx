import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "../lib/site"
import { Button } from "@/components/ui/button"

export default function SobreContent() {
  return (
    <main className="from-background via-muted/20 to-background text-foreground relative min-h-screen overflow-hidden bg-linear-to-b px-6 py-36">
      <h1 className="hero-reveal mb-20 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-center text-4xl font-extrabold text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)] md:text-6xl">
        Sobre <span className="text-sky-400">Giovanni Miranda</span>
      </h1>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <div className="hero-reveal group relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-sky-500 to-blue-700 opacity-35 blur-[70px] transition-opacity group-hover:opacity-50" />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-sky-500/30 shadow-[0_0_35px_rgba(56,189,248,0.35)] md:h-80 md:w-80">
            <Image
              src="/perfil-giovanni.jpg"
              alt="Foto de Giovanni Miranda"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 320px, 256px"
              priority
              quality={75}
            />
          </div>
        </div>

        <div className="hero-reveal hero-reveal-delayed max-w-xl text-center md:text-left">
          <h2 className="mb-4 text-2xl font-semibold text-sky-400 md:text-3xl">
            Desenvolvedor Full Stack & Criador de Experiências Digitais
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Sou apaixonado por tecnologia, design e inteligência artificial. Meu
            objetivo é transformar ideias em experiências digitais poderosas,
            com interfaces modernas, performance impecável e inovação.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Trabalho com{" "}
            <span className="font-medium text-sky-400">
              Next.js, React, Node.js, Tailwind e Supabase
            </span>
            , criando sistemas e sites de alta conversão, integrados a
            automações e fluxos inteligentes.
          </p>

          <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
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
        </div>
      </div>
    </main>
  )
}
