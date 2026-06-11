import { useState } from "react";
import { Menubar } from "../components/Menubar";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "menubar")!;

export default function MenubarExample() {
  const [last, setLast] = useState("—");

  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A menubar exposes top-level menus along a horizontal rail. Menus
          extend with check items, radio groups, separators, and nested
          submenus — all driven by the same arrow-key + type-ahead model.
        </p>
      }
      keys={[
        { keys: "← · →", effect: "Move between top-level menus." },
        { keys: "↓ · ↑", effect: "Open a menu and move between items." },
        { keys: "Enter · Space", effect: "Activate the focused item." },
        { keys: "Esc", effect: "Close the open menu." },
        { keys: "A–Z", effect: "Type-ahead within a menu." },
      ]}
      aria={[
        { token: "role=menubar", meaning: "Container with horizontal orientation." },
        { token: "role=menu", meaning: "Each opened popup." },
        { token: "role=menuitemcheckbox", meaning: "Toggleable items in the View menu." },
      ]}
    >
      <Menubar onSelect={setLast} />
      <p className="s-caption">
        Last selection: <strong>{last}</strong>
      </p>
    </Specimen>
  );
}
