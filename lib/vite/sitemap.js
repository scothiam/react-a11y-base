//#region src/vite/sitemap.ts
function e(e) {
	let t = [{
		loc: "/",
		priority: "1.0",
		changefreq: "weekly"
	}];
	for (let n of e.items ?? []) {
		t.push({
			loc: `/guides/${n.slug}`,
			priority: "0.9",
			changefreq: "weekly"
		});
		for (let e of n.sections ?? []) {
			t.push({
				loc: `/guides/${n.slug}/${e.slug}`,
				priority: "0.8",
				changefreq: "monthly"
			});
			for (let r of e.topics ?? []) t.push({
				loc: `/guides/${n.slug}/${e.slug}/${r.slug}`,
				priority: "0.7",
				changefreq: "monthly"
			});
		}
	}
	return t;
}
function t(e) {
	return e.startsWith("/") ? e : `/${e}`;
}
function n(e) {
	let t = e.env.VITE_SITE_URL || process.env.VITE_SITE_URL;
	return t ? t.replace(/\/+$/, "") : "https://example.com";
}
function r(e) {
	let t = e.headers.host;
	return t ? `http://${t}` : null;
}
function i(e, n) {
	let r = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${n.map((n) => {
		let i = t(n.loc), a = n.priority ?? "0.5";
		return `  <url>\n    <loc>${e}${i}</loc>\n    <lastmod>${r}</lastmod>\n    <changefreq>${n.changefreq ?? "monthly"}</changefreq>\n    <priority>${a}</priority>\n  </url>`;
	}).join("\n")}\n</urlset>\n`;
}
function a(e) {
	return `User-agent: *\nAllow: /\nSitemap: ${e}/sitemap.xml\n`;
}
function o(e, t, n) {
	e.setHeader("Content-Type", t), e.end(n);
}
function s(e) {
	let t = "https://example.com";
	return {
		name: "react-a11y-base:sitemap",
		configResolved(e) {
			t = n(e);
		},
		configureServer(n) {
			n.middlewares.use(async (n, s, c) => {
				let l = n.url?.split("?")[0] ?? "";
				if (l !== "/sitemap.xml" && l !== "/robots.txt") {
					c();
					return;
				}
				try {
					let c = await e.getEntries(), u = r(n) ?? t;
					if (l === "/sitemap.xml") {
						o(s, "application/xml; charset=utf-8", i(u, c));
						return;
					}
					o(s, "text/plain; charset=utf-8", a(u));
				} catch (e) {
					c(e);
				}
			});
		},
		async generateBundle() {
			let n = await e.getEntries();
			this.emitFile({
				type: "asset",
				fileName: "sitemap.xml",
				source: i(t, n)
			}), this.emitFile({
				type: "asset",
				fileName: "robots.txt",
				source: a(t)
			});
		}
	};
}
//#endregion
export { s as createSitemapPlugin, e as pathsFromStudyGuides };
