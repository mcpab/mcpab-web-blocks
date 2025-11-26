// stories/gridcss/useGridLayout.ts
import * as React from "react";
import {
  createLayoutFactoryFromBoxFlow,
  type GridPath,
  type Kinds,
} from "../.."; // adjust path

export function useGridLayout<K extends Kinds>(pattern: GridPath<K>) {
  return React.useMemo(() => {
    const layoutFactory = createLayoutFactoryFromBoxFlow(pattern);
    const layout = layoutFactory(); // { grid, diagnostics, ... }
    return layout;
  }, [pattern]);
}
