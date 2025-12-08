
import { LayoutTransform, LayoutSpec } from "../core/boxLayout/boxLayoutTypes";
import { LayoutCatalog, CatalogKeys } from "./boxLayoutsCatalog";
import { NodeID } from "./layoutIDs";

type SectionsID<Layout extends LayoutSpec<any, any>> = keyof Layout;
type BoxesID<Layout extends LayoutSpec<any, any>> = keyof Layout[keyof Layout]['boxes'];
 
type IDsOf<Spec extends LayoutSpec<any, any>> =
  Spec extends LayoutSpec<infer S, infer B> ? [S, B] : never;

type Transform<Spec extends LayoutSpec<any, any>> =
  IDsOf<Spec> extends [infer S extends NodeID, infer B extends NodeID]
    ? LayoutTransform<S, B>
    : never;

type kk = IDsOf<typeof LayoutCatalog['1x2']>;

const kl: Transform<typeof LayoutCatalog['1x2']> = {
    'row_1': {
        boxes: LayoutCatalog['1x2']['row_1'].boxes,
        transformations: {
            xs: [
                { 'stackVertically': {} }
            ],
            md: [
                { 'stackHorizontally': {} }
            ]

        }
    }
}

const kkk = {

    '1x3-o' :  kl


} satisfies Record<string,LayoutTransform<any, any>>;

