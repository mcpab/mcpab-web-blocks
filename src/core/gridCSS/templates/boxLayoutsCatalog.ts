import { bbCatalog } from "./buildingBlocks/bbCatalog";


const layoutsCatalog = {

    'singleCell': {
        'row_1': {
            boxes: bbCatalog['unitCell'].boxDimensionIdsAndTx,
        }
    },
    'twoCells': {
        'row_1': {
            boxes: bbCatalog['twoUnitCells'].boxDimensionIdsAndTx,
        },
    },
    'sideBarAndContent': {
        'row_1': {
            boxes: bbCatalog['unitCellWith5Wide'].boxDimensionIdsAndTx,
        },
    },
    'footerHeader5Columns': {
        'header': {
            boxes: bbCatalog['unitCellWith5Wide'].boxDimensionIdsAndTx,
        },
        'content': {
            boxes: bbCatalog['fiveUnitCells'].boxDimensionIdsAndTx,
        },
        'footer': {
            boxes: bbCatalog['unitCellWith5Wide'].boxDimensionIdsAndTx,
        },
    },
    'footerHeader3Columns': {
        'header': {
            boxes: bbCatalog['tripleWideCell'].boxDimensionIdsAndTx,
        },
        'content': {
            boxes: bbCatalog['threeUnitCells'].boxDimensionIdsAndTx,
        },
        'footer': {
            boxes: bbCatalog['tripleWideCell'].boxDimensionIdsAndTx,
        },
    }
} as const;

const kk = bbCatalog['fiveUnitCells'].boxDimensionIdsAndTx.transformations;
const lp = layoutsCatalog['footerHeader3Columns']['content'];

type lq = typeof lp;

import { singleCells } from "./buildingBlocks/singleCells";

const jj = singleCells['unitCell'];