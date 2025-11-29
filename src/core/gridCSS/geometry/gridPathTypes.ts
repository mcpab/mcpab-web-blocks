
import { CoordinateBps } from "./boxFlowBuilder";

export type Path = {
    origin?: CoordinateBps;
    steps: Array<CoordinateBps>;    
} 
export type PathGroup = {

    debugName: string;
    paths: Array<Path>;


}

