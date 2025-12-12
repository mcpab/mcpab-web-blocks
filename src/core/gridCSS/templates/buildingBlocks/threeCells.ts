import { defineEntry } from "./bbCatalogTypes";
import { DefaultTransformations } from "./defaultBPTransformations";

const transformations = DefaultTransformations;
/// Three Cells

export const threeCells = {
    // Three unit cells (1x1 each)
    'threeUnitCells': defineEntry({
        description: 'Three 1x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit cells with one triple wide
    'twoUnitOneTripleWide': defineEntry({
        description: 'Two 1x1 and one 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit cell with two triple wide
    'oneUnitTwoTripleWide': defineEntry({
        description: 'One 1x1 and two 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three triple wide cells
    'threeTripleWide': defineEntry({
        description: 'Three 3x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: 'tripleWideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two unit cells with one 5-wide
    'twoUnitOne5Wide': defineEntry({
        description: 'Two 1x1 and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit cell with two 5-wide
    'oneUnitTwo5Wide': defineEntry({
        description: 'One 1x1 and two 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '5WideCell',
            block_3: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Three 5-wide cells
    'three5Wide': defineEntry({
        description: 'Three 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5WideCell',
            block_2: '5WideCell',
            block_3: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One unit, one triple wide, one 5-wide
    'unitTriple5Wide': defineEntry({
        description: 'One 1x1, one 3x1, and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'tripleWideCell',
            block_3: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // Two triple wide with one 5-wide
    'twoTripleOne5Wide': defineEntry({
        description: 'Two 3x1 and one 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // One triple wide with two 5-wide
    'oneTripleTwo5Wide': defineEntry({
        description: 'One 3x1 and two 5x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: '5WideCell',
            block_3: '5WideCell'
        },
            transformations: transformations
        }
    }),
    
    // 10-wide combinations
    'two10Wide': defineEntry({
        description: 'Three 10x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10WideCell',
            block_2: '10WideCell',
            block_3: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'twoUnitOne10Wide': defineEntry({
        description: 'Two 1x1 and one 10x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'oneUnitTwo10Wide': defineEntry({
        description: 'One 1x1 and two 10x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '10WideCell',
            block_3: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'twoTripleOne10Wide': defineEntry({
        description: 'Two 3x1 and one 10x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: 'tripleWideCell',
            block_3: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'oneTripleTwo10Wide': defineEntry({
        description: 'One 3x1 and two 10x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell',
            block_2: '10WideCell',
            block_3: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'two5OneWide': defineEntry({
        description: 'Two 5x1 and one 10x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5WideCell',
            block_2: '5WideCell',
            block_3: '10WideCell'
        },
            transformations: transformations
        }
    }),
    'one5Two10Wide': defineEntry({
        description: 'One 5x1 and two 10x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5WideCell',
            block_2: '10WideCell',
            block_3: '10WideCell'
        },
            transformations: transformations
        }
    }),
    
    // 15-wide combinations
    'three15Wide': defineEntry({
        description: 'Three 15x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '15WideCell',
            block_2: '15WideCell',
            block_3: '15WideCell'
        },
            transformations: transformations
        }
    }),
    'twoUnitOne15Wide': defineEntry({
        description: 'Two 1x1 and one 15x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: '15WideCell'
        },
            transformations: transformations
        }
    }),
    'oneUnitTwo15Wide': defineEntry({
        description: 'One 1x1 and two 15x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '15WideCell',
            block_3: '15WideCell'
        },
            transformations: transformations
        }
    }),
    'unit5And15Wide': defineEntry({
        description: 'One 1x1, one 5x1, and one 15x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '5WideCell',
            block_3: '15WideCell'
        },
            transformations: transformations
        }
    }),
    'unit10And15Wide': defineEntry({
        description: 'One 1x1, one 10x1, and one 15x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '10WideCell',
            block_3: '15WideCell'
        },
            transformations: transformations
        }
    }),
    
    // 20-wide combinations
    'three20Wide': defineEntry({
        description: 'Three 20x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '20WideCell',
            block_2: '20WideCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    }),
    'twoUnitOne20Wide': defineEntry({
        description: 'Two 1x1 and one 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    }),
    'oneUnitTwo20Wide': defineEntry({
        description: 'One 1x1 and two 20x1 blocks',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '20WideCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    }),
    'unit5And20Wide': defineEntry({
        description: 'One 1x1, one 5x1, and one 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '5WideCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    }),
    'unit10And20Wide': defineEntry({
        description: 'One 1x1, one 10x1, and one 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '10WideCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    }),
    'unit15And20Wide': defineEntry({
        description: 'One 1x1, one 15x1, and one 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'unitCell',
            block_2: '15WideCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    }),
    '5_15_20Wide': defineEntry({
        description: 'One 5x1, one 15x1, and one 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5WideCell',
            block_2: '15WideCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    }),
    '10_15_20Wide': defineEntry({
        description: 'One 10x1, one 15x1, and one 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10WideCell',
            block_2: '15WideCell',
            block_3: '20WideCell'
        },
            transformations: transformations
        }
    })
}  as const ;
