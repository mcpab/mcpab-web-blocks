import { BBCatalog } from "./bbCatalogTypes";
import { DefaultTransformations } from "./defaultBPTransformations";

const transformations = DefaultTransformations;
export const twoCells: BBCatalog = {
    // Unit cell combinations
    'twoUnitCells' : {
        description: 'Two 1x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell'
        },
        transformations: transformations
    },
    
    // Unit cell with double cells
    'unitCellWithDoubleWide': {
        description: 'One 1x1 and one 2x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell'
        },
        transformations: transformations
    },
    'unitCellWithDoubleTall': {
        description: 'One 1x1 and one 1x2 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleTallCell'
        },
        transformations: transformations
    },
    'unitCellWithDouble': {
        description: 'One 1x1 and one 2x2 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleCell'
        },
        transformations: transformations
    },
    
    // Double cell combinations
    'twoDoubleWide': {
        description: 'Two 2x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell'
        },
        transformations: transformations
    },
    'twoDoubleTall': {
        description: 'Two 1x2 blocks',
        boxes: {
            block_1: 'doubleTallCell',
            block_2: 'doubleTallCell'
        },
        transformations: transformations
    },
    'twoDouble': {
        description: 'Two 2x2 blocks',
        boxes: {
            block_1: 'doubleCell',
            block_2: 'doubleCell'
        },
        transformations: transformations
    },
    'doubleWideWithDoubleTall': {
        description: 'One 2x1 and one 1x2 block',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleTallCell'
        },
        transformations: transformations
    },
    
    // Unit cell with triple cells
    'unitCellWithTripleWide': {
        description: 'One 1x1 and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell'
        },
        transformations: transformations
    },
    'unitCellWithTripleTall': {
        description: 'One 1x1 and one 1x3 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'tripleTallCell'
        },
        transformations: transformations
    },
    'unitCellWithTriple': {
        description: 'One 1x1 and one 3x3 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'tripleCell'
        },
        transformations: transformations
    },
    
    // Triple cell combinations
    'twoTripleWide': {
        description: 'Two 3x1 blocks',
        boxes: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell'
        },
        transformations: transformations
    },
    'twoTripleTall': {
        description: 'Two 1x3 blocks',
        boxes: {
            block_1: 'tripleTallCell',
            block_2: 'tripleTallCell'
        },
        transformations: transformations
    },
    'twoTriple': {
        description: 'Two 3x3 blocks',
        boxes: {
            block_1: 'tripleCell',
            block_2: 'tripleCell'
        },
        transformations: transformations
    },
    
    // 5-cell combinations
    'unitCellWith5Wide': {
        description: 'One 1x1 and one 5x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '5WideCell'
        },
        transformations: transformations
    },
    'unitCellWith5Tall': {
        description: 'One 1x1 and one 1x5 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '5TallCell'
        },
        transformations: transformations
    },
    'unitCellWith5x5': {
        description: 'One 1x1 and one 5x5 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '5Wide5TallCell'
        },
        transformations: transformations
    },
    'two5Wide': {
        description: 'Two 5x1 blocks',
        boxes: {
            block_1: '5WideCell',
            block_2: '5WideCell'
        },
        transformations: transformations
    },
    'two5Tall': {
        description: 'Two 1x5 blocks',
        boxes: {
            block_1: '5TallCell',
            block_2: '5TallCell'
        },
        transformations: transformations
    },
    'two5x5': {
        description: 'Two 5x5 blocks',
        boxes: {
            block_1: '5Wide5TallCell',
            block_2: '5Wide5TallCell'
        },
        transformations: transformations
    },
    
    // 10-cell combinations
    'unitCellWith10Wide': {
        description: 'One 1x1 and one 10x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '10WideCell'
        },
        transformations: transformations
    },
    'unitCellWith10Tall': {
        description: 'One 1x1 and one 1x10 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '10TallCell'
        },
        transformations: transformations
    },
    'unitCellWith10x10': {
        description: 'One 1x1 and one 10x10 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '10Wide10TallCell'
        },
        transformations: transformations
    },
    'two10Wide': {
        description: 'Two 10x1 blocks',
        boxes: {
            block_1: '10WideCell',
            block_2: '10WideCell'
        },
        transformations: transformations
    },
    'two10Tall': {
        description: 'Two 1x10 blocks',
        boxes: {
            block_1: '10TallCell',
            block_2: '10TallCell'
        },
        transformations: transformations
    },
    'two10x10': {
        description: 'Two 10x10 blocks',
        boxes: {
            block_1: '10Wide10TallCell',
            block_2: '10Wide10TallCell'
        },
        transformations: transformations
    },
    
    // Mixed size combinations (some interesting pairs)
    'doubleWith5Wide': {
        description: 'One 2x2 and one 5x1 block',
        boxes: {
            block_1: 'doubleCell',
            block_2: '5WideCell'
        },
        transformations: transformations
    },
    'tripleWith10Wide': {
        description: 'One 3x3 and one 10x1 block',
        boxes: {
            block_1: 'tripleCell',
            block_2: '10WideCell'
        },
        transformations: transformations
    },
    '5x5With10Tall': {
        description: 'One 5x5 and one 1x10 block',
        boxes: {
            block_1: '5Wide5TallCell',
            block_2: '10TallCell'
        },
        transformations: transformations
    },
    
    // Large combinations
    'unitCellWith15Wide': {
        description: 'One 1x1 and one 15x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '15WideCell'
        },
        transformations: transformations
    },
    'unitCellWith20Wide': {
        description: 'One 1x1 and one 20x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: '20WideCell'
        },
        transformations: transformations
    },
    'two15x15': {
        description: 'Two 15x15 blocks',
        boxes: {
            block_1: '15Wide15TallCell',
            block_2: '15Wide15TallCell'
        },
        transformations: transformations
    },
    'two20x20': {
        description: 'Two 20x20 blocks',
        boxes: {
            block_1: '20Wide20TallCell',
            block_2: '20Wide20TallCell'
        },
        transformations: transformations
    }
}