export function BrandMark({ className = "brand-symbol" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M16 5H5v11M24 35h11V24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 5h11v11M16 35H5V24" stroke="currentColor" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="14" y="14" width="12" height="12" rx="3" fill="var(--accent)" transform="rotate(-12 20 20)" />
            </svg>
  );
}
