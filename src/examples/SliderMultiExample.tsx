import { SliderMulti } from "../components/SliderMulti";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "slider-multi")!;

export default function SliderMultiExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A multi-thumb slider shares one rail between two or more thumbs,
          each independently focusable. Each thumb is its own{" "}
          <code>role="slider"</code> with its own bounds — typically the
          neighbouring thumb’s value.
        </p>
      }
      extension="custom track range fill + paired numeric readout"
      keys={[
        { keys: "Tab", effect: "Move focus between thumbs." },
        { keys: "← · ↓", effect: "Decrease the focused thumb by one step." },
        { keys: "→ · ↑", effect: "Increase the focused thumb by one step." },
        { keys: "Home · End", effect: "Jump to the local min or max." },
      ]}
      aria={[
        { token: "role=slider × n", meaning: "Each thumb is an independent slider." },
        { token: "aria-label", meaning: "Lower bound · Upper bound — distinguishes the thumbs." },
        { token: "aria-valuemin / -max", meaning: "Bounds the thumb against its neighbour." },
      ]}
    >
      <SliderMulti />
    </Specimen>
  );
}
