import * as Sw from "@radix-ui/react-switch";
import { useState } from "react";
import "./Switch.css";

export type SwitchItem = { id: string; label: string; help: string };

type Props = {
  items: SwitchItem[];
  defaultState?: Record<string, boolean>;
  className?: string;
};

export function Switch({
  items,
  defaultState,
  className = "sw",
}: Props) {
  const initial =
    defaultState ??
    Object.fromEntries(items.map((it) => [it.id, false]));
  const [state, setState] = useState<Record<string, boolean>>(initial);

  return (
    <ul className={className}>
      {items.map((it) => (
        <li key={it.id} className="sw__row">
          <div className="sw__copy">
            <span className="sw__label">{it.label}</span>
            <span className="sw__help">{it.help}</span>
          </div>
          <Sw.Root
            checked={state[it.id]}
            onCheckedChange={(v) => setState((s) => ({ ...s, [it.id]: v }))}
            className="sw__root"
            aria-label={it.label}
          >
            <Sw.Thumb className="sw__thumb" />
          </Sw.Root>
        </li>
      ))}
    </ul>
  );
}
