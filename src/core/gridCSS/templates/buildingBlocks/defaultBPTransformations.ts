import { BoxTransformations } from "../../core/boxLayout/boxBuildingBlock"
import { Blocks } from "../layoutIDs";



export const DefaultTransformations:BoxTransformations<Blocks>  = {
    xs: [
        { 'stackVertically': {} }
    ],
    md: [
        { 'stackHorizontally': {} }
    ]
};
