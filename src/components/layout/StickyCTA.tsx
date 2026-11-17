import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productPrice } from "@/data/pricing";

/**
 * Mobile/tablet waitlist bar. Appears once the hero has scrolled away and hides
 * again while the signup form or footer is on screen, so it never covers the
 * form it points to. Hidden at lg+, where the navbar CTA is always visible.
 */
export function StickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [targetVisible, setTargetVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const hero = document.getElementById("hero");
    const targets = [document.getElementById("contact"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => el !== null
    );

    const heroObserver = new IntersectionObserver(([entry]) =>
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    );
    if (hero) heroObserver.observe(hero);

    const visible = new Set<Element>();
    const targetObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setTargetVisible(visible.size > 0);
    });
    targets.forEach((t) => targetObserver.observe(t));

    return () => {
      heroObserver.disconnect();
      targetObserver.disconnect();
    };
  }, []);

  const show = pastHero && !targetVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ y: 96, opacity: 0, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
        >
          <div className="glass-strong mx-auto flex max-w-md items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 shadow-elevated">
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold text-foreground">PulzFit</p>
              <p className="text-xs text-muted-foreground">
                Coming soon · <span className="tabular-nums">€{productPrice}</span>
              </p>
            </div>
            <a
              href="#contact"
              className="btn-gradient inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full px-5 text-sm font-bold transition-[filter,transform] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Join the waitlist <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
