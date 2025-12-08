import { PartialBps } from "../..";
import { BuildingBlockTransformations } from "../../core/boxLayout/boxBuildingBlock";
import { BoxDimensionId } from "../../core/boxShapes/boxShapeType";
import { Blocks } from "../layoutIDs";
 
type BoxShape = BoxDimensionId | PartialBps<BoxDimensionId> 


export type BBTxEntry<BlockIDs extends Blocks> =
  BuildingBlockTransformations<BlockIDs, BoxShape> & {
    description?: string;
  };

export type BBCatalog = Record<string, BBTxEntry<Blocks>>;


