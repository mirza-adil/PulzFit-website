import { Star, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  // Duplicate for a seamless marquee.
  const row = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Loved by thousands"
          title={
            <>
              Real people,{" "}
              <span className="text-gradient-brand">real results</span>
            </>
          }
          description="Join a community transforming their health with continuous insight from PulzFit 1."
        />
      </div>

      <div className="relative mt-16">
        <div className="mask-fade-x flex w-max gap-5 hover:[animation-play-state:paused] animate-marquee">
          {row.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>

      <div className="container mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
        {[
          { value: "4.9/5", label: "Average rating" },
          { value: "50k+", label: "Active members" },
          { value: "98%", label: "Would recommend" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl font-bold text-gradient-brand">
              {s.value}
            </p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="glass flex w-[340px] shrink-0 flex-col rounded-3xl p-6">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-pulz-500 text-pulz-500" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
        "{testimonial.quote}"
      </blockquote>
      <div className="mt-5 flex items-center gap-3 border-t border-pulz-200 pt-5">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white",
            testimonial.gradient
          )}
        >
          {testimonial.initials}
        </span>
        <div className="flex-1">
          <figcaption className="text-sm font-semibold">
            {testimonial.name}
          </figcaption>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-pulz-500/20 bg-pulz-500/10 px-2.5 py-1 text-[11px] font-medium text-pulz-500">
          <TrendingUp className="h-3 w-3" />
          {testimonial.improvement}
        </span>
      </div>
    </figure>
  );
}
