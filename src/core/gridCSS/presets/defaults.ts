import { DefaultNodeManager } from "../core/defaultNodeManager";
import { BPs } from "../core/breakpoints";
import { AbsoluteGrid } from "../core/absoluteGridTypes";
import { GridOptions } from "../core/gridConfig";
import { CssLength } from "../core/domainTypes";
 

 

const px = (value: number): CssLength => ({ unit: 'px', value });

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


export const defaultGrid = <K extends string>(nodeManager: DefaultNodeManager<K>, 
    rows: BPs<number>, columns: BPs<number>, gridOptions?: Partial<GridOptions>,): AbsoluteGrid<K> => {

    const canonicalGrid: AbsoluteGrid<K> = {
 
        rows: rows,
        columns: columns,
        options: { ...defaultUniformGridOptions, ...gridOptions },
        nodes: nodeManager.nodesRegistry


    }
    return canonicalGrid;

}
