import { BBTxEntry } from "../../templates/buildingBlocks/bbCatalogTypes";
import { Blocks, SectionIds } from "../../templates/layoutIDs";
import { GridBox } from "../box/gridBoxTypes";
import { BPs } from "../breakpoints";
import { NodeAbsoluteCoordinates } from "../gridNodeTypes";
import { BoxTransformations, BuildingBlock, BuildingBlockBoundingBox } from "./boxBuildingBlock";


type LayoutEntry<BlockIDs extends Blocks = Blocks> =
  Omit<BBTxEntry<BlockIDs>, 'description'>;

export type LayoutWithTx<SectionID extends SectionIds> = Partial<Record<SectionID, LayoutEntry>>
    & { transformations?: BoxTransformations<SectionID> };


export type LayoutSectionLocal<SectionID extends SectionIds> = Partial<Record<SectionID, BuildingBlock<any, BPs<GridBox>>>>
    & { transformations?: BoxTransformations<SectionID> }


export type LayoutSectionBounds<SectionID extends SectionIds> = Partial<Record<SectionID, BuildingBlockBoundingBox<any, BPs<GridBox>>>>
    & { transformations?: BoxTransformations<SectionID> }


export type Layoutabsolute<SectionID extends SectionIds> = {
        gridDimensions: {
            rows: BPs<number>;
            columns: BPs<number>;
        };
    } & Partial<Record<SectionID, BuildingBlockBoundingBox<any, BPs<NodeAbsoluteCoordinates>>>>
    & { transformations?: BoxTransformations<SectionID> }



