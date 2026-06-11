import { Slider } from "../components/Slider";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "slider")!;

export default function SliderExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A slider lets the user pick a single value from a continuous range.
          The thumb’s position, its{" "}
          <code>aria-valuenow</code> attribute, and any text output must stay
          in sync.
        </p>
      }
      keys={[
        { keys: "← · ↓", effect: "Decrease by one step." },
        { keys: "→ · ↑", effect: "Increase by one step." },
        { keys: "PgDn · PgUp", effect: "Move by a larger increment." },
        { keys: "Home · End", effect: "Jump to the minimum or maximum." },
      ]}
      aria={[
        { token: "role=slider", meaning: "Inferred by Radix on the thumb." },
        { token: "aria-valuemin / -max / -now", meaning: "Numeric bounds + current value." },
        { token: "aria-valuetext", meaning: "Optional human-readable value." },
      ]}
    >
      <Slider />
    </Specimen>
  );
}
