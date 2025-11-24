import {
    GridOptions,
    GridOptionsInput,
    GridTracks,
    GridErrorShape,

} from "../core/layoutTypes";
import { GridUnitValue } from "../domainTypes";
// import { IDS } from "../ids/kinds";
/**
 * ------------------------------------------------------------
 * GridOptions Resolver — Truth Table & Rules of Interpretation
 * ------------------------------------------------------------
 *
 * Purpose
 *   Convert a loose, author-friendly GridOptionsInput into a
 *   canonical GridOptions (with a definitive `mode` and fields).
 *
 * Canonical invariant
 *   - GridOptions ALWAYS includes `mode`:
 *       { mode: 'uniform', rows, columns, rowUnit, columnUnit, ... }
 *       { mode: 'list',    rowSizes, columnSizes, ... }
 *
 * Inputs considered (authoring shape, all optional)
 *   - rows, columns, rowUnit, columnUnit
 *   - rowSizes, columnSizes
 *   - plus other styling: gap / autoFlow / overflow / justify* / align*
 *
 * Mode precedence rule (deterministic)
 *   1) If BOTH `rowSizes` AND `columnSizes` are present and non-empty → mode = 'list'
 *      (This takes precedence even if all uniform fields are present.)
 *   2) ELSE IF ALL of `rows`, `columns`, `rowUnit`, `columnUnit` are present → mode = 'uniform'
 *   3) ELSE → Insufficient information → ERROR
 *
 * Truth table (summarized)
 *
 *   Provided fields                              → Derived mode  → Valid? → Notes
 *   ---------------------------------------------------------------------------------------------
 *   rowSizes (non-empty) AND columnSizes (non-empty)
 *                                                → 'list'        →  ✅    → List WINS over uniform if both kinds exist
 *
 *   rows AND columns AND rowUnit AND columnUnit  → 'uniform'     →  ✅    → All four required for uniform
 *
 *   rows only (or rows+columns without units)    → —             →  ❌    → Missing uniform fields
 *
 *   columns only (or rows+columns with one unit) → —             →  ❌    → Missing uniform fields
 *
 *   rowSizes only (no columnSizes)               → —             →  ❌    → Missing list field `columnSizes`
 *
 *   columnSizes only (no rowSizes)               → —             →  ❌    → Missing list field `rowSizes`
 *
 *   nothing relevant                             → —             →  ❌    → Insufficient information
 *
 * Validation inside each mode (strict)
 *   - list:
 *       * rowSizes.length >= 1
 *       * columnSizes.length >= 1
 *       * each track token/value is valid per your domain
 *   - uniform:
 *       * rows >= 1; columns >= 1
 *       * rowUnit and columnUnit are valid units
 *
 * Merging of other options
 *   - For gap / autoFlow / overflow / justify* / align*:
 *       * If present in input → use input value
 *       * Else → use provided defaults
 *
 * Errors vs Warnings (diagnostics)
 *   - ERRORs (block resolution; no GridOptions returned):
 *       * 'Invalid_Grid_Definition'        — insufficient info to determine mode
 *       * 'Missing_Uniform_Fields'         — list of missing: rows | columns | rowUnit | columnUnit
 *       * 'Missing_List_Field'             — rowSizes or columnSizes missing/empty
 *       * 'Illegal_Value'                  — e.g., rows <= 0, invalid unit token, etc.
 *
 *   - WARNINGs (resolution succeeds; GridOptions returned):
 *       * 'List_Precedence_Applied'        — both list & uniform present; list branch chosen by rule
 *       * 'Normalized_Shapshot'            — benign normalization of syntactic sugar (if any)
 *
 * Determinism
 *   - Same input → same derived mode and same canonical output (or the same error set).
 *
 * Pipeline placement
 *   Author Input (GridOptionsInput)
 *     → Resolver (this truth table)
 *       → Canonical GridOptions (with `mode`)
 *         → (optional) Normalizer (clamp/heal & warn)
 *           → Checker (overlaps, bounds, invariants)
 *             → Renderer
 */

