import { Grid } from "../components/Grid";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "grid")!;

const ROWS = [
  { id: "a", pattern: "Accordion", status: "shipped" as const, spec: "APG 1.2", notes: "Multiple expand allowed" },
  { id: "b", pattern: "Alert Dialog", status: "shipped" as const, spec: "APG 1.2", notes: "Cancel + confirm" },
  { id: "c", pattern: "Combobox", status: "ready" as const, spec: "APG 1.2", notes: "Contains-match filter" },
  { id: "d", pattern: "Tree View", status: "draft" as const, spec: "APG 1.2", notes: "Single-select default" },
  { id: "e", pattern: "Carousel", status: "ready" as const, spec: "APG 1.2", notes: "Auto-rotate w/ pause" },
  { id: "f", pattern: "Splitter", status: "shipped" as const, spec: "APG 1.2", notes: "Drag and arrow-key" },
];

export default function GridExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A grid is an <em>interactive</em> tabular widget — every cell is
          individually focusable via arrow keys, with one tab stop into the
          whole grid. The TanStack Table primitive owns the data model; the
          keyboard layer is custom code added on top.
        </p>
      }
      extension="custom arrow-key/Home/End/PageUp/PageDown navigation + roving tabindex on cells"
      keys={[
        { keys: "↑ · ↓ · ← · →", effect: "Move focus between cells." },
        { keys: "Home · End", effect: "Jump to the first or last cell in the row." },
        { keys: "Page Up · Page Down", effect: "Jump to the first or last row." },
        { keys: "Tab", effect: "Move focus out of the grid as a single stop." },
      ]}
      aria={[
        { token: "role=grid", meaning: "Container; declares interactive table semantics." },
        { token: "role=row / rowheader / gridcell", meaning: "Used on rows, the first column, and other cells." },
        { token: "aria-rowcount / colcount", meaning: "Optional when a viewport hides total size." },
      ]}
    >
      <Grid rows={ROWS} />
      <p className="s-caption">
        Click a cell or tab in, then drive the keyboard. Focus is restricted to
        the grid until you Tab out.
      </p>
    </Specimen>
  );
}
