import { createContext, useContext, type ReactNode } from "react";

/** Normalise a URL pathname to a route key: always a leading slash and a trailing slash. */
export function normalizePath(pathname: string): string {
  const p = `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
  return p === "//" ? "/" : p;
}

const PathContext = createContext<string>("/");

export function PathProvider({ path, children }: { path: string; children: ReactNode }) {
  return <PathContext.Provider value={path}>{children}</PathContext.Provider>;
}

export function usePath(): string {
  return useContext(PathContext);
}

/**
 * Link to a homepage section. On the homepage it stays an in-page anchor
 * (so Lenis smooth-scrolls); on other pages it navigates to `/#id`.
 */
export function useSectionHref(): (id: string) => string {
  const path = usePath();
  return (id) => (path === "/" ? `#${id}` : `/#${id}`);
}
