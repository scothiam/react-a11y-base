import { Tabs } from "../components/Tabs";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "tabs")!;

const TABS = [
  {
    value: "type",
    label: "Type",
    body: (
      <>
        <p>
          The display face is <strong>Fraunces</strong>, a contemporary
          variable serif by Stephen Nixon. Italic axes lean into a soft cut for
          headings; the upright tightens up for body.
        </p>
        <p>
          Monospaced labels are set in <strong>JetBrains Mono</strong>, all
          caps with extra letterspacing.
        </p>
      </>
    ),
  },
  {
    value: "colour",
    label: "Colour",
    body: (
      <ul>
        <li><strong>Paper</strong> — #F4F1EA · warm off-white ground</li>
        <li><strong>Ink</strong> — #181412 · near-black with brown bias</li>
        <li><strong>Caution</strong> — #E94E1B · single signal accent</li>
      </ul>
    ),
  },
  {
    value: "rule",
    label: "Rule",
    body: (
      <p>
        Hairline rules separate logical sections; double rules cap meta blocks.
        The 88-pixel baseline grid is rendered as a faint background to remind
        you where things should sit.
      </p>
    ),
  },
  {
    value: "motion",
    label: "Motion",
    body: (
      <p>
        Motion is restrained: 140–220ms eases on disclosures, a single pop on
        overlays. Respect <code>prefers-reduced-motion</code> when applied.
      </p>
    ),
  },
];

export default function TabsExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          Tabs reveal one of several sibling panels. Only one panel is visible
          at a time; activation can be automatic on focus (default here) or
          manual via Enter. The tab list itself is a single tab stop.
        </p>
      }
      keys={[
        { keys: "← · →", effect: "Move focus between tabs (with optional auto-activation)." },
        { keys: "Home · End", effect: "Jump to first or last tab." },
        { keys: "Tab", effect: "Move from the tab list into the active panel." },
        { keys: "Enter · Space", effect: "Activate the focused tab (manual mode)." },
      ]}
      aria={[
        { token: "role=tablist", meaning: "Container of tabs with orientation." },
        { token: "role=tab", meaning: "Selected one has aria-selected=\"true\"." },
        { token: "role=tabpanel", meaning: "Labelled by its tab via aria-labelledby." },
      ]}
    >
      <Tabs
        tabs={TABS}
        defaultValue="type"
        listLabel="Specimen typography notes"
      />
    </Specimen>
  );
}
