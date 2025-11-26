// import {NodeId} from '../core/layoutTypes';

// Base alignment tokens
export type Align = 'start' | 'center' | 'end';

// Logical axes (works for LTR/RTL + vertical writing)
export type Axis = 'inline' | 'block';

// Single-axis positions (6 total) 
export type AxisPos =
    | 'inline-start' | 'inline-center' | 'inline-end'
    | 'block-start' | 'block-center' | 'block-end';

// Corners (4 total) — replaces "upper/lower left/right"
export type Corner =
    | 'block-start-inline-start'
    | 'block-start-inline-end'
    | 'block-end-inline-start'
    | 'block-end-inline-end';

// Unified position union (13 total tokens)
export type Position = Align | AxisPos | Corner;

// Pick ranges you actually need; numeric is best for math.
// export type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

/// 

// Optional namespace/letter tag for the block/section
export type Label = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

export type NodeID  = `${Label}-${number}`  ;
