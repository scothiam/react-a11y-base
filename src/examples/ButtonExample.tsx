import { useState } from "react";
import {
  ActionButton,
  ButtonGroup,
  ButtonRow,
  ToggleActionButton,
} from "../components/Button";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "button")!;

export default function ButtonExample() {
  const [pressed, setPressed] = useState(false);
  const [count, setCount] = useState(0);
  const bump = () => setCount((c) => c + 1);

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A button is the most ordinary widget on the web and the most often
          built wrong. React Aria’s <code>Button</code> wraps a native{" "}
          <code>&lt;button&gt;</code> with consistent keyboard, focus, and
          press behaviour across pointer, touch, and assistive tech.
        </p>
      }
      keys={[
        { keys: "Enter · Space", effect: "Activate the focused button." },
        { keys: "Tab", effect: "Move to the next focusable control." },
      ]}
      aria={[
        { token: "role=button", meaning: "Native on <button>; do not duplicate." },
        { token: "aria-pressed", meaning: "True/false on toggle buttons." },
        { token: "aria-disabled", meaning: "Preferred over disabled when the button must remain focusable." },
      ]}
    >
      <ButtonGroup>
        <ButtonRow>
          <ActionButton variant="primary" onPress={bump}>
            Primary action
          </ActionButton>
          <ActionButton onPress={bump}>Secondary</ActionButton>
          <ActionButton variant="ghost" onPress={bump}>
            Ghost
          </ActionButton>
          <ActionButton variant="danger" onPress={bump}>
            Destructive
          </ActionButton>
          <ActionButton isDisabled>Disabled</ActionButton>
        </ButtonRow>

        <ButtonRow>
          <ToggleActionButton isSelected={pressed} onChange={setPressed}>
            {pressed ? "★ Saved" : "☆ Save"}
          </ToggleActionButton>
          <span className="btn__counter mono">activations: {count}</span>
        </ButtonRow>

        <p className="s-caption">
          React Aria emits <code>data-pressed</code>, <code>data-hovered</code>,
          <code> data-focus-visible</code>, and <code>data-disabled</code> for
          styling without prop drilling.
        </p>
      </ButtonGroup>
    </Specimen>
  );
}
