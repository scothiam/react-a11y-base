import * as Acc from "@radix-ui/react-accordion";
import "./Accordion.css";

export type AccordionItem = {
  id: string;
  head: string;
  body: string;
};

type Props = {
  items: AccordionItem[];
  /** Radix value ids open by default (multiple mode) */
  defaultValue?: string[];
  className?: string;
};

export function Accordion({
  items,
  defaultValue,
  className = "acc",
}: Props) {
  return (
    <Acc.Root type="multiple" className={className} defaultValue={defaultValue}>
      {items.map((i) => (
        <Acc.Item key={i.id} value={i.id} className="acc__item">
          <Acc.Header asChild>
            <h3 className="acc__h">
              <Acc.Trigger className="acc__trigger">
                <span className="acc__indicator" aria-hidden="true">
                  ▸
                </span>
                <span className="acc__label">{i.head}</span>
                <span className="mono acc__hint" aria-hidden="true" />
              </Acc.Trigger>
            </h3>
          </Acc.Header>
          <Acc.Content className="acc__content">
            <p>{i.body}</p>
          </Acc.Content>
        </Acc.Item>
      ))}
    </Acc.Root>
  );
}
