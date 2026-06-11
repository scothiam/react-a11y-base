import { WindowSplitter } from "../components/WindowSplitter";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "splitter")!;

export default function WindowSplitterExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A window splitter is a draggable separator between two panes. It’s
          one of the rare ARIA widgets where the focusable target sits{" "}
          <em>between</em> the things being resized; arrow keys nudge the
          split.
        </p>
      }
      extension="paired horizontal + vertical splitters with custom drag handles + visible position indicator"
      keys={[
        { keys: "← · →", effect: "Move a horizontal splitter (decrease/increase left pane)." },
        { keys: "↑ · ↓", effect: "Move a vertical splitter (decrease/increase top pane)." },
        { keys: "Home · End", effect: "Snap the splitter to its minimum or maximum." },
        { keys: "Tab", effect: "Move focus to the next splitter or pane content." },
      ]}
      aria={[
        { token: "role=separator", meaning: "Set on the handle by react-resizable-panels." },
        { token: "aria-orientation", meaning: "Inherited from the group; horizontal or vertical." },
        { token: "aria-valuenow / -min / -max", meaning: "Reports the current split percentage." },
      ]}
    >
      <WindowSplitter />
    </Specimen>
  );
}
