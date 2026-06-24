import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "package.json"), "utf8"),
) as {
  peerDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
};

const depNames = [
  ...Object.keys(pkg.peerDependencies ?? {}),
  ...Object.keys(pkg.dependencies ?? {}),
];

/** Keep the published ESM bundle thin — downstream Vite apps must not hit CJS `require("react")` shims. */
function isExternal(id: string): boolean {
  if (id === "react" || id === "react-dom" || id === "react-router-dom") {
    return true;
  }
  if (
    id.startsWith("react/") ||
    id.startsWith("react-dom/") ||
    id.startsWith("use-sync-external-store")
  ) {
    return true;
  }
  return depNames.some((name) => id === name || id.startsWith(`${name}/`));
}

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: isExternal,
      output: {
        assetFileNames: "index.[ext]",
      },
    },
    outDir: "lib",
    emptyOutDir: true,
  },
});
