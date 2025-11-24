import { NodeID } from '../ids/kinds';


export type GridErrorShape = {
    code: "implicit-track" |
    "overlap-without-z" |
    "invalid-span" |
    "constraint-violation" |
    "out-of-bounds" |
    "duplicate-id" |
    "overlap-not-allowed" |
    "invalid-position" |
    "order-ties" |
    "explicit-count-unknown" |
    "plan-mismatch" |
    "Invalid_Grid_Definition" |
    "List_Precedence_Applied" |
    "Partition_Error" |
    "PARTITIONS_INVALID" |
    "LENGTHS_INVALID" |
    "OFFSETS_INVALID" |
    "XS_STACK_OVERFLOW" |
    "ZERO_SPAN_COL" |
    "ZERO_SPAN_ROW"|
    "UNKNOWN_KIND" |
    "DUPLICATE_KIND" |
    "NO_NODES";
    elementId?: NodeID;
    message: string;
    details?: unknown;
    origin?: 'factory' | 'nodeManager' | 'builder';


};/**
 * Per-breakpoint absolute grids for responsive layout management
 */
/** Breakpoint key type (xs required; others optional) */
// export type LayoutsByBP<K extends Kinds = Kinds> =
//     { readonly xs: CanonicalGrid<K> } &
//     Partial<Readonly<Record<'sm' | 'md' | 'lg' | 'xl', CanonicalGrid<K>>>>;
// I dont think I need this because the nodes already have the bps
/** Where a diagnostic originated — helps triage quickly */

export type DiagnosticOrigin = 'factory' | 'nodeManager' | 'builder' | 'uniformGridBuilder';
/** Unified diagnostic entry (error or warning) */
export type DiagnosticEntry = {
    readonly severity: 'error' | 'warning';
    readonly origin: DiagnosticOrigin;
    readonly issue: GridErrorShape; // keep your codes hereu
};

