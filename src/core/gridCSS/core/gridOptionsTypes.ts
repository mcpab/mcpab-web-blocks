import type { GapValue, GridUnitValue } from "./cssStringify";

/**
 * Grid auto-sizing configuration
 */
export type GridOptions = {

  /** grid-auto-rows: size of implicitly created row tracks */
  implicitRowUnits: GridUnitValue;
  /** grid-auto-columns: size of implicitly created column tracks */
  implicitColumnUnits: GridUnitValue;
  overflow: "visible" | "hidden" | "scroll" | "auto";
  autoFlow: "row" | "column" | "dense" | "row dense" | "column dense";
  justifyItems: "start" | "end" | "center" | "stretch";
  alignItems: "start" | "end" | "center" | "stretch";
  justifyContent: "start" | "end" | "center" | "stretch" |
  "space-between" | "space-around" | "space-evenly";
  alignContent: "start" | "end" | "center" | "stretch" |
  "space-between" | "space-around" | "space-evenly";

  /** --- GAPS --- */
  gap: GapValue;
  rowGap: GapValue;
  columnGap: GapValue;


  /** --- FLOW / OVERFLOW / ALIGN --- */

};

