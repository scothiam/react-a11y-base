import { useState } from "react";
import "./Alert.css";

export type AlertMessage = { id: number; text: string; tone: "info" | "warn" | "error" };

type Props = {
  className?: string;
};

export function Alert({ className = "alert" }: Props) {
  const [msgs, setMsgs] = useState<AlertMessage[]>([]);

  function push(tone: AlertMessage["tone"], text: string) {
    setMsgs((prev) => [...prev, { id: Date.now() + Math.random(), tone, text }]);
  }

  function clear() {
    setMsgs([]);
  }

  const polite = msgs.filter((m) => m.tone === "info");
  const assertive = msgs.filter((m) => m.tone !== "info");

  return (
    <div className={className}>
      <div className="alert__controls">
        <button className="s-btn" onClick={() => push("info", "Draft saved.")}>
          Push info
        </button>
        <button className="s-btn" onClick={() => push("warn", "Unsaved changes since the last sync.")}>
          Push warning
        </button>
        <button
          className="s-btn s-btn--danger"
          onClick={() => push("error", "Network unreachable — alert announced assertively.")}
        >
          Push error
        </button>
        <button className="s-btn s-btn--ghost" onClick={clear}>
          Clear
        </button>
      </div>

      {/* role="status" — polite live region for non-urgent messages (info) */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="false"
        aria-relevant="additions"
        className="alert__log"
      >
        <p className="alert__loglabel mono">status · polite</p>
        {polite.length === 0 ? (
          <p className="alert__empty mono">No status messages.</p>
        ) : (
          <ul>
            {polite.map((m) => (
              <li key={m.id} className={`alert__msg alert__msg--${m.tone}`}>
                <span className="mono">{m.tone.toUpperCase()}</span>
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* role="alert" — assertive live region for urgent messages (warn / error) */}
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-relevant="additions"
        className="alert__log"
      >
        <p className="alert__loglabel mono">alert · assertive</p>
        {assertive.length === 0 ? (
          <p className="alert__empty mono">No alerts. Trigger one above.</p>
        ) : (
          <ul>
            {assertive.map((m) => (
              <li key={m.id} className={`alert__msg alert__msg--${m.tone}`}>
                <span className="mono">{m.tone.toUpperCase()}</span>
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
