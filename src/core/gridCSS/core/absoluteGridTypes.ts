import type { NodeID } from "../ids/kinds";
import { GridOptions } from "./gridConfig";
import { AbsoluteNode } from "./gridNodeTypes";
import { BPs } from "./breakpoints";


/**
 * Grid with absolute positioning and fixed dimensions
 */

export type AbsoluteGrid<K extends string> = {
  rows: BPs<number>;
  columns: BPs<number>;
  readonly options: GridOptions;
  readonly nodes: Partial<Record<NodeID, AbsoluteNode<K>>>;
};
