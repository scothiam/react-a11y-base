import { Disclosure } from "../components/Disclosure";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "disclosure")!;

export default function DisclosureExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A disclosure is a single button that toggles the visibility of a
          related region. It is the atomic unit of the Accordion pattern.
          Unlike an alert, the content is always part of the document — only
          its visibility changes.
        </p>
      }
      keys={[
        { keys: "Enter · Space", effect: "Toggle the disclosure." },
      ]}
      aria={[
        { token: "aria-expanded", meaning: "Reflects the open state on the button." },
        { token: "aria-controls", meaning: "Points at the id of the region being disclosed." },
      ]}
    >
      <Disclosure
        label={
          <>
            Advanced typography settings
            <span className="mono dsc__sub">
              opsz · SOFT · italics · numerals
            </span>
          </>
        }
      >
        <p>
          The Fraunces variable axis lets us call up its softer cuts for
          display sizes and its sharper, denser cut for body. The{" "}
          <code>opsz</code> axis is set automatically by{" "}
          <code>font-variation-settings</code>, while <code>SOFT</code> is
          dialled per element.
        </p>
        <ul>
          <li>opsz 144 — display, italic headings</li>
          <li>opsz 14 — body copy</li>
          <li>SOFT 80 — italicised accents in mark colour</li>
        </ul>
      </Disclosure>
    </Specimen>
  );
}
