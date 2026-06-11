import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom", "react-router-dom"],
      output: {
        assetFileNames: "index.[ext]",
      },
    },
    outDir: "lib",
    emptyOutDir: true,
  },
});
