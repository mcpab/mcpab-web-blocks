import { BoxDimensionIdsAndTx } from "../../core/boxLayout/boxLayoutTypes";
import { BlocksIDs } from "../layoutIDs";

export type BBTxEntry<blockIDs extends BlocksIDs> = {
  boxDimensionIdsAndTx: BoxDimensionIdsAndTx<blockIDs>
  description?: string;
}; 

export const defineEntry = <IDs extends BlocksIDs>(entry: BBTxEntry<IDs>) => entry;



