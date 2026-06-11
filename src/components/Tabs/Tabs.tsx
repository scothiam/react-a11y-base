import * as Tb from "@radix-ui/react-tabs";
import "./Tabs.css";

export type TabItem = {
  value: string;
  label: string;
  body: React.ReactNode;
};

type Props = {
  tabs: TabItem[];
  defaultValue?: string;
  listLabel?: string;
  activationMode?: "automatic" | "manual";
  className?: string;
};

export function Tabs({
  tabs,
  defaultValue,
  listLabel,
  activationMode = "automatic",
  className = "tabs",
}: Props) {
  const initial = defaultValue ?? tabs[0]?.value;

  return (
    <Tb.Root defaultValue={initial} className={className} activationMode={activationMode}>
      <Tb.List className="tabs__list" aria-label={listLabel}>
        {tabs.map((t) => (
          <Tb.Trigger key={t.value} value={t.value} className="tabs__tab">
            {t.label}
          </Tb.Trigger>
        ))}
      </Tb.List>
      {tabs.map((t) => (
        <Tb.Content key={t.value} value={t.value} className="tabs__panel">
          {t.body}
        </Tb.Content>
      ))}
    </Tb.Root>
  );
}
