import { Carousel } from "../components/Carousel";
import Specimen from "./Specimen/Specimen";
import { PATTERNS } from "../data/patterns";

const pattern = PATTERNS.find((p) => p.slug === "carousel")!;

const SLIDES = [
  { n: "i.", t: "Fraunces", q: "A contemporary Latin serif inspired by the type used in vintage advertising." },
  { n: "ii.", t: "JetBrains Mono", q: "A typeface for developers, designed for the long days at the screen." },
  { n: "iii.", t: "Newsreader", q: "A workhorse text family for long-form reading on screens and in print." },
  { n: "iv.", t: "Literata", q: "A reading family that adapts to small screens and tight columns." },
  { n: "v.", t: "Redaction", q: "An italic-only display face, drawn for the contemporary art world." },
];

export default function CarouselExample() {
  return (
    <Specimen
      pattern={pattern}
      description={
        <p>
          A carousel cycles a region through a sequence of slides. The APG
          requires a visible pause control whenever advance is automatic, a
          live region naming the current slide, and per-slide controls
          discoverable by keyboard.
        </p>
      }
      extension="auto-rotate with pause + live region announcing the current slide"
      keys={[
        { keys: "Tab", effect: "Enter the carousel and reach the controls." },
        { keys: "← · →", effect: "Move to the previous or next slide (when focus is inside)." },
        { keys: "Space", effect: "Toggle automatic rotation." },
      ]}
      aria={[
        { token: "role=region", meaning: "On the root, with aria-roledescription=\"carousel\"." },
        { token: "aria-live=polite", meaning: "On the slide list when auto-rotating is paused." },
        { token: "aria-roledescription=\"slide\"", meaning: "Each slide identifies as such, with x of n label." },
      ]}
    >
      <Carousel slides={SLIDES} />
    </Specimen>
  );
}
