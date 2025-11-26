
import { CoordinateBps } from "./uniformFlowBuilder";
import { Kinds } from "../ids/kinds";

export type Path = {
    origin?: CoordinateBps;
    steps: Array<CoordinateBps>;    
}
export type GridPath<K extends Kinds> = {

    name: string;
    paths: Array<Path>;
    slots: Array<K>;

}

export type GridPatternKinds<P extends GridPath<any>> = P['slots'][number];