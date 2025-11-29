import { GridOptions } from "../../core/gridOptionsTypes";
 
export const defaultUniformGridOptions: GridOptions = {
    // --- Gaps ---
    // Single shorthand → same for row & column
    // gap: px(16),
    // delegated to children / nodes

    // --- Implicit tracks (grid-auto-rows / grid-auto-columns) ---
    // CSS default is `auto`; you can swap to `fr(1)` if you want uniform tracks
    implicitRowUnits: { unit: 'auto' },
    implicitColumnUnits: { unit: 'auto' },

    // --- Layout behavior ---
    overflow: 'visible',       // grid container overflow
    autoFlow: 'row',           // grid-auto-flow: row

    // --- Item alignment (per cell) ---
    justifyItems: 'stretch',
    alignItems: 'stretch',

    // --- Grid alignment (as a block inside parent) ---
    justifyContent: 'start',
    alignContent: 'start',
};

 