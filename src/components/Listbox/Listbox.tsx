import { ListBox, ListBoxItem, Label } from "react-aria-components";
import type { Selection } from "react-aria-components";
import { useState } from "react";
import "./Listbox.css";

export type ListboxOption = { id: string; name: string; note: string };

type Props = {
  options: ListboxOption[];
  label?: string;
  ariaLabel?: string;
  defaultSelectedKeys?: string[];
  selectionMode?: "single" | "multiple";
  onSelectionChange?: (keys: Selection) => void;
  className?: string;
};

export function Listbox({
  options,
  label = "Paper stock — select one or more",
  ariaLabel = "Paper stock",
  defaultSelectedKeys = [],
  selectionMode = "multiple",
  onSelectionChange,
  className = "lb",
}: Props) {
  const [keys, setKeys] = useState<Selection>(new Set(defaultSelectedKeys));

  function handleChange(next: Selection) {
    setKeys(next);
    onSelectionChange?.(next);
  }

  return (
    <div className={className}>
      <Label className="mono lb__label">{label}</Label>
      <ListBox
        aria-label={ariaLabel}
        selectionMode={selectionMode}
        selectedKeys={keys}
        onSelectionChange={handleChange}
        className="lb__root"
      >
        {options.map((p) => (
          <ListBoxItem key={p.id} id={p.id} textValue={p.name} className="lb__opt">
            <span className="lb__optName">{p.name}</span>
            <span className="lb__optNote">{p.note}</span>
            <span className="lb__check" aria-hidden="true">✓</span>
          </ListBoxItem>
        ))}
      </ListBox>
    </div>
  );
}

export function getListboxSelectionLabels(
  options: ListboxOption[],
  keys: Selection
) {
  const chosen = Array.from(keys as Set<string>);
  if (chosen.length === 0) return "(none)";
  return chosen.map((k) => options.find((p) => p.id === k)?.name).join(", ");
}
