import type { Metadata } from "next"
import ProjetosClient from "./ProjetosClient"

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Alguns projetos recentes com foco em performance, design e SEO.",
  alternates: { canonical: "/projetos" },
}

export default function Projetos() {
  return <ProjetosClient />
}