export const resolveGridOptions = <Id extends  PropertyKey >(
    input: Partial<GridOptionsInput> | undefined,
    gridDefaults: GridOptions
): { options: GridOptions; errors: GridErrorShape<Id>[] | null, warnings: GridErrorShape<Id>[] | null } => {


    const errs: GridErrorShape<Id>[] = [];
    const warnings: GridErrorShape<Id>[] = [];
    let final: GridTracks | null = null;

    if (!input) return {
        options: gridDefaults, errors: null, warnings: null
    };

    // is this a list...
    const isList: boolean = input.rowSizes !== undefined && input.columnSizes !== undefined;
    const isListNonEmpty: boolean = isList && !!input.rowSizes?.length && !!input.columnSizes?.length;
    const isListTracksValid: boolean = isListNonEmpty && validateTrackList(input.rowSizes) && validateTrackList(input.columnSizes);

    // is this a uniform...
    const isUniform: boolean = input.rows !== undefined && input.columns !== undefined
        && input.rowUnit !== undefined && input.columnUnit !== undefined;
    const isUniformWithGoodRowsCols: boolean = typeof input.rows === 'number' && input.rows >= 1
        && typeof input.columns === 'number' && input.columns >= 1;
    const isUniformWithValidUnits: boolean = validateGridTrackValue(input.rowUnit) && validateGridTrackValue(input.columnUnit);

    if (isList && isUniform) {
        warnings.push({
            code: 'List_Precedence_Applied',
            message: 'Both list and uniform grid definitions provided; using list definition as per precedence rules.'
        } as GridErrorShape<Id>);
    }

    if (isList && isListNonEmpty && isListTracksValid) {
        // LIST mode takes precedence if both kinds are present
        final = {
            mode: 'list',
            rowSizes: input.rowSizes!,
            columnSizes: input.columnSizes!,
        };
    }
    else if (isList && !isListNonEmpty) {
        const missing: string[] = [];
        if (!input.rowSizes?.length) missing.push('rowSizes');
        if (!input.columnSizes?.length) missing.push('columnSizes');
        errs.push({
            code: 'Invalid_Grid_Definition',
            message: 'List grid must include non-empty rowSizes and columnSizes. Missing: ' + missing.join(', ')
        } as GridErrorShape<Id>);
    } else if (isList && isListNonEmpty && !isListTracksValid) {
        errs.push({
            code: 'Invalid_Grid_Definition',
            message: 'List grid has invalid track values.'
        } as GridErrorShape<Id>);
    }

    if (!final && isUniform && isUniformWithGoodRowsCols && isUniformWithValidUnits) {
        final = {
            mode: 'uniform',
            rows: input.rows!,
            columns: input.columns!,
            rowUnit: input.rowUnit!,
            columnUnit: input.columnUnit!,
        };
    }
    else if (!final && isUniform && !isUniformWithGoodRowsCols) {
        const missing: string[] = [];
        if (typeof input.rows !== 'number' || input.rows < 1) missing.push('valid rows (>=1)');
        if (typeof input.columns !== 'number' || input.columns < 1) missing.push('valid columns (>=1)');
        errs.push({
            code: 'Invalid_Grid_Definition',
            message: 'Uniform grid requires rows and columns to be >= 1. Issues: ' + missing.join(', ')
        } as GridErrorShape<Id>);
    }
    else if (!final && isUniform && !isUniformWithValidUnits) {
        const invalids: string[] = [];
        if (!validateGridTrackValue(input.rowUnit)) invalids.push('rowUnit');
        if (!validateGridTrackValue(input.columnUnit)) invalids.push('columnUnit');
        errs.push({
            code: 'Invalid_Grid_Definition',
            message: 'Uniform grid has invalid track unit values: ' + invalids.join(', ')
        } as GridErrorShape<Id>);
    }

    // If final is still null, return defaults + errors
    if (!final) {
        errs.push({
            code: 'Invalid_Grid_Definition',
            message: 'Insufficient information to determine grid definition mode.'
        } as GridErrorShape<Id>);
        return { options: gridDefaults, errors: errs, warnings: warnings.length ? warnings : null };
    };

    const options: GridOptions = {
        gap: input.gap ?? gridDefaults.gap,
        implicitColumnUnits: input.implicitColumnUnits ?? gridDefaults.implicitColumnUnits,
        implicitRowUnits: input.implicitRowUnits ?? gridDefaults.implicitRowUnits,
        overflow: input.overflow ?? gridDefaults.overflow,
        autoFlow: input.autoFlow ?? gridDefaults.autoFlow,
        justifyItems: input.justifyItems ?? gridDefaults.justifyItems,
        alignItems: input.alignItems ?? gridDefaults.alignItems,
        justifyContent: input.justifyContent ?? gridDefaults.justifyContent,
        alignContent: input.alignContent ?? gridDefaults.alignContent,
        ...final,
    };

    return { options, errors: errs.length ? errs : null, warnings: warnings.length ? warnings : null };
};


const validateGridTrackValue = (value: GridUnitValue | undefined): boolean => {
    // Basic validation logic for GridUnitValue
    if (!value) return false;
    switch (value.unit) {
        case 'px':
        case 'em':
        case 'rem':
        case '%':
            return typeof value.value === 'number' && value.value >= 0;
        case 'fr':
            return typeof value.value === 'number' && value.value > 0;
        case 'min-content':
        case 'max-content':
            return true;
        case 'fit-content':
            return value.value !== undefined && validateGridTrackValue(value.value);
        case 'auto':
            return true;
        case 'minmax':
            return value.min !== undefined && value.max !== undefined
                && validateGridTrackValue(value.min)
                && validateGridTrackValue(value.max);
        default:
            return false;
    }
};

const validateTrackList = (trackList: readonly GridUnitValue[] | undefined): boolean => {
    if (!trackList) return false;
    for (const track of trackList) {
        if (!validateGridTrackValue(track)) {
            return false;
        }
    }
    return true;
}