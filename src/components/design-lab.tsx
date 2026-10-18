"use client";
import { useState } from "react";
import type { Locale } from "@/data/portfolio";
import { studio } from "@/data/studio";
import { Arrow } from "./icon";
export function DesignLab({ locale }: { locale: Locale }) {
  const m = studio[locale];
  const [appearance, setAppearance] = useState("light");
  const [density, setDensity] = useState("comfortable");
  const [variant, setVariant] = useState("solid");
  const [layout, setLayout] = useState("wide");
  const [selected, setSelected] = useState(false);
  const [saved, setSaved] = useState(false);
  const controls = [
    {
      id: "appearance",
      label: m.appearance,
      value: appearance,
      set: setAppearance,
      options: [
        ["light", m.light],
        ["dark", m.dark],
      ],
    },
    {
      id: "density",
      label: m.density,
      value: density,
      set: setDensity,
      options: [
        ["comfortable", m.comfortable],
        ["compact", m.compact],
      ],
    },
    {
      id: "variant",
      label: m.variant,
      value: variant,
      set: setVariant,
      options: [
        ["solid", m.solid],
        ["outline", m.outline],
      ],
    },
    {
      id: "layout",
      label: m.layout,
      value: layout,
      set: setLayout,
      options: [
        ["wide", m.wide],
        ["narrow", m.narrow],
      ],
    },
  ];
  function reset() {
    setAppearance("light");
    setDensity("comfortable");
    setVariant("solid");
    setLayout("wide");
    setSelected(false);
    setSaved(false);
  }
  return (
    <section
      className="design-lab section"
      id="lab"
      aria-labelledby="lab-title"
    >
      <div className="container">
        <div className="lab-intro">
          <p className="eyebrow">{m.labEyebrow}</p>
          <h2 className="section-title" id="lab-title">
            {m.labTitle}
          </h2>
          <p>{m.labBody}</p>
        </div>
        <div className="lab-workspace">
          <div className="lab-inspector">
            <div className="inspector-heading">
              <span className="eyebrow">{m.demo}</span>
              <span aria-hidden="true">⊞</span>
            </div>
            {controls.map((c) => (
              <div className="lab-control" key={c.id}>
                <label htmlFor={`lab-${c.id}`}>{c.label}</label>
                <select
                  id={`lab-${c.id}`}
                  value={c.value}
                  onChange={(e) => c.set(e.target.value)}
                >
                  {c.options.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <label className="lab-check">
              <span>{m.selection}</span>
              <input
                type="checkbox"
                checked={selected}
                onChange={(e) => setSelected(e.target.checked)}
              />
              <span className="check-track" aria-hidden="true">
                <i />
              </span>
            </label>
            <button className="lab-reset" onClick={reset}>
              {m.resetLab}
              <span aria-hidden="true">↺</span>
            </button>
          </div>
          <div
            className={`lab-canvas lab-${appearance}`}
            role="region"
            aria-label={m.preview}
          >
            <div className="canvas-ruler" aria-hidden="true">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
            </div>
            <div
              className={`lab-component ${density === "compact" ? "component-compact" : ""} ${layout === "narrow" ? "component-narrow" : ""} ${selected ? "component-selected" : ""}`}
            >
              <div className="component-top">
                <span className="eyebrow">{m.previewLabel}</span>
                <span className="component-indicator" aria-hidden="true">
                  {selected ? "✓" : "↗"}
                </span>
              </div>
              <div className="component-art" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>{m.previewTitle}</h3>
              <p>{m.previewBody}</p>
              <button
                className={`demo-save save-${variant}`}
                onClick={() => setSaved(!saved)}
                aria-pressed={saved}
              >
                {saved ? m.saved : m.save}
                {saved ? <span aria-hidden="true">✓</span> : <Arrow />}
              </button>
              <span className="sr-only" role="status">
                {saved ? m.saved : ""}
              </span>
            </div>
            <div className="canvas-status">
              <span>{m.tokenNote}</span>
              <span aria-hidden="true">
                {appearance === "light" ? m.light : m.dark} /{" "}
                {density === "comfortable" ? m.comfortable : m.compact}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
