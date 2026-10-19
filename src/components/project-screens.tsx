"use client";
import Image from "next/image";
import { useState } from "react";
import { refinement } from "@/data/refinement";
import type { Locale, ProjectImage } from "@/data/portfolio";
import { ImageLightbox } from "./image-lightbox";
export function ProjectScreens({
  images,
  locale,
}: {
  images: ProjectImage[];
  locale: Locale;
}) {
  const [active, setActive] = useState<number | null>(null);
  const m = refinement[locale];
  return (
    <>
      <div
        className={`case-screen-sequence ${images.every((i) => i.width < 600) ? "mobile-sequence" : ""}`}
      >
        {images.map((image, i) => (
          <figure key={image.src}>
            <figcaption>
              <span>{image.caption[locale]}</span>
              <span>{m.enlarge} ↗</span>
            </figcaption>
            <button
              className="screen-enlarge"
              onClick={() => setActive(i)}
              aria-label={`${m.enlarge}: ${image.alt[locale]}`}
            >
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt[locale]}
                sizes={
                  image.width < 600
                    ? "329px"
                    : "(max-width: 760px) 90vw, 1100px"
                }
              />
            </button>
          </figure>
        ))}
      </div>
      <ImageLightbox
        images={images}
        locale={locale}
        active={active}
        onChange={setActive}
        onClose={() => setActive(null)}
      />
    </>
  );
}
