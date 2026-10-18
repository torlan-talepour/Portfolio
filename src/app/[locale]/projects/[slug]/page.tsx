import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, projects } from "@/data/portfolio";
import { messages } from "@/data/messages";
import { pageMetadata } from "@/lib/seo";
import { ScreenExplorer } from "@/components/screen-explorer";
import { studio } from "@/data/studio";
import { Arrow } from "@/components/icon";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
async function getProject(params: Promise<{ locale: string; slug: string }>) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!isLocale(locale) || !project) notFound();
  return { locale, project };
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, project } = await getProject(params);
  return pageMetadata(
    locale,
    `/projects/${project.slug}`,
    project.title[locale],
    project.short[locale],
  );
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, project } = await getProject(params);
  const m = messages[locale].project;
  const s = studio[locale];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main tabIndex={-1} id="main" className="case-page">
      <section className="case-hero container">
        <Link className="text-link back-link" href={`/${locale}#work`}>
          <Arrow />
          {m.back}
        </Link>
        <div className="case-title-row">
          <div>
            <p className="eyebrow">{project.category[locale]}</p>
            <h1>{project.title[locale]}</h1>
          </div>
          <p>{project.short[locale]}</p>
        </div>
        <nav className="case-index" aria-label={s.contents}>
          <a href="#overview">
            {s.readProject}
            <span aria-hidden="true">↓</span>
          </a>
          {project.images.length > 0 && (
            <a href="#screens">
              {s.allScreens}
              <span aria-hidden="true">↓</span>
            </a>
          )}
          <a href={project.link} target="_blank" rel="noreferrer">
            {s.original}
            <Arrow diagonal />
          </a>
        </nav>
        {project.images.length > 0 ? (
          <div className="case-opening-visual">
            <ScreenExplorer images={project.images} locale={locale} detail />
          </div>
        ) : (
          <div className="case-prototype-opening">
            <span className="case-crm-type" aria-hidden="true">
              CRM<span>↗</span>
            </span>
            <div>
              <p className="eyebrow">{s.crmStatus}</p>
              <p>{s.crmMedia}</p>
              <a
                className="button button-dark"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {s.prototype}
                <Arrow diagonal />
              </a>
            </div>
          </div>
        )}
      </section>
      <section
        id="overview"
        className="case-overview section container reveal-element"
      >
        <p className="eyebrow">{m.summary}</p>
        <div className="case-overview-grid">
          <h2 className="section-title">{m.overview}</h2>
          <div>
            <p className="case-lead">{project.overview[locale]}</p>
            <dl className="project-facts">
              <div>
                <dt>{m.tool}</dt>
                <dd>{project.tool[locale]}</dd>
              </div>
              <div>
                <dt>{m.type}</dt>
                <dd>{project.format[locale]}</dd>
              </div>
            </dl>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {m.open}
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      {project.sections.length > 0 && (
        <section className="case-observations container reveal-element">
          {project.sections.map((s, i) => (
            <article key={s.title.en}>
              <span className="mono">0{i + 1}</span>
              <h2>{s.title[locale]}</h2>
              <p>{s.body[locale]}</p>
            </article>
          ))}
        </section>
      )}
      {project.images.length > 0 ? (
        <section
          id="screens"
          className="case-gallery section container"
          aria-labelledby="screens-heading"
        >
          <p className="eyebrow">
            FIGMA /{" "}
            {project.images.length.toLocaleString(
              locale === "fa" ? "fa-IR" : "en-US",
            )}
          </p>
          <div className="section-heading-row">
            <h2 id="screens-heading" className="section-title">
              {m.screens}
            </h2>
            <p>{m.screensIntro}</p>
          </div>
          <div className="gallery-grid">
            {project.images.map((img, i) => (
              <figure key={img.src} className={i === 2 ? "gallery-wide" : ""}>
                <a
                  href={img.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.view}: ${img.alt[locale]}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt[locale]}
                    width={img.width}
                    height={img.height}
                    sizes={
                      i === 2
                        ? "(max-width: 760px) 90vw, 85vw"
                        : "(max-width: 760px) 90vw, 42vw"
                    }
                  />
                  <span className="image-expand" aria-hidden="true">
                    <Arrow diagonal />
                  </span>
                </a>
                <figcaption>{img.caption[locale]}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : (
        <section className="case-pending container">
          <p className="eyebrow">{m.pending}</p>
          <p>{m.pendingText}</p>
          <a
            className="text-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            {messages[locale].work.prototype}
            <Arrow diagonal />
          </a>
        </section>
      )}
      {project.embedUrl && (
        <section className="container prototype-embed">
          <h2>{m.embed}</h2>
          <iframe
            src={project.embedUrl}
            title={`${project.title[locale]} — ${m.embed}`}
            loading="lazy"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </section>
      )}
      <section className="source-callout container">
        <div>
          <p className="eyebrow">{m.sourceText}</p>
          <h2>{m.source}</h2>
        </div>
        <a
          href={project.link}
          className="button button-dark"
          target="_blank"
          rel="noreferrer"
        >
          {project.tool[locale]}
          <Arrow diagonal />
        </a>
      </section>
      <Link
        className="next-project container"
        href={`/${locale}/projects/${next.slug}`}
      >
        <div>
          <p className="eyebrow">{m.next}</p>
          <h2>{next.title[locale]}</h2>
        </div>
        <Arrow />
      </Link>
    </main>
  );
}
