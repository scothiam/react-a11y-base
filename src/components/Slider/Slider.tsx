import * as Sl from "@radix-ui/react-slider";
import { useState } from "react";
import "./Slider.css";

type Props = {
  label?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  showPreview?: boolean;
  className?: string;
};

export function Slider({
  label = "Ink opacity",
  defaultValue = 42,
  min = 0,
  max = 100,
  step = 1,
  showPreview = true,
  className = "sl",
}: Props) {
  const [v, setV] = useState([defaultValue]);

  return (
    <div className={className}>
      <div className="sl__readout">
        <span className="mono">{label}</span>
        <span className="sl__value">{v[0].toString().padStart(2, "0")}%</span>
      </div>
      <Sl.Root
        className="sl__root"
        value={v}
        onValueChange={setV}
        min={min}
        max={max}
        step={step}
        aria-label={label}
      >
        <Sl.Track className="sl__track">
          <Sl.Range className="sl__range" />
        </Sl.Track>
        <Sl.Thumb className="sl__thumb" aria-valuetext={`${v[0]} percent`} />
      </Sl.Root>
      <div className="sl__ticks mono" aria-hidden="true">
        {[0, 25, 50, 75, 100].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      {showPreview && (
        <div
          className="sl__preview"
          style={{ opacity: v[0] / 100 }}
          aria-hidden="true"
        >
          INK
        </div>
      )}
    </div>
  );
}
