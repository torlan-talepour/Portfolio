import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, projects } from "@/data/portfolio";
import { refinement } from "@/data/refinement";
import { pageMetadata } from "@/lib/seo";
import { ScreenExplorer } from "@/components/screen-explorer";
import { ProjectScreens } from "@/components/project-screens";
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
  const m = refinement[locale];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" tabIndex={-1} className="case-page container">
      <Link className="text-link back-link" href={`/${locale}/portfolio`}>
        <span aria-hidden="true">{locale === "fa" ? "→" : "←"}</span>
        {m.back}
      </Link>
      <header className="case-header">
        <p className="eyebrow">{project.category[locale]}</p>
        <h1>{project.title[locale]}</h1>
        <p className="case-description">{project.overview[locale]}</p>
        <dl className="case-facts">
          <div>
            <dt>{m.role}</dt>
            <dd>{project.role?.[locale] || m.unconfirmed}</dd>
          </div>
          <div>
            <dt>{m.goal}</dt>
            <dd>{project.goal?.[locale] || m.unconfirmed}</dd>
          </div>
        </dl>
      </header>
      {project.images.length > 0 ? (
        <>
          <section className="case-interactive" aria-labelledby="explore-title">
            <div className="section-heading">
              <h2 id="explore-title">{m.screens}</h2>
              <a className="text-link" href="#screens">
                {m.allScreens} ↓
              </a>
            </div>
            <ScreenExplorer
              initialImage={project.cover}
              images={project.images}
              locale={locale}
              detail
            />
          </section>
          <section id="screens" className="case-full-screens">
            <div className="section-heading">
              <h2>{m.screenSequence}</h2>
              <p>{m.sequenceIntro}</p>
            </div>
            <ProjectScreens images={project.images} locale={locale} />
          </section>
        </>
      ) : (
        <section className="missing-media case-missing">
          <h2>{m.missing}</h2>
          <p>{m.missingBody}</p>
        </section>
      )}
      {project.sections.length > 0 && (
        <section className="case-notes">
          {project.sections.map((s) => (
            <article key={s.title.en}>
              <h2>{s.title[locale]}</h2>
              <p>{s.body[locale]}</p>
            </article>
          ))}
        </section>
      )}
      <nav className="case-navigation" aria-label={m.portfolio}>
        <Link className="text-link" href={`/${locale}/portfolio`}>
          {m.back}
        </Link>
        <Link href={`/${locale}/projects/${next.slug}`}>
          <span className="eyebrow">{m.next}</span>
          <span>
            {next.title[locale]}
            <Arrow />
          </span>
        </Link>
      </nav>
    </main>
  );
}
