import Link from "next/link";
import { messages } from "@/data/messages";
import { studio } from "@/data/studio";
import { person, projects, skills, type Locale } from "@/data/portfolio";
import { Arrow } from "./icon";
import { StudioBoard } from "./studio-board";
import { DesignLab } from "./design-lab";
import { ScreenExplorer } from "./screen-explorer";
export function Home({ locale }: { locale: Locale }) {
  const m = messages[locale];
  const s = studio[locale];
  return (
    <main id="main" tabIndex={-1}>
      <section className="studio-hero container" aria-labelledby="hero-title">
        <div className="studio-intro-line">
          <span className="eyebrow">
            <i className="status-dot" />
            {person.role[locale]}
          </span>
          <span className="eyebrow">{s.edition}</span>
        </div>
        <h1 id="hero-title" className="designer-name">
          <span>{locale === "en" ? "Torlan" : "طرلان"}</span>{" "}
          <span className="name-last">
            {locale === "en" ? "Talepour" : "طالع پور"}
            <span className="name-period" aria-hidden="true">
              .
            </span>
          </span>
        </h1>
        <div className="hero-studio-grid">
          <div className="studio-position">
            <p className="eyebrow">{s.studio}</p>
            <h2>
              {s.heroLead}
              <br />
              <em>{s.heroAccent}</em>
            </h2>
            <p className="studio-bio">{s.heroBody}</p>
            <div className="hero-ctas">
              <a className="button button-dark" href="#work">
                {s.work}
                <Arrow />
              </a>
              <a className="text-link" href="#lab">
                {s.labLink}
                <Arrow diagonal />
              </a>
            </div>
            <div className="principle-list">
              {s.principles.map((p, i) => (
                <span key={p}>
                  <small>0{i + 1}</small>
                  {p}
                </span>
              ))}
            </div>
          </div>
          <StudioBoard locale={locale} />
        </div>
        <div className="hero-baseline">
          <span className="eyebrow">{s.boardNote}</span>
          <a href="#work">
            {s.scroll}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section
        className="selected-work section container"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="work-intro reveal-element">
          <p className="eyebrow">{m.work.eyebrow}</p>
          <h2 className="section-title" id="work-title">
            {s.workTitle}
          </h2>
          <p>{s.workNote}</p>
        </div>
        <div className="folio-list">
          {projects.map((project, i) =>
            project.images.length > 0 ? (
              <article
                className="learnify-folio reveal-element"
                key={project.slug}
              >
                <div className="folio-title-row">
                  <div>
                    <p className="eyebrow">
                      {i === 0 ? s.learnifyLabel : project.category[locale]}
                    </p>
                    <h3>
                      <Link href={`/${locale}/projects/${project.slug}`}>
                        {project.title[locale]}
                        <Arrow diagonal />
                      </Link>
                    </h3>
                  </div>
                  <p>{s.learnifyHeadline}</p>
                </div>
                <ScreenExplorer images={project.images} locale={locale} />
                <div className="folio-description">
                  <p>{project.short[locale]}</p>
                  <div className="project-links">
                    <Link
                      className="text-link"
                      href={`/${locale}/projects/${project.slug}`}
                    >
                      {s.caseStudy}
                      <Arrow />
                    </Link>
                    <a
                      href={project.link}
                      className="subtle-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.source}
                      <Arrow diagonal />
                    </a>
                  </div>
                </div>
              </article>
            ) : (
              <article
                className="prototype-folio reveal-element"
                key={project.slug}
              >
                <div className="prototype-title">
                  <p className="eyebrow">{s.crmLabel}</p>
                  <h3>{project.title[locale]}</h3>
                  <p>{s.crmHeadline}</p>
                </div>
                <div className="prototype-object">
                  <span className="eyebrow">{s.crmStatus}</span>
                  <div className="prototype-symbol" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <a
                    href={project.link}
                    className="prototype-launch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.prototype}
                    <Arrow diagonal />
                  </a>
                  <p>{s.crmMedia}</p>
                </div>
                <div className="prototype-description">
                  <p>{s.crmNote}</p>
                  <Link
                    className="text-link"
                    href={`/${locale}/projects/${project.slug}`}
                  >
                    {s.caseStudy}
                    <Arrow />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </section>
      <DesignLab locale={locale} />
      <section
        className="studio-about section container"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="about-margin">
          <p className="eyebrow">{s.aboutEyebrow}</p>
          <div className="about-stamp" aria-hidden="true">
            <span>
              tt<span>·</span>
            </span>
            <small>{s.principles.join(" / ")}</small>
          </div>
          <p className="margin-note">{s.aboutSide}</p>
        </div>
        <div className="about-editorial reveal-element">
          <p className="eyebrow">{s.aboutIndex}</p>
          <h2 className="section-title" id="about-title">
            {s.aboutTitle}
          </h2>
          <p className="about-lead">{m.about.lead}</p>
          <p>{m.about.body}</p>
          <p>{m.about.body2}</p>
          <span className="about-signature">
            {person.name[locale]}
            <i aria-hidden="true">↗</i>
          </span>
        </div>
      </section>
      <section
        className="studio-expertise container"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="expertise-heading">
          <p className="eyebrow">{s.skillsEyebrow}</p>
          <h2 id="skills-title">{m.skills.title.replace("\n", " ")}</h2>
        </div>
        <div className="expertise-list">
          {skills.map((skill, i) => (
            <article
              className="expertise-row reveal-element"
              key={skill.title.en}
            >
              <span className="mono">
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
        </div>
      </section>
    </main>
  );
}
