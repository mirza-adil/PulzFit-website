import { Instagram, Twitter, Youtube, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT_EMAIL } from "@/lib/config";
import { useSectionHref } from "@/lib/route";

const columns = [
  {
    title: "Features",
    links: [
      { label: "All features", href: "/features/" },
      { label: "ECG guide", href: "/features/ecg/" },
      { label: "Heart Health", section: "heart" },
      { label: "Sleep Intelligence", section: "sleep" },
      { label: "AI Health Coach", section: "ai-coach" },
      { label: "Sports Tracking", section: "sports" },
      { label: "Family Care", section: "family" },
      { label: "Fitness Bands", section: "bands" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", section: "faq" },
      { label: "Pricing", section: "pricing" },
      { label: "Contact Us", section: "contact" },
    ],
  },
];

/** Social links are hidden until real profile URLs exist: add them below and set this to true. */
const SHOW_SOCIALS = false;

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  const sectionHref = useSectionHref();
  return (
    <footer className="relative border-t border-pulz-200 bg-background">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(2,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              PulzFit — the next-generation AI health bracelet delivering advanced
              insights, recovery tracking and wellness intelligence through
              continuous monitoring.
            </p>
            {SHOW_SOCIALS && (
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
            )}
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
                      href={"href" in link ? link.href : sectionHref(link.section)}
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

        <p className="mt-14 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          PulzFit is a wellness device. It is not a medical device and is not
          intended to diagnose, treat, cure or prevent any disease. Health
          estimates such as blood pressure are for general wellness insight only. Always consult a
          qualified healthcare professional for medical decisions.
        </p>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-pulz-200 pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            PulzFit. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
