import { Toolbar } from "../components/Toolbar";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "toolbar")!;

export default function ToolbarExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A toolbar groups related controls so they share a single tab stop;
          arrow keys cycle within. It’s the right pattern for editor-style
          formatting palettes, not for primary navigation.
        </p>
      }
      keys={[
        { keys: "Tab", effect: "Enter the toolbar and focus the first/last interacted control." },
        { keys: "← · →", effect: "Move between controls (wraps)." },
        { keys: "Enter · Space", effect: "Activate the focused control." },
      ]}
      aria={[
        { token: "role=toolbar", meaning: "Container; arrow-keys move within." },
        { token: "aria-label", meaning: "Names the toolbar (e.g. \"Formatting\")." },
        { token: "role=group", meaning: "Sub-groups within a toolbar can scope toggles." },
      ]}
    >
      <Toolbar />
    </Specimen>
  );
}
