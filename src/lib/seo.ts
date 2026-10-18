import type { Metadata } from "next";
import { messages } from "@/data/messages";
import { person, type Locale } from "@/data/portfolio";
// Set SITE_URL to the final production origin before launch. Vercel supplies VERCEL_PROJECT_PRODUCTION_URL automatically.
export const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
export function pageMetadata(
  locale: Locale,
  path = "",
  title?: string,
  description?: string,
): Metadata {
  const m = messages[locale];
  const fullTitle = title ? `${title} — ${person.name[locale]}` : m.seo.title;
  const desc = description || m.seo.description;
  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description: desc,
    applicationName: person.name[locale],
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        fa: `/fa${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `/${locale}${path}`,
      siteName: person.name[locale],
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
      type: "website",
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: m.seo.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}
