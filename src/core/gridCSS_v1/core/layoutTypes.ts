import { Vx, Vy } from '../defaults/defaults';
import { GapValue, GridUnitValue } from "../domainTypes";
import { NodeID } from "../ids/kinds";
import { GridErrorShape } from './gridErrorShape';
import { AddNodeFunction, NodeManager } from "./nodeManagerTypes";
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

export type GridNodeIdentity = {
    parentId?: NodeID;
    name?: string; // display/debug name
};
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BPs<T> = Record<Breakpoint, T>;
export type PartialBps<T> = { xs: T } & Partial<Record<Exclude<Breakpoint, 'xs'>, T>>

export type AbsoluteNode = {
    identity: GridNodeIdentity;
    coordinates: PartialBps<GridNodeAbsoluteCoordinates>;
    options: GridNodeOptions;
    /** Ordering hint for rendering/placement; the checker groups ties */
    order?: number;
};

export type AbsoluteGrid<Rows extends number, Columns extends number, Id extends PropertyKey> = {

    rows: Rows;
    columns: Columns;

    readonly options: GridOptions;
    readonly nodes: Partial<Record<NodeID, AbsoluteNode>>;

};


/** Authoring-time, flexible options (resolver turns this into strict GridOptions). */
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

type CanonicalGrid = AbsoluteGrid<Vx, Vy, NodeID>;
/** Per-breakpoint absolute grids (useful for SSR layout selection) */

export type LayoutsByBP =
    Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", CanonicalGrid>>;

import { PatchIntent } from './nodeManagerTypes';

/** Factory contract: accepts authoring inputs; returns absolute grid + diagnostics. */
export type LayoutFactory  = {

    nodeManager: NodeManager<any,any>;
    addNode: AddNodeFunction;

    createLayoutByBp: (
        gridOptions?: GridOptionsInput,
        nodesOptions?: Partial<Record<K, { options: GridNodeOptions; coordinates: Readonly<BPs<GridNodeAbsoluteCoordinates>> }>>
    ) => { grids: LayoutsByBP; errors: GridErrorShape[]; warnings: GridErrorShape[] };

};


