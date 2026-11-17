import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const vendorChunks: Record<string, string[]> = {
  "react-vendor": ["react", "react-dom", "scheduler"],
  "motion-vendor": ["framer-motion", "motion-dom", "motion-utils"],
  "data-vendor": ["@tanstack", "react-hook-form", "@hookform", "zod"],
};

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            // Match by package path so subpath imports (e.g. react-dom/client) land in the vendor chunk.
            manualChunks(id) {
              const match = id.match(/node_modules\/((?:@[^/]+\/)?[^/]+)/);
              if (!match) return;
              const pkg = match[1];
              for (const [chunk, pkgs] of Object.entries(vendorChunks)) {
                if (pkgs.some((p) => pkg === p || pkg.startsWith(`${p}/`))) return chunk;
              }
            },
          },
        },
  },
}));
