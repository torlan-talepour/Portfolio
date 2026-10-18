import { messages } from "@/data/messages";
import { person, projects, skills, type Locale } from "@/data/portfolio";
import { Arrow, Spark } from "./icon";
import { ProjectCard } from "./project-card";
export function Home({ locale }: { locale: Locale }) {
  const m = messages[locale];
  return (
    <main tabIndex={-1} id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-top">
          <p className="eyebrow">
            <span className="status-dot" />
            {m.hero.eyebrow}
          </p>
          <span className="hero-name mono">{person.name[locale]}</span>
        </div>
        <div className="hero-composition">
          <h1 id="hero-title">
            <span>{m.hero.line1}</span>
            <span className="hero-second">{m.hero.line2}</span>
          </h1>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="art-core">
              <Spark />
            </div>
            <span className="art-coordinate">35° / DESIGN EXPLORATION</span>
            <span className="art-point point-one" />
            <span className="art-point point-two" />
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-intro">
            <p>{m.hero.intro}</p>
            <div className="hero-ctas">
              <a className="button button-dark" href="#work">
                {m.hero.work}
                <Arrow />
              </a>
              <a className="text-link" href={`mailto:${person.email}`}>
                {m.hero.contact}
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <p className="hero-note">
            {m.hero.note}
            <span className="hand-line" aria-hidden="true" />
          </p>
        </div>
        <a href="#work" className="scroll-cue">
          <span className="scroll-icon" aria-hidden="true">
            ↓
          </span>
          <span>{m.hero.scroll}</span>
        </a>
      </section>
      <section
        id="work"
        className="work section container"
        aria-labelledby="work-title"
      >
        <div className="section-intro">
          <p className="eyebrow">{m.work.eyebrow}</p>
          <div className="section-heading-row">
            <h2 id="work-title" className="section-title">
              {m.work.title}
            </h2>
            <p>{m.work.intro}</p>
          </div>
        </div>
        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} locale={locale} index={i} />
          ))}
        </div>
      </section>
      <section
        id="about"
        className="about section"
        aria-labelledby="about-title"
      >
        <div className="container about-layout">
          <div className="about-identity">
            <p className="eyebrow">{m.about.eyebrow}</p>
            <div className="identity-art" aria-hidden="true">
              <span className="identity-cross cross-one">+</span>
              <span className="identity-cross cross-two">+</span>
              <div className="identity-disc">
                <span>{m.about.monogram}</span>
                <Spark />
              </div>
              <span className="identity-coordinate mono">
                FIG. 01 — A WORK IN PROGRESS
              </span>
            </div>
            <p className="identity-caption">{m.about.caption}</p>
          </div>
          <div className="about-copy">
            <h2 id="about-title" className="section-title">
              {m.about.title}
            </h2>
            <p className="about-lead">{m.about.lead}</p>
            <p>{m.about.body}</p>
            <p>{m.about.body2}</p>
            <div className="about-note">
              <span className="status-dot" />
              {m.about.note}
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="expertise section container"
        aria-labelledby="skills-title"
      >
        <p className="eyebrow">{m.skills.eyebrow}</p>
        <div className="section-heading-row">
          <h2 id="skills-title" className="section-title">
            {m.skills.title}
          </h2>
          <p>{m.skills.intro}</p>
        </div>
        <div className="skill-grid">
          {skills.map((skill, i) => (
            <article className="skill-column" key={skill.title.en}>
              <div className="skill-top">
                <span className="mono">0{i + 1}</span>
                <span className="skill-glyph" aria-hidden="true">
                  {["↗", "⊞", "✳"][i]}
                </span>
              </div>
              <h3>{skill.title[locale]}</h3>
              <p>{skill.description[locale]}</p>
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
