import { BlocksIDs, NodeID, SectionIDs } from '../../templates/layoutIDs';
import { GridBox } from '../box/gridBoxTypes';
import { BoxMovesProps } from '../boxTransformations/boxTransformationsProps';
import { BPs, BREAKPOINTS } from '../breakpoints';
import { CSSCoordinates } from '../gridNodeTypes';
import { GridNodeViewOptions } from '../nodeViewOptions';

export type BoxSpan = { spanX: number; spanY: number };

// “one section entry” (must have boxes)
export type Layout = Partial<Record<SectionIDs, Partial<Record<BlocksIDs, BoxSpan>>>>;

export type SectionsIDSFromLayout<E extends Layout> = Extract<keyof E, SectionIDs>;

export type BlockIDSFromSectionAndLayout<
  E extends Layout,
  S extends SectionsIDSFromLayout<E>,
> = Extract<keyof NonNullable<E[S]>, BlocksIDs>;

export type UnionBlockIDSfromLayout<E extends Layout> = Extract<
  {
    [S in SectionsIDSFromLayout<E>]: Extract<keyof NonNullable<E[S]>, BlocksIDs>;
  }[SectionsIDSFromLayout<E>],
  BlocksIDs
>;

/// Boxes transformations
export type BoxTransformations<BoxId extends NodeID> = BPs<Array<BoxMovesProps<BoxId>>>;

// export type BoxDimensionIdsAndTx<BlockIDs extends NodeID> = {
//   boxDimensionIds: Partial<Record<BlockIDs, BoxDimensionIdsCSS>>;
//   transformations?: BoxTransformations<BlockIDs>;
// };

export type BPSGridBoxes<BlockIDs extends NodeID> = BPs<Partial<Record<BlockIDs, GridBox>>>;

export type GridBoxesAndTx<BlockIDs extends NodeID> = {
  gridBoxes: BPSGridBoxes<BlockIDs>;
  transformations?: BoxTransformations<BlockIDs>;
};

// basic layout, with grid boxes and the corresponding transformations. The transformations are the promise the change the boxes.
export type LayoutWithTx<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> = {
  sections: Record<sectionIDs, GridBoxesAndTx<blockIDs>>;
  transformations?: BoxTransformations<sectionIDs>;
};

export type SectionsInLayoutWithTx<L extends LayoutWithTx<any, any>> = keyof L['sections'] &
  SectionIDs;
export type BlocksInLayoutWithTx<L extends LayoutWithTx<any, any>> = {
  [S in keyof L['sections']]: keyof NonNullable<L['sections'][S]> & BlocksIDs;
}[keyof L['sections']];

/// Layouts

// layout after applying transformations to sections children, with local grid boxes per section children
export type LayoutSectionLocal<SectionID extends SectionIDs, BlockIDs extends BlocksIDs> = {
  sections: Record<SectionID, BPSGridBoxes<BlockIDs>>;
  transformations?: BoxTransformations<SectionID>;
};

// layout with bounding boxes per section children are still in relative grid coordinates
// bounding boxes are the overall boxes that contain all the boxes in the section
export type LayoutSectionBounds<SectionID extends SectionIDs, BlockIDs extends BlocksIDs> = {
  sections: Record<SectionID, BPSGridBoxes<BlockIDs>>;
  boundingBoxes: BPs<Record<SectionID, GridBox>>;
  transformations?: BoxTransformations<SectionID>;
};

export type BoxesCoordinates<BlockIDs extends NodeID> = {
  coordinates: BPs<Partial<Record<BlockIDs, CSSCoordinates>>>;
};

export type LayoutAbsolute<SectionID extends SectionIDs, BlockIDs extends BlocksIDs> = {
  gridDimensions: {
    rows: BPs<number>;
    columns: BPs<number>;
  };
  sections: Record<SectionID, BoxesCoordinates<BlockIDs>>;
};

type Breakpoint = (typeof BREAKPOINTS)[number];

export type NodeRenderCtx<
  sectionID extends SectionIDs,
  blockIDs extends BlocksIDs,
  BP extends Breakpoint = Breakpoint,
> = {
  sectionId: sectionID;
  bp: BP;
  boxId: blockIDs;
  coords: CSSCoordinates;
};

export type NodeRenderConfig<sectionID extends SectionIDs, blockIDs extends BlocksIDs> = {
  contentRenderer?: (ctx: NodeRenderCtx<sectionID, blockIDs>) => React.ReactNode;
  view?: GridNodeViewOptions;
};

// const gh = {
//   row_1: {

//       block_1: { spanX: 1, spanY: 1 },
//     },
//   row_2: {

//       block_1: { spanX: 1, spanY: 1 },
//       block_2: { spanX: 1, spanY: 1 },

//   },
// } satisfies AnyBBEntry;

// type ll = keyof typeof gh;
//  type ll1= BlockIDS<typeof gh>;
// const gh: LayoutWithBoxes<'header', 'block_1' | 'block_2'> = {
//   header: {
//     boxesForSection: {
//       block_1: { spanX: 2, spanY: 2 },
//       block_2: { spanX: 3, spanY: 1 },
//     },
//   },
// };
/**
 * Rendering overrides derived from a LayoutAbsolute:
 * - sections optional
 * - breakpoints optional
 * - box IDs optional
 */
export type LayoutRenderingOverride<
  sectionID extends SectionIDs,
  blockIDs extends BlocksIDs,
> = Partial<{
  [S in sectionID]: Partial<{
    [BP in Breakpoint]: Partial<Record<blockIDs, NodeRenderConfig<sectionID, blockIDs>>>;
  }>;
}>;

// }
//const layoutWithTx = layoutsCatalog.primary20.page_twoCol_16_4;
// type ll = BlocksInLayoutWithTx<typeof layoutWithTx>;
// import { DefaultTransformations } from "../../templates/buildingBlocks/defaultBPTransformations";
// const kk = layoutsCatalog['secondary']['mixedDensityShowcase'];
// type llk = typeof kk;
// type sections = keyof typeof kk;
// type blockids = {
//   [S in sections]: keyof llk[S]['boxDimensionIds'];
// }[sections];

// const kk = layoutsCatalog['primary20']['page_twoCol_16_4'];
// const mn: LayoutTxOverrides<typeof kk> = {

//     main: DefaultTransformations,
// }
// const kkk = bbEntryToLayoutWithTx({
//     BBentry: kk, diagnostics: [], layoutTxOverrides: {
//         header: DefaultTransformations,
//         main: {
//             xs: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             sm: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             md: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             lg: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             xl: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ]
//         }
//     }
// });
// type ll = keyof typeof kk;
// type lk = BoxTransformations<keyof typeof kk>;
// type lka = typeof layoutsCatalog;
// type ld = lka[keyof lka];
// type kkak = keyof  ld;
// // Getting the keys for transformations
// type llk = LayoutTxOverrides<typeof kk>;
