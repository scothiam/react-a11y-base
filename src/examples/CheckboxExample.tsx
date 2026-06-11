import { Checkbox } from "../components/Checkbox";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "checkbox")!;

const CHILDREN = [
  { id: "alt", label: "Provide text alternatives for non-text content" },
  { id: "captions", label: "Provide captions and other alternatives for multimedia" },
  { id: "adaptable", label: "Create content presentable in different ways" },
];

export default function CheckboxExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          The dual-state checkbox is checked or not. The tri-state variant adds
          a third, <em>indeterminate</em> state used by a parent control whose
          children are partially checked. Radix exposes both via the same
          primitive.
        </p>
      }
      extension="parent checkbox mirrors mixed children + writes value to a hidden form input"
      keys={[
        { keys: "Space", effect: "Toggle the focused checkbox." },
        { keys: "Tab · Shift+Tab", effect: "Move between checkboxes." },
      ]}
      aria={[
        { token: "role=checkbox", meaning: "Inferred from <button> + aria-checked." },
        { token: "aria-checked", meaning: "true · false · mixed (indeterminate parent)." },
        { token: "aria-labelledby", meaning: "Associates the visible label with each control." },
      ]}
    >
      <Checkbox
        items={CHILDREN}
        defaultChecked={{ alt: true, captions: false, adaptable: false }}
      />
    </Specimen>
  );
}
