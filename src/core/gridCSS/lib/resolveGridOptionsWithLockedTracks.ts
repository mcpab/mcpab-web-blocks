 
import { GridOptions, GridOptionsInput, GridErrorShape } from "../core/layoutTypes";

type ResolveLockedResult<Id extends PropertyKey> = {
  options: GridOptions;
  errors: GridErrorShape<Id>[] | null;
  warnings: GridErrorShape<Id>[] | null;
};

/** Merge only non-track authoring options into the factory's canonical defaults.
 * Track-related inputs (rows/columns/rowUnit/columnUnit/rowSizes/columnSizes/subgrid) are ignored.
 * Emits a warning if the caller tried to provide any of those.
 */
export function resolveGridOptionsWithLockedTracks<Id extends PropertyKey = string>(
  input: Partial<GridOptionsInput> | undefined,
  factoryDefaults: GridOptions
): ResolveLockedResult<Id> {
  const warnings: GridErrorShape<Id>[] = [];
  const errors: GridErrorShape<Id>[] = [];

  const userTriedTracks =
    !!input?.rows || !!input?.columns || !!input?.rowUnit || !!input?.columnUnit ||
    !!input?.rowSizes?.length || !!input?.columnSizes?.length || !!input?.subgrid;

  if (userTriedTracks) {
    warnings.push({
      code: "Invalid_Grid_Definition",
      message:
        "Factory tracks are locked; user-provided track sizing (rows/columns/units/lists/subgrid) was ignored.",
    } as GridErrorShape<Id>);
  }

  // Merge only non-track options
  const merged: GridOptions = {
    // Keep the factory’s track definition exactly as-is
    ...(factoryDefaults.mode === "uniform"
      ? {
          mode: "uniform" as const,
          rows: factoryDefaults.rows,
          columns: factoryDefaults.columns,
          rowUnit: factoryDefaults.rowUnit,
          columnUnit: factoryDefaults.columnUnit,
        }
      : {
          mode: "list" as const,
          rowSizes: factoryDefaults.rowSizes,
          columnSizes: factoryDefaults.columnSizes,
        }),

    // Gaps
    gap: input?.gap ?? factoryDefaults.gap,
    rowGap: input?.rowGap ?? factoryDefaults.rowGap,
    columnGap: input?.columnGap ?? factoryDefaults.columnGap,

    // Implicit track sizing (these are non-track metadata and should be honored)
    implicitRowUnits: input?.implicitRowUnits ?? factoryDefaults.implicitRowUnits,
    implicitColumnUnits: input?.implicitColumnUnits ?? factoryDefaults.implicitColumnUnits,

    // Flow / overflow / align
    overflow: input?.overflow ?? factoryDefaults.overflow,
    autoFlow: input?.autoFlow ?? factoryDefaults.autoFlow,
    justifyItems: input?.justifyItems ?? factoryDefaults.justifyItems,
    alignItems: input?.alignItems ?? factoryDefaults.alignItems,
    justifyContent: input?.justifyContent ?? factoryDefaults.justifyContent,
    alignContent: input?.alignContent ?? factoryDefaults.alignContent,
  };

  return {
    options: merged,
    errors: errors.length ? errors : null,
    warnings: warnings.length ? warnings : null,
  };
}
/* ----------------------- resolve grid template helpers ----------------------- */