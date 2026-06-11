import { Meter, Label } from "react-aria-components";
import { useState } from "react";
import "./Meter.css";

function zone(v: number) {
  if (v < 30) return "low";
  if (v < 70) return "ok";
  if (v < 90) return "high";
  return "max";
}

type Props = {
  label?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  showDemoControl?: boolean;
  className?: string;
};

export function MeterPattern({
  label = "Ink reservoir",
  defaultValue = 62,
  min = 0,
  max = 100,
  showDemoControl = true,
  className = "mt",
}: Props) {
  const [v, setV] = useState(defaultValue);
  const z = zone(v);

  return (
    <div className={className}>
      <Meter value={v} minValue={min} maxValue={max} className={`mt__root mt__root--${z}`}>
        {({ percentage }) => (
          <>
            <div className="mt__head">
              <Label className="mono">{label}</Label>
              <span className="mt__num">{Math.round(percentage)}%</span>
            </div>
            <div className="mt__bar">
              <div className="mt__fill" style={{ width: `${percentage}%` }} />
              {[10, 25, 50, 75, 90].map((n) => (
                <span key={n} className="mt__tick" style={{ left: `${n}%` }} aria-hidden="true" />
              ))}
            </div>
            <p className="mt__zone mono">
              {z === "low" && "Low — refill soon"}
              {z === "ok" && "Okay — within nominal"}
              {z === "high" && "High — slow refill"}
              {z === "max" && "Maximum — pause"}
            </p>
          </>
        )}
      </Meter>

      {showDemoControl && (
        <label className="mt__control s-field">
          <span>Adjust value (demo only)</span>
          <input
            type="range"
            min={min}
            max={max}
            value={v}
            onChange={(e) => setV(Number(e.target.value))}
            className="mt__range"
            aria-label="Demo: change meter value"
          />
        </label>
      )}
    </div>
  );
}
