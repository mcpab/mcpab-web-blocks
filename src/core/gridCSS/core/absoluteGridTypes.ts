 
import { GridOptions } from "./gridOptionsTypes";
import { AbsoluteNode } from "./gridNodeTypes";
import { BPs } from "./breakpoints";
import { NodeID } from "../templates/layoutIDs";


/**
 * Grid with absolute positioning and fixed dimensions
 */

export type AbsoluteGrid<K extends NodeID> = {
  rows: BPs<number>;
  columns: BPs<number>;
  readonly options: GridOptions;
  readonly nodes: Array<{id:K, node: AbsoluteNode}>;
};
