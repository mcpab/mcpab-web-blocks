import { fiveCells } from "./fiveCells";
import { fourCells } from "./fourCells";
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
    ...sixCells
}  as const;

export type bbCatalogKeys = keyof typeof bbCatalog;

