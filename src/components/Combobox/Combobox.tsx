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
  label?: string | null;
  placeholder?: string;
  defaultSelectedKey?: string | null;
  selectedKey?: string | null;
  onSelectionChange?: (key: string | null) => void;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  onFocus?: () => void;
  allowsEmptyCollection?: boolean;
  menuTrigger?: "focus" | "input" | "manual";
  ariaLabel?: string;
  className?: string;
};

export function Combobox({
  options,
  label = "Body face",
  placeholder = "Search a typeface…",
  defaultSelectedKey = null,
  selectedKey: selectedKeyProp,
  onSelectionChange,
  inputValue,
  onInputChange,
  onFocus,
  allowsEmptyCollection = false,
  menuTrigger = "focus",
  ariaLabel,
  className = "cmb",
}: Props) {
  const [selectedInternal, setSelectedInternal] = useState<string | null>(
    defaultSelectedKey,
  );
  const selected = selectedKeyProp !== undefined ? selectedKeyProp : selectedInternal;

  function handleChange(k: React.Key | null) {
    const next = (k as string) ?? null;
    if (selectedKeyProp === undefined) {
      setSelectedInternal(next);
    }
    onSelectionChange?.(next);
  }

  return (
    <div className={className}>
      <ComboBox
        className="cmb__root"
        menuTrigger={menuTrigger}
        selectedKey={selected}
        onSelectionChange={handleChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        onFocus={onFocus}
        allowsEmptyCollection={allowsEmptyCollection}
        aria-label={label === null ? ariaLabel : undefined}
        items={options}
      >
        {label !== null && (
          <Label className="mono cmb__label">{label}</Label>
        )}
        <div className="cmb__field">
          <Input className="cmb__input" placeholder={placeholder} />
          <Button className="cmb__btn" aria-label="Show suggestions">
            ▾
          </Button>
        </div>
        <Popover className="cmb__pop" offset={4}>
          <ListBox className="cmb__list">
            {(item) => (
              <ListBoxItem
                id={item.id}
                textValue={item.name}
                className="cmb__opt"
              >
                <span className="cmb__optName">{item.name}</span>
                <span className="cmb__optNote">{item.note}</span>
              </ListBoxItem>
            )}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
}

export function getComboboxSelectionLabel(
  options: ComboboxOption[],
  selectedKey: string | null,
) {
  return options.find((f) => f.id === selectedKey)?.name ?? "(none)";
}
