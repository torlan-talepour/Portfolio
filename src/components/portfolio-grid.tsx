import Link from "next/link";
import { projects, type Locale } from "@/data/portfolio";
import { refinement } from "@/data/refinement";
import { ScreenExplorer } from "./screen-explorer";
import { Arrow } from "./icon";
export function PortfolioGrid({ locale }: { locale: Locale }) {
  const m = refinement[locale];
  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.slug}>
          <div className="project-preview">
            {project.images.length ? (
              <ScreenExplorer
                initialImage={project.cover}
                images={project.images}
                locale={locale}
              />
            ) : (
              <div className="missing-media">
                <span className="missing-mark" aria-hidden="true">
                  CRM
                </span>
                <p>{m.missing}</p>
                <p>{m.missingBody}</p>
              </div>
            )}
          </div>
          <div className="project-card-meta">
            <div>
              <h3>
                <Link href={`/${locale}/projects/${project.slug}`}>
                  {project.title[locale]}
                </Link>
              </h3>
              <p>{project.category[locale]}</p>
            </div>
            <Link
              className="project-link"
              href={`/${locale}/projects/${project.slug}`}
              aria-label={`${m.project}: ${project.title[locale]}`}
            >
              <Arrow />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
