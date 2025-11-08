import { GridNodeOptions, GridOptions, TrackList } from '../core/layoutTypes';
import type { RowNumbers, ColNumbers } from '../ids/kinds';


export const nodeDefaults: GridNodeOptions = {
    justifySelf: 'stretch',
    alignSelf: 'stretch',

    visibility: 'visible',
};
export const uniformGrid = (rows: RowNumbers, columns: ColNumbers): GridOptions => ({
    mode: 'uniform',
    rows,
    columns,
    rowUnit: { unit: 'fr', value: 1 },
    columnUnit: { unit: 'fr', value: 1 },
    gap: { unit: 'px', value: 0 },
    implicitColumnUnits: { unit: 'auto' },
    implicitRowUnits: { unit: 'auto' },
    overflow: 'visible',
    justifyContent: 'center',
    alignContent: 'center',
});

 
export const ListGrid = (rows: TrackList, columns: TrackList): GridOptions => ({
    mode: 'list',
    rowSizes: rows,
    columnSizes: columns,     
    gap: { unit: 'px', value: 0 },
    implicitColumnUnits: { unit: 'auto' },
    implicitRowUnits: { unit: 'auto' },
    overflow: 'visible',
    justifyContent: 'center',
    alignContent: 'center',
});
