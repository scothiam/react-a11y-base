import { Table } from "../components/Table";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "table")!;

const ROWS = [
  { id: "a", pattern: "Accordion", library: "Radix UI", role: "region", released: "2020" },
  { id: "b", pattern: "Combobox", library: "React Aria", role: "combobox", released: "2019" },
  { id: "c", pattern: "Dialog", library: "Radix UI", role: "dialog", released: "2020" },
  { id: "d", pattern: "Tree View", library: "React Arborist", role: "tree", released: "2022" },
  { id: "e", pattern: "Carousel", library: "Embla", role: "region", released: "2020" },
  { id: "f", pattern: "Splitter", library: "react-resizable-panels", role: "separator", released: "2022" },
];

export default function TableExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A table is a <em>static</em> tabular structure. The W3C distinguishes
          it from the interactive <a href="/pattern/grid">grid</a> pattern —
          tables expose data and may sort columns, but cells aren’t
          individually focusable. React Aria layers sortable headers and
          optional selection on top of native semantics.
        </p>
      }
      extension="sortable headers + row selection; rendered with native <table> semantics"
      keys={[
        { keys: "Tab", effect: "Move into the table (one stop) and to the next focusable element." },
        { keys: "Enter · Space", effect: "Toggle row selection or invoke sort on a header." },
        { keys: "Shift + click", effect: "Range-select rows." },
      ]}
      aria={[
        { token: "role=table", meaning: "Implicit on <table>; React Aria adds keyboard plumbing." },
        { token: "role=columnheader", meaning: "Sortable headers expose aria-sort." },
        { token: "aria-selected", meaning: "Set on rows in selection mode." },
      ]}
    >
      <Table rows={ROWS} />
    </Specimen>
  );
}
