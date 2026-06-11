import * as Sl from "@radix-ui/react-slider";
import { useState } from "react";
import "../Slider/Slider.css";
import "./SliderMulti.css";

type Props = {
  label?: string;
  defaultValue?: [number, number];
  min?: number;
  max?: number;
  step?: number;
  showHistogram?: boolean;
  className?: string;
};

export function SliderMulti({
  label = "Price range",
  defaultValue = [20, 60],
  min = 0,
  max = 100,
  step = 5,
  showHistogram = true,
  className = "sl",
}: Props) {
  const [range, setRange] = useState(defaultValue);

  return (
    <div className={className}>
      <div className="sl__readout">
        <span className="mono">{label}</span>
        <span className="sl__value">
          ${range[0]} <span className="slm__dash">→</span> ${range[1]}
        </span>
      </div>

      <Sl.Root
        className="sl__root"
        value={range}
        onValueChange={(v) => setRange(v as [number, number])}
        min={min}
        max={max}
        step={step}
        minStepsBetweenThumbs={1}
      >
        <Sl.Track className="sl__track">
          <Sl.Range className="sl__range" />
        </Sl.Track>
        <Sl.Thumb
          className="sl__thumb"
          aria-label="Minimum price"
          aria-valuetext={`${range[0]} dollars`}
        />
        <Sl.Thumb
          className="sl__thumb"
          aria-label="Maximum price"
          aria-valuetext={`${range[1]} dollars`}
        />
      </Sl.Root>

      <div className="sl__ticks mono" aria-hidden="true">
        {[0, 25, 50, 75, 100].map((n) => (
          <span key={n}>${n}</span>
        ))}
      </div>

      {showHistogram && (
        <div className="slm__hist" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => {
            const bucket = i * 5;
            const inRange = bucket >= range[0] && bucket <= range[1];
            const h = 20 + Math.abs(Math.sin(i)) * 60;
            return (
              <span
                key={i}
                className="slm__bar"
                style={{ height: `${h}%`, opacity: inRange ? 1 : 0.2 }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
