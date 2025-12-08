import { BBCatalog } from "./bbCatalogTypes";
import { DefaultTransformations } from "./defaultBPTransformations";

const transformations = DefaultTransformations;

/// Single Cells
export const fiveCells: BBCatalog = {
    // Five unit cells (1x1 each)
    'fiveUnitCells': {
        description: 'Five 1x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'unitCell'
        },
        transformations: transformations
    },
    
    // Four unit cells with one double wide
    'fourUnitOneDoubleWide': {
        description: 'Four 1x1 and one 2x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Three unit cells with two double wide
    'threeUnitTwoDoubleWide': {
        description: 'Three 1x1 and two 2x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit cells with three double wide
    'twoUnitThreeDoubleWide': {
        description: 'Two 1x1 and three 2x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // One unit cell with four double wide
    'oneUnitFourDoubleWide': {
        description: 'One 1x1 and four 2x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Five double wide cells
    'fiveDoubleWide': {
        description: 'Five 2x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Four unit cells with one triple wide
    'fourUnitOneTripleWide': {
        description: 'Four 1x1 and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Three unit cells with two triple wide
    'threeUnitTwoTripleWide': {
        description: 'Three 1x1 and two 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit cells with three triple wide
    'twoUnitThreeTripleWide': {
        description: 'Two 1x1 and three 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit cell with four triple wide
    'oneUnitFourTripleWide': {
        description: 'One 1x1 and four 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Five triple wide cells
    'fiveTripleWide': {
        description: 'Five 3x1 blocks',
        boxes: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Three unit, one double, one triple
    'threeUnitDoubleTriple': {
        description: 'Three 1x1, one 2x1, and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit, two double, one triple
    'twoUnitTwoDoubleTriple': {
        description: 'Two 1x1, two 2x1, and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit, three double, one triple
    'oneUnitThreeDoubleTriple': {
        description: 'One 1x1, three 2x1, and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Four double, one triple
    'fourDoubleTriple': {
        description: 'Four 2x1 and one 3x1 block',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit, one double, two triple
    'twoUnitDoubleWoTriple': {
        description: 'Two 1x1, one 2x1, and two 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit, two double, two triple
    'oneUnitTwoDoubleTwoTriple': {
        description: 'One 1x1, two 2x1, and two 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Three double, two triple
    'threeDoubleTwoTriple': {
        description: 'Three 2x1 and two 3x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit, one double, three triple
    'oneUnitDoubleThreeTriple': {
        description: 'One 1x1, one 2x1, and three 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two double, three triple
    'twoDoubleThreeTriple': {
        description: 'Two 2x1 and three 3x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One double, four triple
    'oneDoubleFourTriple': {
        description: 'One 2x1 and four 3x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell'
        },
        transformations: transformations
    }
}