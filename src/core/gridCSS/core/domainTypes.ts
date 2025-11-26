
// Plain CSS lengths & percentages (no 'fr', no 'auto')

export type CssLength = { unit: 'px' | 'em' | 'rem' | '%'; value: number; };
// Track sizes allowed in grid templates (CSS Grid spec)

export type TrackBreadth = CssLength | 
{ unit: 'fr'; value: number; } |
{ unit: 'min-content'; } |
{ unit: 'max-content'; } |
{ unit: 'fit-content'; value: CssLength; } // fit-content(<length/percent>)
  |
{ unit: 'auto'; };
// minmax() breadths (min & max are track breadths but *not* minmax again)
 
export type GridUnitValue = TrackBreadth |
{ unit: 'minmax'; min: TrackBreadth; max: TrackBreadth; };


export type GapValue = CssLength; // { unit: 'px'|'em'|'rem'|'%'; value: number }
