export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}
export function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      <path
        d="M60 0v120M0 60h120M17.6 17.6l84.8 84.8M17.6 102.4l84.8-84.8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="60" cy="60" r="24" fill="currentColor" />
    </svg>
  );
}
