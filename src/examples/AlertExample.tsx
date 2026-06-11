import { Alert } from "../components/Alert";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "alert")!;

export default function AlertExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          An <strong>alert</strong> is a live, non-modal region whose contents
          are announced as soon as they appear. The APG advises a small,
          purpose-built component rather than reusing this role for general
          status messages. This demo wires assertive and polite live regions to
          three sample buttons.
        </p>
      }
      extension="hand-rolled — the APG explicitly prefers a tiny custom component over a third-party widget for this pattern."
      keys={[
        { keys: "Tab", effect: "Move focus through the trigger buttons." },
        { keys: "Enter · Space", effect: "Activate a trigger and push a new alert." },
      ]}
      aria={[
        { token: "role=alert", meaning: "Implies aria-live=\"assertive\" and aria-atomic=\"true\"." },
        { token: "role=status", meaning: "Polite alternative for non-urgent updates." },
        { token: "aria-live", meaning: "Set explicitly when role can't be used." },
      ]}
    >
      <Alert />
      <p className="s-caption">
        Use sparingly — assertive announcements interrupt the user’s current
        screen-reader output.
      </p>
    </Specimen>
  );
}
