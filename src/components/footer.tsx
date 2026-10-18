import { studio } from "@/data/studio";
import Link from "next/link";
import { messages } from "@/data/messages";
import { person, type Locale } from "@/data/portfolio";
import { CopyEmail } from "./copy-email";
import { Arrow } from "./icon";
export function Footer({ locale }: { locale: Locale }) {
  const m = messages[locale].contact;
  const s = studio[locale];
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <p className="eyebrow">{s.contactEyebrow}</p>
        <div className="contact-heading">
          <h2 className="section-title">{s.contactTitle}</h2>
          <span className="footer-monogram" aria-hidden="true">
            tt<span>·</span>
          </span>
        </div>
        <div className="contact-bottom">
          <div className="contact-note">
            <p>{s.contactNote}</p>
            <p>{m.body}</p>
          </div>
          <div className="email-block">
            <a
              className="email-link"
              href={`mailto:${person.email}`}
              aria-label={`${m.email}: ${person.email}`}
            >
              <bdi>{person.email}</bdi>
              <Arrow diagonal />
            </a>
            <CopyEmail locale={locale} />
          </div>
        </div>
        <div className="footer-line">
          <span>
            © {new Date().getUTCFullYear()} {person.name[locale]}
          </span>
          <span className="footer-note">{m.footer}</span>
          <Link href="#top" className="back-top">
            {m.back}
            <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
