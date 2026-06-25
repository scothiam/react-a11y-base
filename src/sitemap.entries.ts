import { PATTERNS } from "./data/patterns";
import type { SitemapEntry } from "./vite/sitemap";

export default function getEntries(): SitemapEntry[] {
  return [
    { loc: "/", priority: "1.0", changefreq: "monthly" },
    ...PATTERNS.map((pattern) => ({
      loc: `/pattern/${pattern.slug}`,
      priority: "0.8",
      changefreq: "monthly",
    })),
  ];
}
