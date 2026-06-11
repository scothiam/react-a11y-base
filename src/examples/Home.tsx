import { Link } from "react-router-dom";
import { PATTERNS } from "../data/patterns";
import "./Home.css";

export default function Home() {
  return (
    <article className="home">
      <header className="home__head">
        <p className="mono home__kicker">№00 · Colophon</p>
        <h2 className="home__title">
          A working catalogue of every
          <em> ARIA</em> pattern, set in ink.
        </h2>
        <p className="home__lede">
          The W3C Authoring Practices Guide names {PATTERNS.length} interaction
          patterns that, taken together, cover the moving parts of nearly every
          web interface. This site renders each one as a live specimen:
          described, demonstrated, keyed, and notated.
        </p>
      </header>

      <section className="home__rule">
        <div>
          <p className="mono home__sectionnum">I.</p>
          <h3 className="home__h3">Method</h3>
          <p>
            Every specimen is implemented with an off-the-shelf React library
            that already follows the APG’s recommended ARIA and keyboard
            behaviour. The chosen primitive is reported in the specimen header.
            Where the unmodified library does not satisfy a particular note in
            the APG, the difference is recorded under <em>extended</em> and
            patched in this codebase.
          </p>
        </div>
        <div>
          <p className="mono home__sectionnum">II.</p>
          <h3 className="home__h3">Sources</h3>
          <ul className="home__sources">
            <li>
              <span className="mono">RDX</span> Radix UI primitives —
              accordion, dialog, switch, tabs, slider, tooltip, menu &amp;
              friends.
            </li>
            <li>
              <span className="mono">RAC</span> React Aria Components from
              Adobe — combobox, listbox, table, button, link, breadcrumb,
              spinbutton, meter.
            </li>
            <li>
              <span className="mono">EMB</span> Embla Carousel — carousel.
            </li>
            <li>
              <span className="mono">ARB</span> React Arborist — tree view and
              treegrid.
            </li>
            <li>
              <span className="mono">RRP</span> react-resizable-panels — window
              splitter.
            </li>
            <li>
              <span className="mono">TAN</span> TanStack Table — grid.
            </li>
          </ul>
        </div>
      </section>

      <section className="home__index" aria-labelledby="home-index">
        <h3 id="home-index" className="home__h3">
          <span className="mono">III.</span> Index of Specimens
        </h3>
        <ol className="home__cards">
          {PATTERNS.map((p) => (
            <li key={p.slug}>
              <Link to={`/pattern/${p.slug}`} className="home__card">
                <span className="home__cardnum mono">{p.num}</span>
                <span className="home__cardname">{p.name}</span>
                <span className="home__cardtag">{p.tagline}</span>
                <span className="home__cardlib mono">{p.library}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer className="home__foot mono">
        <span>
          Set in Fraunces (Stephen Nixon, Arrow Type) &amp; JetBrains Mono.
        </span>
        <span>Printed on warm paper, in caution orange.</span>
      </footer>
    </article>
  );
}
