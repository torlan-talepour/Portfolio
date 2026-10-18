import { siteUrl } from "@/lib/seo";
import Link from "next/link";
import "./globals.css";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Page not found — Torlan Talepour",
  robots: { index: false, follow: false },
};
export default function GlobalNotFound() {
  return (
    <html data-scroll-behavior="smooth" lang="en" dir="ltr">
      <body>
        <main className="error-page">
          <p className="eyebrow">404 / PAGE NOT FOUND</p>
          <h1>A different direction.</h1>
          <p>This page doesn’t exist. Let’s get you back to the work.</p>
          <Link className="button button-dark" href="/en">
            English portfolio →
          </Link>
          <Link className="text-link" href="/fa" lang="fa" dir="rtl">
            مشاهده پورتفولیوی فارسی ←
          </Link>
        </main>
      </body>
    </html>
  );
}
