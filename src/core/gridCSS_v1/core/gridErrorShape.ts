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
    "ZERO_SPAN_ROW";
    elementId?: NodeID;
    message: string;
    details?: unknown;
    origin?: 'factory' | 'nodeManager' | 'builder';
};
