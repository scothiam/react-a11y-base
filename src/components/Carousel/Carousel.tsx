import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "./Carousel.css";

export type CarouselSlide = {
  n: string;
  t: string;
  q: string;
};

type Props = {
  slides: CarouselSlide[];
  label?: string;
  autoRotateMs?: number;
  className?: string;
};

export function Carousel({
  slides,
  label = "Featured typefaces",
  autoRotateMs = 4500,
  className = "car",
}: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  useEffect(() => {
    if (!embla || paused) return;
    const id = window.setInterval(() => embla.scrollNext(), autoRotateMs);
    return () => window.clearInterval(id);
  }, [embla, paused, autoRotateMs]);

  return (
    <section
      className={className}
      aria-roledescription="carousel"
      aria-label={label}
      aria-live={paused ? "polite" : "off"}
    >
      <div className="car__viewport" ref={emblaRef}>
        <div className="car__track">
          {slides.map((s, i) => (
            <article
              key={i}
              id={`slide-${i}`}
              className="car__slide"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${s.t}`}
            >
              <span className="mono car__num">{s.n}</span>
              <h4 className="car__title">{s.t}</h4>
              <p className="car__quote">“{s.q}”</p>
            </article>
          ))}
        </div>
      </div>

      <div className="car__controls">
        <button type="button" className="s-btn" onClick={scrollPrev} aria-label="Previous slide">
          ‹ Prev
        </button>
        <button
          type="button"
          className="s-btn"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
        >
          {paused ? "Resume rotation" : "Pause rotation"}
        </button>
        <button type="button" className="s-btn" onClick={scrollNext} aria-label="Next slide">
          Next ›
        </button>
      </div>

      <ol className="car__dots" role="tablist" aria-label="Choose slide">
        {slides.map((s, i) => (
          <li key={i}>
            <button
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-controls={`slide-${i}`}
              className="car__dot"
              data-active={i === index}
              onClick={() => scrollTo(i)}
            >
              <span className="sr">Slide {i + 1}: {s.t}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
