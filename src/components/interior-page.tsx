import { messages } from "@/data/messages";
import { refinement } from "@/data/refinement";
import { person, skills, type Locale } from "@/data/portfolio";
import { PortfolioGrid } from "./portfolio-grid";
import { CopyEmail } from "./copy-email";
import { Arrow } from "./icon";
export function InteriorPage({
  locale,
  page,
}: {
  locale: Locale;
  page: "about" | "portfolio" | "contact";
}) {
  const m = refinement[locale];
  const copy = messages[locale];
  return (
    <main
      id="main"
      tabIndex={-1}
      className={`interior-page ${page}-page container`}
    >
      <header className="page-heading">
        <p className="eyebrow">
          {person.name[locale]} / {person.role[locale]}
        </p>
        <h1>{m[page]}</h1>
        <p>
          {page === "portfolio"
            ? m.portfolioIntro
            : page === "about"
              ? m.aboutIntro
              : m.contactTitle}
        </p>
      </header>
      {page === "portfolio" && <PortfolioGrid locale={locale} />}
      {page === "about" && (
        <>
          <section className="about-content">
            <h2>{copy.about.lead}</h2>
            <div>
              <p>{copy.about.body}</p>
              <p>{copy.about.body2}</p>
              <p className="about-note">{copy.about.note}</p>
            </div>
          </section>
          <section className="expertise">
            <h2>{m.expertise}</h2>
            {skills.map((skill, i) => (
              <article className="expertise-row" key={skill.title.en}>
                <span className="eyebrow">
                  {(i + 1).toLocaleString(locale === "fa" ? "fa-IR" : "en-US", {
                    minimumIntegerDigits: 2,
                  })}
                </span>
                <div>
                  <h3>{skill.title[locale]}</h3>
                  <p>{skill.description[locale]}</p>
                </div>
                <ul>
                  {skill.items[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </>
      )}
      {page === "contact" && (
        <section className="contact-content">
          <p>{copy.contact.body}</p>
          <a className="contact-email" href={`mailto:${person.email}`}>
            <bdi>{person.email}</bdi>
            <Arrow diagonal />
          </a>
          <CopyEmail locale={locale} />
        </section>
      )}
    </main>
  );
}
