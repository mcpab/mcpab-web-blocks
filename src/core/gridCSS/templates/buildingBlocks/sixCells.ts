import { BBCatalog } from "./bbCatalogTypes";
 
const transformations = {
                xs: [
                    { 'stackVertically': {} }
                ],
                md: [
                    { 'stackHorizontally': {} }
                ]
            };

/// Single Cells
export const sixCells: BBCatalog = {
    // Six unit cells (1x1 each)
    'sixUnitCells': {
        description: 'Six 1x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'unitCell',
            block_6: 'unitCell'
        },
        transformations: transformations
    },
    
    // Five unit cells with one double wide
    'fiveUnitOneDoubleWide': {
        description: 'Five 1x1 and one 2x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'unitCell',
            block_6: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Four unit cells with two double wide
    'fourUnitTwoDoubleWide': {
        description: 'Four 1x1 and two 2x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Three unit cells with three double wide
    'threeUnitThreeDoubleWide': {
        description: 'Three 1x1 and three 2x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit cells with four double wide
    'twoUnitFourDoubleWide': {
        description: 'Two 1x1 and four 2x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // One unit cell with five double wide
    'oneUnitFiveDoubleWide': {
        description: 'One 1x1 and five 2x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Six double wide cells
    'sixDoubleWide': {
        description: 'Six 2x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
        transformations: transformations
    },
    
    // Five unit cells with one triple wide
    'fiveUnitOneTripleWide': {
        description: 'Five 1x1 and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'unitCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Four unit cells with two triple wide
    'fourUnitTwoTripleWide': {
        description: 'Four 1x1 and two 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Three unit cells with three triple wide
    'threeUnitThreeTripleWide': {
        description: 'Three 1x1 and three 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit cells with four triple wide
    'twoUnitFourTripleWide': {
        description: 'Two 1x1 and four 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit cell with five triple wide
    'oneUnitFiveTripleWide': {
        description: 'One 1x1 and five 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Six triple wide cells
    'sixTripleWide': {
        description: 'Six 3x1 blocks',
        boxes: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Four unit, one double, one triple
    'fourUnitDoubleTriple': {
        description: 'Four 1x1, one 2x1, and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Three unit, two double, one triple
    'threeUnitTwoDoubleTriple': {
        description: 'Three 1x1, two 2x1, and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit, three double, one triple
    'twoUnitThreeDoubleTriple': {
        description: 'Two 1x1, three 2x1, and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit, four double, one triple
    'oneUnitFourDoubleTriple': {
        description: 'One 1x1, four 2x1, and one 3x1 block',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Five double, one triple
    'fiveDoubleTriple': {
        description: 'Five 2x1 and one 3x1 block',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Three unit, one double, two triple
    'threeUnitDoubleTwoTriple': {
        description: 'Three 1x1, one 2x1, and two 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit, two double, two triple
    'twoUnitTwoDoubleTwoTriple': {
        description: 'Two 1x1, two 2x1, and two 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit, three double, two triple
    'oneUnitThreeDoubleTwoTriple': {
        description: 'One 1x1, three 2x1, and two 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Four double, two triple
    'fourDoubleTwoTriple': {
        description: 'Four 2x1 and two 3x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two unit, one double, three triple
    'twoUnitDoubleThreeTriple': {
        description: 'Two 1x1, one 2x1, and three 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit, two double, three triple
    'oneUnitTwoDoubleThreeTriple': {
        description: 'One 1x1, two 2x1, and three 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Three double, three triple
    'threeDoubleThreeTriple': {
        description: 'Three 2x1 and three 3x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One unit, one double, four triple
    'oneUnitDoubleWourTriple': {
        description: 'One 1x1, one 2x1, and four 3x1 blocks',
        boxes: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // Two double, four triple
    'twoDoubleFourTriple': {
        description: 'Two 2x1 and four 3x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    },
    
    // One double, five triple
    'oneDoubleFiveTriple': {
        description: 'One 2x1 and five 3x1 blocks',
        boxes: {
            block_1: 'doubleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
        transformations: transformations
    }
}