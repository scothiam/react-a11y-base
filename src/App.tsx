import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shell from "./layout/Shell";
import Home from "./examples/Home";

const PAGES = {
  accordion: lazy(() => import("./examples/AccordionExample")),
  alert: lazy(() => import("./examples/AlertExample")),
  alertdialog: lazy(() => import("./examples/AlertDialogExample")),
  breadcrumb: lazy(() => import("./examples/BreadcrumbExample")),
  button: lazy(() => import("./examples/ButtonExample")),
  carousel: lazy(() => import("./examples/CarouselExample")),
  checkbox: lazy(() => import("./examples/CheckboxExample")),
  combobox: lazy(() => import("./examples/ComboboxExample")),
  dialog: lazy(() => import("./examples/DialogExample")),
  disclosure: lazy(() => import("./examples/DisclosureExample")),
  feed: lazy(() => import("./examples/FeedExample")),
  grid: lazy(() => import("./examples/GridExample")),
  landmarks: lazy(() => import("./examples/LandmarksExample")),
  link: lazy(() => import("./examples/LinkExample")),
  listbox: lazy(() => import("./examples/ListboxExample")),
  menubar: lazy(() => import("./examples/MenubarExample")),
  "menu-button": lazy(() => import("./examples/MenuButtonExample")),
  meter: lazy(() => import("./examples/MeterExample")),
  radio: lazy(() => import("./examples/RadioGroupExample")),
  slider: lazy(() => import("./examples/SliderExample")),
  "slider-multi": lazy(() => import("./examples/SliderMultiExample")),
  spinbutton: lazy(() => import("./examples/SpinbuttonExample")),
  switch: lazy(() => import("./examples/SwitchExample")),
  table: lazy(() => import("./examples/TableExample")),
  tabs: lazy(() => import("./examples/TabsExample")),
  toolbar: lazy(() => import("./examples/ToolbarExample")),
  tooltip: lazy(() => import("./examples/TooltipExample")),
  treeview: lazy(() => import("./examples/TreeViewExample")),
  treegrid: lazy(() => import("./examples/TreegridExample")),
  splitter: lazy(() => import("./examples/WindowSplitterExample")),
} as const;

function PatternRoute() {
  const { slug = "" } = useParams();
  const key = slug as keyof typeof PAGES;
  const Page = PAGES[key];
  if (!Page) return <Navigate to="/" replace />;
  return (
    <Suspense fallback={<div style={{ padding: "3rem" }}>Loading…</div>}>
      <Page />
    </Suspense>
  );
}

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pattern/:slug" element={<PatternRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Shell>
  );
}
