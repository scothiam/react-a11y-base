/**
 * Index of every W3C WAI-ARIA Authoring Practices Guide pattern.
 * Order follows the APG patterns listing as of the 1.2 draft.
 * https://www.w3.org/WAI/ARIA/apg/patterns/
 */

export type Pattern = {
  /** Two-digit specimen number, e.g. "01" */
  num: string;
  /** URL slug under /pattern */
  slug: string;
  /** Display name */
  name: string;
  /** Short tagline used in the sidebar */
  tagline: string;
  /** Off-the-shelf library that powers the demo */
  library: string;
  /** WAI-ARIA role(s) most associated with the pattern */
  role: string;
  /** Anchor on the APG patterns page */
  apg: string;
};

export const PATTERNS: Pattern[] = [
  { num: "01", slug: "accordion", name: "Accordion", tagline: "Stacked show/hide sections", library: "@radix-ui/react-accordion", role: "region + button", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" },
  { num: "02", slug: "alert", name: "Alert", tagline: "Polite + assertive live regions", library: "custom (role=\"alert\")", role: "alert", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/alert/" },
  { num: "03", slug: "alertdialog", name: "Alert Dialog", tagline: "Modal that demands a response", library: "@radix-ui/react-alert-dialog", role: "alertdialog", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/" },
  { num: "04", slug: "breadcrumb", name: "Breadcrumb", tagline: "Trail of parent links", library: "react-aria-components", role: "navigation > list", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/" },
  { num: "05", slug: "button", name: "Button", tagline: "Activatable trigger", library: "react-aria-components", role: "button", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/button/" },
  { num: "06", slug: "carousel", name: "Carousel", tagline: "Sequential slide rotator", library: "embla-carousel-react", role: "region (roledescription)", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/carousel/" },
  { num: "07", slug: "checkbox", name: "Checkbox", tagline: "Two- and tri-state inputs", library: "@radix-ui/react-checkbox", role: "checkbox", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/" },
  { num: "08", slug: "combobox", name: "Combobox", tagline: "Input with associated popup", library: "react-aria-components", role: "combobox", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" },
  { num: "09", slug: "dialog", name: "Dialog (Modal)", tagline: "Overlay window with focus trap", library: "@radix-ui/react-dialog", role: "dialog", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" },
  { num: "10", slug: "disclosure", name: "Disclosure", tagline: "Single show/hide control", library: "@radix-ui/react-collapsible", role: "button + aria-expanded", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/" },
  { num: "11", slug: "feed", name: "Feed", tagline: "Auto-loading article stream", library: "custom (IntersectionObserver)", role: "feed > article", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/feed/" },
  { num: "12", slug: "grid", name: "Grid", tagline: "Keyboard-navigable cell matrix", library: "@tanstack/react-table", role: "grid", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/grid/" },
  { num: "13", slug: "landmarks", name: "Landmarks", tagline: "Eight section roles", library: "semantic HTML5", role: "banner / main / nav / …", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/" },
  { num: "14", slug: "link", name: "Link", tagline: "Reference to a resource", library: "react-aria-components", role: "link", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/link/" },
  { num: "15", slug: "listbox", name: "Listbox", tagline: "Single- or multi-select list", library: "react-aria-components", role: "listbox > option", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/" },
  { num: "16", slug: "menubar", name: "Menu and Menubar", tagline: "Top-level menu of actions", library: "@radix-ui/react-menubar", role: "menubar > menu", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/" },
  { num: "17", slug: "menu-button", name: "Menu Button", tagline: "Button that opens a menu", library: "@radix-ui/react-dropdown-menu", role: "button + menu", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/" },
  { num: "18", slug: "meter", name: "Meter", tagline: "Scalar within a range", library: "react-aria-components", role: "meter", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/" },
  { num: "19", slug: "radio", name: "Radio Group", tagline: "One-of-many selection", library: "@radix-ui/react-radio-group", role: "radiogroup > radio", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/" },
  { num: "20", slug: "slider", name: "Slider", tagline: "Single-thumb range input", library: "@radix-ui/react-slider", role: "slider", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/slider/" },
  { num: "21", slug: "slider-multi", name: "Slider (Multi-Thumb)", tagline: "Range with multiple thumbs", library: "@radix-ui/react-slider", role: "slider × n", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/" },
  { num: "22", slug: "spinbutton", name: "Spinbutton", tagline: "Stepper with bounded value", library: "react-aria-components", role: "spinbutton", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/" },
  { num: "23", slug: "switch", name: "Switch", tagline: "Binary on/off control", library: "@radix-ui/react-switch", role: "switch", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/switch/" },
  { num: "24", slug: "table", name: "Table", tagline: "Static tabular structure", library: "react-aria-components", role: "table", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/table/" },
  { num: "25", slug: "tabs", name: "Tabs", tagline: "Switchable panels", library: "@radix-ui/react-tabs", role: "tablist > tab > tabpanel", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/" },
  { num: "26", slug: "toolbar", name: "Toolbar", tagline: "Grouped controls with arrow nav", library: "@radix-ui/react-toolbar", role: "toolbar", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/" },
  { num: "27", slug: "tooltip", name: "Tooltip", tagline: "Hover/focus contextual popup", library: "@radix-ui/react-tooltip", role: "tooltip", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/" },
  { num: "28", slug: "treeview", name: "Tree View", tagline: "Hierarchical list with expanders", library: "react-arborist", role: "tree > treeitem", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/" },
  { num: "29", slug: "treegrid", name: "Treegrid", tagline: "Hierarchical, editable grid", library: "react-arborist (extended)", role: "treegrid > row > gridcell", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/" },
  { num: "30", slug: "splitter", name: "Window Splitter", tagline: "Movable pane separator", library: "react-resizable-panels", role: "separator (orientation)", apg: "https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/" },
];
