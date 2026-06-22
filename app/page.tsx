import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Desenvolvedor Full Stack. Criando experiências digitais inteligentes, rápidas e futuristas com Next.js, React, Tailwind e IA.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <HeroSection />
  )
}
