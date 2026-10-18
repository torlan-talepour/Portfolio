"use client";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { studio } from "@/data/studio";
import type { Locale } from "@/data/portfolio";
export function StudioBoard({ locale }: { locale: Locale }) {
  const m = studio[locale];
  const [aligned, setAligned] = useState(false);
  const board = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );
  function move(e: PointerEvent<HTMLDivElement>) {
    if (
      e.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      board.current?.style.setProperty("--tilt-x", `${-y * 9}deg`);
      board.current?.style.setProperty("--tilt-y", `${x * 9}deg`);
    });
  }
  function leave() {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    board.current?.style.setProperty("--tilt-x", "0deg");
    board.current?.style.setProperty("--tilt-y", "0deg");
  }
  return (
    <div
      className={`studio-board ${aligned ? "board-aligned" : ""}`}
      ref={board}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      <div className="board-ruler" aria-hidden="true">
        <span>0</span>
        <span>80</span>
        <span>160</span>
        <span>240</span>
        <span>320</span>
      </div>
      <div className="board-head">
        <span className="eyebrow">{m.board}</span>
        <span className="board-live" aria-hidden="true">
          ●
        </span>
      </div>
      <div className="board-stage" aria-hidden="true">
        <div className="board-plane plane-back">
          <span className="plane-label">{m.layer} / 01</span>
          <div className="plane-grid" />
        </div>
        <div className="board-plane plane-main">
          <span className="selection-handle handle-a" />
          <span className="selection-handle handle-b" />
          <span className="selection-handle handle-c" />
          <span className="selection-handle handle-d" />
          <span className="plane-label">{m.align} / 02</span>
          <span className="tt-sculpture">
            tt<span>·</span>
          </span>
          <div className="plane-baseline" />
        </div>
        <div className="board-plane plane-front">
          <span className="plane-label">{m.play} / 03</span>
          <div className="swatch-row">
            <i />
            <i />
            <i />
          </div>
          <span className="primitive-line" />
          <span className="primitive-line short" />
        </div>
        <div className="board-cursor">
          <svg width="19" height="24" viewBox="0 0 19 24">
            <path
              d="M1 1v19l5-5 4 8 4-2-4-8h7Z"
              fill="currentColor"
              stroke="var(--paper)"
              strokeWidth="1.5"
            />
          </svg>
          <span>{locale === "fa" ? "طرلان" : "Torlan"}</span>
        </div>
      </div>
      <div className="board-controls">
        <span>{m.boardHint}</span>
        <button
          type="button"
          onClick={() => setAligned(!aligned)}
          aria-label={m.boardAction}
          aria-pressed={aligned}
        >
          {aligned ? m.reset : m.arrange}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <p className="board-demo">{m.boardLabel}</p>
    </div>
  );
}
