import { Coordinate } from "./coordinateTypes"
import { multiply, reflectionOnXAxis, reflectionOnYAxis, rotationByThetaClockWise } from "./matrixAlgebra";

export const origin = (): Coordinate => {
    return { x: 0,  y: 0 };
}

export const linearCombination = (alpha: number, a: Coordinate, beta: number, b: Coordinate): Coordinate => {
    return { x: a.x * alpha + b.x * beta, y: a.y * alpha + b.y * beta };
}

export const multiplyScalar = (scalar:number,a:Coordinate): Coordinate => {
    return linearCombination(scalar, a, 0, origin());
}

export const addCoordinates = (a:Coordinate, b:Coordinate): Coordinate => {
    return linearCombination(1, a, 1, b);
}

export const subtractCoordinates = (a:Coordinate, b:Coordinate): Coordinate => {
    return linearCombination(1, a, -1, b);
}

export const reflectOnXAxis = (coord: Coordinate): Coordinate => {
    return multiply(reflectionOnXAxis, coord);
}    

export const reflectOnYAxis = (coord: Coordinate): Coordinate => {
    return multiply(reflectionOnYAxis, coord);
}

export const rotateByClockWise = (theta: number, coord: Coordinate): Coordinate => {
    const rotationMatrix = rotationByThetaClockWise(theta);
    return multiply(rotationMatrix, coord);
}

export const invert = (coord: Coordinate): Coordinate => {
    return multiplyScalar(-1, coord);
}

