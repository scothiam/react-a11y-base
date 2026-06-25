import { RouterProvider } from "react-aria-components";
import type { ReactNode } from "react";

type Props = {
  navigate: (path: string) => void;
  useHref: (path: string) => string;
  children: ReactNode;
};

/** Bridges React Router navigation to react-aria-components Link. */
export function AriaRouterBridge({ navigate, useHref, children }: Props) {
  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      {children}
    </RouterProvider>
  );
}
