"use client";
import Image from "next/image";
import { useState } from "react";
import { studio } from "@/data/studio";
import type { Locale, ProjectImage } from "@/data/portfolio";
import { Arrow } from "./icon";
export function ScreenExplorer({
  images,
  locale,
  detail = false,
}: {
  images: ProjectImage[];
  locale: Locale;
  detail?: boolean;
}) {
  const [active, setActive] = useState(0);
  const m = studio[locale];
  const image = images[active];
  if (!image) return null;
  return (
    <div className={`screen-explorer ${detail ? "explorer-detail" : ""}`}>
      <div className="explorer-toolbar">
        <span className="eyebrow">{m.mediaNote}</span>
        <div role="group" aria-label={m.screenHint} className="screen-options">
          {images.map((img, i) => (
            <button
              key={img.src}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              {m.screens[i] || String(i + 1)}
            </button>
          ))}
        </div>
      </div>
      <div className="explorer-artboard">
        <div className="explorer-browser" aria-hidden="true">
          <span />
          <span />
          <span />
          <small>{m.screens[active] || image.caption[locale]}</small>
        </div>
        <div
          key={image.src}
          className="explorer-scroll"
          tabIndex={0}
          role="region"
          aria-label={image.alt[locale]}
        >
          <Image
            key={image.src}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt[locale]}
            sizes="(max-width: 760px) 90vw, 78vw"
          />
        </div>
        <a
          className="explorer-expand"
          href={image.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`${m.inspect}: ${image.alt[locale]}`}
        >
          <Arrow diagonal />
        </a>
      </div>
      <div className="explorer-caption" aria-live="polite">
        <span>{image.caption[locale]}</span>
        <span className="mono">
          {(active + 1).toLocaleString(locale === "fa" ? "fa-IR" : "en-US", {
            minimumIntegerDigits: 2,
          })}{" "}
          /{" "}
          {images.length.toLocaleString(locale === "fa" ? "fa-IR" : "en-US", {
            minimumIntegerDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}
