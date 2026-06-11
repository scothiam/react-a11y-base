import { Treegrid } from "../components/Treegrid";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "treegrid")!;

const DATA = [
  {
    id: "src",
    name: "src/",
    owner: "studio",
    size: "—",
    modified: "—",
    children: [
      {
        id: "components",
        name: "components/",
        owner: "studio",
        size: "—",
        modified: "—",
        children: [
          { id: "acc", name: "Accordion/", owner: "scot", size: "—", modified: "today" },
          { id: "tab", name: "Tabs/", owner: "scot", size: "—", modified: "today" },
          { id: "btn", name: "Button/", owner: "scot", size: "—", modified: "today" },
        ],
      },
      {
        id: "examples",
        name: "examples/",
        owner: "studio",
        size: "—",
        modified: "—",
        children: [
          { id: "spec", name: "Specimen/", owner: "scot", size: "4 KB", modified: "today" },
          { id: "acc-ex", name: "AccordionExample.tsx", owner: "scot", size: "2 KB", modified: "today" },
          { id: "trg-ex", name: "TreegridExample.tsx", owner: "scot", size: "3 KB", modified: "today" },
        ],
      },
    ],
  },
  {
    id: "public",
    name: "public/",
    owner: "studio",
    size: "—",
    modified: "yesterday",
    children: [
      { id: "favicon", name: "favicon.svg", owner: "scot", size: "1 KB", modified: "yesterday" },
    ],
  },
  { id: "package", name: "package.json", owner: "scot", size: "2 KB", modified: "today" },
  { id: "tsc", name: "tsconfig.json", owner: "scot", size: "<1 KB", modified: "today" },
];

export default function TreegridExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A treegrid combines the hierarchy of a tree with the columnar layout
          of a grid. Each row carries multiple cells; arrow keys still expand
          and collapse nodes, while Right / Left can also navigate between
          cells within a row.
        </p>
      }
      extension="React Arborist rows wrapped with role=row/gridcell + aria-level/posinset/setsize + sticky column header"
      keys={[
        { keys: "↑ · ↓", effect: "Move focus between visible rows." },
        { keys: "→", effect: "Open the row, then move into its first child." },
        { keys: "←", effect: "Close the row, then move to its parent." },
        { keys: "Enter · Space", effect: "Select the focused row." },
      ]}
      aria={[
        { token: "role=treegrid", meaning: "Container; mixes tree + grid semantics." },
        { token: "role=row + aria-level", meaning: "Each row reports its depth in the hierarchy." },
        { token: "role=gridcell", meaning: "Each column value is a cell within the row." },
      ]}
    >
      <Treegrid data={DATA} />
    </Specimen>
  );
}
