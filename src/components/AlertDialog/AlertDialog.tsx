import * as AD from "@radix-ui/react-alert-dialog";
import "./AlertDialog.css";

type Props = {
  onCancel?: () => void;
  onConfirm?: () => void;
  className?: string;
};

export function AlertDialog({
  onCancel,
  onConfirm,
  className = "adlg",
}: Props) {
  return (
    <div className={className}>
      <AD.Root>
        <AD.Trigger asChild>
          <button className="s-btn s-btn--danger">Delete project…</button>
        </AD.Trigger>
        <AD.Portal>
          <AD.Overlay className="adlg__overlay" />
          <AD.Content className="adlg__content">
            <span className="mono adlg__kicker">Confirmation required</span>
            <AD.Title className="adlg__title">Delete this project?</AD.Title>
            <AD.Description className="adlg__desc">
              Deleting <em>Specimen Library</em> will permanently remove its
              drafts, notes, and rendered patterns. This action cannot be
              undone.
            </AD.Description>
            <div className="adlg__row">
              <AD.Cancel asChild>
                <button className="s-btn" onClick={onCancel}>
                  Keep project
                </button>
              </AD.Cancel>
              <AD.Action asChild>
                <button className="s-btn s-btn--danger" onClick={onConfirm}>
                  Yes, delete
                </button>
              </AD.Action>
            </div>
          </AD.Content>
        </AD.Portal>
      </AD.Root>
    </div>
  );
}
