# react-a11y-base

A live React catalogue of every interaction pattern in the
[W3C WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/).
Each pattern is rendered as a typeset specimen sheet: described, demonstrated,
keyed, and notated.

Every demo is built on an off-the-shelf accessible React library and, where the
library does not cover a particular note in the APG, extended in this codebase.
The extension is recorded in each specimen’s header.

## Stack

- [Vite](https://vitejs.dev/) + React 19 + TypeScript
- [React Router](https://reactrouter.com/) for per-pattern routes
- [Radix UI Primitives](https://www.radix-ui.com/primitives) — accordion,
  alert dialog, checkbox, collapsible, dialog, dropdown menu, menubar, radio
  group, slider, switch, tabs, toolbar, tooltip
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/) —
  breadcrumb, button, combobox, link, listbox, meter, number field
  (spinbutton), table
- [Embla Carousel](https://www.embla-carousel.com/) — carousel
- [React Arborist](https://github.com/brimdata/react-arborist) — tree view +
  treegrid
- [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)
  — window splitter
- [TanStack Table](https://tanstack.com/table) — interactive grid

Two themes ship out of the box:

- **`base`** *(active by default)* — a clean, Bootstrap-flavoured base theme:
  system sans, white surfaces on a light grey ground, blue accent, compact
  rows. This is the starting point every downstream project imports and
  overrides with their own tokens.
- **`specimen`** — the original editorial "type specimen" look: warm paper,
  deep ink, vintage caution-orange accent, Fraunces + JetBrains Mono.

Switching between them, or wiring up a new project-specific theme, is a
one-line change. See [Theming](#theming) below.

## Patterns

| № | Pattern | Library |
| -- | ------- | ------- |
| 01 | Accordion | @radix-ui/react-accordion |
| 02 | Alert | custom (`role="alert"`) |
| 03 | Alert Dialog | @radix-ui/react-alert-dialog |
| 04 | Breadcrumb | react-aria-components |
| 05 | Button | react-aria-components |
| 06 | Carousel | embla-carousel-react |
| 07 | Checkbox | @radix-ui/react-checkbox |
| 08 | Combobox | react-aria-components |
| 09 | Dialog (Modal) | @radix-ui/react-dialog |
| 10 | Disclosure | @radix-ui/react-collapsible |
| 11 | Feed | custom (IntersectionObserver) |
| 12 | Grid | @tanstack/react-table |
| 13 | Landmarks | semantic HTML5 |
| 14 | Link | react-aria-components |
| 15 | Listbox | react-aria-components |
| 16 | Menu and Menubar | @radix-ui/react-menubar |
| 17 | Menu Button | @radix-ui/react-dropdown-menu |
| 18 | Meter | react-aria-components |
| 19 | Radio Group | @radix-ui/react-radio-group |
| 20 | Slider | @radix-ui/react-slider |
| 21 | Slider (Multi-Thumb) | @radix-ui/react-slider |
| 22 | Spinbutton | react-aria-components (NumberField) |
| 23 | Switch | @radix-ui/react-switch |
| 24 | Table | react-aria-components |
| 25 | Tabs | @radix-ui/react-tabs |
| 26 | Toolbar | @radix-ui/react-toolbar |
| 27 | Tooltip | @radix-ui/react-tooltip |
| 28 | Tree View | react-arborist |
| 29 | Treegrid | react-arborist (extended) |
| 30 | Window Splitter | react-resizable-panels |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle (+ sitemap.xml + robots.txt)
npm run preview  # serve the production build
npm run lint
```

### Theming

This project is designed to act as the **base template** for a family of
sibling apps. The layout, components and ARIA scaffolding stay constant; only
the visual layer changes per project.

#### How it works

```
src/
  index.css                 # universal resets + focus rings (theme-agnostic)
  main.tsx                  # imports themes/active.css then index.css
  themes/
    active.css              # 1-line @import — picks the active theme
    specimen.css            # editorial type-specimen look
    base.css              # Bootstrap-y dashboard look (default)
    <your-theme>.css        # drop a new file here per downstream project
```

Each pattern's CSS file consumes only shared **CSS custom properties**
(`--paper`, `--ink`, `--mark`, `--font-display`, `--font-body`, `--font-mono`,
`--rule`, `--radius`, etc.) plus the reusable `.s-*` stage primitives. A
theme file therefore needs to do two things:

1. Redefine the design tokens on `:root`.
2. Optionally restyle the `.s-*` primitives and override any layout-level
   flourishes the base aesthetic adds (the dotted body background, italic
   display headings, oversized specimen numerals, etc.).

Overrides in a theme file are prefixed with `body` (e.g. `body .spec__name { … }`)
so they out-specify the per-pattern CSS that Vite injects lazily when a route
is opened. That detail keeps each theme self-contained — pattern CSS files
never need to know which theme is active.

#### Switching themes

Edit one line in `src/themes/active.css`:

```css
@import "./base.css";   /* or "./specimen.css", or "./your-theme.css" */
```

Restart `npm run dev` (Vite picks the change up on the next page reload).

#### Adding a project-specific theme

1. Copy `src/themes/base.css` to `src/themes/<your-project>.css` and
   adjust the tokens + overrides to taste.
2. Point `src/themes/active.css` at it.
3. If the theme uses external webfonts, add an `@import url(...)` at the top
   of the theme file (rather than putting it in `index.html`) so the font
   request only goes out when that theme is active. The `specimen` theme is
   a worked example.

That's the whole contract. Everything else — routes, ARIA, keyboard models,
the sidebar shell, the specimen header layout — is shared infrastructure.

### Sitemap

Export **`createSitemapPlugin`** from `react-a11y-base/vite/sitemap`. Each
consumer app supplies a small `src/sitemap.entries.js` that returns the paths
to include; the plugin serves `/sitemap.xml` and `/robots.txt` in dev and
writes both into `dist/` on build.

**Dev:** middleware runs before React Router — use the port Vite prints
(e.g. `curl http://localhost:5173/sitemap.xml`). `<loc>` URLs use the dev
server host so local a11y scans work.

**Production:** set `VITE_SITE_URL` before `npm run build` so `<loc>` uses your
real origin (S3/CloudFront URL). Upload `dist/sitemap.xml` and `dist/robots.txt`
with the rest of the static site.

#### Wire up a frontend

1. Add `src/sitemap.entries.js`:

```js
/** @returns {{ loc: string, priority?: string, changefreq?: string }[]} */
export default function getEntries() {
  return [{ loc: '/', priority: '1.0', changefreq: 'weekly' }];
}
```

For study guides, import JSON and use the helper:

```js
import guides from './data/study-guides.json';
import { pathsFromStudyGuides } from 'react-a11y-base/vite/sitemap';

export default function getEntries() {
  return pathsFromStudyGuides(guides);
}
```

2. Register the plugin in `vite.config.js`:

```js
import { createSitemapPlugin } from 'react-a11y-base/vite/sitemap';
import getEntries from './src/sitemap.entries.js';

export default defineConfig({
  plugins: [
    react(),
    createSitemapPlugin({ getEntries }),
  ],
});
```

3. Verify:

```bash
npm run dev
curl -sf http://localhost:5173/sitemap.xml | head
curl -sf http://localhost:5173/robots.txt

VITE_SITE_URL="https://your-domain.example" npm run build
ls dist/sitemap.xml dist/robots.txt
```

Requires **Vite >= 5** (peer dependency).

This library's pattern showcase uses the same plugin via `src/sitemap.entries.ts`
and `patterns.ts`.

#### Customising entries

Edit `src/sitemap.entries.js` in your app — add routes, read slugs from JSON,
filter paths. To change PDF/HTML layout of audit reports, see ai-dev-stack
`tasks/a11y/report.mjs` (separate from this plugin).

## Project layout

```
src/
  main.tsx                # bootstraps React Router; imports themes/active.css + index.css
  App.tsx                 # routes; lazily loads each example page
  index.css               # universal resets, focus rings, sr-only helper
  themes/
    active.css            # 1-line @import selecting the project's theme
    specimen.css          # editorial type-specimen tokens + primitives
    base.css            # Bootstrap-y dashboard tokens + primitives + overrides
  data/patterns.ts        # catalogue metadata for this demo site (slug, library, APG link)
  layout/
    Shell.tsx / .css      # app chrome (sidebar + main pane)
  components/             # reusable UI — copy these into downstream projects
    Accordion/
    Alert/
    AlertDialog/
    Breadcrumb/
    Button/
    Carousel/
    Checkbox/
    Combobox/
    Dialog/
    Disclosure/
    Feed/
    Grid/
    Landmarks/
    Link/
    Listbox/
    Menu/                   # shared Menu.css for MenuButton + Menubar
    MenuButton/
    Menubar/
    Meter/
    RadioGroup/
    Slider/                   # shared slider styles; SliderMulti imports these
    SliderMulti/
    Spinbutton/
    Switch/
    Table/
    Tabs/
    Toolbar/
    Tooltip/
    TreeView/
    Treegrid/
    WindowSplitter/
    index.ts              # barrel export for all components
  examples/               # W3C pattern showroom (site-specific demo pages)
    Specimen/             # documentation wrapper used by each example
    Home.tsx / .css       # colophon / index landing page
    <Pattern>Example.tsx  # thin: Specimen + demo data + docs
```

### Using components in another project

Add the git dependency (same pattern as gpu-price-checker, job-hunt, etc.):

```json
"react-a11y-base": "github:scothiam/react-a11y-base"
```

**CSS bootstrap** — import in this order from your app entry (`main.tsx` / `main.jsx`):

```tsx
import "react-a11y-base/index.css";        // resets, focus rings, .sr
import "react-a11y-base/styles";           // component structural CSS (lib/index.css)
import "react-a11y-base/themes/base.css";  // design tokens + .s-* primitives
import "./index.css";                      // project layout + token overrides only
```

Storybook previews should import the same three package stylesheets before local CSS.

**Components** — import from the package barrel:

```tsx
import { Accordion, Tabs, Table, Dialog } from "react-a11y-base";
```

**Vite dev** — exclude the library from dependency pre-bundling so the thin ESM
build is served as-is (avoids `Dynamic require of "react" is not supported`):

```ts
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["react-a11y-base"],
  },
});
```

After updating the git dependency, reinstall so the `prepare` hook rebuilds
`lib/index.js` (~2k lines, not a monolithic bundle):

```bash
rm -rf node_modules/react-a11y-base node_modules/.vite
npm install
```

Extend styling via CSS custom properties (`--mark`, `--surface`, `--paper`, etc.)
and scoped selectors in your project CSS. Do not fork components unless behaviour
must change.

Optional: add `src/themes/<project>.css` with token overrides and import it
after `themes/base.css` instead of redefining tokens in app CSS.

#### Copying source (alternative)

For heavy customization you can still copy `src/components/`, `src/themes/`, and
`src/index.css` into a project and import relatively:

```tsx
import { Accordion } from "./components/Accordion";
import { Tabs } from "./components/Tabs";
```

You do not need `examples/` or `data/patterns.ts` unless you want the specimen
gallery. Each component reads the shared CSS custom properties from whichever
theme is active.

## Adding a new pattern

1. Add the pattern’s metadata to `src/data/patterns.ts`.
2. Implement the reusable widget in `src/components/<Name>/` (if not already
   extracted).
3. Create `src/examples/<Name>Example.tsx` (+ optional `.css`) that wraps the
   component in `<Specimen pattern={…} description={…} keys={…} aria={…}>`.
4. Register the lazy route inside `src/App.tsx`.

Accordion, Tabs, and Button are the reference split — see
`components/Accordion/` + `examples/AccordionExample.tsx`. All 30 patterns
now follow this layout.

## Notes on accessibility

Every off-the-shelf primitive used here ships the APG-recommended ARIA roles,
states, and keyboard behaviour out of the box. The specimens are intentionally
thin wrappers — most accessibility work is delegated to the library. Where a
pattern is hand-rolled (Alert, Feed, Grid, Landmarks, Carousel) the ARIA
attributes and live-region behaviour are written explicitly so they can be
audited at the source.
