import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Height of the fixed navbar plus breathing room, used when jumping to #anchors. */
const ANCHOR_OFFSET = -88;

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true,
      // Let Lenis own in-page anchor clicks so they don't fight native smooth scroll.
      anchors: { offset: ANCHOR_OFFSET },
    });

    return () => lenis.destroy();
  }, [prefersReduced]);

  return <>{children}</>;
}
