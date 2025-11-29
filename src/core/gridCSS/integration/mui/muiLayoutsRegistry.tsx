
import { defaultGridNodeOptions, GridRenderersRegistry } from "../../core/nodeViewOptions";
import { LayoutCatalog } from "../../templates/layoutCatalogType";
import { TemplatesCatalogKeys } from "../../templates/templatesCatalog";
import { GridTemplateRegistry } from "../../templates/gridTemplateRegistry";

const defaultPlaceholder = <></>;

export const LayoutsRegistry = {
    '1x2': {
        gridBuilder: GridTemplateRegistry['1x2'],
        register: {
            'block_1': {
                contentRenderer: (nodeId: 'block_1', node) => defaultPlaceholder,
                view: defaultGridNodeOptions,
            },
            'block_2': {
                contentRenderer: (nodeId: 'block_2', node) => defaultPlaceholder,
                view: defaultGridNodeOptions,
            },
        } satisfies GridRenderersRegistry<'block_1' | 'block_2'>,
    },
    '2x2': {
        gridBuilder: GridTemplateRegistry['2x2'],
        register: {
            'block_1': {
                contentRenderer: (nodeId: 'block_1', node) => defaultPlaceholder,
                view: defaultGridNodeOptions,
            },
            'block_2': {
                contentRenderer: (nodeId: 'block_2', node) => defaultPlaceholder,
                view: defaultGridNodeOptions,
            },
            'block_3': {
                contentRenderer: (nodeId: 'block_3', node) => defaultPlaceholder,
                view: defaultGridNodeOptions,
            },
            'block_4': {
                contentRenderer: (nodeId: 'block_4', node) => defaultPlaceholder,
                view: defaultGridNodeOptions,
            },
        } satisfies GridRenderersRegistry<'block_1' | 'block_2' | 'block_3' | 'block_4'>,
    },
} satisfies LayoutCatalog<TemplatesCatalogKeys>;

