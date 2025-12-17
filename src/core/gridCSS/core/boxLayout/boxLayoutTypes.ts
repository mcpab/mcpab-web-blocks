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
export type LayoutWithTx<SectionID extends SectionIDs, BlockIDs extends BlocksIDs> = {
  sections: Record<SectionID, BoxDimensionIdsAndTx<BlockIDs>>;
  transformations?: BoxTransformations<SectionID>;
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
  LA extends LayoutAbsolute<any, any>,
  S extends keyof LA["sections"],
  BP extends Breakpoint,
  B extends keyof LA["sections"][S]["coordinates"][BP]
> = {
  sectionId: S;
  bp: BP;
  boxId: B;
  coords: CSSCoordinates; // <- key fix: don't make coords depend on BP in the type
};


export type NodeRenderConfig<LA extends LayoutAbsolute<any, any>> = {
  contentRenderer?: <
    S extends keyof LA["sections"],
    BP extends Breakpoint,
    B extends keyof LA["sections"][S]["coordinates"][BP]
  >(
    ctx: NodeRenderCtx<LA, S, BP, B>
  ) => React.ReactNode;

  view?: GridNodeViewOptions;
};
/**
 * A key-safe, ergonomic "rendering overrides" shape derived from a LayoutAbsolute.
 * - sections optional
 * - breakpoints optional
 * - box IDs optional
 */
export type LayoutAbsoluteRendering<LA extends LayoutAbsolute<any, any>> = Partial<{
  [S in keyof LA["sections"]]: Partial<{
    [BP in Breakpoint]: Partial<{
      [B in keyof LA["sections"][S]["coordinates"][BP]]: NodeRenderConfig<LA>;
    }>;
  }>;
}>;