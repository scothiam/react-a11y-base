import { useState } from "react";
import { TreeView } from "../components/TreeView";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "treeview")!;

const DATA = [
  {
    id: "vol1",
    name: "Vol. 01 — Form Controls",
    kind: "folder" as const,
    children: [
      { id: "v1-1", name: "Checkbox.spec.md", kind: "file" as const },
      { id: "v1-2", name: "Radio.spec.md", kind: "file" as const },
      { id: "v1-3", name: "Switch.spec.md", kind: "file" as const },
      {
        id: "v1-sub",
        name: "Range inputs",
        kind: "folder" as const,
        children: [
          { id: "v1-4", name: "Slider.spec.md", kind: "file" as const },
          { id: "v1-5", name: "SliderMulti.spec.md", kind: "file" as const },
          { id: "v1-6", name: "Spinbutton.spec.md", kind: "file" as const },
        ],
      },
    ],
  },
  {
    id: "vol2",
    name: "Vol. 02 — Composite",
    kind: "folder" as const,
    children: [
      { id: "v2-1", name: "Combobox.spec.md", kind: "file" as const },
      { id: "v2-2", name: "Listbox.spec.md", kind: "file" as const },
      { id: "v2-3", name: "Menu.spec.md", kind: "file" as const },
      { id: "v2-4", name: "Tabs.spec.md", kind: "file" as const },
    ],
  },
  {
    id: "vol3",
    name: "Vol. 03 — Layout",
    kind: "folder" as const,
    children: [
      { id: "v3-1", name: "Landmarks.spec.md", kind: "file" as const },
      { id: "v3-2", name: "Splitter.spec.md", kind: "file" as const },
      { id: "v3-3", name: "Grid.spec.md", kind: "file" as const },
    ],
  },
];

export default function TreeViewExample() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A tree view exposes a hierarchical list. The whole tree is a single
          tab stop; arrow keys navigate, and Right / Left open or close the
          focused node — Right on an already-open node moves to its first
          child.
        </p>
      }
      extension="caution-orange focus ring + custom file/folder iconography"
      keys={[
        { keys: "↑ · ↓", effect: "Move focus to previous or next visible node." },
        { keys: "→", effect: "Open the node, then move into its first child." },
        { keys: "←", effect: "Close the node, then move to its parent." },
        { keys: "Home · End", effect: "Jump to first or last visible node." },
        { keys: "A–Z", effect: "Type-ahead to the next node starting with the letter." },
      ]}
      aria={[
        { token: "role=tree", meaning: "On the container; arborist sets aria-orientation." },
        { token: "role=treeitem", meaning: "Each node; aria-expanded reflects open state." },
        { token: "aria-level / -setsize / -posinset", meaning: "Position in the hierarchy for AT." },
      ]}
    >
      <TreeView data={DATA} onFocusChange={setFocused} />
      <p className="s-caption">
        Focused: <strong>{focused ?? "—"}</strong>
      </p>
    </Specimen>
  );
}
