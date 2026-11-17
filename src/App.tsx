import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { PathProvider } from "@/lib/route";
import { findRoute } from "@/routes";

function App({ path }: { path: string }) {
  const route = findRoute(path);
  const Page = route.Component;

  return (
    <PathProvider path={route.path}>
      <SmoothScroll>
        <a
          href="#main"
          onClick={() => document.getElementById("main")?.focus({ preventScroll: true })}
          className="sr-only z-[60] rounded-full bg-pulz-900 px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Page />
        </main>
        <Footer />
        {route.path === "/" && <StickyCTA />}
      </SmoothScroll>
    </PathProvider>
  );
}

export default App;
