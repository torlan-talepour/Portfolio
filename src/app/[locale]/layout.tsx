import { siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/data/portfolio";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "../globals.css";
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html data-scroll-behavior="smooth" lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <head>
        <link
          rel="preload"
          href={
            locale === "fa"
              ? "/fonts/vazirmatn-arabic.woff2"
              : "/fonts/inter-latin.woff2"
          }
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}

export const metadata = { metadataBase: new URL(siteUrl) };
