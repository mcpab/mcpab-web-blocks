import { Coordinate } from "./coordinateTypes";
import { Matrix2x2, UnitMatrix } from "./matrixTypes";

export const unitMatrix: UnitMatrix<1> = [[1, 0],
[0, 1]];

export const zeroMatrix: UnitMatrix<0> = [[0, 0],
[0, 0]];

export const reflectionOnXAxis: Matrix2x2 = [[1, 0],
[0, -1]];


export const reflectionOnYAxis: Matrix2x2 = [[-1, 0],
[0, 1]];

export const rotationByThetaClockWise = (theta: number): Matrix2x2 => {
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);
    return [
        [cosTheta, sinTheta],
        [-sinTheta, cosTheta]
    ];
};

export const multiply = (matrix: Matrix2x2, v:Coordinate): Coordinate => {
    return {
        x: matrix[0][0] * v.x + matrix[0][1] * v.y,
        y: matrix[1][0] * v.x + matrix[1][1] * v.y,
    };
}


