import { Breadcrumb } from "../components/Breadcrumb";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "breadcrumb")!;

const TRAIL = [
  { id: "home", label: "Library", href: "#" },
  { id: "vol", label: "Vol. 01", href: "#" },
  { id: "section", label: "Form controls", href: "#" },
  { id: "current", label: "Breadcrumb" },
];

export default function BreadcrumbExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A breadcrumb trail names the page’s ancestors in hierarchical order.
          The trail itself sits inside a <code>nav</code> landmark; the current
          page becomes the last item but is not a link.
        </p>
      }
      keys={[
        { keys: "Tab · Shift+Tab", effect: "Move through the link items." },
        { keys: "Enter", effect: "Activate the focused link." },
      ]}
      aria={[
        { token: "aria-label=\"Breadcrumb\"", meaning: "Labels the surrounding nav landmark." },
        { token: "aria-current=\"page\"", meaning: "Set on the trailing item to mark current page." },
      ]}
    >
      <Breadcrumb items={TRAIL} />
      <p className="s-caption">
        The slash is hidden from assistive tech; the trail is read as a list.
      </p>
    </Specimen>
  );
}
