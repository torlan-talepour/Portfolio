import Link from "next/link";
import { person, type Locale } from "@/data/portfolio";
export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="container footer-line">
        <Link href={`/${locale}`} className="footer-brand">
          {person.name[locale]}
        </Link>
        <span>© {new Date().getUTCFullYear()}</span>
        <a href={`mailto:${person.email}`}>
          <bdi>{person.email}</bdi>
        </a>
      </div>
    </footer>
  );
}
