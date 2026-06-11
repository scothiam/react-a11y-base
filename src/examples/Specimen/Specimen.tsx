import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Pattern } from "../../data/patterns";
import "./Specimen.css";

export type KeyBinding = { keys: string; effect: string };
export type AriaNote = { token: string; meaning: string };

type Props = {
  pattern: Pattern;
  description: React.ReactNode;
  /** Tag used to advertise how the off-the-shelf primitive is extended */
  extension?: string;
  keys?: KeyBinding[];
  aria?: AriaNote[];
  children: React.ReactNode;
};

export default function Specimen({
  pattern,
  description,
  extension,
  keys,
  aria,
  children,
}: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${pattern.num} · ${pattern.name} — react-a11y-base`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, pattern.num, pattern.name]);

  return (
    <article className="spec" aria-labelledby="spec-name">
      <header className="spec__head">
        <div className="spec__num">
          <span className="mono spec__numlabel">specimen №</span>
          <span className="spec__numfig">{pattern.num}</span>
        </div>
        <div className="spec__id">
          <h2 id="spec-name" className="spec__name">
            {pattern.name}
          </h2>
          <p className="spec__tag">{pattern.tagline}</p>
          <dl className="spec__meta">
            <div>
              <dt className="mono">role</dt>
              <dd className="mono">{pattern.role}</dd>
            </div>
            <div>
              <dt className="mono">library</dt>
              <dd className="mono">{pattern.library}</dd>
            </div>
            {extension && (
              <div>
                <dt className="mono">extended</dt>
                <dd className="mono">{extension}</dd>
              </div>
            )}
            <div>
              <dt className="mono">spec</dt>
              <dd>
                <a href={pattern.apg} target="_blank" rel="noreferrer">
                  WAI-ARIA APG ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="spec__desc">{description}</section>

      <section className="spec__stage" aria-label="Live demonstration">
        <header className="stage__head">
          <span className="mono">Stage</span>
          <span className="mono stage__hint">↑↓ ←→ Tab · Esc to exit</span>
        </header>
        <div className="stage__floor">{children}</div>
      </section>

      <div className="spec__grid">
        {keys && keys.length > 0 && (
          <section aria-labelledby="spec-keys" className="spec__panel">
            <h3 id="spec-keys" className="spec__h3">
              <span className="mono">§</span> Keyboard
            </h3>
            <dl className="kbd">
              {keys.map((k) => (
                <div key={k.keys} className="kbd__row">
                  <dt>
                    {k.keys.split("·").map((part, i, arr) => (
                      <span key={i}>
                        <kbd>{part.trim()}</kbd>
                        {i < arr.length - 1 && " "}
                      </span>
                    ))}
                  </dt>
                  <dd>{k.effect}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {aria && aria.length > 0 && (
          <section aria-labelledby="spec-aria" className="spec__panel">
            <h3 id="spec-aria" className="spec__h3">
              <span className="mono">§</span> ARIA notation
            </h3>
            <dl className="aria">
              {aria.map((a) => (
                <div key={a.token} className="aria__row">
                  <dt className="mono">{a.token}</dt>
                  <dd>{a.meaning}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>

      <footer className="spec__foot mono">
        <span>End of specimen {pattern.num}.</span>
        <a href={pattern.apg} target="_blank" rel="noreferrer">
          Read the full APG entry →
        </a>
      </footer>
    </article>
  );
}
