import { Coordinate } from "./coordinateTypes"


export const dot = (a:Coordinate, b:Coordinate): number => {
    return a.x * b.x + a.y * b.y;
}

export const norm = (v:Coordinate): number => {
    return Math.sqrt(dot(v, v));
}

export const distance = (a:Coordinate, b:Coordinate): number => {
    return norm({ x: b.x - a.x, y: b.y - a.y });
}

export const normalize = (v:Coordinate): Coordinate => {
    const len = norm(v);
    if (len === 0) {
        return { x: 0, y: 0 };
    }
    return { x: v.x / len, y: v.y / len };
}

export const angleBetween = (a:Coordinate, b:Coordinate): number => {
    const dotProduct = dot(a, b);
    const lengthsProduct = norm(a) * norm(b);
    if (lengthsProduct === 0) {
        return 0;
    }
    let cosTheta = dotProduct / lengthsProduct;
    // Clamp the value to the valid range of acos to avoid NaN due to floating point errors
    cosTheta = Math.max(-1, Math.min(1, cosTheta));
    return Math.acos(cosTheta);
}

export const boundingBox = (points: Coordinate[]): { min: Coordinate; max: Coordinate } => {

    if (points.length === 0) {
        return { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
    }
    let minX = points[0].x;
    let minY = points[0].y;
    let maxX = points[0].x;
    let maxY = points[0].y;

    for (const point of points) {
        if (point.x < minX) minX = point.x;
        if (point.y < minY) minY = point.y;
        if (point.x > maxX) maxX = point.x;
        if (point.y > maxY) maxY = point.y;
    }

    return {
        min: { x: minX, y: minY },
        max: { x: maxX, y: maxY }
    };
}

export const lerp = (a:Coordinate, b:Coordinate, t:number): Coordinate => {
    return {
        x: a.x + (b.x - a.x) * t,
        y: a.y + (b.y - a.y) * t,
    };
}

export const clamp = (v:Coordinate, min:Coordinate, max:Coordinate): Coordinate => {
    return {
        x: Math.max(min.x, Math.min(max.x, v.x)),
        y: Math.max(min.y, Math.min(max.y, v.y)),
    };
}


