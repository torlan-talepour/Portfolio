"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { refinement } from "@/data/refinement";
import type { Locale, ProjectImage } from "@/data/portfolio";
import { Arrow } from "./icon";
import { ImageLightbox } from "./image-lightbox";
export function ScreenExplorer({
  images,
  locale,
  detail = false,
  initialImage,
}: {
  images: ProjectImage[];
  locale: Locale;
  detail?: boolean;
  initialImage?: string;
}) {
  const [active, setActive] = useState(
    Math.max(
      0,
      images.findIndex((image) => image.src === initialImage),
    ),
  );
  const [enlarged, setEnlarged] = useState<number | null>(null);
  const strip = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = strip.current;
    const button = bar?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!bar || !button) return;
    const a = bar.getBoundingClientRect();
    const b = button.getBoundingClientRect();
    const left =
      b.left < a.left
        ? b.left - a.left - 4
        : b.right > a.right
          ? b.right - a.right + 4
          : 0;
    if (left)
      bar.scrollBy({
        left,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
  }, [active]);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const m = refinement[locale];
  const image = images[active];
  if (!image) return null;
  return (
    <div className={`screen-explorer ${detail ? "explorer-detail" : ""}`}>
      <div className="explorer-toolbar">
        <div
          ref={strip}
          role="group"
          aria-label={m.chooseScreen}
          className="screen-options"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              {img.label?.[locale] || String(i + 1)}
            </button>
          ))}
        </div>
        <button
          className="explorer-expand"
          aria-label={`${m.enlarge}: ${image.alt[locale]}`}
          onClick={() => setEnlarged(active)}
        >
          <Arrow diagonal />
        </button>
      </div>
      <div
        className="explorer-artboard"
        onTouchStart={(e) => {
          touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }}
        onTouchEnd={(e) => {
          if (!touch.current) return;
          const dx = e.changedTouches[0].clientX - touch.current.x;
          const dy = e.changedTouches[0].clientY - touch.current.y;
          touch.current = null;
          if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5)
            setActive(
              (active +
                (dx < 0 ? 1 : -1) * (locale === "fa" ? -1 : 1) +
                images.length) %
                images.length,
            );
        }}
      >
        <div
          key={image.src}
          className={`explorer-scroll ${image.width < 600 ? "mobile-capture" : ""}`}
          tabIndex={0}
          role="region"
          aria-label={image.alt[locale]}
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt[locale]}
            sizes={
              detail
                ? "(max-width: 760px) 90vw, 1100px"
                : "(max-width: 760px) 90vw, 560px"
            }
          />
        </div>
      </div>
      <div className="explorer-caption" aria-live="polite">
        <span>{image.caption[locale]}</span>
        <div className="gallery-steps">
          <button
            className="gallery-step"
            aria-label={m.previousImage}
            onClick={() =>
              setActive((active - 1 + images.length) % images.length)
            }
          >
            <span aria-hidden="true">{locale === "fa" ? "→" : "←"}</span>
          </button>
          <span>
            {(active + 1).toLocaleString(locale)} /{" "}
            {images.length.toLocaleString(locale)}
          </span>
          <button
            className="gallery-step"
            aria-label={m.nextImage}
            onClick={() => setActive((active + 1) % images.length)}
          >
            <span aria-hidden="true">{locale === "fa" ? "←" : "→"}</span>
          </button>
        </div>
      </div>
      {detail && <p className="gallery-hint">{m.swipe}</p>}
      <ImageLightbox
        images={images}
        locale={locale}
        active={enlarged}
        onChange={setEnlarged}
        onClose={() => setEnlarged(null)}
      />
    </div>
  );
}
