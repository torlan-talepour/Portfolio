"use client";
import { useEffect, useRef, useState } from "react";
import { person, type Locale } from "@/data/portfolio";
import { messages } from "@/data/messages";
export function CopyEmail({ locale }: { locale: Locale }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const m = messages[locale].contact;
  async function copy() {
    try {
      await navigator.clipboard.writeText(person.email);
      setState("copied");
    } catch {
      setState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 4000);
  }
  return (
    <div className="copy-control">
      <button className="copy-button" onClick={copy}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M16 8V4H4v12h4" />
        </svg>
        {m.copy}
      </button>
      <span className="copy-status" role="status">
        {state === "idle" ? "" : state === "copied" ? m.copied : m.failed}
      </span>
    </div>
  );
}
