import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import getEntries from "./src/sitemap.entries";
import { createSitemapPlugin } from "./src/vite/sitemap";

export default defineConfig({
  plugins: [react(), createSitemapPlugin({ getEntries })],
});
