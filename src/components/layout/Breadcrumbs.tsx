import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  /** Omit for the current page. */
  path?: string;
}

/** Visible breadcrumb trail. Pair with BreadcrumbList schema (see seo.ts pageJsonLd). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
            {c.path ? (
              <a href={c.path} className="transition-colors hover:text-foreground">
                {c.name}
              </a>
            ) : (
              <span aria-current="page" className="text-foreground">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
