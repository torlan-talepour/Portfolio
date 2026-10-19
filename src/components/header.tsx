"use client";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { messages } from "@/data/messages";
import { person, type Locale } from "@/data/portfolio";
export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const m = messages[locale];
  const segment = path.split("/")[2] || "home";
  const activePage = segment === "projects" ? "portfolio" : segment;
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function dismiss(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function outside(e: PointerEvent) {
      if (
        !panel.current?.contains(e.target as Node) &&
        !button.current?.contains(e.target as Node)
      )
        setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        {m.skip}
      </a>
      <header className="header" id="top">
        <div className="header-inner">
          <Link
            className="wordmark"
            href={`/${locale}`}
            aria-label={
              locale === "en"
                ? "Torlan Talepour — Home"
                : "طرلان طالع پور — خانه"
            }
          >
            <BrandMark />
            <span>{person.name[locale]}</span>
          </Link>
          <nav
            className="desktop-nav"
            aria-label={locale === "en" ? "Main navigation" : "ناوبری اصلی"}
          >
            {Object.entries(m.nav).map(([key, label]) => (
              <Link
                href={`/${locale}${key === "home" ? "" : `/${key}`}`}
                aria-current={key === activePage ? "page" : undefined}
                key={key}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <nav className="language" aria-label={locale === "en" ? "Language" : "زبان"}>
              {(["en", "fa"] as const).map((language) => (
                <Link
                  key={language}
                  href={path.replace(/^\/(en|fa)(?=\/|$)/, `/${language}`)}
                  hrefLang={language}
                  lang={language}
                  aria-label={language === "en" ? "English" : "فارسی"}
                  aria-current={locale === language ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {language === "en" ? "EN" : "فا"}
                </Link>
              ))}
            </nav>
            <button
              ref={button}
              className={`menu-toggle ${open ? "is-open" : ""}`}
              aria-label={open ? m.closeMenu : m.menu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <div
          ref={panel}
          id="mobile-navigation"
          className="mobile-menu"
          hidden={!open}
        >
          <nav aria-label={m.menu}>
            {Object.entries(m.nav).map(([key, label], i) => (
              <Link
                key={key}
                href={`/${locale}${key === "home" ? "" : `/${key}`}`}
                aria-current={key === activePage ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="mono" aria-hidden="true">
                  0{i + 1}
                </span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
