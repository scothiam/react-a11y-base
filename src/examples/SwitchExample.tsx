import { Switch } from "../components/Switch";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "switch")!;

const ITEMS = [
  { id: "highContrast", label: "High-contrast ink", help: "Switch to maximum ink density." },
  { id: "motion", label: "Reduce motion", help: "Disable specimen reveal animations." },
  { id: "monoLabels", label: "Show mono labels", help: "Annotate stage controls with their tag." },
];

export default function SwitchExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A switch is the binary cousin of a checkbox: <em>on</em> or{" "}
          <em>off</em>, never <em>mixed</em>. The change takes effect
          immediately; no separate Apply button is needed.
        </p>
      }
      keys={[
        { keys: "Space · Enter", effect: "Toggle the focused switch." },
        { keys: "Tab · Shift+Tab", effect: "Move between switches." },
      ]}
      aria={[
        { token: "role=switch", meaning: "Distinguishes from checkbox; conveys binary state." },
        { token: "aria-checked", meaning: "true or false — never mixed." },
        { token: "aria-labelledby", meaning: "Connects the visible label to the control." },
      ]}
    >
      <Switch
        items={ITEMS}
        defaultState={{ highContrast: true, motion: false, monoLabels: true }}
      />
    </Specimen>
  );
}
