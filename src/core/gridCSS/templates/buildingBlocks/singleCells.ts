import { defineEntry } from "./bbCatalogTypes";
 
 
/// Single Cells
export const singleCells = {

    'unitCell': defineEntry({
        description: 'A simple 1x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
                block_1: 'unitCell'
            }
        }
    }),
    'doubleWideCell': defineEntry({
        description: 'A 2x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleWideCell'
        }
        }}),
    'doubleTallCell': defineEntry({
        description: 'A 1x2 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleTallCell'
        }
        }}),
    'doubleCell': defineEntry({
        description: 'A 2x2 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'doubleCell'
        }
        }}),
    'tripleWideCell': defineEntry({
        description: 'A large 3x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleWideCell'
        }
        }}),
    'tripleTallCell': defineEntry({
        description: 'A large 1x3 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleTallCell'
        }
        }}),
    'tripleCell': defineEntry({
        description: 'A large 3x3 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: 'tripleCell'
        }
        }}),
    '5WideCell': defineEntry({
        description: 'A large 5x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5WideCell'
        }
        }}),
    '5TallCell': defineEntry({
        description: 'A large 1x5 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5TallCell'
        }
        }}),
    '5Wide5TallCell': defineEntry({
        description: 'A large 5x5 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '5Wide5TallCell'
        }
        }}),
    '10WideCell': defineEntry({
        description: 'An extra large 10x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10WideCell'
        }
        }}),
    '10TallCell': defineEntry({
        description: 'An extra large 1x10 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10TallCell'
        }
        }}),
    '10Wide10TallCell': defineEntry({
        description: 'An extra large 10x10 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '10Wide10TallCell'
        }
        }}),
    '15WideCell': defineEntry({
        description: 'A massive 15x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '15WideCell'
        }
        }}),
    '15TallCell': defineEntry({
        description: 'A massive 1x15 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '15TallCell'
        }
        }}),
    '15Wide15TallCell': defineEntry({
        description: 'A massive 15x15 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '15Wide15TallCell'
        }
        }}),
    '20WideCell': defineEntry({
        description: 'An enormous 20x1 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '20WideCell'
        }
        }}),
    '20TallCell': defineEntry({
        description: 'An enormous 1x20 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '20TallCell'
        }
        }}),
    '20Wide20TallCell': defineEntry({
        description: 'An enormous 20x20 block',
        boxDimensionIdsAndTx: {
            boxDimensionIds: {
            block_1: '20Wide20TallCell'
        }
        }})

} as const;