import * as D from "@radix-ui/react-dialog";
import { useState } from "react";
import "./Dialog.css";

type Props = {
  triggerLabel?: string;
  onSave?: (name: string) => void;
  className?: string;
};

export function Dialog({
  triggerLabel = "Rename specimen…",
  onSave,
  className = "dlg",
}: Props) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();
    onSave?.(name || "(empty)");
    setOpen(false);
  }

  return (
    <div className={className}>
      <D.Root open={open} onOpenChange={setOpen}>
        <D.Trigger asChild>
          <button className="s-btn s-btn--primary">{triggerLabel}</button>
        </D.Trigger>
        <D.Portal>
          <D.Overlay className="dlg__overlay" />
          <D.Content className="dlg__content">
            <span className="mono dlg__kicker">Edit metadata</span>
            <D.Title className="dlg__title">Rename specimen</D.Title>
            <D.Description className="dlg__desc">
              Give this specimen a short, distinctive name. It will appear in
              the sidebar and in the printed colophon.
            </D.Description>
            <form onSubmit={save} className="dlg__form">
              <label className="s-field">
                <span>Display name</span>
                <input
                  autoFocus
                  className="s-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Trifold Accordion"
                />
              </label>
              <div className="dlg__row">
                <D.Close asChild>
                  <button type="button" className="s-btn">
                    Cancel
                  </button>
                </D.Close>
                <button type="submit" className="s-btn s-btn--primary">
                  Save
                </button>
              </div>
            </form>
          </D.Content>
        </D.Portal>
      </D.Root>
    </div>
  );
}
