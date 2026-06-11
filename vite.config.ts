import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { PATTERNS } from "./src/data/patterns";

/**
 * Generates sitemap.xml + robots.txt from src/data/patterns.ts.
 *
 * - During `npm run dev`, the files are served live at /sitemap.xml and
 *   /robots.txt via a small middleware (so you can preview them locally).
 * - During `npm run build`, the same files are emitted into the dist/ root.
 *
 * The base URL is read from VITE_SITE_URL (with a sensible fallback) so the
 * sitemap can be regenerated per environment without code changes.
 */
function sitemap(): PluginOption {
  let base = "https://example.com";

  function buildSitemap(): string {
    const today = new Date().toISOString().slice(0, 10);
    const urls = [
      { loc: "/", priority: "1.0", changefreq: "monthly" },
      ...PATTERNS.map((p) => ({
        loc: `/pattern/${p.slug}`,
        priority: "0.8",
        changefreq: "monthly",
      })),
    ];
    const body = urls
      .map(
        (u) =>
          `  <url>\n` +
          `    <loc>${base}${u.loc}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${u.changefreq}</changefreq>\n` +
          `    <priority>${u.priority}</priority>\n` +
          `  </url>`
      )
      .join("\n");
    return (
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `${body}\n` +
      `</urlset>\n`
    );
  }

  function buildRobots(): string {
    return `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`;
  }

  return {
    name: "react-a11y-base:sitemap",
    configResolved(cfg) {
      const fromEnv = cfg.env.VITE_SITE_URL || process.env.VITE_SITE_URL;
      if (fromEnv) base = fromEnv.replace(/\/+$/, "");
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/sitemap.xml") {
          res.setHeader("Content-Type", "application/xml; charset=utf-8");
          res.end(buildSitemap());
          return;
        }
        if (req.url === "/robots.txt") {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(buildRobots());
          return;
        }
        next();
      });
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(),
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: buildRobots(),
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemap()],
});
