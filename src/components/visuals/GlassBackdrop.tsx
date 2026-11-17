import { cn } from "@/lib/utils";

/**
 * Soft brand-colour field that sits behind glass cards so the backdrop blur has
 * colour to frost. Pure radial gradients (no filter/animation), so it's cheap.
 * The parent section must be positioned and `isolate` (own stacking context).
 */
type Layout = "left" | "right" | "split" | "center";

const layouts: Record<Layout, string> = {
  // glass content on the left half
  left: [
    "radial-gradient(38% 46% at 22% 42%, rgb(64 183 148 / 0.55), transparent 70%)",
    "radial-gradient(30% 38% at 40% 78%, rgb(147 217 196 / 0.9), transparent 70%)",
    "radial-gradient(26% 30% at 8% 80%, rgb(30 114 89 / 0.28), transparent 70%)",
  ].join(","),
  // glass content on the right half
  right: [
    "radial-gradient(38% 46% at 76% 44%, rgb(64 183 148 / 0.55), transparent 70%)",
    "radial-gradient(30% 38% at 58% 80%, rgb(147 217 196 / 0.9), transparent 70%)",
    "radial-gradient(26% 30% at 92% 78%, rgb(30 114 89 / 0.28), transparent 70%)",
  ].join(","),
  // glass cards on both sides
  split: [
    "radial-gradient(34% 44% at 18% 50%, rgb(64 183 148 / 0.52), transparent 70%)",
    "radial-gradient(34% 44% at 82% 46%, rgb(147 217 196 / 0.9), transparent 70%)",
    "radial-gradient(24% 30% at 52% 84%, rgb(30 114 89 / 0.24), transparent 70%)",
  ].join(","),
  // one centred glass panel
  center: [
    "radial-gradient(40% 50% at 30% 40%, rgb(64 183 148 / 0.55), transparent 70%)",
    "radial-gradient(36% 46% at 72% 62%, rgb(147 217 196 / 0.9), transparent 70%)",
    "radial-gradient(22% 28% at 86% 22%, rgb(30 114 89 / 0.24), transparent 70%)",
  ].join(","),
};

export function GlassBackdrop({
  layout = "split",
  className,
}: {
  layout?: Layout;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("glass-backdrop", className)}
      style={{ backgroundImage: layouts[layout] }}
    />
  );
}
