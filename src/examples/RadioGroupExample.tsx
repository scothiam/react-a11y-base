import { RadioGroup } from "../components/RadioGroup";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "radio")!;

const PLANS = [
  { id: "draft", title: "Draft", price: "Free", note: "One private specimen." },
  { id: "studio", title: "Studio", price: "$9 / mo", note: "Up to 50 published specimens." },
  { id: "press", title: "Press", price: "$29 / mo", note: "Unlimited; print export; team review." },
];

export default function RadioGroupExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A radio group is a set of mutually exclusive options where exactly
          one button is checked at any time. The whole group is a single tab
          stop; arrow keys move <em>both</em> focus and selection between
          radios.
        </p>
      }
      keys={[
        { keys: "Tab", effect: "Move into the group, focusing the selected radio." },
        { keys: "↑ · ↓ · ← · →", effect: "Move selection and focus to the next radio (wraps)." },
        { keys: "Space", effect: "Selects the focused radio if no selection yet." },
      ]}
      aria={[
        { token: "role=radiogroup", meaning: "Container labelled by a legend." },
        { token: "role=radio", meaning: "Each option (Radix renders as <button>)." },
        { token: "aria-checked", meaning: "True on the selected radio, false on the others." },
      ]}
    >
      <RadioGroup options={PLANS} defaultValue="studio" />
    </Specimen>
  );
}
