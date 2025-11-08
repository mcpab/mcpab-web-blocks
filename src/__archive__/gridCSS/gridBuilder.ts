import type { GridElement, GridLayout, AbsoluteGridElement, AbsoluteGridLayout, GridErrorShape } from './types'
import { deriveAutoGridUnits } from './helpers';
import { convertGridLayoutToAbsolute, convertGridElementToAbsolute } from './helpers';
// sort by order

export function gridBuilder(layout: GridLayout): {absoluteGrid: AbsoluteGridLayout, warnings: GridErrorShape[]} {

    let errors: GridErrorShape[] = [];
    let autoRows: string = '';
    let autoColumns: string = '';
    let warningR: string | undefined = undefined;
    let warningC: string | undefined = undefined;

   ({ autoRows, warningR, autoColumns, warningC } = deriveAutoGridUnits(layout, autoRows, warningR, autoColumns, warningC));

    let absoluteGrid: AbsoluteGridLayout = convertGridLayoutToAbsolute({ layout, gridAutoRows: autoRows, gridAutoColumns: autoColumns });

    if (warningR) {
        errors.push({ code: 'implicit-track', elementId: 'layout', message: warningR });
    }

    if (warningC) {
        errors.push({ code: 'implicit-track', elementId: 'layout', message: warningC });
    }

    let firstParent: GridElement = {
        id: 'parent-root',
        name: 'parent-root',
        row: 1,
        column: 1,

    };

    for (let element of layout.elements) {

        addSubgrid(firstParent, element, absoluteGrid);

    }

    absoluteGrid.elements.sort((a, b) => {
        const ao = a.order ?? Number.MAX_SAFE_INTEGER;
        const bo = b.order ?? Number.MAX_SAFE_INTEGER;
        if (ao !== bo) return ao - bo;            // primary: order
        return a.id.localeCompare(b.id);           // secondary: id
    });

    return { absoluteGrid, warnings: errors };

}

function addSubgrid(parent: GridElement, child: GridElement, absoluteGrid: AbsoluteGridLayout) {

    const absoluteChild: AbsoluteGridElement = convertGridElementToAbsolute({
        element: child,
        gridRowStart: parent.row + child.row - 1,
        gridColumnStart: parent.column + child.column - 1,
        gridRowEnd: parent.row + child.row - 1 + (child.spany ?? 1),
        gridColumnEnd: parent.column + child.column - 1 + (child.spanx ?? 1),
        allowOverlap: child.allowOverlap ?? false,
        constrainChildren: child.constrainChildren ?? false,

    });

    absoluteGrid.computedRows = Math.max(absoluteGrid.computedRows, absoluteChild.gridRowEnd - 1);
    absoluteGrid.computedColumns = Math.max(absoluteGrid.computedColumns, absoluteChild.gridColumnEnd - 1);

    absoluteGrid.elements.push(absoluteChild);

    let relativeParent: GridElement = {
        id: child.id,
        name: child.name,
        row: absoluteChild.gridRowStart,
        column: absoluteChild.gridColumnStart,
    };

    if (child.children) {
        for (let subChild of child.children) {
            addSubgrid(relativeParent, subChild, absoluteGrid);
        }
    }

}

