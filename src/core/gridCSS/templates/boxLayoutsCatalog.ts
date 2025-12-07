import { GridBox } from "../core/box/gridBoxTypes";
import { Layout } from "../core/boxLayout/boxLayoutTypes";


const OneByTwo: Layout<'row_1', 'block_1' | 'block_2', 'spec'> = {

    row_1: {
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
        },
        transformations: {
            xs: [
                { 'stackVertically': {} }
            ],
            md: [
                { 'stackHorizontally': {} }
            ]

        }
    }
};

const OneByThree: Layout<'row_1', 'block_1' | 'block_2' | 'block_3', 'spec'> = {

    row_1: {
        boxes: {
            block_1: 'unitCell',
            block_2: 'unitCell',
            block_3: 'unitCell',
        },
        transformations: {
            xs: [
                { 'stackVertically': {} }
            ],
            md: [
                { 'stackHorizontally': {} }
            ]

        }
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