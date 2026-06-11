import { Spinbutton } from "../components/Spinbutton";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "spinbutton")!;

export default function SpinbuttonExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A spinbutton restricts its value to a set or range of discrete
          values, with stepper controls for incrementing and decrementing.
          React Aria’s <code>NumberField</code> implements the full APG
          contract — including keyboard, screen-reader announcements, and
          locale-aware number formatting.
        </p>
      }
      keys={[
        { keys: "↑ · ↓", effect: "Increment or decrement by one step." },
        { keys: "Page Up · Page Down", effect: "Step by a larger amount." },
        { keys: "Home · End", effect: "Jump to the minimum or maximum value." },
        { keys: "Type", effect: "Enter a value directly; clamped on commit." },
      ]}
      aria={[
        { token: "role=spinbutton", meaning: "On the input; states announced as it changes." },
        { token: "aria-valuemin / -max / -now", meaning: "Bounds and the live value." },
        { token: "aria-valuetext", meaning: "Optional formatted value (e.g. \"500 grams\")." },
      ]}
    >
      <Spinbutton />
    </Specimen>
  );
}
