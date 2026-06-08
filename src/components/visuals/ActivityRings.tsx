import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Ring {
  progress: number;
  color: string;
}

interface ActivityRingsProps {
  rings: Ring[];
  size?: number;
  stroke?: number;
  className?: string;
}

export function ActivityRings({
  rings,
  size = 200,
  stroke = 16,
  className,
}: ActivityRingsProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const gap = 6;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={cn("-rotate-90", className)}
    >
      {rings.map((ring, i) => {
        const radius = (size - stroke) / 2 - i * (stroke + gap);
        const circumference = 2 * Math.PI * radius;
        const progress = Math.min(ring.progress, 1);
        return (
          <g key={i}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={`${ring.color}22`}
              strokeWidth={stroke}
            />
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={ring.color}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={
                inView
                  ? { strokeDashoffset: circumference * (1 - progress) }
                  : {}
              }
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ filter: `drop-shadow(0 0 6px ${ring.color}88)` }}
            />
          </g>
        );
      })}
    </svg>
  );
}
