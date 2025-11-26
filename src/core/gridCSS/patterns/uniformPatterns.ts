

import { GridPath } from "../core/boxFlow/boxFlowBuilderTypes";
import { createUniformGrid } from "./geometry";

export const OneByTwoPattern: GridPath<'block_1' | 'block_2'> = {
    name: '1x2',
    paths: createUniformGrid({ rows: 1, columns: 2, step: 1 }),
    slots: ['block_1', 'block_2'],
};


export const TwoByTwoPattern: GridPath<'block_1' | 'block_2' | 'block_3' | 'block_4'> = {
    name: '2x2',
    paths: createUniformGrid({ rows: 2, columns: 2, step: 1 }),
    slots: ['block_1', 'block_2', 'block_3', 'block_4'],
};

export const ThreeByThreePattern: GridPath<'block_1' | 'block_2' | 'block_3' | 'block_4' | 'block_5' | 'block_6' | 'block_7' | 'block_8' | 'block_9'> = {
    name: '3x3',
    paths: createUniformGrid({ rows: 3, columns: 3, step: 1 }),
    slots: [
        'block_1', 'block_2', 'block_3',
        'block_4', 'block_5', 'block_6',
        'block_7', 'block_8', 'block_9',
    ],
};
