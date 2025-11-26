

import { CoordinateBps } from "../../core/boxFlow/boxFlowBuilder";
import { GridPath, Path } from "../../core/boxFlow/boxFlowBuilderTypes";

export type CreateUniformGridProps = {
    rows: number;
    columns: number;
    step: number;
}

export function createUniformGrid({ rows, columns, step }: CreateUniformGridProps): Path[] {

    let paths: Path[] = [];

    for (let c = 0; c < rows; c++) {

        let path = {
            origin: {
                xs: { x: 1, y: 1 + c * columns*step },
                sm: { x: 1, y: 1 + c * step },
                md: { x: 1, y: 1 + c * step },
                lg: { x: 1, y: 1 + c * step },
                xl: { x: 1, y: 1 + c * step },
            },
            steps: zigZag({ length: step, direction: 'right', steps: columns }),
        }

        paths.push(path);
    }

    return paths;
}


type ZigZagProps = {
    length: number;
    direction: 'up' | 'down' | 'left' | 'right';
    steps: number;
}
export function zigZag({ length, direction, steps }: ZigZagProps): CoordinateBps[] {

    let path: CoordinateBps[] = [];

    if (direction === 'left' || direction === 'right') {
        path = ZigZagLeftOrRight(length, steps, direction);
    } else {
        path = ZigZagUpOrDown(length, steps, direction);
    }

    return path;

}
export function ZigZagLeftOrRight(length: number, steps: number, direction: 'left' | 'right'): CoordinateBps[] {

    let path: CoordinateBps[] = [];

    let dr: number = 1 * length;

    if (direction === 'left') {
        dr = -1 * length;
    }


    let ct = 1 * length;
    for (let i = 0; i < steps; i++) {
        path.push({
            xs: { x: 0, y: length},
            sm: { x: dr * 1, y: ct * 1 },
            md: { x: dr * 1, y: ct * 1 },
            lg: { x: dr * 1, y: ct * 1 },
            xl: { x: dr * 1, y: ct * 1 },
        });
        ct = -ct;
    }

    return path;

}
export function ZigZagUpOrDown(length: number, steps: number, direction: 'up' | 'down'): CoordinateBps[] {

    let path: CoordinateBps[] = [];

    let dr: number = 1 * length;

    if (direction === 'down') {
        dr = -1 * length;
    }


    let ct = 1 * length;
    for (let i = 0; i < steps; i++) {
        path.push({
            xs: { x: 0, y: length },
            sm: { y: dr * 1, x: ct * 1 },
            md: { y: dr * 1, x: ct * 1 },
            lg: { y: dr * 1, x: ct * 1 },
            xl: { y: dr * 1, x: ct * 1 },
        });
        ct = -ct;
    }

    return path;

}

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
