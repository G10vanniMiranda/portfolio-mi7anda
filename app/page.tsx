import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";

export const metadata: Metadata = {
  title: "Giovanni Miranda — Portfólio Futurista IA",
  description:
    "Desenvolvedor Full Stack. Criando experiências digitais inteligentes, rápidas e futuristas com Next.js, React, Tailwind e IA.",
};

export default function Home() {
  return (
    <HeroSection />
  )
}
