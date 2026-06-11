import { Landmarks } from "../components/Landmarks";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "landmarks")!;

export default function LandmarksExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          Landmarks are the eight ARIA roles that segment a page into
          machine-discoverable regions. Native HTML5 elements provide them for
          free — use the explicit role only when an older element shape is
          unavoidable. Distinct landmarks of the same role should carry
          unique <code>aria-label</code>s.
        </p>
      }
      extension="visualised as a miniature page layout with each region labelled in mono"
      keys={[
        { keys: "—", effect: "Landmarks aren’t focusable; screen-reader users navigate by region directly." },
        { keys: "D · R · M (NVDA)", effect: "Jump between landmarks (varies by reader)." },
      ]}
      aria={[
        { token: "role=banner / main / navigation / contentinfo", meaning: "Implicit on the matching HTML element." },
        { token: "aria-label", meaning: "Disambiguates two landmarks of the same role." },
        { token: "aria-labelledby", meaning: "When the label already exists as a heading." },
      ]}
    >
      <Landmarks />
    </Specimen>
  );
}
