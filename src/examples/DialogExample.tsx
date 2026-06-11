import { useState } from "react";
import { Dialog } from "../components/Dialog";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "dialog")!;

export default function DialogExample() {
  const [last, setLast] = useState<string | null>(null);

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A modal dialog overlays the page, traps focus while open, and returns
          focus to the trigger on close. Use it for tasks that should be
          completed before the user does anything else.
        </p>
      }
      keys={[
        { keys: "Tab · Shift+Tab", effect: "Cycle focus within the dialog." },
        { keys: "Esc", effect: "Close the dialog and restore focus to the trigger." },
        { keys: "Enter", effect: "Submit the form (when focus is inside a control)." },
      ]}
      aria={[
        { token: "role=dialog", meaning: "Modal overlay; pairs with aria-modal=\"true\"." },
        { token: "aria-modal", meaning: "Tells AT that nodes outside the dialog are inert." },
        { token: "aria-labelledby / -describedby", meaning: "Bind title and description to the dialog." },
      ]}
    >
      <Dialog onSave={setLast} />
      <p className="s-caption">
        Last saved name:{" "}
        <strong>{last === null ? "—" : last}</strong>
      </p>
    </Specimen>
  );
}
