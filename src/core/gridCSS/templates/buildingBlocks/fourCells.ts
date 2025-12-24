import { defineEntry } from "./defineBBCatalogEntry";
import { DefaultTransformationsResponsiveRows } from "./defaultBPTransformations";

const transformations = DefaultTransformationsResponsiveRows;
/// Single Cells
export const fourCells = {
    // Four unit cells (1x1 each)
    'fourUnitCells': defineEntry({
        description: 'Four 1x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'unitCell'
        },
            transformations: transformations
        }
    }),
    
    // Three unit cells with one double wide
    'threeUnitOneDoubleWide': defineEntry({
        description: 'Three 1x1 and one 2x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit cells with two double wide
    'twoUnitTwoDoubleWide': defineEntry({
        description: 'Two 1x1 and two 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit cell with three double wide
    'oneUnitThreeDoubleWide': defineEntry({
        description: 'One 1x1 and three 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Four double wide cells
    'fourDoubleWide': defineEntry({
        description: 'Four 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'doubleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three unit cells with one triple wide
    'threeUnitOneTripleWide': defineEntry({
        description: 'Three 1x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit cells with two triple wide
    'twoUnitTwoTripleWide': defineEntry({
        description: 'Two 1x1 and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit cell with three triple wide
    'oneUnitThreeTripleWide': defineEntry({
        description: 'One 1x1 and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Four triple wide cells
    'fourTripleWide': defineEntry({
        description: 'Four 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit, one double wide, one triple wide
    'twoUnitDoubleTripleWide': defineEntry({
        description: 'Two 1x1, one 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, two double wide, one triple wide
    'oneUnitTwoDoubleTripleWide': defineEntry({
        description: 'One 1x1, two 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, one double wide, two triple wide
    'oneUnitDoubleWTwoTripleWide': defineEntry({
        description: 'One 1x1, one 2x1, and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three double wide with one triple wide
    'threeDoubleOneTripleWide': defineEntry({
        description: 'Three 2x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two double wide with two triple wide
    'twoDoubleTwoTripleWide': defineEntry({
        description: 'Two 2x1 and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One double wide with three triple wide
    'oneDoubleThreeTripleWide': defineEntry({
        description: 'One 2x1 and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three unit cells with one 5-wide
    'threeUnitOne5Wide': defineEntry({
        description: 'Three 1x1 and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit cells with two 5-wide
    'twoUnitTwo5Wide': defineEntry({
        description: 'Two 1x1 and two 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit cell with three 5-wide
    'oneUnitThree5Wide': defineEntry({
        description: 'One 1x1 and three 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '5WideCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Four 5-wide cells
    'four5Wide': defineEntry({
        description: 'Four 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5WideCell',
            block_2: '5WideCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit, one double wide, one 5-wide
    'twoUnitDouble5Wide': defineEntry({
        description: 'Two 1x1, one 2x1, and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'doubleWideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit, one triple wide, one 5-wide
    'twoUnitTriple5Wide': defineEntry({
        description: 'Two 1x1, one 3x1, and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'tripleWideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, two triple wide, one 5-wide
    'oneUnitTwoTriple5Wide': defineEntry({
        description: 'One 1x1, two 3x1, and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, one triple wide, two 5-wide
    'oneUnitTripleTwot5Wide': defineEntry({
        description: 'One 1x1, one 3x1, and two 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three double wide with one 5-wide
    'threeDoubleOne5Wide': defineEntry({
        description: 'Three 2x1 and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: 'doubleWideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two double wide with two 5-wide
    'twoDoubleTwo5Wide': defineEntry({
        description: 'Two 2x1 and two 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: 'doubleWideCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One double wide with three 5-wide
    'oneDoubleThree5Wide': defineEntry({
        description: 'One 2x1 and three 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell',
            block_2: '5WideCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three triple wide with one 5-wide
    'threeTripleOne5Wide': defineEntry({
        description: 'Three 3x1 and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two triple wide with two 5-wide
    'twoTripleTwo5Wide': defineEntry({
        description: 'Two 3x1 and two 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One triple wide with three 5-wide
    'oneTripleThree5Wide': defineEntry({
        description: 'One 3x1 and three 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: '5WideCell',
            block_3: '5WideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, one double, one triple, one 5-wide
    'unitDoubleTriple5Wide': defineEntry({
        description: 'One 1x1, one 2x1, one 3x1, and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'doubleWideCell',
            block_3: 'tripleWideCell',
            block_4: '5WideCell'
        },
            transformations: transformations
        }
    })
}  as const ;