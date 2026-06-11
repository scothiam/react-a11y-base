import { Accordion } from "../components/Accordion";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "accordion")!;

const ITEMS = [
  {
    id: "perceivable",
    head: "I. Perceivable",
    body: "Information and user interface components must be presentable to users in ways they can perceive — text alternatives, time-based media, adaptable structure, distinguishable contrast.",
  },
  {
    id: "operable",
    head: "II. Operable",
    body: "User interface components and navigation must be operable — keyboard accessible, enough time, no seizure-inducing content, navigable, input modalities beyond pointer.",
  },
  {
    id: "understandable",
    head: "III. Understandable",
    body: "Information and the operation of UI must be understandable — readable text, predictable behaviour, input assistance for errors.",
  },
  {
    id: "robust",
    head: "IV. Robust",
    body: "Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.",
  },
];

export default function AccordionExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A vertically stacked set of interactive headings, each disclosing a
          panel of content. Radix renders headings as <code>h3</code> wrappers
          by default; we keep that and let multiple panels open simultaneously.
        </p>
      }
      extension="custom triangle indicator + animated content reveal"
      keys={[
        { keys: "Enter · Space", effect: "Toggle the focused header." },
        { keys: "Tab", effect: "Move into the open panel or to the next header." },
        { keys: "↓ · ↑", effect: "Move between headers (Radix default)." },
        { keys: "Home · End", effect: "Jump to first or last header." },
      ]}
      aria={[
        { token: "role=region", meaning: "Applied to each open panel; labelled by its header." },
        { token: "aria-expanded", meaning: "True on the header button when its panel is open." },
        { token: "aria-controls", meaning: "Header points at the id of its associated panel." },
      ]}
    >
      <Accordion items={ITEMS} defaultValue={["perceivable"]} />
      <p className="s-caption">
        The four WCAG 2 principles, opened one at a time or all together.
      </p>
    </Specimen>
  );
}
