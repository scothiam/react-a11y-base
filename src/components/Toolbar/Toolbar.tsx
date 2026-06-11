import * as Tb from "@radix-ui/react-toolbar";
import { useState } from "react";
import "./Toolbar.css";

type Props = {
  className?: string;
};

export function Toolbar({ className = "tb" }: Props) {
  const [style, setStyle] = useState<string[]>(["bold"]);
  const [align, setAlign] = useState("left");

  return (
    <div className={className}>
      <Tb.Root className="tb__root" aria-label="Formatting">
        <Tb.ToggleGroup
          type="multiple"
          value={style}
          onValueChange={setStyle}
          className="tb__group"
          aria-label="Text style"
        >
          <Tb.ToggleItem className="tb__btn" value="bold" aria-label="Bold">
            <strong>B</strong>
          </Tb.ToggleItem>
          <Tb.ToggleItem className="tb__btn" value="italic" aria-label="Italic">
            <em>I</em>
          </Tb.ToggleItem>
          <Tb.ToggleItem className="tb__btn" value="underline" aria-label="Underline">
            <u>U</u>
          </Tb.ToggleItem>
          <Tb.ToggleItem className="tb__btn" value="strike" aria-label="Strikethrough">
            <s>S</s>
          </Tb.ToggleItem>
        </Tb.ToggleGroup>

        <Tb.Separator className="tb__sep" />

        <Tb.ToggleGroup
          type="single"
          value={align}
          onValueChange={(v) => v && setAlign(v)}
          className="tb__group"
          aria-label="Alignment"
        >
          <Tb.ToggleItem className="tb__btn" value="left" aria-label="Align left">
            <span aria-hidden="true">⫷</span>
          </Tb.ToggleItem>
          <Tb.ToggleItem className="tb__btn" value="center" aria-label="Align centre">
            <span aria-hidden="true">≡</span>
          </Tb.ToggleItem>
          <Tb.ToggleItem className="tb__btn" value="right" aria-label="Align right">
            <span aria-hidden="true">⫸</span>
          </Tb.ToggleItem>
        </Tb.ToggleGroup>

        <Tb.Separator className="tb__sep" />

        <Tb.Link className="tb__link" href="https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/" target="_blank" rel="noreferrer">
          APG spec ↗
        </Tb.Link>
        <Tb.Button className="s-btn s-btn--primary" style={{ marginLeft: "auto" }}>
          Publish
        </Tb.Button>
      </Tb.Root>

      <p
        className="tb__preview"
        style={{
          fontWeight: style.includes("bold") ? 700 : 400,
          fontStyle: style.includes("italic") ? "italic" : "normal",
          textDecoration: [
            style.includes("underline") ? "underline" : "",
            style.includes("strike") ? "line-through" : "",
          ].filter(Boolean).join(" "),
          textAlign: align as React.CSSProperties["textAlign"],
        }}
      >
        The toolbar holds a single tab stop. Press <kbd>Tab</kbd> in, then
        ride the arrow keys to traverse without leaving the group.
      </p>
    </div>
  );
}
