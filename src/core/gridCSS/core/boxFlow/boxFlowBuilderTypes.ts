
import { CoordinateBps } from "./boxFlowBuilder";


export type Path = {
    origin?: CoordinateBps;
    steps: Array<CoordinateBps>;    
}
export type GridPath<K extends string> = {

    name: string;
    paths: Array<Path>;
    slots: Array<K>;

}

export type GridPatternKinds<P extends GridPath<any>> = P['slots'][number];