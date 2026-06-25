import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

mkdirSync(resolve(__dirname, "lib/vite"), { recursive: true });

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/vite/sitemap.ts"),
      formats: ["es"],
      fileName: "sitemap",
    },
    rollupOptions: {
      external: (id) => id === "vite" || id.startsWith("vite/"),
    },
    outDir: "lib/vite",
    emptyOutDir: false,
  },
});
