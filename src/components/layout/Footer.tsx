import { Instagram, Twitter, Youtube, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Features",
    links: [
      { label: "Heart Health", href: "#heart" },
      { label: "Sleep Intelligence", href: "#sleep" },
      { label: "AI Health Coach", href: "#ai-coach" },
      { label: "Sports Tracking", href: "#sports" },
      { label: "Family Care", href: "#family" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#faq" },
      { label: "Setup Guide", href: "#faq" },
      { label: "Warranty", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
      { label: "Returns", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#hero" },
      { label: "Pricing", href: "#pricing" },
      { label: "Press Kit", href: "#hero" },
      { label: "Careers", href: "#hero" },
    ],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-pulz-200 bg-background">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              PulzFit 1 — the next-generation AI health bracelet delivering advanced
              insights, recovery tracking and wellness intelligence through
              continuous monitoring.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-pulz-200 bg-white text-muted-foreground transition-colors hover:border-pulz-500/40 hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-pulz-200 pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} PulzFit. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a
              href="mailto:hello@pulzfit.com"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              hello@pulzfit.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
