import { useState } from "react";
import { Combobox, getComboboxSelectionLabel } from "../components/Combobox";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "combobox")!;

const FACES = [
  { id: "fraunces", name: "Fraunces", note: "Variable serif · Arrow Type" },
  { id: "newsreader", name: "Newsreader", note: "Variable serif · Production Type" },
  { id: "instrument", name: "Instrument Serif", note: "Display · Instrument" },
  { id: "literata", name: "Literata", note: "Reading serif · Type Together" },
  { id: "redaction", name: "Redaction", note: "Italic-only display" },
  { id: "jetbrains", name: "JetBrains Mono", note: "Monospace · JetBrains" },
  { id: "iaWriter", name: "iA Writer Duo", note: "Variable monospace · iA Inc" },
  { id: "geist", name: "Geist", note: "Geometric grotesque · Vercel" },
  { id: "manrope", name: "Manrope", note: "Modern geometric · Mikhail Sharanda" },
];

export default function ComboboxExample() {
  const [selected, setSelected] = useState<string | null>("fraunces");

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A combobox is an input paired with a popup list. The user can type
          to filter or pick from the list — the canonical pattern for
          autocomplete fields. React Aria gives us listbox semantics and the
          full keyboard model out of the box.
        </p>
      }
      keys={[
        { keys: "↓", effect: "Open the list and focus the first option." },
        { keys: "↑ · ↓", effect: "Move through filtered options." },
        { keys: "Enter", effect: "Choose the focused option." },
        { keys: "Esc", effect: "Close the popup; pressing again clears the value." },
        { keys: "Type", effect: "Filter the list (contains-match)." },
      ]}
      aria={[
        { token: "role=combobox", meaning: "On the input; aria-expanded toggles with the popup." },
        { token: "role=listbox", meaning: "On the popup; option ids advertised via aria-activedescendant." },
        { token: "aria-controls", meaning: "Input points at the popup’s id." },
      ]}
    >
      <Combobox
        options={FACES}
        defaultSelectedKey="fraunces"
        onSelectionChange={setSelected}
      />
      <p className="s-caption">
        Currently set to <strong>{getComboboxSelectionLabel(FACES, selected)}</strong>.
      </p>
    </Specimen>
  );
}
