



export type GridElement = {

    id: string;
    name?: string;
    row: number;
    column: number;
    spanx?: number;
    spany?: number;
    zIndex?: number | undefined;
    allowOverlap?: boolean;
    children?: GridElement[];
    constrainChildren?: boolean;

    justifySelf?: 'start' | 'end' | 'center' | 'stretch';
    alignSelf?: 'start' | 'end' | 'center' | 'stretch';

    role?: string;
    tags?: string[];
    order?: number;

    visibility?: 'visible' | 'hidden' | 'visuallyHidden';

};


export type AbsoluteGridElement = Omit<GridElement, 'row' | 'column' | 'spanx' | 'spany' | 'children' | 'allowOverlap' | 'constrainChildren'> & {

    gridRowStart: number;
    gridColumnStart: number;
    gridRowEnd: number;
    gridColumnEnd: number;
    allowOverlap: boolean;
    constrainChildren: boolean;


}
export type columnDef = { columns: number; columnUnit: string } | { columnTemplate: string };
export type rowDef = { rows: number; rowUnit: string } | { rowTemplate: string };

type gapDef = (string | number) | { rowGap: string | number; columnGap: string | number };

export type GridLayout = {

    // must be unique across layouts
    id?: string;
    rows: rowDef;
    columns: columnDef;
    elements: GridElement[];

    implicitRowUnits?: string;
    implicitColumnUnits?: string;

    overflow: 'visible' | 'hidden' | 'scroll' | 'auto';

    gap?: gapDef;

    autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';


    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
    alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';


}

export type GridErrorShape = {
    code: 'implicit-track' | 'overlap-without-z' | 'invalid-span' | 'constraint-violation' | 'out-of-bounds' | 'duplicate-id' |
    'overlap-not-allowed' | 'invalid-position' | 'order-ties' | 'explicit-count-unknown' | 'plan-mismatch';
    elementId: string;
    message: string;
    details?: any;
}

export type KeyedAbsoluteGridElement<Name extends string = string> = Omit<AbsoluteGridElement, 'id'> & {
    id: Name;
};

export type KeyedAbsoluteGridElements<Name extends string = string> = Record<Name, KeyedAbsoluteGridElement<Name>>;
 

export type AbsoluteGridLayout = Omit<GridLayout, 'elements'> & {

    planVersion: 1;
    elements: AbsoluteGridElement[];
    gridAutoRows: string;
    gridAutoColumns: string;
    computedRows: number;
    computedColumns: number;
    //     Document:
    // computedRows = max(gridRowEnd) − 1 across items; computedColumns = max(gridColumnEnd) − 1.
    // These reflect explicit + implicit tracks actually used.
    //     warnings?: string[];


}

export type LayoutsByBP = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', GridLayout>>;
