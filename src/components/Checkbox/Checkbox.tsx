import * as Cb from "@radix-ui/react-checkbox";
import { useMemo, useState } from "react";
import "./Checkbox.css";

export type CheckboxChild = { id: string; label: string };

type Props = {
  items: CheckboxChild[];
  legend?: string;
  defaultChecked?: Record<string, boolean>;
  className?: string;
};

export function Checkbox({
  items,
  legend = "Perceivable — checklist",
  defaultChecked,
  className = "cb",
}: Props) {
  const initial = defaultChecked ?? Object.fromEntries(items.map((c) => [c.id, false]));
  const [checked, setChecked] = useState<Record<string, boolean>>(initial);

  const all = useMemo(
    () =>
      items.every((c) => checked[c.id])
        ? true
        : items.some((c) => checked[c.id])
          ? "indeterminate"
          : false,
    [checked, items]
  );

  function toggleAll(next: Cb.CheckedState) {
    const target = next === true;
    const map: Record<string, boolean> = {};
    items.forEach((c) => (map[c.id] = target));
    setChecked(map);
  }

  return (
    <fieldset className={className}>
      <legend className="mono">{legend}</legend>

      <label className="cb__row cb__row--parent">
        <Cb.Root
          className="cb__box cb__box--parent"
          checked={all}
          onCheckedChange={toggleAll}
        >
          <Cb.Indicator className="cb__ind" forceMount>
            {all === "indeterminate" ? "–" : all ? "✓" : ""}
          </Cb.Indicator>
        </Cb.Root>
        <span>
          <strong>All criteria</strong>{" "}
          <span className="mono cb__state">
            {all === "indeterminate" ? "mixed" : all ? "checked" : "unchecked"}
          </span>
        </span>
      </label>

      <ul className="cb__list">
        {items.map((c) => (
          <li key={c.id}>
            <label className="cb__row">
              <Cb.Root
                className="cb__box"
                checked={checked[c.id]}
                onCheckedChange={(v) =>
                  setChecked((prev) => ({ ...prev, [c.id]: v === true }))
                }
              >
                <Cb.Indicator className="cb__ind">✓</Cb.Indicator>
              </Cb.Root>
              <span>{c.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
