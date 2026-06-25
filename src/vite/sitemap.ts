import type { IncomingMessage, ServerResponse } from "node:http";
import type { PluginOption, ResolvedConfig, ViteDevServer } from "vite";

export type SitemapEntry = {
  loc: string;
  priority?: string;
  changefreq?: string;
};

export type CreateSitemapPluginOptions = {
  /** Return path entries (leading slash). Called on each dev request and at build time. */
  getEntries: () => SitemapEntry[] | Promise<SitemapEntry[]>;
};

type StudyGuideItem = {
  slug: string;
  sections?: {
    slug: string;
    topics?: { slug: string }[];
  }[];
};

/** Expand study-guides.json shape into studyguide frontend routes. */
export function pathsFromStudyGuides(data: { items?: StudyGuideItem[] }): SitemapEntry[] {
  const entries: SitemapEntry[] = [{ loc: "/", priority: "1.0", changefreq: "weekly" }];
  for (const guide of data.items ?? []) {
    entries.push({
      loc: `/guides/${guide.slug}`,
      priority: "0.9",
      changefreq: "weekly",
    });
    for (const section of guide.sections ?? []) {
      entries.push({
        loc: `/guides/${guide.slug}/${section.slug}`,
        priority: "0.8",
        changefreq: "monthly",
      });
      for (const topic of section.topics ?? []) {
        entries.push({
          loc: `/guides/${guide.slug}/${section.slug}/${topic.slug}`,
          priority: "0.7",
          changefreq: "monthly",
        });
      }
    }
  }
  return entries;
}

function normalizePath(loc: string): string {
  if (!loc.startsWith("/")) return `/${loc}`;
  return loc;
}

function resolveProductionBase(cfg: ResolvedConfig): string {
  const fromEnv = cfg.env.VITE_SITE_URL || process.env.VITE_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/+$/, "");
  return "https://example.com";
}

function resolveDevBase(req: IncomingMessage): string | null {
  const host = req.headers.host;
  if (!host) return null;
  return `http://${host}`;
}

function buildSitemapXml(base: string, entries: SitemapEntry[]): string {
  const today = new Date().toISOString().slice(0, 10);
  const body = entries
    .map((entry) => {
      const loc = normalizePath(entry.loc);
      const priority = entry.priority ?? "0.5";
      const changefreq = entry.changefreq ?? "monthly";
      return (
        `  <url>\n` +
        `    <loc>${base}${loc}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${changefreq}</changefreq>\n` +
        `    <priority>${priority}</priority>\n` +
        `  </url>`
      );
    })
    .join("\n");
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${body}\n` +
    `</urlset>\n`
  );
}

function buildRobotsTxt(base: string): string {
  return `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`;
}

function sendText(
  res: ServerResponse,
  contentType: string,
  body: string,
): void {
  res.setHeader("Content-Type", contentType);
  res.end(body);
}

export function createSitemapPlugin(options: CreateSitemapPluginOptions): PluginOption {
  let productionBase = "https://example.com";

  return {
    name: "react-a11y-base:sitemap",
    configResolved(cfg) {
      productionBase = resolveProductionBase(cfg);
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split("?")[0] ?? "";
        if (pathname !== "/sitemap.xml" && pathname !== "/robots.txt") {
          next();
          return;
        }
        try {
          const entries = await options.getEntries();
          const base = resolveDevBase(req) ?? productionBase;
          if (pathname === "/sitemap.xml") {
            sendText(res, "application/xml; charset=utf-8", buildSitemapXml(base, entries));
            return;
          }
          sendText(res, "text/plain; charset=utf-8", buildRobotsTxt(base));
        } catch (err) {
          next(err as Error);
        }
      });
    },
    async generateBundle() {
      const entries = await options.getEntries();
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemapXml(productionBase, entries),
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: buildRobotsTxt(productionBase),
      });
    },
  };
}
