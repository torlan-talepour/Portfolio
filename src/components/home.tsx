import Link from "next/link";
import { refinement } from "@/data/refinement";
import type { Locale } from "@/data/portfolio";
import { PortfolioGrid } from "./portfolio-grid";
import { StudioBoard } from "./studio-board";
import { Arrow } from "./icon";
export function Home({ locale }: { locale: Locale }) {
  const m = refinement[locale];
  return (
    <main id="main" tabIndex={-1}>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{m.hello}</p>
          <h1 id="hero-title">
            {m.headline}
            <br />
            <span>{m.designer}</span>
          </h1>
          <p className="hero-intro">{m.intro}</p>
          <Link className="button" href={`/${locale}/portfolio`}>
            {m.viewPortfolio}
            <Arrow />
          </Link>
        </div>
        <div className="hero-art">
          <div className="hero-shape" aria-hidden="true" />
          <StudioBoard locale={locale} />
        </div>
      </section>
      <section
        className="home-portfolio container section"
        id="work"
        aria-labelledby="portfolio-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">{m.pageLabel}</p>
            <h2 id="portfolio-title">{m.portfolio}</h2>
          </div>
          <p>{m.portfolioIntro}</p>
        </div>
        <PortfolioGrid locale={locale} />
      </section>
    </main>
  );
}
