import { AnyBBEntry } from "../../templates/boxLayoutsCatalog";

import { BlocksIDs, NodeID, SectionIDs } from "../../templates/layoutIDs";
import { GridBox } from "../box/gridBoxTypes";
import { BoxDimensionIdsCSS } from "../boxShapes/boxShapeType";
import { BoxMovesProps } from "../boxTransformations/boxTransformationsProps";
import { BPs, BREAKPOINTS } from "../breakpoints";
import { CSSCoordinates } from "../gridNodeTypes";
import { GridNodeViewOptions } from "../nodeViewOptions";


/// Boxes
export type BoxTransformations<BoxId extends NodeID> = BPs<Array<BoxMovesProps<BoxId>>>;

export type BoxDimensionIdsAndTx<BlockIDs extends NodeID> = {
  boxDimensionIds: Partial<Record<BlockIDs, BoxDimensionIdsCSS>>;
  transformations?: BoxTransformations<BlockIDs>;
};

export type LocalGridBoxes<BlockIDs extends NodeID> = {
  gridBoxes: BPs<Partial<Record<BlockIDs, GridBox>>>;
};

export type BoxesCoordinates<BlockIDs extends NodeID> = {
  coordinates: BPs<Partial<Record<BlockIDs, CSSCoordinates>>>;
};

/// Layouts 

// basic layout, with box dimension ids and optional transformations per section
export type LayoutWithTx<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> = {
  sections: Record<sectionIDs, BoxDimensionIdsAndTx<blockIDs>>;
  transformations?: BoxTransformations<sectionIDs>;
};

// layout after applying transformations to sections children, with local grid boxes per section children
export type LayoutSectionLocal<SectionID extends SectionIDs, BlockIDs extends BlocksIDs> = {
  sections: Record<SectionID, LocalGridBoxes<BlockIDs>>;
  transformations?: BoxTransformations<SectionID>
}

// layout with bounding boxes per section children are still in relative grid coordinates
// bounding boxes are the overall boxes that contain all the boxes in the section
export type LayoutSectionBounds<SectionID extends SectionIDs, BlockIDs extends BlocksIDs> = {
  sections: Record<SectionID, LocalGridBoxes<BlockIDs>>;
  boundingBoxes: BPs<Record<SectionID, GridBox>>;
  transformations?: BoxTransformations<SectionID>;
}

// 
export type LayoutAbsolute<SectionID extends SectionIDs, BlockIDs extends BlocksIDs> = {
  gridDimensions: {
    rows: BPs<number>;
    columns: BPs<number>;
  };
  sections: Record<SectionID, BoxesCoordinates<BlockIDs>>;
}

type Breakpoint = (typeof BREAKPOINTS)[number];

export type NodeRenderCtx<
  sectionID extends SectionIDs,
  blockIDs extends BlocksIDs,
  BP extends Breakpoint = Breakpoint
> = {
  sectionId: sectionID;
  bp: BP;
  boxId: blockIDs;
  coords: CSSCoordinates;
};

export type NodeRenderConfig<
  sectionID extends SectionIDs,
  blockIDs extends BlocksIDs
> = {
  contentRenderer?: (ctx: NodeRenderCtx<sectionID, blockIDs>) => React.ReactNode;
  view?: GridNodeViewOptions;
};

/**
 * Rendering overrides derived from a LayoutAbsolute:
 * - sections optional
 * - breakpoints optional
 * - box IDs optional
 */
export type LayoutRenderingOverride<
  sectionID extends SectionIDs,
  blockIDs extends BlocksIDs
> = Partial<{
  [S in sectionID]: Partial<{
    [BP in Breakpoint]: Partial<Record<blockIDs, NodeRenderConfig<sectionID, blockIDs>>>;
  }>;
}>;

export type LayoutTxOverrides<E extends AnyBBEntry> = {
  [S in SectionsFromBBEntry<E>]?: BoxTransformations<BlockIdsFromBBEntry<E>>;
} & {
  transformations?: BoxTransformations<SectionsFromBBEntry<E>>;
};
// section ids (literal union)
export type SectionsFromBBEntry<E extends AnyBBEntry> = keyof E & SectionIDs;

// block ids used anywhere in this layout (literal union, cleaned)
export type BlockIdsFromBBEntry<E extends AnyBBEntry> = {
  [S in SectionsFromBBEntry<E>]:
    NonNullable<E[S]> extends { boxDimensionIds: infer BD }
      ? keyof BD & BlocksIDs
      : never;
}[SectionsFromBBEntry<E>];

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

