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

`sitemap.xml` and `robots.txt` are generated from `src/data/patterns.ts` by a
small Vite plugin defined in `vite.config.ts`. The plugin emits one `<url>`
entry for `/` plus one for each `/pattern/<slug>`, so adding a new pattern
automatically registers it for crawlers — there is no separate list to keep
in sync.

The plugin runs in **both modes**:

- During `npm run dev`, the files are served live by a tiny middleware
  at <http://localhost:5173/sitemap.xml> and
  <http://localhost:5173/robots.txt>. Nothing is written to disk.
- During `npm run build`, the same files are written into `dist/sitemap.xml`
  and `dist/robots.txt` so they can be deployed as static assets.

#### Preview the sitemap locally

```bash
npm run dev
# open http://localhost:5173/sitemap.xml
# open http://localhost:5173/robots.txt
```

If the dev server claims another port (5174, 5175, …), use that one. The
SPA's catch-all route does not interfere because the middleware runs
before React Router takes over.

#### Regenerate the sitemap for production

1. **Edit pattern metadata (if applicable).** Add, remove, or rename entries
   in `src/data/patterns.ts`. The `slug` field is what gets written to
   `<loc>`.
2. **Set the canonical origin.** Export `VITE_SITE_URL` to the absolute URL
   the site is served from. If unset, the sitemap falls back to
   `https://example.com` so the build never fails.
   ```bash
   export VITE_SITE_URL="https://your-domain.example"
   ```
   For a one-shot build you can prefix the command instead:
   ```bash
   VITE_SITE_URL="https://your-domain.example" npm run build
   ```
   To make the value permanent for local builds, create `.env.local` in the
   project root and add:
   ```
   VITE_SITE_URL=https://your-domain.example
   ```
   Vite picks the value up automatically in both dev and build. (Note:
   `.env.local` is git-ignored.)
3. **Run the build.**
   ```bash
   npm run build
   ```
4. **Verify the output.**
   ```bash
   ls dist/sitemap.xml dist/robots.txt
   grep -c "<url>" dist/sitemap.xml   # should equal patterns.length + 1
   head -20 dist/sitemap.xml
   ```
   Or preview it locally with the production server:
   ```bash
   npm run preview                    # http://localhost:4173/sitemap.xml
   ```
5. **Deploy.** Upload the contents of `dist/` as usual; both files live at the
   site root (`/sitemap.xml`, `/robots.txt`) and `robots.txt` already points
   crawlers at the sitemap.

To regenerate without rebuilding the whole app, just rerun `npm run build` —
the sitemap step is part of Vite's `generateBundle` hook and takes
milliseconds.

#### Customising the sitemap

The plugin lives at the top of `vite.config.ts` (function `sitemap()`).
Tweak it directly to change `<priority>`, `<changefreq>`, `<lastmod>`, or to
exclude routes — for example, by filtering `PATTERNS` before mapping it.

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
