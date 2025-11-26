import type { GapValue, GridUnitValue } from "./domainTypes";


/**
 * Grid gap configuration options
 */
// export type GridGaps = {
//     gap?: GapValue; // single-gap shorthand
//     rowGap?: GapValue;
//     columnGap?: GapValue;
// };
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

export type GridOptions = GridAuto & {
  overflow: "visible" | "hidden" | "scroll" | "auto";
  autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
  justifyItems?: "start" | "end" | "center" | "stretch";
  alignItems?: "start" | "end" | "center" | "stretch";
  justifyContent?: "start" | "end" | "center" | "stretch" |
  "space-between" | "space-around" | "space-evenly";
  alignContent?: "start" | "end" | "center" | "stretch" |
  "space-between" | "space-around" | "space-evenly";
};/**
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
  implicitRowUnits: GridUnitValue; // grid-auto-rows
  implicitColumnUnits: GridUnitValue; // grid-auto-columns


  /** --- FLOW / OVERFLOW / ALIGN --- */
  autoFlow: "row" | "column" | "dense" | "row dense" | "column dense";
  overflow: "visible" | "hidden" | "scroll" | "auto";

  justifyItems: "start" | "end" | "center" | "stretch";
  alignItems: "start" | "end" | "center" | "stretch";

  justifyContent: "start" | "end" | "center" | "stretch" |
  "space-between" | "space-around" | "space-evenly";
  alignContent: "start" | "end" | "center" | "stretch" |
  "space-between" | "space-around" | "space-evenly";

}>;

