import { defineEntry } from "./defineBBCatalogEntry";
import { DefaultTransformationsResponsiveRows } from "./defaultBPTransformations";

const transformations = DefaultTransformationsResponsiveRows;
export const twoCells = {
    // Unit cell combinations
    'twoUnitCells': defineEntry({
        description: 'Two 1x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell'
            },
            transformations: transformations
        }
    }),
    
    // Unit cell with double cells
    'unitCellWithDoubleWide': defineEntry({
        description: 'One 1x1 and one 2x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWithDoubleTall': defineEntry({
        description: 'One 1x1 and one 1x2 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleTallCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWithDouble': defineEntry({
        description: 'One 1x1 and one 2x2 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleCell'
        },
            transformations: transformations
        }
    }),
    
    // Double cell combinations
    'twoDoubleWide': defineEntry({
        description: 'Two 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    'twoDoubleTall': defineEntry({
        description: 'Two 1x2 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleTallCell',
            block_2: 'doubleTallCell'
        },
            transformations: transformations
        }
    }),
    'twoDouble': defineEntry({
        description: 'Two 2x2 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleCell',
            block_2: 'doubleCell'
        },
            transformations: transformations
        }
    }),
    'doubleWideWithDoubleTall': defineEntry({
        description: 'One 2x1 and one 1x2 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleTallCell'
        },
            transformations: transformations
        }
    }),
    
    // Unit cell with triple cells
    'unitCellWithTripleWide': defineEntry({
        description: 'One 1x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWithTripleTall': defineEntry({
        description: 'One 1x1 and one 1x3 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleTallCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWithTriple': defineEntry({
        description: 'One 1x1 and one 3x3 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleCell'
        },
            transformations: transformations
        }
    }),
    
    // Triple cell combinations
    'twoTripleWide': defineEntry({
        description: 'Two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    'twoTripleTall': defineEntry({
        description: 'Two 1x3 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleTallCell',
            block_2: 'tripleTallCell'
        },
            transformations: transformations
        }
    }),
    'twoTriple': defineEntry({
        description: 'Two 3x3 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleCell',
            block_2: 'tripleCell'
        },
            transformations: transformations
        }
    }),
    
    // 5-cell combinations
    'unitCellWith5Wide': defineEntry({
        description: 'One 1x1 and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '5WideCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWith5Tall': defineEntry({
        description: 'One 1x1 and one 1x5 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '5TallCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWith5x5': defineEntry({
        description: 'One 1x1 and one 5x5 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '5Wide5TallCell'
        },
            transformations: transformations
        }
    }),
    'two5Wide': defineEntry({
        description: 'Two 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5WideCell',
            block_2: '5WideCell'
        },
            transformations: transformations
        }
    }),
    'two5Tall': defineEntry({
        description: 'Two 1x5 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5TallCell',
            block_2: '5TallCell'
        },
            transformations: transformations
        }
    }),
    'two5x5': defineEntry({
        description: 'Two 5x5 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5Wide5TallCell',
            block_2: '5Wide5TallCell'
        },
            transformations: transformations
        }
    }),
    
    // 10-cell combinations
    'unitCellWith10Wide': defineEntry({
        description: 'One 1x1 and one 10x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWith10Tall': defineEntry({
        description: 'One 1x1 and one 1x10 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '10TallCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWith10x10': defineEntry({
        description: 'One 1x1 and one 10x10 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '10Wide10TallCell'
        },
            transformations: transformations
        }
    }),
    'two10Wide': defineEntry({
        description: 'Two 10x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10WideCell',
            block_2: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'two10Tall': defineEntry({
        description: 'Two 1x10 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10TallCell',
            block_2: '10TallCell'
        },
            transformations: transformations
        }
    }),
    'two10x10': defineEntry({
        description: 'Two 10x10 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10Wide10TallCell',
            block_2: '10Wide10TallCell'
        },
            transformations: transformations
        }
    }),
    
    // Mixed size combinations (some interesting pairs)
    'doubleWith5Wide': defineEntry({
        description: 'One 2x2 and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleCell',
            block_2: '5WideCell'
        },
            transformations: transformations
        }
    }),
    'tripleWith10Wide': defineEntry({
        description: 'One 3x3 and one 10x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleCell',
            block_2: '10WideCell'
        },
            transformations: transformations
        }
    }),
    '5x5With10Tall': defineEntry({
        description: 'One 5x5 and one 1x10 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5Wide5TallCell',
            block_2: '10TallCell'
        },
            transformations: transformations
        }
    }),
    
    // Large combinations
    'unitCellWith15Wide': defineEntry({
        description: 'One 1x1 and one 15x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '15WideCell'
        },
            transformations: transformations
        }
    }),
    'unitCellWith20Wide': defineEntry({
        description: 'One 1x1 and one 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '20WideCell'
        },
            transformations: transformations
        }
    }),
    'two15x15': defineEntry({
        description: 'Two 15x15 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '15Wide15TallCell',
            block_2: '15Wide15TallCell'
        },
            transformations: transformations
        }
    }),
    'two20x20': defineEntry({
        description: 'Two 20x20 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '20Wide20TallCell',
            block_2: '20Wide20TallCell'
        },
            transformations: transformations
        }
    })
}  as const ;