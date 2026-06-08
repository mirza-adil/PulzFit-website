import { motion } from "framer-motion";
import { pulzPalette } from "@/lib/theme";

const lineColor = pulzPalette.deep;

const measurements = [
  { label: "42mm", className: "left-[3%] top-[34%] -rotate-90 origin-center" },
  { label: "27mm", className: "left-[24%] bottom-[6%]" },
  { label: "8mm", className: "left-[46%] bottom-[5%]" },
  { label: "260mm", className: "right-[14%] top-[40%]" },
];

export function ProductShowcase() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src="/pulzfit-product.png?v=13"
        alt="PulzFit 1 smart health bracelet"
        className="h-auto w-full object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.18)]"
        width={957}
        height={696}
        fetchPriority="high"
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 957 696"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 42mm height — left view */}
        <path
          d="M 52 195 L 72 195 M 52 195 L 52 420 M 52 420 L 72 420"
          stroke={lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* 27mm width — left view */}
        <path
          d="M 175 620 L 175 640 M 175 640 L 310 640 M 310 640 L 310 620"
          stroke={lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* 8mm thickness — side view */}
        <path
          d="M 430 635 L 430 655 M 430 655 L 510 655 M 510 655 L 510 635"
          stroke={lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* 260mm strap circumference */}
        <path
          d="M 700 310 A 95 95 0 1 1 820 310"
          stroke={lineColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6 5"
        />
      </svg>

      {measurements.map((m) => (
        <span
          key={m.label}
          className={`pointer-events-none absolute font-display text-sm font-semibold tracking-wide text-pulz-deep sm:text-base ${m.className}`}
        >
          {m.label}
        </span>
      ))}
    </motion.div>
  );
}
