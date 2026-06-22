"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projetos = [
  {
    nome: "Primeiro Ato — Agência de Marketing",
    descricao:
      "Website institucional focado em performance, conversão e identidade de marca.",
    link: "https://primeiroato.vercel.app/",
    preview: "/primeiroato.jpg",
  },
  {
    nome: "Barbearia Espaço Alfa",
    descricao:
      "Landing page para barbearia com destaque para serviços, horários e contato direto.",
    link: "https://espaco-alfa.vercel.app/",
    preview: "/espacoalfa.jpg",
  },
  {
    nome: "Landing Page para Restaurantes",
    descricao:
      "Template otimizado para restaurantes: foco em cardápio, reservas e conversão.",
    link: "https://ldp-restaurante.vercel.app/",
    preview: "/ldp-restaurante.jpg",
  },
  {
    nome: "E-commerce Hamburgueria",
    descricao:
      "Loja online para hamburgueria, com catálogo de produtos e foco em experiência do usuário.",
    link: "https://hamburgueria-nine-chi.vercel.app/",
    preview: "/hamburgueria.jpg",
  },
  {
    nome: "Advogado Leonardo Lima",
    descricao:
      "Landing page moderna para advogado, com design responsivo e otimização SEO.",
    link: "https://leonardo-lima.vercel.app/",
    // Coloque uma imagem de preview em public/previews/leonardo-lima.jpg (opcional)
    preview: "/leonardolima.jpg",
  },
  {
    nome: "Zalenda Advogados",
    descricao:
      "Landing page profissional com foco em conversão, design jurídico e SEO otimizado.",
    link: "https://www.zalendaadvogados.com.br/",
    preview: "/iagozalenda.jpg",
  },
  {
    nome: "Mahal Sushi Bar",
    descricao:
      "Landing page atraente para restaurante de sushi, com design moderno e responsivo.",
    link: "https://www.mahalsushibar.com/",
    preview: "/mahalsushibar.jpg",
  },
  {
    nome: "Psicóloga Fernanda Miranda",
    descricao:
      "Landing page profissional com foco em credibilidade, clareza de serviços e contato fácil.",
    link: "https://www.ferdsmpsi.com.br/",
    preview: "/psi-fernanda.jpg",
  },
  {
    nome: "SS Contabilidade",
    descricao:
      "Site institucional para escritório de contabilidade, enfatizando serviços, autoridade e captação de leads.",
    link: "https://www.contabilidadess.com.br/",
    preview: "/sscontabilidade.jpg",
  },
  {
    nome: "Landing Page Pet Shop",
    descricao:
      "Página atraente para pet shop com destaque para serviços, cuidados e incentivo a contato rápido.",
    link: "https://petshop-neon-delta.vercel.app/",
    preview: "/petshop.jpg",
  },
  {
    nome: "MM Contabilidade - Em desenvolvimento",
    descricao:
      "Site institucional para escritório contábil, com foco em serviços, diferenciais e contato fácil.",
    link: "https://www.mmcontabilidadeltda.com.br/",
    preview: "/mmcontabilidade.jpg",
  },
]

export default function ProjetosClient() {
  return (
    <main className="from-background via-muted/20 to-background text-foreground relative min-h-screen overflow-hidden bg-linear-to-b px-6 py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="absolute top-40 -left-48 h-152 w-152 rounded-full bg-sky-500/15 blur-[150px]" />
        <div className="absolute -right-48 bottom-20 hidden h-152 w-152 rounded-full bg-blue-500/15 blur-[150px] md:block" />
      </div>

      {/* TÍTULO */}
      <h1 className="hero-reveal mb-16 bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text py-1 text-center text-4xl font-semibold text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)] md:text-6xl">
        Projetos
      </h1>

      {/* LISTA DE PROJETOS */}
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {projetos.map((p, index) => (
          <Card
            key={p.nome}
            role="article"
            className="group bg-card/90 relative gap-0 overflow-hidden rounded-2xl border-sky-500/25 py-0 shadow-[0_0_24px_rgba(56,189,248,0.16)] transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Preview */}
            <div className="relative aspect-video w-full overflow-hidden">
              {p.preview ? (
                <Image
                  src={p.preview}
                  alt={`Preview do projeto ${p.nome}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1200px) 30vw, 352px"
                  quality={70}
                  priority={index === 0}
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-sky-900/40 via-cyan-800/30 to-blue-900/40" />
              )}

              {/* Overlay de ação no hover */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
              <div className="pointer-events-none absolute right-0 bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-sm text-white/90 backdrop-blur-sm">
                  Pré-visualização • Passe o mouse
                </div>
              </div>
              {/* Link cobrindo somente a área da imagem */}
              <Link
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${p.nome}`}
                className="absolute inset-0"
              />
            </div>

            {/* Conteúdo */}
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-2xl text-sky-500">{p.nome}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 px-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.descricao}
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-sky-500/40"
              >
                <Link href={p.link} target="_blank" rel="noopener noreferrer">
                  Ver Projeto →
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* BOTÃO VOLTAR */}
      <div className="mt-20 text-center">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full border-sky-500/40 text-sky-500"
        >
          <Link href="/">← Voltar para Início</Link>
        </Button>
      </div>
    </main>
  )
}
