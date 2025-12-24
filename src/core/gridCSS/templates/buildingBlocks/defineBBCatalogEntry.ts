import { BoxDimensionIdsAndTx } from "../../core/boxLayout/boxLayoutTypes";
import { BlocksIDs } from "../layoutIDs";


export const defineEntry = <blockIDs extends BlocksIDs>(entry: { boxDimensionIdsAndTx: BoxDimensionIdsAndTx<blockIDs>
  description?: string;}) => entry;



