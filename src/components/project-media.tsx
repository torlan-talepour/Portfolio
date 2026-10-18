import Image from "next/image";
import type { Locale, Project } from "@/data/portfolio";
import { messages } from "@/data/messages";
export function ProjectMedia({
  project,
  locale,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  priority?: boolean;
}) {
  const cover = project.images[0];
  const m = messages[locale];
  return (
    <div
      className={`project-media ${project.accent} ${cover ? "" : "empty-media"}`}
    >
      {cover ? (
        <>
          <div className="media-topline">
            <span>{m.work.sourceImage}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="screen-window">
            <div className="window-chrome" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>{project.title.en.toLowerCase()}</span>
            </div>
            <div className="screen-crop">
              <Image
                src={cover.src}
                alt={cover.alt[locale]}
                width={cover.width}
                height={cover.height}
                preload={priority}
                sizes="(max-width: 760px) 90vw, 75vw"
              />
            </div>
          </div>
          <span className="media-bottom mono">
            {project.title[locale]} / {project.format[locale]}
          </span>
        </>
      ) : (
        <>
          <span className="media-topline">
            <span>FIGMA MAKE</span>
            <span aria-hidden="true">↗</span>
          </span>
          <div className="empty-media-center">
            <span className="outline-mark" aria-hidden="true">
              CRM<span>↗</span>
            </span>
            <span>{m.work.pending}</span>
            <p>{m.work.pendingDetail}</p>
          </div>
          <span className="media-bottom mono">
            {locale === "en"
              ? "ORIGINAL SCREEN EXPORT PENDING"
              : "در انتظار خروجی اصلی صفحات"}
          </span>
        </>
      )}
    </div>
  );
}
