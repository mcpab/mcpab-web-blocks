import { BASEDIAGONAL } from "./geometry";


export const reflectOnXAxis = <DY extends number>(diagonal: BASEDIAGONAL<DY>): BASEDIAGONAL<DY> => {
    return {
        xs: { x: 0, y: diagonal.xs.y },
        sm: { x: diagonal.sm.x, y: -diagonal.sm.y },
        md: { x: diagonal.md.x, y: -diagonal.md.y },
        lg: { x: diagonal.lg.x, y: -diagonal.lg.y },
        xl: { x: diagonal.xl.x, y: -diagonal.xl.y },
    };
};
export const reflectOnYAxis = <DY extends number>(diagonal: BASEDIAGONAL<DY>): BASEDIAGONAL<DY> => {
    return {
        xs: { x: 0, y: diagonal.xs.y },
        sm: { x: -diagonal.sm.x, y: diagonal.sm.y },
        md: { x: -diagonal.md.x, y: diagonal.md.y },
        lg: { x: -diagonal.lg.x, y: diagonal.lg.y },
        xl: { x: -diagonal.xl.x, y: diagonal.xl.y },
    };
};
