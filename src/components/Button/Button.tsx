import {
  Button as RAButton,
  ToggleButton,
  type ButtonProps,
  type ToggleButtonProps,
} from "react-aria-components";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

function variantClass(variant: ButtonVariant): string {
  const base = "s-btn";
  switch (variant) {
    case "primary":
      return `${base} s-btn--primary`;
    case "ghost":
      return `${base} s-btn--ghost`;
    case "danger":
      return `${base} s-btn--danger`;
    default:
      return base;
  }
}

type ActionButtonProps = ButtonProps & { variant?: ButtonVariant };

export function ActionButton({
  variant = "secondary",
  className,
  ...props
}: ActionButtonProps) {
  const classes = [variantClass(variant), className].filter(Boolean).join(" ");
  return <RAButton className={classes} {...props} />;
}

type ToggleActionButtonProps = ToggleButtonProps;

export function ToggleActionButton({ className, ...props }: ToggleActionButtonProps) {
  const classes = ["s-btn", "btn__toggle", className].filter(Boolean).join(" ");
  return <ToggleButton className={classes} {...props} />;
}

export function ButtonRow({ children }: { children: React.ReactNode }) {
  return <div className="btn__row">{children}</div>;
}

export function ButtonGroup({ children }: { children: React.ReactNode }) {
  return <div className="btn">{children}</div>;
}
