import { Meter } from "../components/Meter";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "meter")!;

export default function MeterExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A meter visualises a scalar value within a known range — disk
          usage, queue depth, score. Unlike a progress bar, a meter is not
          about completion; it is a static <em>measurement</em>.
        </p>
      }
      extension="zone-aware fill colour + textual readout"
      keys={[
        { keys: "—", effect: "Meters are non-interactive; use a slider for adjustable values." },
      ]}
      aria={[
        { token: "role=meter", meaning: "Inferred by RAC; alternative for browsers without <meter>." },
        { token: "aria-valuenow · -min · -max", meaning: "Numeric bounds and current value." },
        { token: "aria-valuetext", meaning: "Human-readable equivalent (\"Ink level: 62% — okay\")." },
      ]}
    >
      <Meter />
    </Specimen>
  );
}
