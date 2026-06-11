import { useEffect, useMemo, useRef, useState } from "react";
import "./Feed.css";

export type FeedPost = { id: number; title: string; meta: string; body: string };

const DEFAULT_TITLES = [
  "On the optical sizes of Fraunces",
  "Notes on warm paper",
  "Why one accent colour is enough",
  "Setting the baseline grid at 88 px",
  "A defence of italic display",
  "Mono labels as visual rhythm",
  "Specimen sheets, then and now",
  "The case against three accents",
  "Letterspacing as breath",
  "Drafting a specimen colophon",
  "Caution orange, a personal history",
  "On thinking with the keyboard",
];

export function makeFeedPost(i: number, titles = DEFAULT_TITLES): FeedPost {
  const title = titles[i % titles.length];
  return {
    id: i,
    title,
    meta: `№${String(i + 1).padStart(3, "0")} · 4 min read · Studio Notes`,
    body:
      "We keep returning to the same handful of moves: a deep ink set on warm paper, hairline rules organising the page, a single signal colour interrupting the brown-and-cream calm. The longer we work in this register the more we trust that restraint is generative rather than limiting.",
  };
}

type Props = {
  initialCount?: number;
  batchSize?: number;
  label?: string;
  className?: string;
};

export function Feed({
  initialCount = 4,
  batchSize = 3,
  label = "Studio Notes",
  className = "feed",
}: Props) {
  const [posts, setPosts] = useState<FeedPost[]>(() =>
    Array.from({ length: initialCount }, (_, i) => makeFeedPost(i))
  );
  const [busy, setBusy] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  function loadMore() {
    if (busy) return;
    setBusy(true);
    window.setTimeout(() => {
      setPosts((prev) => [
        ...prev,
        ...Array.from({ length: batchSize }, (_, i) => makeFeedPost(prev.length + i)),
      ]);
      setBusy(false);
    }, 350);
  }

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) loadMore();
      },
      { rootMargin: "240px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = useMemo(() => posts.length, [posts]);

  return (
    <section
      className={className}
      role="feed"
      aria-busy={busy}
      aria-label={label}
      tabIndex={0}
    >
      {posts.map((p) => (
        <article
          key={p.id}
          className="feed__article"
          aria-posinset={p.id + 1}
          aria-setsize={-1}
          tabIndex={0}
        >
          <header>
            <p className="mono feed__meta">{p.meta}</p>
            <h4 className="feed__title">{p.title}</h4>
          </header>
          <p className="feed__body">{p.body}</p>
        </article>
      ))}

      <div ref={sentinelRef} className="feed__sentinel" aria-live="polite">
        {busy ? "Loading more…" : `Showing ${total} articles · scroll for more`}
      </div>
      <button type="button" className="s-btn s-btn--ghost feed__more" onClick={loadMore}>
        Load more manually
      </button>
    </section>
  );
}
