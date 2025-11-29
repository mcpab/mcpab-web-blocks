import { GridTemplateRegistry } from "./gridTemplateRegistry";
import { GridRenderersRegistry } from "../core/nodeViewOptions";
import { IDNodesFromCatalogEntry as IDS, TemplatesCatalogKeys } from "./templatesCatalog";



type GridTemplateEntry<K extends TemplatesCatalogKeys> = (typeof GridTemplateRegistry)[K];
export type LayoutCatalog<K extends TemplatesCatalogKeys> = {
    [P in K]: {
        gridBuilder: GridTemplateEntry<P>;
        register: GridRenderersRegistry<IDS<P>>;
    };
};