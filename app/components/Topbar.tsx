"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "../lib/site";

const links = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
];

export default function Topbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`navbar-enter fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/80 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center transition-transform hover:scale-[1.03]">
            <Image
              src="/logo-sem-fundo.png"
              alt="Logo Giovanni Miranda"
              width={72}
              height={72}
              priority
              sizes="72px"
              className="rounded drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-sky-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.03] md:inline-block"
          >
            Fale comigo
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-sky-400 md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="mobile-menu-enter fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-lg"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`my-4 block text-2xl font-semibold transition-colors ${
                pathname === link.href
                  ? "text-sky-400"
                  : "text-gray-200 hover:text-sky-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={siteConfig.whatsapp}
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-8 py-3 font-medium text-white shadow-lg"
          >
            Fale comigo
          </Link>
        </div>
      )}
    </>
  );
}
