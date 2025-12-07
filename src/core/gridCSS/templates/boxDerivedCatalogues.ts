import { CatalogKeys, LayoutCatalog } from "./boxLayoutsCatalog";
import { GridBox } from "../core/box/gridBoxTypes";

type NoTransformations<Key extends CatalogKeys> = Omit<typeof LayoutCatalog[Key], 'transformations'>;



type derived<BoxValue extends GridBox> = {

    '1x2': {
        [S in keyof NoTransformations<'1x2'>]: {
            boxes: {
                [B in keyof NoTransformations<'1x2'>[S]['boxes']]: BoxValue
            }
        }
    };
    '1x3': {
        [S in keyof NoTransformations<'1x3'>]: {
            boxes: {
                [B in keyof NoTransformations<'1x3'>[S]['boxes']]: BoxValue
            }
        }

    }
};