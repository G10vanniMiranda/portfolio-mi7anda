import type { Metadata } from "next";
import SobreContent from "./SobreContent";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Giovanni Miranda, desenvolvedor Full Stack especializado em Next.js, React, Node.js e experiências digitais.",
  alternates: { canonical: "/sobre" },
};

export default function Sobre() {
  return <SobreContent />;
}
