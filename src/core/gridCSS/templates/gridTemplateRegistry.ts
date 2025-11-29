import { createUniformGrid } from "../geometry/uniformGrid";
import { IDNodesFromCatalogEntry as IDS, orderedIds, TemplatesCatalogKeys } from "./templatesCatalog";
import { GridBuilder, GridBuilderResult } from "../core/gridBuilder";
import { PathGroup } from "../geometry/gridPathTypes";
 
export type GridTemplate<K extends TemplatesCatalogKeys> = {
    buildGrid: ( deltaX?: number, deltaY?: number) => GridBuilderResult<IDS<K>>;

};
type GridTemplateCatalog = Record<TemplatesCatalogKeys, GridTemplate<any>>;

export const GridTemplateRegistry = {

    '1x2': {
        buildGrid: (deltaX = 1, deltaY = 1): GridBuilderResult<IDS<'1x2'>> => {

            const gridPath: PathGroup = {
                debugName: '1x2',
                paths: createUniformGrid({ rows: 1, columns: 2, deltaX, deltaY }),

            };

            const { grid, diagnostics } = GridBuilder({ gridPath, idsOrdered: orderedIds('1x2') });

            return { grid, diagnostics };
        }
    } satisfies GridTemplate<'1x2'>,
    '2x2': {
        buildGrid: (deltaX = 1, deltaY = 1): GridBuilderResult<IDS<'2x2'>> => {

            const gridPath: PathGroup = {
                debugName: '2x2',
                paths: createUniformGrid({ rows: 2, columns: 2, deltaX, deltaY }),

            };

            const { grid, diagnostics } = GridBuilder({ gridPath, idsOrdered: orderedIds('2x2') });

            return { grid, diagnostics };
        }
    } satisfies GridTemplate<'2x2'>,
 

} as const satisfies GridTemplateCatalog;


