import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { pulzPalette } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface ScoreRingProps {
  value: number;
  max?: number;
  size?: number;
  stroke?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  sublabel?: string;
  className?: string;
}

export function ScoreRing({
  value,
  max = 100,
  size = 160,
  stroke = 12,
  color = pulzPalette.dark,
  trackColor = "rgba(255,255,255,0.08)",
  label,
  sublabel,
  className,
}: ScoreRingProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / max, 1);

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg ref={ref} width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={
            inView ? { strokeDashoffset: circumference * (1 - progress) } : {}
          }
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {label && (
          <span className="font-display text-3xl font-bold tracking-tight">
            {label}
          </span>
        )}
        {sublabel && (
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
