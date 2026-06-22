import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sobre", "/projetos", "/contato"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.8,
  }));
}
