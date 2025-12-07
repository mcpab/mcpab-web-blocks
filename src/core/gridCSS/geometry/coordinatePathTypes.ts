
import { Coordinate } from "./coordinateTypes";
// import { CoordinateBps } from "./geometry";

export type CoordinatePath = {
    origin?: Coordinate;
    steps: Array<Coordinate>;     
} 
export type CoordinatePathGroup = {

    debugName: string;
    paths: Array<CoordinatePath>;


}

