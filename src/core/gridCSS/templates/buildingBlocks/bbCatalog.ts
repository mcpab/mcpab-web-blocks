import { BBCatalog } from "./bbCatalogTypes";
import { singleCells } from "./singleCells";
import { twoCells } from "./twoCells";
import { threeCells } from "./threeCells";
import { fourCells } from "./fourCells";
import { fiveCells } from "./fiveCells";
import { sixCells } from "./sixCells";

 
export const bbCatalog: BBCatalog = {
    ...singleCells,
    ...twoCells,
    ...threeCells,
    ...fourCells,
    ...fiveCells,
    ...sixCells
}

export type bbCatalogKeys = keyof typeof bbCatalog;

