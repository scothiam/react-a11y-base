import { Feed } from "../components/Feed";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "feed")!;

export default function FeedExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A feed is a scrollable region that loads more content as the user
          nears the end. Each article exposes its position with{" "}
          <code>aria-posinset</code> and <code>aria-setsize</code>, and the
          loading state lives in a polite live region.
        </p>
      }
      extension="lazy infinite scroll via IntersectionObserver + Load more fallback button"
      keys={[
        { keys: "Tab", effect: "Enter the feed; each article is focusable." },
        { keys: "Page Down · Page Up", effect: "Move between articles (Radix default focus management)." },
        { keys: "End", effect: "Skip to the loading sentinel / Load more control." },
      ]}
      aria={[
        { token: "role=feed", meaning: "On the scrollable container." },
        { token: "role=article", meaning: "Each post, with aria-posinset and aria-setsize." },
        { token: "aria-busy", meaning: "True on the feed while new content is loading." },
      ]}
    >
      <Feed />
    </Specimen>
  );
}
