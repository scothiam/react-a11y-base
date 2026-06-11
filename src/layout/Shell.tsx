import { NavLink } from "react-router-dom";
import { PATTERNS } from "../data/patterns";
import "./Shell.css";

type Props = { children: React.ReactNode };

export default function Shell({ children }: Props) {
  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        Skip to specimen
      </a>

      <aside className="shell__rail" aria-label="Pattern index">
        <header className="rail__head">
          <p className="mono rail__kicker">react-a11y-base — Vol. 01</p>
          <h1 className="rail__title">
            W3C&nbsp;<em>ARIA</em>
            <br />
            Patterns
          </h1>
          <p className="rail__sub">
            Every pattern from the{" "}
            <a
              href="https://www.w3.org/WAI/ARIA/apg/patterns/"
              target="_blank"
              rel="noreferrer"
            >
              Authoring&nbsp;Practices&nbsp;Guide
            </a>
            , each rendered by an off-the-shelf React primitive and notated
            here in plain ink.
          </p>
        </header>

        <hr className="rule" />

        <nav className="rail__nav" aria-label="Patterns">
          <ol className="rail__list">
            <li className="rail__item">
              <NavLink to="/" end className="rail__link">
                <span className="rail__num mono">00</span>
                <span className="rail__name">Colophon</span>
                <span className="rail__tag mono">index</span>
              </NavLink>
            </li>
            {PATTERNS.map((p) => (
              <li key={p.slug} className="rail__item">
                <NavLink to={`/pattern/${p.slug}`} className="rail__link">
                  <span className="rail__num mono">{p.num}</span>
                  <span className="rail__name">{p.name}</span>
                  <span className="rail__tag mono">{p.role.split(" ")[0]}</span>
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>

        <footer className="rail__foot mono">
          <span>set in Fraunces &amp; JetBrains Mono</span>
          <span>{PATTERNS.length} specimens</span>
        </footer>
      </aside>

      <main className="shell__main" id="main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
