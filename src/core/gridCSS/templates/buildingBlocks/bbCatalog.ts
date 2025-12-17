import { fiveCells } from "./fiveCells";
import { fourCells } from "./fourCells";
import { pagePartitions20 } from "./pagePartitions20";
import { singleCells } from "./singleCells";
import { sixCells } from "./sixCells";
import { threeCells } from "./threeCells";
import { twoCells } from "./twoCells";

export const bbCatalog  = {
    ...singleCells,
    ...twoCells,
    ...threeCells,
    ...fourCells,
    ...fiveCells, 
    ...sixCells,
    ...pagePartitions20,
}  as const;

type BB = typeof bbCatalog;
type EntriesInBBCatalog =  BB[keyof BB];
export type BoxesInBBCatalog = EntriesInBBCatalog["boxDimensionIdsAndTx"]; 