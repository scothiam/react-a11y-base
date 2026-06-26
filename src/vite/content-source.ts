import * as fs from "node:fs";
import * as path from "node:path";
import type { Connect } from "vite";
import type { PluginOption } from "vite";
import { loadEnv } from "vite";
import {
  CONTENT_ENV_PREFIXES,
  resolveContentSource,
  type ResolvedContentSource,
} from "../content-source";

function mergeEnvPrefix(existing: string | string[] | undefined): string[] {
  const current = existing === undefined
    ? []
    : Array.isArray(existing)
      ? existing
      : [existing];
  return [...new Set([...current, ...CONTENT_ENV_PREFIXES])];
}

function createDataMiddleware(dataDir: string): Connect.NextHandleFunction {
  const root = path.resolve(dataDir);

  return (req, res, next) => {
    const pathname = req.url?.split("?")[0] ?? "";
    if (!pathname.startsWith("/data/")) {
      next();
      return;
    }

    const name = path.basename(decodeURIComponent(pathname));
    if (!name.endsWith(".json")) {
      next();
      return;
    }

    const filePath = path.resolve(root, name);
    if (!filePath.startsWith(root + path.sep)) {
      next();
      return;
    }

    if (!fs.existsSync(filePath)) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    fs.createReadStream(filePath).pipe(res);
  };
}

function apiProxyConfig(apiBase: string) {
  const origin = new URL(apiBase).origin;
  return {
    "/api": {
      target: origin,
      changeOrigin: true,
    },
  };
}

export type CreateContentSourcePluginOptions = {
  /** Override env dir (defaults to Vite root). */
  envDir?: string;
};

/**
 * Vite plugin: validates CONTENT_API_BASE / CONTENT_DATA_DIR, configures proxy
 * or /data JSON middleware, and merges CONTENT_ into envPrefix.
 */
export function createContentSourcePlugin(
  options: CreateContentSourcePluginOptions = {},
): PluginOption {
  let resolved: ResolvedContentSource;

  return {
    name: "react-a11y-base:content-source",
    config(config, { mode }) {
      const envDir = options.envDir ?? config.envDir ?? process.cwd();
      const env = loadEnv(mode, envDir, "");
      resolved = resolveContentSource(env);

      const patch: Record<string, unknown> = {
        envPrefix: mergeEnvPrefix(config.envPrefix),
      };

      if (resolved.mode === "api" && resolved.apiBase) {
        const proxy = apiProxyConfig(resolved.apiBase);
        patch.server = {
          ...config.server,
          proxy: {
            ...config.server?.proxy,
            ...proxy,
          },
        };
        patch.preview = {
          ...config.preview,
          proxy: {
            ...config.preview?.proxy,
            ...proxy,
          },
        };
      }

      return patch;
    },
    configureServer(server) {
      if (resolved.mode === "files" && resolved.dataDir) {
        server.middlewares.use(createDataMiddleware(resolved.dataDir));
      }
    },
    configurePreviewServer(server) {
      if (resolved.mode === "files" && resolved.dataDir) {
        server.middlewares.use(createDataMiddleware(resolved.dataDir));
      }
    },
  };
}
