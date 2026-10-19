import { notFound } from "next/navigation";
import { isLocale } from "@/data/portfolio";
import { refinement } from "@/data/refinement";
import { pageMetadata } from "@/lib/seo";
import { InteriorPage } from "@/components/interior-page";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, "/about", refinement[locale].about);
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <InteriorPage locale={locale} page="about" />;
}
