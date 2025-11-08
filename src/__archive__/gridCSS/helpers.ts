import type { GridElement, AbsoluteGridElement , GridLayout,AbsoluteGridLayout} from "./types";
import { deriveAutoUnitFromTemplate } from './gridUnitsHelpers';
type ConvertGridElementToAbsoluteProps = {
    element: GridElement;
    gridRowStart: number;
    gridColumnStart: number;
    gridRowEnd: number;
    gridColumnEnd: number;
    allowOverlap?: boolean;
    constrainChildren?: boolean;
}
export function convertGridElementToAbsolute({ element, gridRowStart, gridColumnStart, gridRowEnd, gridColumnEnd, allowOverlap = false, constrainChildren = false }:
    ConvertGridElementToAbsoluteProps): AbsoluteGridElement {

    return {
        id: element.id,
        name: element.name,
        gridRowStart,
        gridColumnStart,
        gridRowEnd,
        gridColumnEnd,
        allowOverlap,
        constrainChildren,
        justifySelf: element.justifySelf,
        alignSelf: element.alignSelf,
        role: element.role,
        tags: element.tags,
        order: element.order,
        visibility: element.visibility,
        zIndex: element.zIndex ?? undefined,
    };

}
  
type ConvertGridLayoutToAbsoluteProps = {
    layout: GridLayout;
    gridAutoRows: string;
    gridAutoColumns: string;
}


export function convertGridLayoutToAbsolute({ layout, gridAutoRows, gridAutoColumns }:
    ConvertGridLayoutToAbsoluteProps): AbsoluteGridLayout {

    return {

        id: layout.id,
        elements: [],
        gridAutoColumns: gridAutoColumns,
        gridAutoRows: gridAutoRows,
        computedColumns: 0,
        computedRows: 0,
        planVersion: 1,
        overflow: layout.overflow,
        rows: layout.rows,
        columns: layout.columns,
        implicitColumnUnits: layout.implicitColumnUnits,
        implicitRowUnits: layout.implicitRowUnits,
        gap: layout.gap,
        autoFlow: layout.autoFlow,
        justifyItems: layout.justifyItems,
        alignItems: layout.alignItems,
        justifyContent: layout.justifyContent,
        alignContent: layout.alignContent,

    }



}


export function deriveAutoGridUnits(layout: GridLayout, autoRows: string, warningR: string | undefined, autoColumns: string, warningC: string | undefined) 
: { autoRows: string; warningR: string | undefined; autoColumns: string; warningC: string | undefined } {

    if ('rowUnit' in layout.rows) {
        autoRows = layout.rows.rowUnit;
    } else {
        const derived = deriveAutoUnitFromTemplate(layout.rows.rowTemplate, layout.implicitRowUnits);
        autoRows = derived.unit;
        if (derived.isUniform === false) {
            warningR = `rowTemplate not uniform; using '${derived.unit}' (${derived.reason})\n`;
        }
    }

    if ('columnUnit' in layout.columns) {
        autoColumns = layout.columns.columnUnit;
    } else {
        const derived = deriveAutoUnitFromTemplate(layout.columns.columnTemplate, layout.implicitColumnUnits);
        autoColumns = derived.unit;
        if (derived.isUniform === false) {
            warningC = `columnTemplate not uniform; using '${derived.unit}' (${derived.reason})\n`;
        }
    }
    return { autoRows, warningR, autoColumns, warningC };

}

