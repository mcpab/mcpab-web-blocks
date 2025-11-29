import { CoordinateBps } from "./boxFlowBuilder";
import { Path } from "./gridPathTypes";
import { ZigZagRight } from "../patterns/zigZags";


export type CreateUniformGridProps = {
    rows: number;
    columns: number;
    deltaX?: number;
    deltaY?: number;
};

export function createUniformGrid({ rows, columns, deltaX = 1, deltaY = 1 }: CreateUniformGridProps): Path[] {

    let paths: Path[] = [];
    let deltas: CoordinateBps[] = ZigZagRight({ steps: columns, deltaX, deltaY });

    for (let c = 0; c < rows; c++) {

        let path = {
            origin: {
                xs: { x: deltaX, y: 1 + c * columns * deltaY },
                sm: { x: deltaX, y: 1 + c * deltaY },
                md: { x: deltaX, y: 1 + c * deltaY },
                lg: { x: deltaX, y: 1 + c * deltaY },
                xl: { x: deltaX, y: 1 + c * deltaY },
            },
            steps: deltas,
        };

        paths.push(path);
    }

    return paths;
}

