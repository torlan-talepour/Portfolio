import Link from "next/link";
import type { Locale, Project } from "@/data/portfolio";
import { messages } from "@/data/messages";
import { ProjectMedia } from "./project-media";
import { Arrow } from "./icon";
export function ProjectCard({
  project,
  locale,
  index,
}: {
  project: Project;
  locale: Locale;
  index: number;
}) {
  const m = messages[locale];
  const href = `/${locale}/projects/${project.slug}`;
  return (
    <article className="project-card">
      <Link
        href={href}
        className="project-image-link"
        aria-label={`${m.work.case}: ${project.title[locale]}`}
      >
        <ProjectMedia
          project={project}
          locale={locale}
          priority={index === 0}
        />
      </Link>
      <div className="project-info">
        <div className="project-heading">
          <span className="project-number mono">
            {locale === "fa" ? (index === 0 ? "۰۱" : "۰۲") : `0${index + 1}`}
          </span>
          <div>
            <p className="eyebrow project-category">
              {project.category[locale]}
            </p>
            <h3>
              <Link href={href}>
                {project.title[locale]}
                <Arrow diagonal />
              </Link>
            </h3>
          </div>
        </div>
        <div className="project-description">
          <p>{project.short[locale]}</p>
          <div className="project-links">
            <Link className="text-link" href={href}>
              {m.work.case}
              <Arrow />
            </Link>
            <a
              className="subtle-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              {project.slug === "crm-platform"
                ? m.work.prototype
                : m.work.source}
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
