import { siteUrl } from "@/lib/seo";
import type { ReactNode } from "react";
import "../globals.css";
export default function EntryLayout({ children }: { children: ReactNode }) {
  return (
    <html data-scroll-behavior="smooth" lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}

export const metadata = { metadataBase: new URL(siteUrl) };
