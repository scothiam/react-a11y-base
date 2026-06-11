import "./Landmarks.css";

export type LandmarkRow = { tag: string; role: string; note: string };

const DEFAULT_ROWS: LandmarkRow[] = [
  { tag: "<header>", role: "banner", note: "Site-wide masthead." },
  { tag: "<nav>", role: "navigation", note: "Primary navigation; label when more than one." },
  { tag: "<main>", role: "main", note: "Where the page’s unique content lives. One per page." },
  { tag: "<aside>", role: "complementary", note: "Tangentially related to the main content." },
  { tag: "<section aria-label>", role: "region", note: "Generic landmark when no other fits." },
  { tag: "<form aria-label>", role: "form", note: "Becomes a landmark when explicitly labelled." },
  { tag: "<search>", role: "search", note: "Search forms (HTML element shipped 2023)." },
  { tag: "<footer>", role: "contentinfo", note: "Copyright, supplementary links." },
];

type Props = {
  rows?: LandmarkRow[];
  className?: string;
};

export function Landmarks({ rows = DEFAULT_ROWS, className = "lm" }: Props) {
  return (
    <div className={className}>
      <div className="lm__page" aria-label="Sample page wireframe">
        <div className="lm__zone lm__zone--banner">
          <span className="mono">{`<header>`}</span>
          <span className="mono">role=banner</span>
        </div>
        <div className="lm__zone lm__zone--nav">
          <span className="mono">{`<nav>`}</span>
          <span className="mono">role=navigation</span>
        </div>
        <div className="lm__zone lm__zone--main">
          <span className="mono">{`<main>`}</span>
          <span className="mono">role=main</span>
          <div className="lm__zone lm__zone--region">
            <span className="mono">{`<section aria-label="Featured">`}</span>
            <span className="mono">role=region</span>
          </div>
        </div>
        <div className="lm__zone lm__zone--side">
          <span className="mono">{`<aside>`}</span>
          <span className="mono">role=complementary</span>
        </div>
        <div className="lm__zone lm__zone--foot">
          <span className="mono">{`<footer>`}</span>
          <span className="mono">role=contentinfo</span>
        </div>
      </div>

      <table className="lm__table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Role</th>
            <th>Use it for</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.role}>
              <td><code>{row.tag}</code></td>
              <td><span className="mono lm__rolepill">{row.role}</span></td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
