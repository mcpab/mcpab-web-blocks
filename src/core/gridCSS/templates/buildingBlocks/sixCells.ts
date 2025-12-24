import { defineEntry } from "./defineBBCatalogEntry";
import { DefaultTransformationsResponsiveRows } from "./defaultBPTransformations";

const transformations = DefaultTransformationsResponsiveRows;

/// Six Cells
export const sixCells = {
    // Six unit cells (1x1 each)
    'sixUnitCells': defineEntry({
        description: 'Six 1x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'unitCell',
            block_6: 'unitCell'
        },
            transformations: transformations
        }
    }),
    
    // Five unit cells with one double wide
    'fiveUnitOneDoubleWide': defineEntry({
        description: 'Five 1x1 and one 2x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'unitCell',
            block_6: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Four unit cells with two double wide
    'fourUnitTwoDoubleWide': defineEntry({
        description: 'Four 1x1 and two 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three unit cells with three double wide
    'threeUnitThreeDoubleWide': defineEntry({
        description: 'Three 1x1 and three 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit cells with four double wide
    'twoUnitFourDoubleWide': defineEntry({
        description: 'Two 1x1 and four 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit cell with five double wide
    'oneUnitFiveDoubleWide': defineEntry({
        description: 'One 1x1 and five 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Six double wide cells
    'sixDoubleWide': defineEntry({
        description: 'Six 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Five unit cells with one triple wide
    'fiveUnitOneTripleWide': defineEntry({
        description: 'Five 1x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'unitCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Four unit cells with two triple wide
    'fourUnitTwoTripleWide': defineEntry({
        description: 'Four 1x1 and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three unit cells with three triple wide
    'threeUnitThreeTripleWide': defineEntry({
        description: 'Three 1x1 and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit cells with four triple wide
    'twoUnitFourTripleWide': defineEntry({
        description: 'Two 1x1 and four 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit cell with five triple wide
    'oneUnitFiveTripleWide': defineEntry({
        description: 'One 1x1 and five 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Six triple wide cells
    'sixTripleWide': defineEntry({
        description: 'Six 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Four unit, one double, one triple
    'fourUnitDoubleTriple': defineEntry({
        description: 'Four 1x1, one 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three unit, two double, one triple
    'threeUnitTwoDoubleTriple': defineEntry({
        description: 'Three 1x1, two 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit, three double, one triple
    'twoUnitThreeDoubleTriple': defineEntry({
        description: 'Two 1x1, three 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, four double, one triple
    'oneUnitFourDoubleTriple': defineEntry({
        description: 'One 1x1, four 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Five double, one triple
    'fiveDoubleTriple': defineEntry({
        description: 'Five 2x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'doubleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three unit, one double, two triple
    'threeUnitDoubleTwoTriple': defineEntry({
        description: 'Three 1x1, one 2x1, and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit, two double, two triple
    'twoUnitTwoDoubleTwoTriple': defineEntry({
        description: 'Two 1x1, two 2x1, and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, three double, two triple
    'oneUnitThreeDoubleTwoTriple': defineEntry({
        description: 'One 1x1, three 2x1, and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Four double, two triple
    'fourDoubleTwoTriple': defineEntry({
        description: 'Four 2x1 and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit, one double, three triple
    'twoUnitDoubleThreeTriple': defineEntry({
        description: 'Two 1x1, one 2x1, and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, two double, three triple
    'oneUnitTwoDoubleThreeTriple': defineEntry({
        description: 'One 1x1, two 2x1, and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three double, three triple
    'threeDoubleThreeTriple': defineEntry({
        description: 'Three 2x1 and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, one double, four triple
    'oneUnitDoubleWourTriple': defineEntry({
        description: 'One 1x1, one 2x1, and four 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two double, four triple
    'twoDoubleFourTriple': defineEntry({
        description: 'Two 2x1 and four 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One double, five triple
    'oneDoubleFiveTriple': defineEntry({
        description: 'One 2x1 and five 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell',
            block_5: 'tripleWideCell',
            block_6: 'tripleWideCell'
        },
            transformations: transformations
        }
    })
}  as const;