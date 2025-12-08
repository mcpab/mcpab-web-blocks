
import { LayoutSpec } from "../core/boxLayout/boxLayoutTypes";


const OneByTwo: LayoutSpec<'row_1', 'block_1' | 'block_2'> = {

    row_1: {
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
        },
            
    }
};

const OneByThree: LayoutSpec<'row_1', 'block_1' | 'block_2' | 'block_3' > = {

    row_1: {
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
        },
      
    }
};

export const LayoutCatalog = {

    '1x2': OneByTwo,
    '1x3': OneByThree,


} as const;

export type CatalogKeys = keyof typeof LayoutCatalog;

// export function DerivedLayoutFactory<Key extends CatalogKeys, BoxValue extends GridBox>(key: Key) {

//     const localKey: CatalogKeys = key;
//     const localLayout = LayoutCatalog[localKey];

//     type NoTransformations = Omit<typeof localLayout, 'transformations'>;

//     // type pp = typeof LayoutCatalog;
//     // type hj = NoTransformations<'1x2'>;
//     // type S = keyof NoTransformations<'1x2'>;
//     // type B = keyof NoTransformations<'1x2'>[S]['boxes'];



//     type DeriveFromCatalog<Box extends BoxValue> = {
//         [S in keyof NoTransformations]: {
//             boxes: {
//                 [B in keyof NoTransformations[S]['boxes']]: Box
//             }
//         }
//     };

//     type _Test = DeriveFromCatalog<BoxValue>;

// }