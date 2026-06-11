import { useState } from "react";
import { AlertDialog } from "../components/AlertDialog";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "alertdialog")!;

export default function AlertDialogExample() {
  const [history, setHistory] = useState<string[]>([]);

  function log(action: string) {
    setHistory((h) => [`${new Date().toLocaleTimeString()} — ${action}`, ...h].slice(0, 5));
  }

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A modal dialog that interrupts the workflow because the user must
          acknowledge something before continuing. Distinct from a regular
          dialog by its <code>role="alertdialog"</code>, which causes most
          screen readers to immediately read the dialog’s message.
        </p>
      }
      keys={[
        { keys: "Tab · Shift+Tab", effect: "Cycle through dialog descendants (focus trapped)." },
        { keys: "Esc", effect: "Cancel the dialog and return focus to the trigger." },
        { keys: "Enter", effect: "Activate the default focused action." },
      ]}
      aria={[
        { token: "role=alertdialog", meaning: "Modal that demands a response." },
        { token: "aria-labelledby", meaning: "Points to the heading element." },
        { token: "aria-describedby", meaning: "Points to the message paragraph." },
      ]}
    >
      <AlertDialog
        onCancel={() => log("Cancelled.")}
        onConfirm={() => log("Project deleted (simulated).")}
      />

      <div className="adlg__log s-frame" aria-live="polite">
        <p className="mono">Action log</p>
        {history.length === 0 ? (
          <p className="adlg__empty">No action yet.</p>
        ) : (
          <ul>
            {history.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
      </div>
    </Specimen>
  );
}
