"use client"

import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { siteConfig } from "../lib/site"

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
]

export default function Topbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "navbar-enter fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 border-b shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-[1.03]"
        >
          <Image
            src="/logo-sem-fundo.png"
            alt="Logo Giovanni Miranda"
            width={64}
            height={64}
            priority
            sizes="64px"
            className="rounded drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "text-muted-foreground hover:text-foreground text-sm font-medium transition-colors",
                pathname === link.href && "text-sky-500"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            className="rounded-full bg-linear-to-r from-sky-500 to-blue-600 text-white"
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

        <div className="flex items-center gap-1 md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-border bg-background/95 w-full backdrop-blur-xl sm:max-w-sm"
            >
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Links para as páginas principais do portfólio.
              </SheetDescription>
              <nav
                className="flex flex-1 flex-col items-center justify-center"
                aria-label="Navegação mobile"
              >
                {links.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={cn(
                        "text-muted-foreground hover:text-foreground my-3 text-2xl font-semibold transition-colors",
                        pathname === link.href && "text-sky-500"
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    size="lg"
                    className="mt-8 rounded-full bg-linear-to-r from-sky-500 to-blue-600 text-white"
                  >
                    <Link
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fale comigo
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
