import { GridBoxPointPosition } from "./gridBoxTypes";
import { Coordinate } from "../../geometry/coordinateTypes";

// 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'center'
export const boxPosition: GridBoxPointPosition = (box, boxAnchor) => {

    let coordinate: Coordinate;

    if (boxAnchor === 'bottomLeft') {
        coordinate = {
            x: box.origin.x,
            y: box.origin.y
        };
    } else if (boxAnchor === 'bottomRight') {
        coordinate = {
            x: box.origin.x + box.diagonal.x,
            y: box.origin.y
        };
    } else if (boxAnchor === 'topLeft') {
        coordinate = {
            x: box.origin.x,
            y: box.origin.y + box.diagonal.y
        };
    } else if (boxAnchor === 'topRight') {
        coordinate = {
            x: box.origin.x + box.diagonal.x,
            y: box.origin.y + box.diagonal.y
        };
    } else if (boxAnchor === 'center') {
        coordinate = {
            x: box.origin.x + box.diagonal.x / 2,
            y: box.origin.y + box.diagonal.y / 2
        };
    } else {
        return undefined;
    }

    return coordinate;

}

// export const moveTo: MoveBoxTo = (box, boxAnchor, coordinate) => {

//     let anchor = boxPosition(box, boxAnchor);
//     if (!anchor) return undefined;

//     let target: Coordinate;

//     if (typeof coordinate === 'function') {
//         let result = coordinate(box, boxAnchor);
//         if (!result) return undefined;
//         target = result;
//         //
//     } else {
//         target = coordinate;
//     }

//     const delta = subtractCoordinates(target, anchor);

//     const newOrigin = addCoordinates(box.origin, delta);

//     return {
//         ...box,
//         origin: newOrigin
//     };
// }

// export const moveBy: MoveBoxBy = (box, boxAnchor, delta) => {

//     let anchor = boxPosition(box, boxAnchor);
//     if (!anchor) return undefined;

//     let movement: Coordinate;

//     if (typeof delta === 'function') {
//         let result = delta(box, boxAnchor);
//         if (!result) return undefined;
//         movement = result;
//         //
//     } else {
//         movement = delta;
//     }

//     const newOrigin = addCoordinates(box.origin, movement);

//     return {
//         ...box,
//         origin: newOrigin
//     };

// }

// export const stretch: StretchBox = (box, delta) => {
//     return {
//         ...box,
//         diagonal: {
//             x: box.diagonal.x + Math.abs(delta),
//             y: box.diagonal.y + Math.abs(delta)
//         }
//     };
// }