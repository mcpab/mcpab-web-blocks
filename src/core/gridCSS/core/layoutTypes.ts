// ============================================================================
// IMPORTS
// ============================================================================

// Domain types and defaults
import type { GapValue, GridUnitValue } from "../domainTypes";
import { Vx, Vy } from '../defaults/defaults';
// ID management
import type { Kinds, NodeID } from "../ids/kinds";

// Core types
import type { PatchIntentByKind } from "./nodeManagerTypes";
import { AbsoluteNode, GridNodeOptions } from "./GridNodeTypes";
import { DiagnosticEntry } from "./gridErrorShape";
/**
 * Grid gap configuration options
 */
export type GridGaps = {
    gap?: GapValue; // single-gap shorthand
    rowGap?: GapValue;
    columnGap?: GapValue;
};

/**
 * Grid auto-sizing configuration
 */
export type GridAuto = {
    /** grid-auto-rows: size of implicitly created row tracks */
    implicitRowUnits: GridUnitValue;
    /** grid-auto-columns: size of implicitly created column tracks */
    implicitColumnUnits: GridUnitValue;
};

/**
 * Complete grid configuration options
 */
export type GridOptions = GridGaps & GridAuto & {
    overflow: "visible" | "hidden" | "scroll" | "auto";
    autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
    justifyItems?: "start" | "end" | "center" | "stretch";
    alignItems?: "start" | "end" | "center" | "stretch";
    justifyContent?:
    | "start" | "end" | "center" | "stretch"
    | "space-between" | "space-around" | "space-evenly";
    alignContent?:
    | "start" | "end" | "center" | "stretch"
    | "space-between" | "space-around" | "space-evenly";
};

/**
 * Standard responsive breakpoint names
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Complete breakpoint record with all breakpoints required
 */
export type BPs<T> = Record<Breakpoint, T>;

/**
 * Partial breakpoint record with only xs required
 */
export type PartialBps<T> = { xs: T } & Partial<Record<Exclude<Breakpoint, 'xs'>, T>>

/**
 * Grid with absolute positioning and fixed dimensions
 */
export type AbsoluteGrid<Rows extends number, Columns extends number,   K extends Kinds> = {
    rows: Rows;
    columns: Columns;
    readonly options: GridOptions;
    readonly nodes: Partial<Record<NodeID, AbsoluteNode<K>>>;
};


/**
 * Flexible grid options for authoring time (resolver converts to strict GridOptions)
 */
export type GridOptionsInput = Partial<{
    // Subgrid intent for either axis (if present, ignore sizing on that axis during normalization)
    subgrid: "rows" | "columns" | "both";

    /** --- GAPS --- */
    gap: GapValue;
    rowGap: GapValue;
    columnGap: GapValue;

    /** --- IMPLICIT TRACKS --- */
    implicitRowUnits: GridUnitValue;    // grid-auto-rows
    implicitColumnUnits: GridUnitValue; // grid-auto-columns

    /** --- FLOW / OVERFLOW / ALIGN --- */
    autoFlow: "row" | "column" | "dense" | "row dense" | "column dense";
    overflow: "visible" | "hidden" | "scroll" | "auto";

    justifyItems: "start" | "end" | "center" | "stretch";
    alignItems: "start" | "end" | "center" | "stretch";

    justifyContent:
    | "start" | "end" | "center" | "stretch"
    | "space-between" | "space-around" | "space-evenly";
    alignContent:
    | "start" | "end" | "center" | "stretch"
    | "space-between" | "space-around" | "space-evenly";

}>;

/**
 * Canonical grid type using standard dimensions
 */
// Canonical grid type bound to your branded ID
export type CanonicalGrid<K extends Kinds> = AbsoluteGrid<Vx, Vy, K>;

/**
 * Factory contract for grid creation and management
 */
export type LayoutFactory<K extends Kinds> = {

    createLayout: (
        gridOptions?: Readonly<GridOptionsInput>,
        nodeOptions?: Partial<Record<K, GridNodeOptions>>,
        nodeIntents?: ReadonlyArray<PatchIntentByKind<K>>
    ) => {
        readonly grid: CanonicalGrid<K>;
        readonly diagnostics: ReadonlyArray<DiagnosticEntry>;
    };
};


