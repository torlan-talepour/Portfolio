"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function MotionObserver() {
  const path = usePathname();
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal-element")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);
  return null;
}
