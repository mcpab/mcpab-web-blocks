import { BREAKPOINTS } from "../core/breakpoints";
import { CoordinateBps } from "./boxFlowBuilder";


export function sumCoordinatesBPS(a: CoordinateBps, b: CoordinateBps): CoordinateBps {

    let result: CoordinateBps = getOrigin();

    const breakpoints = BREAKPOINTS;

    breakpoints.forEach(bp => {
        result[bp].x = a[bp].x + b[bp].x;
        result[bp].y = a[bp].y + b[bp].y;
    });

    return result;
}

export function linearSum({ x_0, x_1, mult_x_0: mult_x_0, mult_x_1: mult_x_1 }: LINEARSUMPROPS): CoordinateBps {

    let result: CoordinateBps = getOrigin();

    const breakpoints = BREAKPOINTS;

    breakpoints.forEach(bp => {
        result[bp].x = x_0[bp].x * mult_x_0 + x_1[bp].x * mult_x_1;
        result[bp].y = x_0[bp].y * mult_x_0 + x_1[bp].y * mult_x_1;
    });

    return result;
}

export type LINEARSUMPROPS = {
    x_0: CoordinateBps;
    x_1: CoordinateBps;
    mult_x_0: number;
    mult_x_1: number;
};

export const getOrigin = (): CoordinateBps => {
    return {
        xs: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 0, y: 0 },
        xl: { x: 0, y: 0 },
    };
};


export const getOnes = (): CoordinateBps => {
    return {
        xs: { x: 0, y: 0 },
        sm: { x: 0, y: 0 },
        md: { x: 0, y: 0 },
        lg: { x: 0, y: 0 },
        xl: { x: 0, y: 0 },
    };
};
export const diagonal = <DY extends number>(deltaX: number, deltaY: DY): BASEDIAGONAL<DY> => {
    return {
        xs: { x: 0, y: deltaY },
        sm: { x: deltaX, y: deltaY },
        md: { x: deltaX, y: deltaY },
        lg: { x: deltaX, y: deltaY },
        xl: { x: deltaX, y: deltaY },
    };
};
export type BASEDIAGONAL<DY_XS extends number> =
    CoordinateBps & {
        xs: { x: 0; y: DY_XS; };
    };

