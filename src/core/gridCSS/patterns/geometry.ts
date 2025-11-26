import { CoordinateBps } from "../core/boxFlow/boxFlowBuilder";
import { Path } from "../core/boxFlow/boxFlowBuilderTypes";



export type CreateUniformGridProps = {
    rows: number;
    columns: number;
    step: number;
};

export function createUniformGrid({ rows, columns, step }: CreateUniformGridProps): Path[] {

    let paths: Path[] = [];

    for (let c = 0; c < rows; c++) {

        let path = {
            origin: {
                xs: { x: 1, y: 1 + c * columns * step },
                sm: { x: 1, y: 1 + c * step },
                md: { x: 1, y: 1 + c * step },
                lg: { x: 1, y: 1 + c * step },
                xl: { x: 1, y: 1 + c * step },
            },
            steps: zigZag({ length: step, direction: 'right', steps: columns }),
        };

        paths.push(path);
    }

    return paths;
}
type ZigZagProps = {
    length: number;
    direction: 'up' | 'down' | 'left' | 'right';
    steps: number;
};
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
            xs: { x: 0, y: length },
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
