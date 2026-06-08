import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Stage = "awake" | "rem" | "light" | "deep";

const stageMeta: Record<Stage, { label: string; level: number; color: string }> =
  {
    awake: { label: "Awake", level: 3, color: "#004225" },
    rem: { label: "REM", level: 2, color: "#93D9C4" },
    light: { label: "Light", level: 1, color: "#004225" },
    deep: { label: "Deep", level: 0, color: "#013220" },
  };

// Simplified hypnogram across the night.
const hypnogram: { stage: Stage; span: number }[] = [
  { stage: "awake", span: 1 },
  { stage: "light", span: 2 },
  { stage: "deep", span: 3 },
  { stage: "light", span: 2 },
  { stage: "rem", span: 2 },
  { stage: "deep", span: 2 },
  { stage: "light", span: 3 },
  { stage: "rem", span: 2 },
  { stage: "awake", span: 1 },
  { stage: "light", span: 2 },
  { stage: "rem", span: 2 },
];

export function SleepStages({ className }: { className?: string }) {
  const total = hypnogram.reduce((acc, h) => acc + h.span, 0);
  const rowHeight = 26;
  const gap = 10;

  return (
    <div className={cn("w-full", className)}>
      <div
        className="relative w-full"
        style={{ height: 4 * rowHeight + 3 * gap }}
      >
        {(Object.keys(stageMeta) as Stage[])
          .sort((a, b) => stageMeta[b].level - stageMeta[a].level)
          .map((stage) => {
            const y = (3 - stageMeta[stage].level) * (rowHeight + gap);
            return (
              <div
                key={stage}
                className="absolute left-0 flex w-full items-center"
                style={{ top: y, height: rowHeight }}
              >
                <span className="absolute -left-1 w-14 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {stageMeta[stage].label}
                </span>
                <div className="ml-16 h-px w-[calc(100%-4rem)] bg-muted" />
              </div>
            );
          })}

        <div className="absolute left-16 top-0 h-full w-[calc(100%-4rem)]">
          {hypnogram.map((seg, i) => {
            const startSpan = hypnogram
              .slice(0, i)
              .reduce((acc, h) => acc + h.span, 0);
            const left = (startSpan / total) * 100;
            const width = (seg.span / total) * 100;
            const top =
              (3 - stageMeta[seg.stage].level) * (rowHeight + gap);
            return (
              <motion.div
                key={i}
                className="absolute rounded-md"
                style={{
                  left: `${left}%`,
                  width: `calc(${width}% - 3px)`,
                  top,
                  height: rowHeight,
                  background: `linear-gradient(180deg, ${stageMeta[seg.stage].color}, ${stageMeta[seg.stage].color}aa)`,
                  boxShadow: `0 0 16px -4px ${stageMeta[seg.stage].color}`,
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
