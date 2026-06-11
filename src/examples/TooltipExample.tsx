import { Tooltip } from "../components/Tooltip";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "tooltip")!;

const HINTS = [
  { key: "kerning", label: "Kerning", body: "Per-pair letter spacing applied automatically by the font." },
  { key: "ligatures", label: "Ligatures", body: "Glyph substitutions for awkward letter combinations like \"fi\"." },
  { key: "opsz", label: "Optical size", body: "Variable axis tuned per type size — finer at display, sturdier at body." },
];

export default function TooltipExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A tooltip is a non-modal hint that appears on hover or keyboard
          focus. It must never be the only place vital information lives — and
          must never appear on focus of disabled buttons.
        </p>
      }
      keys={[
        { keys: "Tab", effect: "Focus the trigger; tooltip appears immediately." },
        { keys: "Esc", effect: "Dismiss the tooltip without losing focus." },
        { keys: "Mouse hover", effect: "Appears after a brief delay (Radix default)." },
      ]}
      aria={[
        { token: "role=tooltip", meaning: "Marks the popup; Radix portals it." },
        { token: "aria-describedby", meaning: "Trigger references the tooltip’s id." },
      ]}
    >
      <Tooltip hints={HINTS} />
    </Specimen>
  );
}
