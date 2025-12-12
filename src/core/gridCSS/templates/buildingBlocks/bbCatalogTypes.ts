import { BoxDimensionIdsAndTx } from "../../core/boxLayout/boxLayoutTypes";
import { BlocksIDs } from "../layoutIDs";

export type BBTxEntry<BlockIDs extends BlocksIDs> = {
  boxDimensionIdsAndTx: BoxDimensionIdsAndTx<BlockIDs>
  description?: string;
};

export const defineEntry = <IDs extends BlocksIDs>(entry: BBTxEntry<IDs>) => entry;



