
import { NodeID } from "../../templates/layoutIDs";
import { BoxMovesProps } from "../boxTransformations/boxTransformationsProps";
import { BPs, PartialBps } from "../breakpoints";


//each box can have a bp dependent shape
// type BoxLayoutShape = BoxShapeId | PartialBps<BoxShapeId> | BPs<GridBox> ;

// and so can transformations be bp dependent
export type BoxTransformations<BoxId extends NodeID> = PartialBps<Array<BoxMovesProps<BoxId>>>;

export type BuildingBlock<BlockIDs extends NodeID, BoxShape> = {
    boxes: Partial<Record<BlockIDs, BoxShape>>;
}

export type BuildingBlockTransformations<BlockIDs extends NodeID, BoxShape> = BuildingBlock<BlockIDs, BoxShape> & {
    transformations?: BoxTransformations<BlockIDs>;
}

export type BuildingBlockBoundingBox<BlockIDs extends NodeID, BoxShape> = BuildingBlock<BlockIDs, BoxShape> & {
   boundingBox:  BoxShape;
}

