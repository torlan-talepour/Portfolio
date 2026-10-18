import Link from "next/link";
import { messages } from "@/data/messages";
import { person, type Locale } from "@/data/portfolio";
import { CopyEmail } from "./copy-email";
import { Arrow, Spark } from "./icon";
export function Footer({ locale }: { locale: Locale }) {
  const m = messages[locale].contact;
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <p className="eyebrow">{m.eyebrow}</p>
        <div className="contact-heading">
          <h2 className="section-title">{m.title}</h2>
          <Spark className="contact-spark" />
        </div>
        <div className="contact-bottom">
          <p>{m.body}</p>
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
