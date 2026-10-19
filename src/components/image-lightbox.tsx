"use client";
import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { Locale, ProjectImage } from "@/data/portfolio";
import { refinement } from "@/data/refinement";
export function ImageLightbox({
  images,
  locale,
  active,
  onChange,
  onClose,
}: {
  images: ProjectImage[];
  locale: Locale;
  active: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const hintId = useId();
  const opened = active !== null;
  const m = refinement[locale];
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (opened) {
      el.showModal();
      const old = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        el.close();
        document.body.style.overflow = old;
      };
    }
  }, [opened]);
  const image = active === null ? null : images[active];
  function step(delta: number) {
    if (active !== null)
      onChange((active + delta + images.length) % images.length);
  }
  return (
    <dialog
      ref={dialog}
      className="image-lightbox"
      aria-label={m.enlarge}
      aria-describedby={hintId}
      onCancel={onClose}
      onClose={onClose}
      onKeyDown={(e) => {
        if (["ArrowLeft", "ArrowRight"].includes(e.key)) e.preventDefault();
        if (e.key === "ArrowRight") step(locale === "fa" ? -1 : 1);
        if (e.key === "ArrowLeft") step(locale === "fa" ? 1 : -1);
      }}
    >
      <div className="lightbox-toolbar">
        <div>
          <p>{image?.caption[locale]}</p>
          <small id={hintId}>{m.zoomHint}</small>
        </div>
        <button
          className="viewer-button close-viewer"
          aria-label={m.close}
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <div
        key={image?.src}
        className="lightbox-scroll"
        tabIndex={0}
      >
        {image && (
          <Image
            src={image.src}
            alt={image.alt[locale]}
            width={image.width}
            height={image.height}
            sizes="100vw"
            unoptimized
          />
        )}
      </div>
      <div className="lightbox-bottom">
        <button className="viewer-button" onClick={() => step(-1)}>
          {locale === "fa" ? "→" : "←"} {m.previousImage}
        </button>
        <span>
          {active === null
            ? ""
            : `${(active + 1).toLocaleString(locale)} / ${images.length.toLocaleString(locale)}`}
        </span>
        <button className="viewer-button" onClick={() => step(1)}>
          {m.nextImage} {locale === "fa" ? "←" : "→"}
        </button>
      </div>
    </dialog>
  );
}
