import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#hero"
      className={cn("flex items-center gap-2.5", className)}
      aria-label="PulzFit home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9">
          <defs>
            <linearGradient id="logo-grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#013220" />
              <stop offset="100%" stopColor="#40B794" />
            </linearGradient>
          </defs>
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke="url(#logo-grad)"
            strokeWidth="3.5"
          />
          <path
            d="M8 20 H15 L18 12 L23 28 L26 20 H32"
            fill="none"
            stroke="url(#logo-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Pulz<span className="text-gradient-brand">Fit</span>
      </span>
    </a>
  );
}
