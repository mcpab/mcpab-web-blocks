// ============================================================================
// IMPORTS
// ============================================================================

// Domain types and defaults
 
// ID management

// Core types
import type { PatchIntentByKind } from "./nodeManagerTypes";
import { GridNodeOptions } from "./gridNodeTypes";
import { DiagnosticEntry } from "./gridErrorShape";
import { GridOptionsInput } from "./gridConfigTypes";
import { AbsoluteGrid } from "./absoluteGridTypes";

 

export type LayoutResult<K extends string> = {
  readonly grid: AbsoluteGrid<K> | undefined;
  readonly diagnostics: ReadonlyArray<DiagnosticEntry>;
};


/**
 * Factory contract for grid creation and management
 */

export type LayoutFactoryProps<K extends string> = {
  gridOptions?: Readonly<GridOptionsInput>;
  nodeOptions?: Partial<Record<K, GridNodeOptions>>;
  nodeIntents?: ReadonlyArray<PatchIntentByKind<K>>;
};
export type LayoutFactory<K extends string> = (
  props?: LayoutFactoryProps<K>
) => LayoutResult<K>;

