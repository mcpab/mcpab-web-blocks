import { NodeID } from "../templates/layoutIDs";
import { AllBoxMovesProps } from "./boxTransformations/boxTransformationsProps";


// 1) Severity
export type DiagnosticSeverity = 'error' | 'warning' | 'info';

// 2) Where the diagnostic comes from (high-level, not per-function)
export type DiagnosticOrigin =
  | 'core'        // low-level grid engine (units, tracks, etc.)
  | 'factory'     // layout factories
  | 'nodeManager' // DefaultNodeManager / patches
  | 'boxFlow'     // BoxFlowBuilder / flow-based placement
  | 'patterns'    // hero/sidebar/uniform presets
  | 'absoluteGrid'// absolute grid checker
  | 'debug'      // debug / tooling layer
  | AllBoxMovesProps<any>  // box transformations
  | 'layoutTxToSectionLocal'   // layout transformation to section local converter
  | 'transformBoxMove' // box move transformer
  | 'layoutSectionToBounds' // layout section to bounds converter
  | 'layoutSectionBtoAbsolute'




// 3) Canonical error codes (SCREAMING_SNAKE_CASE)
//    Use these constants everywhere instead of string literals.

// Brand marker – only used by the type system
declare const gridErrorCodeBrand: unique symbol;
type GridErrorCodeBrand = { readonly [gridErrorCodeBrand]: true };

// Branded string type
export type GridErrorCode = string & GridErrorCodeBrand;

export const GRID_ERROR_CODE = {
  // --- Core grid / geometry issues ----------------------------
  IMPLICIT_TRACK: 'IMPLICIT_TRACK' as GridErrorCode,
  OVERLAP_WITHOUT_Z: 'OVERLAP_WITHOUT_Z' as GridErrorCode,
  INVALID_SPAN: 'INVALID_SPAN' as GridErrorCode,
  CONSTRAINT_VIOLATION: 'CONSTRAINT_VIOLATION' as GridErrorCode,
  OUT_OF_BOUNDS: 'OUT_OF_BOUNDS' as GridErrorCode,
  DUPLICATE_ID: 'DUPLICATE_ID' as GridErrorCode,
  OVERLAP_NOT_ALLOWED: 'OVERLAP_NOT_ALLOWED' as GridErrorCode,
  INVALID_POSITION: 'INVALID_POSITION' as GridErrorCode,
  ORDER_TIES: 'ORDER_TIES' as GridErrorCode,
  EXPLICIT_COUNT_UNKNOWN: 'EXPLICIT_COUNT_UNKNOWN' as GridErrorCode,
  PLAN_MISMATCH: 'PLAN_MISMATCH' as GridErrorCode,
  BOXFLOW_ZERO_DIMENSION_NODE: 'BOXFLOW_ZERO_DIMENSION_NODE' as GridErrorCode,
  // --- Track / partition config issues ------------------------
  INVALID_GRID_DEFINITION: 'INVALID_GRID_DEFINITION' as GridErrorCode,
  PARTITION_ERROR: 'PARTITION_ERROR' as GridErrorCode,
  PARTITIONS_INVALID: 'PARTITIONS_INVALID' as GridErrorCode,
  LENGTHS_INVALID: 'LENGTHS_INVALID' as GridErrorCode,
  OFFSETS_INVALID: 'OFFSETS_INVALID' as GridErrorCode,

  // --- Runtime layout anomalies -------------------------------
  XS_STACK_OVERFLOW: 'XS_STACK_OVERFLOW' as GridErrorCode,
  ZERO_SPAN_COL: 'ZERO_SPAN_COL' as GridErrorCode,
  ZERO_SPAN_ROW: 'ZERO_SPAN_ROW' as GridErrorCode,
  NEGATIVE_COORDINATE: 'NEGATIVE_COORDINATE' as GridErrorCode,

  // --- Pattern / semantic node issues -------------------------
  UNKNOWN_KIND: 'UNKNOWN_KIND' as GridErrorCode,
  DUPLICATE_KIND: 'DUPLICATE_KIND' as GridErrorCode,
  NO_NODES: 'NO_NODES' as GridErrorCode,
  NODE_MISSING_FOR_SLOT: 'NODE_MISSING_FOR_SLOT' as GridErrorCode,
  PATTERN_LAYOUT_GENERATED: 'PATTERN_LAYOUT_GENERATED' as GridErrorCode,
  NODE_ORDER_MISMATCH: 'NODE_ORDER_MISMATCH' as GridErrorCode,
  UNKNOWN_NODE_ID: 'UNKOWN_NODE_ID' as GridErrorCode,
  UNKNOWN_ANCHOR: 'UNKNOW_ANCHOR' as GridErrorCode,
  INVALID_TRANSFORMATION_PARAMS: 'INVALID_TRANSFORMATION_PARAMS' as GridErrorCode,
  // --- Runtime layout / builder anomalies --------------------
  BOXFLOW_MUTATION_AFTER_FINALIZE: 'BOXFLOW_MUTATION_AFTER_FINALIZE' as GridErrorCode,
  NO_BOXES_PROCESSED: 'NO_BOXES_PROCESSED' as GridErrorCode,
  NO_SECTION_ID: 'NO_SECTION_ID' as GridErrorCode,
  BOX_SHAPE_MISSING_BP: 'BOX_SHAPE_MISSING_BP' as GridErrorCode,
  UNKNOWN_TRANSFORMATION: 'UNKNOWN_TRANSFORMATION' as GridErrorCode,
  BOX_NOT_FOUND: 'BOX_NOT_FOUND' as GridErrorCode,
  MISSING_BOX: 'MISSING_BOX' as GridErrorCode,
  INVALID_TRACK: 'INVALID_TRACK' as GridErrorCode,
  EMPTY_GRID: 'EMPTY_GRID' as GridErrorCode,
  GRID_NORMALIZED_TO_POSITIVE_LINES: 'GRID_NORMALIZED_TO_POSITIVE_LINES' as GridErrorCode

} as const;
// 4) A single "issue" payload
export type GridIssue = {
  code: GridErrorCode;
  message: string;
  elementId?: NodeID;
  details?: unknown;
};

// 5) Unified diagnostic entry
export type DiagnosticEntry = {
  readonly severity: DiagnosticSeverity;
  readonly origin: DiagnosticOrigin;
  readonly issue: GridIssue;
};

// 6) Helper constructors (so you don't repeat the object shape everywhere)

type IssueExtras = Omit<GridIssue, 'code' | 'message'>;

export function makeDiagnostic(
  severity: DiagnosticSeverity,
  origin: DiagnosticOrigin,
  code: GridErrorCode,
  message: string,
  extras: IssueExtras = {}
): DiagnosticEntry {
  return {
    severity,
    origin,
    issue: {
      code,
      message,
      ...extras,
    },
  };
}

export function makeError(
  origin: DiagnosticOrigin,
  code: GridErrorCode,
  message: string,
  extras: IssueExtras = {}
): DiagnosticEntry {
  return makeDiagnostic('error', origin, code, message, extras);
}

export function makeWarning(
  origin: DiagnosticOrigin,
  code: GridErrorCode,
  message: string,
  extras: IssueExtras = {}
): DiagnosticEntry {
  return makeDiagnostic('warning', origin, code, message, extras);
}

export function makeInfo(
  origin: DiagnosticOrigin,
  code: GridErrorCode,
  message: string,
  extras: IssueExtras = {}
): DiagnosticEntry {
  return makeDiagnostic('info', origin, code, message, extras);
}
