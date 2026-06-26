export type ContentSourceMode = "api" | "files";

export type ResolvedContentSource = {
  mode: ContentSourceMode;
  apiBase?: string;
  dataDir?: string;
};

export class ContentSourceConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContentSourceConfigError";
  }
}

/** Env prefixes exposed to client code via Vite. */
export const CONTENT_ENV_PREFIXES = ["CONTENT_", "VITE_"] as const;

/**
 * Resolve content source from environment variables.
 * Priority: CONTENT_API_BASE → CONTENT_DATA_DIR → error.
 */
export function resolveContentSource(
  env: Record<string, string | undefined>,
): ResolvedContentSource {
  const apiBase = env.CONTENT_API_BASE?.trim();
  if (apiBase) {
    return { mode: "api", apiBase: apiBase.replace(/\/$/, "") };
  }

  const dataDir = env.CONTENT_DATA_DIR?.trim();
  if (dataDir) {
    return { mode: "files", dataDir };
  }

  throw new ContentSourceConfigError(
    "Set CONTENT_API_BASE or CONTENT_DATA_DIR in .env.local (see .env.example).",
  );
}

/**
 * Client-side mode from the app Vite env object.
 * Pass `import.meta.env` from application source (not from a pre-bundled dependency).
 */
export function getContentSourceMode(
  env: Record<string, string | undefined>,
): ContentSourceMode {
  return resolveContentSource(env).mode;
}

/** Relative API prefix for proxied requests (e.g. "/api"). */
export function getApiPathPrefix(
  env: Record<string, string | undefined>,
): string {
  const { apiBase } = resolveContentSource(env);
  if (!apiBase) {
    throw new ContentSourceConfigError("CONTENT_API_BASE is not configured.");
  }
  const pathname = new URL(apiBase).pathname.replace(/\/$/, "");
  return pathname || "/api";
}

export async function fetchApiJson<T = unknown>(
  path: string,
  env: Record<string, string | undefined>,
): Promise<T> {
  const prefix = getApiPathPrefix(env);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const url = `${prefix}${normalized}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }
  return response.json() as Promise<T>;
}

export async function fetchDataJson<T = unknown>(filename: string): Promise<T> {
  const name = filename.replace(/^\//, "");
  const response = await fetch(`/data/${name}`);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for /data/${name}`);
  }
  return response.json() as Promise<T>;
}
