import * as DM from "@radix-ui/react-dropdown-menu";
import "../Menu/Menu.css";

type Props = {
  onSelect?: (action: string) => void;
  className?: string;
};

export function MenuButton({ onSelect, className = "menu" }: Props) {
  return (
    <div className={className}>
      <DM.Root>
        <DM.Trigger asChild>
          <button className="s-btn">
            File actions <span aria-hidden="true">▾</span>
          </button>
        </DM.Trigger>
        <DM.Portal>
          <DM.Content className="menu__content" align="start" sideOffset={6}>
            <DM.Label className="menu__label mono">File</DM.Label>
            <DM.Item className="menu__item" onSelect={() => onSelect?.("New specimen")}>
              New specimen <span className="mono menu__kbd">⌘N</span>
            </DM.Item>
            <DM.Item className="menu__item" onSelect={() => onSelect?.("Open from disk")}>
              Open from disk… <span className="mono menu__kbd">⌘O</span>
            </DM.Item>
            <DM.Separator className="menu__sep" />
            <DM.Label className="menu__label mono">Export</DM.Label>
            <DM.Item className="menu__item" onSelect={() => onSelect?.("Export as PDF")}>
              Export as PDF
            </DM.Item>
            <DM.Item className="menu__item" onSelect={() => onSelect?.("Export as HTML")}>
              Export as HTML
            </DM.Item>
            <DM.Sub>
              <DM.SubTrigger className="menu__item menu__item--sub">
                More formats <span aria-hidden="true">›</span>
              </DM.SubTrigger>
              <DM.Portal>
                <DM.SubContent className="menu__content" sideOffset={4} alignOffset={-4}>
                  <DM.Item className="menu__item" onSelect={() => onSelect?.("Export as EPUB")}>
                    EPUB
                  </DM.Item>
                  <DM.Item className="menu__item" onSelect={() => onSelect?.("Export as Plain text")}>
                    Plain text
                  </DM.Item>
                </DM.SubContent>
              </DM.Portal>
            </DM.Sub>
            <DM.Separator className="menu__sep" />
            <DM.Item
              className="menu__item menu__item--danger"
              onSelect={() => onSelect?.("Discarded changes")}
            >
              Discard changes
            </DM.Item>
          </DM.Content>
        </DM.Portal>
      </DM.Root>
    </div>
  );
}
