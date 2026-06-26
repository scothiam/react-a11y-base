import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

mkdirSync(resolve(__dirname, "lib/vite"), { recursive: true });
mkdirSync(resolve(__dirname, "lib"), { recursive: true });

export default defineConfig({
  build: {
    lib: {
      entry: {
        "content-source": resolve(__dirname, "src/content-source.ts"),
        "vite/content-source": resolve(__dirname, "src/vite/content-source.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) => id === "vite" || id.startsWith("vite/"),
    },
    outDir: "lib",
    emptyOutDir: false,
  },
});
