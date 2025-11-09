import type { Metadata } from "next";
import ProjetosClient from "./ProjetosClient";

export const metadata: Metadata = {
  title: "Projetos — Giovanni Miranda",
  description: "Alguns projetos recentes com foco em performance, design e SEO.",
};

export default function Projetos() {
  return <ProjetosClient />;
}
