import * as RG from "@radix-ui/react-radio-group";
import { useState } from "react";
import "./RadioGroup.css";

export type RadioOption = {
  id: string;
  title: string;
  price: string;
  note: string;
};

type Props = {
  options: RadioOption[];
  legend?: string;
  defaultValue?: string;
  ariaLabel?: string;
  className?: string;
};

export function RadioGroup({
  options,
  legend = "Choose a plan",
  defaultValue,
  ariaLabel = "Pricing tier",
  className = "rg",
}: Props) {
  const [value, setValue] = useState(defaultValue ?? options[0]?.id ?? "");

  return (
    <fieldset className={className}>
      <legend className="mono">{legend}</legend>
      <RG.Root
        value={value}
        onValueChange={setValue}
        className="rg__group"
        aria-label={ariaLabel}
      >
        {options.map((p) => (
          <label key={p.id} className="rg__card" data-selected={value === p.id}>
            <RG.Item value={p.id} className="rg__radio">
              <RG.Indicator className="rg__dot" />
            </RG.Item>
            <span className="rg__title">{p.title}</span>
            <span className="rg__price mono">{p.price}</span>
            <span className="rg__note">{p.note}</span>
          </label>
        ))}
      </RG.Root>
    </fieldset>
  );
}
