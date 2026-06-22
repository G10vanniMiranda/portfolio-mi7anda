import type { Metadata } from "next";
import ContatoContent from "./ContatoContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Giovanni Miranda para criar sites e experiências digitais rápidas, modernas e orientadas à conversão.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return <ContatoContent />;
}
