import * as Tt from "@radix-ui/react-tooltip";
import { Fragment } from "react";
import "./Tooltip.css";

export type TooltipHint = { key: string; label: string; body: string };

type Props = {
  hints: TooltipHint[];
  lede?: string;
  bodyPrefix?: string;
  bodySuffix?: string;
  delayDuration?: number;
  className?: string;
};

export function Tooltip({
  hints,
  lede = "Hover or tab onto each highlighted term to read its definition.",
  bodyPrefix = "Set your body type with thoughtful ",
  bodySuffix = " The body settles, the page becomes inviting, and readers reach the end without realising they read at all.",
  delayDuration = 150,
}: Props) {
  return (
    <Tt.Provider delayDuration={delayDuration}>
      <p className="tt__lede">{lede}</p>
      <p className="tt__body">
        {bodyPrefix}
        {hints.map((h, i) => {
          const tail =
            i < hints.length - 2 ? "," : i === hints.length - 2 ? ", and" : ".";
          return (
            <Fragment key={h.key}>
              <span className="tt__chunk">
                <Tt.Root>
                  <Tt.Trigger asChild>
                    <button type="button" className="tt__term">
                      {h.label}
                    </button>
                  </Tt.Trigger>
                  <Tt.Portal>
                    <Tt.Content className="tt__content" sideOffset={6}>
                      <strong className="tt__head">{h.label}</strong>
                      <span>{h.body}</span>
                      <Tt.Arrow className="tt__arrow" />
                    </Tt.Content>
                  </Tt.Portal>
                </Tt.Root>
                {tail}
              </span>{" "}
            </Fragment>
          );
        })}
        {bodySuffix}
      </p>
    </Tt.Provider>
  );
}
