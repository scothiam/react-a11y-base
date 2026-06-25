import "./Alert.css";

type Tone = "info" | "warn" | "error";

type Props = {
  title: string;
  message: string;
  tone?: Tone;
  className?: string;
};

export function StatusAlert({
  title,
  message,
  tone = "info",
  className = "alert",
}: Props) {
  const liveRole = tone === "error" ? "alert" : "status";
  const liveMode = tone === "error" ? "assertive" : "polite";

  return (
    <div
      className={className}
      role={liveRole}
      aria-live={liveMode}
      aria-atomic="true"
    >
      <div className="alert__log">
        <div className={`alert__msg alert__msg--${tone}`}>
          <span className="mono">{tone.toUpperCase()}</span>
          <span>
            <strong>{title}</strong>
            {" — "}
            {message}
          </span>
        </div>
      </div>
    </div>
  );
}
