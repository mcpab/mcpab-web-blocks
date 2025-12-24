import { defineEntry } from "./defineBBCatalogEntry";
import { DefaultTransformationsResponsiveRows } from "./defaultBPTransformations";

// const transformations = DefaultTransformations();
const transformations = DefaultTransformationsResponsiveRows;

/// Five Cells
export const fiveCells = {
    // Five unit cells (1x1 each)
    'fiveUnitCells': defineEntry({
        description: 'Five 1x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'unitCell',
                block_4: 'unitCell',
                block_5: 'unitCell'
            },
            transformations: transformations
        }
    }),

    // Four unit cells with one double wide
    'fourUnitOneDoubleWide': defineEntry({
        description: 'Four 1x1 and one 2x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'unitCell',
                block_4: 'unitCell',
                block_5: 'doubleWideCell'
            },
            transformations: transformations
        }
    }),

    // Three unit cells with two double wide
    'threeUnitTwoDoubleWide': defineEntry({
        description: 'Three 1x1 and two 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'unitCell',
                block_4: 'doubleWideCell',
                block_5: 'doubleWideCell'
            },
            transformations: transformations
        }
    }),

    // Two unit cells with three double wide
    'twoUnitThreeDoubleWide': defineEntry({
        description: 'Two 1x1 and three 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'doubleWideCell',
                block_4: 'doubleWideCell',
                block_5: 'doubleWideCell'
            },
            transformations: transformations
        }
    }),

    // One unit cell with four double wide
    'oneUnitFourDoubleWide': defineEntry({
        description: 'One 1x1 and four 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'doubleWideCell',
                block_3: 'doubleWideCell',
                block_4: 'doubleWideCell',
                block_5: 'doubleWideCell'
            },
            transformations: transformations
        }
    }),

    // Five double wide cells
    'fiveDoubleWide': defineEntry({
        description: 'Five 2x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'doubleWideCell',
                block_2: 'doubleWideCell',
                block_3: 'doubleWideCell',
                block_4: 'doubleWideCell',
                block_5: 'doubleWideCell'
            },
            transformations: transformations
        }
    }),

    // Four unit cells with one triple wide
    'fourUnitOneTripleWide': defineEntry({
        description: 'Four 1x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'unitCell',
                block_4: 'unitCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Three unit cells with two triple wide
    'threeUnitTwoTripleWide': defineEntry({
        description: 'Three 1x1 and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'unitCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Two unit cells with three triple wide
    'twoUnitThreeTripleWide': defineEntry({
        description: 'Two 1x1 and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'tripleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // One unit cell with four triple wide
    'oneUnitFourTripleWide': defineEntry({
        description: 'One 1x1 and four 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'tripleWideCell',
                block_3: 'tripleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Five triple wide cells
    'fiveTripleWide': defineEntry({
        description: 'Five 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'tripleWideCell',
                block_2: 'tripleWideCell',
                block_3: 'tripleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Three unit, one double, one triple
    'threeUnitDoubleTriple': defineEntry({
        description: 'Three 1x1, one 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'unitCell',
                block_4: 'doubleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Two unit, two double, one triple
    'twoUnitTwoDoubleTriple': defineEntry({
        description: 'Two 1x1, two 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'doubleWideCell',
                block_4: 'doubleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // One unit, three double, one triple
    'oneUnitThreeDoubleTriple': defineEntry({
        description: 'One 1x1, three 2x1, and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'doubleWideCell',
                block_3: 'doubleWideCell',
                block_4: 'doubleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Four double, one triple
    'fourDoubleTriple': defineEntry({
        description: 'Four 2x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'doubleWideCell',
                block_2: 'doubleWideCell',
                block_3: 'doubleWideCell',
                block_4: 'doubleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Two unit, one double, two triple
    'twoUnitDoubleWoTriple': defineEntry({
        description: 'Two 1x1, one 2x1, and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'unitCell',
                block_3: 'doubleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // One unit, two double, two triple
    'oneUnitTwoDoubleTwoTriple': defineEntry({
        description: 'One 1x1, two 2x1, and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'doubleWideCell',
                block_3: 'doubleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Three double, two triple
    'threeDoubleTwoTriple': defineEntry({
        description: 'Three 2x1 and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'doubleWideCell',
                block_2: 'doubleWideCell',
                block_3: 'doubleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // One unit, one double, three triple
    'oneUnitDoubleThreeTriple': defineEntry({
        description: 'One 1x1, one 2x1, and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell',
                block_2: 'doubleWideCell',
                block_3: 'tripleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // Two double, three triple
    'twoDoubleThreeTriple': defineEntry({
        description: 'Two 2x1 and three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'doubleWideCell',
                block_2: 'doubleWideCell',
                block_3: 'tripleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    }),

    // One double, four triple
    'oneDoubleFourTriple': defineEntry({
        description: 'One 2x1 and four 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'doubleWideCell',
                block_2: 'tripleWideCell',
                block_3: 'tripleWideCell',
                block_4: 'tripleWideCell',
                block_5: 'tripleWideCell'
            },
            transformations: transformations
        }
    })

} as const;