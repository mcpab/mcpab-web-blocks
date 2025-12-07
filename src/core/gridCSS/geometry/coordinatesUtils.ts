import { Coordinate } from "./coordinateTypes";



export const minCoordinate = (a: Coordinate, b: Coordinate):Coordinate => {
    return { x: Math.min(a.x, b.x), y: Math.min(a.y, b.y) };
}

export const maxCoordinate = (a: Coordinate, b: Coordinate): Coordinate => {
    return { x: Math.max(a.x, b.x), y: Math.max(a.y, b.y) };
}


export const copyCoordinate = (coord: Coordinate): Coordinate => {
    return { x: coord.x, y: coord.y };
}

