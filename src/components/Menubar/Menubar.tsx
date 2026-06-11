import * as Mb from "@radix-ui/react-menubar";
import { useState } from "react";
import "../Menu/Menu.css";

type Props = {
  onSelect?: (action: string) => void;
  className?: string;
};

export function Menubar({ onSelect, className = "menu" }: Props) {
  const [sidebar, setSidebar] = useState(true);
  const [inspector, setInspector] = useState(false);

  return (
    <div className={className}>
      <Mb.Root className="menubar">
        <Mb.Menu>
          <Mb.Trigger className="menubar__trigger">File</Mb.Trigger>
          <Mb.Portal>
            <Mb.Content className="menubar__content" align="start" sideOffset={4}>
              <Mb.Item className="menubar__item" onSelect={() => onSelect?.("New")}>New</Mb.Item>
              <Mb.Item className="menubar__item" onSelect={() => onSelect?.("Open…")}>Open…</Mb.Item>
              <Mb.Item className="menubar__item" onSelect={() => onSelect?.("Save")}>Save</Mb.Item>
              <Mb.Separator className="menubar__sep" />
              <Mb.Item className="menubar__item" onSelect={() => onSelect?.("Quit")}>Quit</Mb.Item>
            </Mb.Content>
          </Mb.Portal>
        </Mb.Menu>

        <Mb.Menu>
          <Mb.Trigger className="menubar__trigger">Edit</Mb.Trigger>
          <Mb.Portal>
            <Mb.Content className="menubar__content" align="start" sideOffset={4}>
              <Mb.Item className="menubar__item" onSelect={() => onSelect?.("Undo")}>Undo</Mb.Item>
              <Mb.Item className="menubar__item" onSelect={() => onSelect?.("Redo")}>Redo</Mb.Item>
              <Mb.Separator className="menubar__sep" />
              <Mb.Sub>
                <Mb.SubTrigger className="menubar__item">Find ›</Mb.SubTrigger>
                <Mb.Portal>
                  <Mb.SubContent className="menubar__content" sideOffset={4}>
                    <Mb.Item className="menubar__item" onSelect={() => onSelect?.("Find in file")}>In file</Mb.Item>
                    <Mb.Item className="menubar__item" onSelect={() => onSelect?.("Find in project")}>In project</Mb.Item>
                  </Mb.SubContent>
                </Mb.Portal>
              </Mb.Sub>
            </Mb.Content>
          </Mb.Portal>
        </Mb.Menu>

        <Mb.Menu>
          <Mb.Trigger className="menubar__trigger">View</Mb.Trigger>
          <Mb.Portal>
            <Mb.Content className="menubar__content" align="start" sideOffset={4}>
              <Mb.CheckboxItem
                className="menubar__item"
                checked={sidebar}
                onCheckedChange={(v) => {
                  setSidebar(v === true);
                  onSelect?.(`Sidebar ${v ? "on" : "off"}`);
                }}
              >
                <Mb.ItemIndicator asChild>
                  <span className="menubar__check" aria-hidden="true">✓</span>
                </Mb.ItemIndicator>
                {!sidebar && <span className="menubar__check" aria-hidden="true" />}
                Sidebar
              </Mb.CheckboxItem>
              <Mb.CheckboxItem
                className="menubar__item"
                checked={inspector}
                onCheckedChange={(v) => {
                  setInspector(v === true);
                  onSelect?.(`Inspector ${v ? "on" : "off"}`);
                }}
              >
                <Mb.ItemIndicator asChild>
                  <span className="menubar__check" aria-hidden="true">✓</span>
                </Mb.ItemIndicator>
                {!inspector && <span className="menubar__check" aria-hidden="true" />}
                Inspector
              </Mb.CheckboxItem>
            </Mb.Content>
          </Mb.Portal>
        </Mb.Menu>
      </Mb.Root>
    </div>
  );
}
