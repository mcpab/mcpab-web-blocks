import { NodeID } from "./layoutIDs";

type TemplateEntry<K extends NodeID> = {

    orderedIds: K[];
    description?: string;
};


type TemplatesEntries<K extends NodeID> = {
    [key: string]: TemplateEntry<K>;
}
export const TemplatesCatalog = {
    '1x2': {
        orderedIds: ['block_1', 'block_2'],
        description: 'A simple layout with one row and two columns.',
    },
    '2x2': {
        orderedIds: ['block_1', 'block_2', 'block_3', 'block_4'],
        description: 'A grid layout with two rows and two columns.',
    }
} as const satisfies TemplatesEntries<NodeID>;

export type TemplatesCatalogKeys = keyof typeof TemplatesCatalog;

export type IDNodesFromCatalogEntry<K extends TemplatesCatalogKeys> = typeof TemplatesCatalog[K]['orderedIds'][number];

export const orderedIds  = <K extends TemplatesCatalogKeys>(key: K): IDNodesFromCatalogEntry<K>[] => {
    return TemplatesCatalog[key].orderedIds;
};