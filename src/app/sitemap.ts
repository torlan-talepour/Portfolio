import type { MetadataRoute } from "next";
import { locales, projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/portfolio",
    "/contact",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: {
        languages: {
          en: `${siteUrl}/en${path}`,
          fa: `${siteUrl}/fa${path}`,
          "x-default": `${siteUrl}/en${path}`,
        },
      },
    })),
  );
}
