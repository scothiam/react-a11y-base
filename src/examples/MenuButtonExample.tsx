import { useState } from "react";
import { MenuButton } from "../components/MenuButton";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "menu-button")!;

export default function MenuButtonExample() {
  const [chosen, setChosen] = useState("Export as PDF");

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A menu button opens a menu of actions. It differs from a combobox
          (which exposes a list to choose <em>from</em>) and from a tab list
          (which switches panels) by surfacing one-shot commands.
        </p>
      }
      keys={[
        { keys: "Enter · Space · ↓", effect: "Open the menu and focus first item." },
        { keys: "↑ · ↓", effect: "Move between items." },
        { keys: "Home · End", effect: "Jump to first or last item." },
        { keys: "Esc", effect: "Close the menu and restore focus to the button." },
        { keys: "A–Z", effect: "Type-ahead to next item starting with the letter." },
      ]}
      aria={[
        { token: "aria-haspopup=\"menu\"", meaning: "Marks the trigger as opening a menu." },
        { token: "aria-expanded", meaning: "True while the menu is open." },
        { token: "role=menu / menuitem", meaning: "Applied to the popup and its children." },
      ]}
    >
      <MenuButton onSelect={setChosen} />
      <p className="s-caption">
        Last action: <strong>{chosen}</strong>
      </p>
    </Specimen>
  );
}
