import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePath, useSectionHref } from "@/lib/route";

const navLinks = [
  { label: "Features", id: "features" },
  { label: "Sleep", id: "sleep" },
  { label: "Heart", id: "heart" },
  { label: "AI Coach", id: "ai-coach" },
  { label: "Bands", id: "bands" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

/**
 * Tracks which page section is crossing the middle of the viewport. Every section
 * is observed (not just the ones in the nav), so passing through e.g. Family Care
 * clears the highlight instead of leaving the previous nav item lit.
 */
function useActiveSection(enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Only the homepage's sections map to nav items.
    if (!enabled) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    if (!els.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band across the middle of the screen: whichever section covers it is "current"
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePath();
  const active = useActiveSection(path === "/");
  const sectionHref = useSectionHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6",
          scrolled
            ? "glass-strong shadow-card md:mt-4 md:w-[92%]"
            : "bg-transparent"
        )}
        style={{ marginLeft: "auto", marginRight: "auto", width: scrolled ? undefined : "100%" }}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={sectionHref(link.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 xl:px-4",
                  isActive
                    ? "bg-pulz-100 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
          <Button variant="gradient" size="sm" asChild>
            <a href="#contact" className="font-bold">Coming Soon</a>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-[4.5rem] z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="glass-strong absolute inset-x-4 top-2 rounded-3xl p-4"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              aria-label="Mobile"
            >
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.id}
                    href={sectionHref(link.id)}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-pulz-100 text-foreground"
                        : "text-foreground/90 hover:bg-pulz-100/60"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-3 flex flex-col gap-2 px-1">
                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                  <a href="#contact">Contact</a>
                </Button>
                <Button variant="gradient" asChild onClick={() => setOpen(false)}>
                  <a href="#contact" className="font-bold">Coming Soon</a>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
