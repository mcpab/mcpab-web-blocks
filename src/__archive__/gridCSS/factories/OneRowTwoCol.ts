import type { ColNumbers, IDS, RowNumbers } from 'src/core/gridCSS/ids/kinds';
import type { LayoutFactory as CoreLayoutFactory } from 'src/core/gridCSS/core/layoutFactoryTypes';
import type { AbsoluteGrid } from "src/core/gridCSS/core/absoluteGridTypes";
import type { AbsoluteNode } from "src/core/gridCSS/core/gridNodeTypes";
import { GridNodeOptions } from "src/core/gridCSS/core/gridNodeTypes";
import { resolveGridOptions } from 'src/core/gridCSS/lib/resolveGridOptions';
import { uniformGrid, nodeDefaults } from 'src/core/gridCSS/presets/defaults';



type IDNodes = 'a_1_1' | 'a_1_2';

const nRows: RowNumbers = 1;
const nColumns: ColNumbers = 12;

type LayoutFactory<Id extends IDNodes> = CoreLayoutFactory<Id>;
export const OneRowTwoColLayoutFactory: LayoutFactory<IDNodes> = {

    

    createLayout: (gridOptions?, nodesOptions?) => {


        const { options, errors, warnings: resolveWarnings } = resolveGridOptions<IDNodes>(gridOptions, uniformGrid(nRows, nColumns));

        let localNodeOptions: Record<IDNodes, GridNodeOptions> = {
            a_1_1: nodeDefaults,
            a_1_2: nodeDefaults,
        };

        if (nodesOptions?.a_1_1?.options) {
            localNodeOptions.a_1_1 = { ...localNodeOptions.a_1_1, ...nodesOptions.a_1_1.options };
        }
        if (nodesOptions?.a_1_2?.options) {
            localNodeOptions.a_1_2 = { ...localNodeOptions.a_1_2, ...nodesOptions.a_1_2.options };
        }

        // Default, both nodes are occupying the full grid equally split
        let localAbsoluteNodes: Record<IDNodes, AbsoluteNode<IDNodes>> = {
            'a_1_1': {
                identity: { name: 'a_1_1' },
                coordinates: {
                    gridRowStart: 1,
                    gridRowEnd: 2,
                    gridColumnStart: 1,
                    gridColumnEnd: 7,
                },
                options: localNodeOptions['a_1_1'],
            },
            'a_1_2': {
                identity: { name: 'a_1_2' },
                coordinates: {
                    gridRowStart: 1,
                    gridRowEnd: 2,
                    gridColumnStart: 7,
                    gridColumnEnd: 13,
                },
                options: localNodeOptions['a_1_2'],
            },
        };


        if (nodesOptions) {

            if (nodesOptions['a_1_1'] && nodesOptions['a_1_1'].coordinates) {
                const { row, column, spanx, spany } = nodesOptions.a_1_1.coordinates;
                localAbsoluteNodes.a_1_1.coordinates = {
                    gridRowStart: row,
                    gridRowEnd: row + (spany ?? 1),   // rows ← spany
                    gridColumnStart: column,
                    gridColumnEnd: column + (spanx ?? 1) // cols ← spanx
                };
            }

            if (nodesOptions['a_1_2'] && nodesOptions['a_1_2'].coordinates) {
                const { row, column, spanx, spany } = nodesOptions.a_1_2.coordinates;
                localAbsoluteNodes.a_1_2.coordinates = {
                    gridRowStart: row,
                    gridRowEnd: row + (spany ?? 1),   // rows ← spany
                    gridColumnStart: column,
                    gridColumnEnd: column + (spanx ?? 1) // cols ← spanx
                };
            }
        }

        const absoluteGrid: AbsoluteGrid<IDNodes> = {

            options: options,
            nodes: localAbsoluteNodes,

        }
        return {
            grid: absoluteGrid,
            errors: errors ? errors : [],
            warnings: resolveWarnings ? resolveWarnings : [],
        };

    }

}