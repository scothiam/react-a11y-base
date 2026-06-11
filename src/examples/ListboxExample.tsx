import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Listbox, getListboxSelectionLabels } from "../components/Listbox";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "listbox")!;

const PAPER = [
  { id: "newsprint", name: "Newsprint, 50 gsm", note: "Cool grey, high yellowing" },
  { id: "munken", name: "Munken Pure, 100 gsm", note: "Warm ivory, soft hand" },
  { id: "cougar", name: "Cougar Natural, 80 lb", note: "Cream, smooth surface" },
  { id: "speckletone", name: "Speckletone Kraft, 70 lb", note: "Recycled, visible fibres" },
  { id: "moab", name: "Moab Entrada, 290 gsm", note: "Cotton, archival print" },
];

export default function ListboxExample() {
  const [keys, setKeys] = useState<Selection>(new Set(["munken"]));

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A listbox presents a fixed list of options. Unlike a combobox there
          is no associated input — the user simply picks one or more options.
          Multi-select mode adds standard checkbox-style toggles and a
          shift-range gesture.
        </p>
      }
      keys={[
        { keys: "↑ · ↓", effect: "Move focus through options." },
        { keys: "Home · End", effect: "Jump to first or last option." },
        { keys: "Space", effect: "Toggle the focused option (multi-select)." },
        { keys: "Shift + ↑/↓", effect: "Extend selection in multi-select mode." },
        { keys: "A–Z", effect: "Type-ahead to the next option starting with that letter." },
      ]}
      aria={[
        { token: "role=listbox", meaning: "The container; aria-multiselectable on multi mode." },
        { token: "role=option", meaning: "Each row, with aria-selected reflecting state." },
        { token: "aria-label", meaning: "Names the list when there is no visible label." },
      ]}
    >
      <Listbox
        options={PAPER}
        defaultSelectedKeys={["munken"]}
        onSelectionChange={setKeys}
      />
      <p className="s-caption">
        Selected:{" "}
        <strong>{getListboxSelectionLabels(PAPER, keys)}</strong>
      </p>
    </Specimen>
  );
}
