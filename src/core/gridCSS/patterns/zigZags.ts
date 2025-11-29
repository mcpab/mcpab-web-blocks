import { CoordinateBps } from "../geometry/boxFlowBuilder";
import { BASEDIAGONAL, diagonal } from "../geometry/geometry";
import { reflectOnXAxis, reflectOnYAxis } from "../geometry/transformations";


type ZIGZAGPATHPROPS<DY extends number> = {
    steps: number;
    diagonal: BASEDIAGONAL<DY>;
    changeDiagonal: (diagonal: BASEDIAGONAL<DY>) => BASEDIAGONAL<DY>;
};
export function ZigZagPath<DY extends number>({ steps, diagonal, changeDiagonal: changeDiagonal }: ZIGZAGPATHPROPS<DY>): CoordinateBps[] {

    let path: CoordinateBps[] = [];
    let diag: BASEDIAGONAL<DY> = diagonal;

    for (let i = 0; i < steps; i++) {
        path.push(diag);
        diag = changeDiagonal(diag);
    }

    return path;

}
type ZIGZAGONEDIRECTIONPROPS<DY extends number> = Omit<ZIGZAGPATHPROPS<DY>, 'changeDiagonal'>;
export const ZigZagLeftOrRight = <DY extends number>({ steps, diagonal }: ZIGZAGONEDIRECTIONPROPS<DY>): CoordinateBps[] => {
    return ZigZagPath({ steps, diagonal, changeDiagonal: reflectOnXAxis });
};

export const ZigZagUpOrDown = <DY extends number>({ steps, diagonal }: ZIGZAGONEDIRECTIONPROPS<DY>): CoordinateBps[] => {
    return ZigZagPath({ steps, diagonal, changeDiagonal: reflectOnYAxis });
};
type ZIGZAGRIGHTPROPS = {
    deltaX?: number;
    deltaY?: number;
    steps: number;
};
export const ZigZagRight = ({ steps, deltaX = 1, deltaY = 1 }: ZIGZAGRIGHTPROPS): CoordinateBps[] => {

    const dx = Math.abs(deltaX);
    const dy = Math.abs(deltaY);
    return ZigZagLeftOrRight({
        steps: steps,
        diagonal: diagonal(dx, dy)
    });
};
export const ZigZagLeft = ({ steps, deltaX = -1, deltaY = 1 }: ZIGZAGRIGHTPROPS): CoordinateBps[] => {

    const dx = -Math.abs(deltaX);
    const dy = Math.abs(deltaY);
    return ZigZagLeftOrRight({
        steps: steps,
        diagonal: diagonal(dx, dy)
    });
};


export const ZigZagUp = ({ steps, deltaX = 1, deltaY = 1 }: ZIGZAGRIGHTPROPS): CoordinateBps[] => {

    const dx = Math.abs(deltaX);
    const dy = Math.abs(deltaY);
    return ZigZagUpOrDown({
        steps: steps,
        diagonal: diagonal(dx, dy)
    });
};
export const ZigZagDown = ({ steps, deltaX = 1, deltaY = -1 }: ZIGZAGRIGHTPROPS): CoordinateBps[] => {

    const dx = Math.abs(deltaX);
    const dy = -Math.abs(deltaY);
    return ZigZagUpOrDown({
        steps: steps,
        diagonal: diagonal(dx, dy)
    });
};
