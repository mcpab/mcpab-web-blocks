import { ColNumbers, RowNumbers } from "../ids/kinds";
import { GridUnitValue, GapValue } from "../domainTypes";

/** Identity & hierarchy info used by the checker’s ancestry rules.
 *  `parentId` forms a parent chain; any ancestor with `constrainChildren: true`
 *  (on its node.options) constrains all descendants.
 */
export type GridNodeIdentity<Id extends PropertyKey> = {
  parentId?: Id;
  name?: string; // display/debug name
};

export type GridNodeRelativeCoordinates = {
  row: number;
  column: number;
  spanx?: number; // columns (x)
  spany?: number; // rows (y)
};

export type GridNodeOptions = {
  zIndex?: number | undefined;
  allowOverlap?: boolean;
  constrainChildren?: boolean;

  justifySelf?: "start" | "end" | "center" | "stretch";
  alignSelf?: "start" | "end" | "center" | "stretch";

  role?: string;
  tags?: string[];

  visibility?: "visible" | "hidden" | "visuallyHidden";
  // NOTE: `order` lives on the node (see AbsoluteNode.order) to avoid duplication.
};

export type GridNodeAbsoluteCoordinates = {
  gridRowStart: number;
  gridColumnStart: number;
  gridRowEnd: number;    // exclusive
  gridColumnEnd: number; // exclusive
};

export type TrackList = readonly GridUnitValue[];

export type GridTracks =
  | {
      mode: "uniform";
      rows: RowNumbers;
      rowUnit: GridUnitValue;
      columns: ColNumbers;
      columnUnit: GridUnitValue;
    }
  | {
      mode: "list";
      rowSizes: TrackList;    // length = number of rows
      columnSizes: TrackList; // length = number of columns
    };

export type GridGaps = {
  gap?: GapValue; // single-gap shorthand
  rowGap?: GapValue;
  columnGap?: GapValue;
};

export type GridAuto = {
  /** grid-auto-rows: size of implicitly created row tracks */
  implicitRowUnits: GridUnitValue;
  /** grid-auto-columns: size of implicitly created column tracks */
  implicitColumnUnits: GridUnitValue;
};

export type GridOptions = GridTracks & GridGaps & GridAuto & {
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

export type AbsoluteNode<Id extends PropertyKey> = {
  identity: GridNodeIdentity<Id>;
  coordinates: GridNodeAbsoluteCoordinates;
  options: GridNodeOptions;
  /** Ordering hint for rendering/placement; the checker groups ties */
  order?: number;
};

export type AbsoluteGrid<Id extends PropertyKey = PropertyKey> = {
  readonly options: GridOptions;
  readonly nodes: Partial<Record<Id, AbsoluteNode<Id>>>;
};

export type GridErrorShape<Id extends PropertyKey = string> = {
  code:
    | "implicit-track"
    | "overlap-without-z"
    | "invalid-span"
    | "constraint-violation"
    | "out-of-bounds"
    | "duplicate-id"
    | "overlap-not-allowed"
    | "invalid-position"
    | "order-ties"
    | "explicit-count-unknown"
    | "plan-mismatch"
    | "Invalid_Grid_Definition"
    | "List_Precedence_Applied";
  elementId?: Id;
  message: string;
  details?: unknown;
};

/** Authoring-time, flexible options (resolver turns this into strict GridOptions). */
export type GridOptionsInput = Partial<{
  /** --- TRACKS / SIZING --- */
  // Uniform inputs
  rows: RowNumbers;
  columns: ColNumbers;
  rowUnit: GridUnitValue;
  columnUnit: GridUnitValue;

  // Per-track explicit lists (wins over uniform if both provided)
  rowSizes: TrackList;
  columnSizes: TrackList;

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

/** Per-breakpoint absolute grids (useful for SSR layout selection) */
export type LayoutsByBP<Id extends PropertyKey> =
  Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", AbsoluteGrid<Id>>>;

/** Factory contract: accepts authoring inputs; returns absolute grid + diagnostics. */
export type LayoutFactory<Id extends PropertyKey> = {
  createLayoutByBp: (
    gridOptions?: GridOptionsInput,
    nodesOptions?: Partial<
      Record<
        Id,
        { options: GridNodeOptions; coordinates: GridNodeRelativeCoordinates }
      >
    >
  ) => { grids: LayoutsByBP<Id>; errors: GridErrorShape<Id>[]; warnings: GridErrorShape<Id>[] };
};
