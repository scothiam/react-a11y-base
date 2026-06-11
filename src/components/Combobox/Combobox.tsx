import {
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Button,
} from "react-aria-components";
import { useState } from "react";
import "./Combobox.css";

export type ComboboxOption = { id: string; name: string; note: string };

type Props = {
  options: ComboboxOption[];
  label?: string;
  placeholder?: string;
  defaultSelectedKey?: string | null;
  onSelectionChange?: (key: string | null) => void;
  className?: string;
};

export function Combobox({
  options,
  label = "Body face",
  placeholder = "Search a typeface…",
  defaultSelectedKey = null,
  onSelectionChange,
  className = "cmb",
}: Props) {
  const [selected, setSelected] = useState<string | null>(defaultSelectedKey);

  function handleChange(k: React.Key | null) {
    const next = (k as string) ?? null;
    setSelected(next);
    onSelectionChange?.(next);
  }

  return (
    <div className={className}>
      <ComboBox
        className="cmb__root"
        menuTrigger="focus"
        selectedKey={selected}
        onSelectionChange={handleChange}
      >
        <Label className="mono cmb__label">{label}</Label>
        <div className="cmb__field">
          <Input className="cmb__input" placeholder={placeholder} />
          <Button className="cmb__btn" aria-label="Show suggestions">
            ▾
          </Button>
        </div>
        <Popover className="cmb__pop" offset={4}>
          <ListBox className="cmb__list">
            {options.map((f) => (
              <ListBoxItem
                key={f.id}
                id={f.id}
                textValue={f.name}
                className="cmb__opt"
              >
                <span className="cmb__optName">{f.name}</span>
                <span className="cmb__optNote">{f.note}</span>
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
}

export function getComboboxSelectionLabel(
  options: ComboboxOption[],
  selectedKey: string | null
) {
  return options.find((f) => f.id === selectedKey)?.name ?? "(none)";
}
