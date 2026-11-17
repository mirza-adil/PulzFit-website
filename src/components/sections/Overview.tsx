import { Reveal } from "@/components/motion/Reveal";
import { specs, whatIsPulzFit } from "@/data/specs";
import { cn } from "@/lib/utils";

/**
 * "What is PulzFit?": one self-contained, fact-dense answer plus a specs table,
 * placed high on the page so search engines and AI answers can quote it.
 * The answer text is not wrapped in Reveal so it is visible in the raw HTML.
 */
export function Overview() {
  return (
    <section id="what-is-pulzfit" className="section" aria-labelledby="what-is-pulzfit-title">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="max-w-xl">
            <span className="eyebrow">Overview</span>
            <h2
              id="what-is-pulzfit-title"
              className="mt-4 font-display text-4xl font-bold tracking-tight text-pulz-900 text-balance sm:text-5xl"
            >
              What is <span className="text-gradient-brand">PulzFit?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {whatIsPulzFit}
            </p>
          </div>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-pulz-200 bg-white shadow-card">
              <table className="w-full table-fixed text-left text-sm">
                <caption className="border-b border-pulz-200 bg-pulz-100/60 px-5 py-4 text-left font-display text-base font-semibold text-pulz-900 sm:px-6">
                  PulzFit specifications
                </caption>
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={s.label} className={cn(i % 2 === 1 && "bg-pulz-100/40")}>
                      <th
                        scope="row"
                        className="w-[38%] px-5 py-3.5 align-top font-medium text-foreground/90 sm:w-[32%] sm:px-6"
                      >
                        {s.label}
                      </th>
                      <td className="px-5 py-3.5 align-top text-muted-foreground sm:px-6">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Pre-release specifications. PulzFit is a wellness device, not a medical device.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
