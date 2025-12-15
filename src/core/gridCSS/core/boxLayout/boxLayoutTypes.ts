import { BlocksIDs, NodeID, SectionIDs } from "../../templates/layoutIDs";
import { GridBox } from "../box/gridBoxTypes";
import { BoxDimensionIdsCSS } from "../boxShapes/boxShapeType";
import { BoxMovesProps } from "../boxTransformations/boxTransformationsProps";
import { BPs } from "../breakpoints";
import { CSSCoordinates } from "../gridNodeTypes";


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
 


