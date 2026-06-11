import * as Col from "@radix-ui/react-collapsible";
import { useState, type ReactNode } from "react";
import "./Disclosure.css";

type Props = {
  label: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function Disclosure({
  label,
  children,
  defaultOpen = false,
  className = "dsc",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Col.Root open={open} onOpenChange={setOpen} className={className}>
      <Col.Trigger asChild>
        <button className="dsc__trigger">
          <span className="dsc__chevron" aria-hidden="true">
            {open ? "▾" : "▸"}
          </span>
          <span className="dsc__label">{label}</span>
        </button>
      </Col.Trigger>
      <Col.Content className="dsc__content">
        <div className="dsc__panel">{children}</div>
      </Col.Content>
    </Col.Root>
  );
}
