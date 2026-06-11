import { Link } from "../components/Link";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "link")!;

const ITEMS = [
  {
    id: "wai",
    href: "https://www.w3.org/WAI/",
    label: "W3C Web Accessibility Initiative",
    external: true,
  },
  {
    id: "ra",
    href: "https://react-spectrum.adobe.com/react-aria/Link.html",
    label: "React Aria Components — Link",
    external: true,
  },
  {
    id: "soon",
    href: "#",
    label: "Coming soon (disabled link)",
    disabled: true,
  },
];

export default function LinkExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          Links navigate; buttons act. If activation moves the user to a new
          resource — internal or external — it’s a link. React Aria’s{" "}
          <code>Link</code> normalises press/hover/focus state across input
          modalities while leaving the underlying <code>&lt;a&gt;</code> intact.
        </p>
      }
      keys={[
        { keys: "Enter", effect: "Follow the link (Space does not activate a link)." },
        { keys: "Tab · Shift+Tab", effect: "Move focus through links." },
      ]}
      aria={[
        { token: "role=link", meaning: "Native on <a href>; do not re-add." },
        { token: "aria-current", meaning: "Marks the current page on navigation links." },
      ]}
    >
      <Link items={ITEMS} />
    </Specimen>
  );
}
