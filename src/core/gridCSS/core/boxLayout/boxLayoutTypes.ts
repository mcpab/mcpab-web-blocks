import { BoxShapeId } from "./boxShapeType";
import { BPs, PartialBps } from "../breakpoints";
import { NodeID } from "../../templates/layoutIDs";
import { BoxMovesProps } from "../boxTransformations/boxTransformationsProps";
import { GridBox } from "../box/gridBoxTypes";
import { NodeAbsoluteCoordinates } from "../gridNodeTypes";

//each box can have a bp dependent shape
type BoxLayoutShape = BoxShapeId | PartialBps<BoxShapeId>;

// and so can transformations be bp dependent
type BoxTransformations<BoxId extends NodeID> = PartialBps<Array<BoxMovesProps<BoxId>>>;


// making sure that SectionID and BoxID are disjoint sets of IDs
type Disjoint<A, B> = [A & B] extends [never] ? true : false;

// type LayoutElement = GridBox | BoxLayoutShape;


type DesignSteps<SectionID extends NodeID, BoxID extends NodeID> = {

    spec: {
        BoxValue: BoxLayoutShape;
        Innertransformation: BoxTransformations<BoxID>;
        Outertransformation: BoxTransformations<SectionID>;
        BoundingBox: never;
    };
    sectionLocal: {
        BoxValue: BPs<GridBox>;
        Innertransformation: never;
        Outertransformation: BoxTransformations<SectionID>;
        BoundingBox: never;
    };
    sectionBounds: {
        BoxValue: BPs<GridBox>;
        Innertransformation: never;
        Outertransformation: never;
        BoundingBox: BPs<GridBox>;
    };
    absolute: {
        BoxValue: BPs<NodeAbsoluteCoordinates>;
        Innertransformation: never;
        Outertransformation: never;
        BoundingBox: never;
    };
}

export type DesignActions = keyof DesignSteps<any, any>;


// export type Layout<
//     SectionID extends NodeID,
//     BoxID extends NodeID, designAction extends DesignActions> = Disjoint<SectionID, BoxID> extends true
//     ? {
//         // this is the key part of the game. We can make this type dependent on BoxLayoutShape and transformations type
//         [K1 in SectionID]: {
//             boxes: Partial<Record<BoxID, DesignSteps<SectionID, BoxID>[designAction]['BoxValue']>>;
//             transformations?: DesignSteps<SectionID, BoxID>[designAction]['Innertransformation'];
//             boundingBox?: DesignSteps<SectionID, BoxID>[designAction]['BoundingBox'];
//         }

//     } & { transformations?: DesignSteps<SectionID, BoxID>[designAction]['Outertransformation'] } : never;

export type Layout<
    SectionID extends NodeID,
    BoxID extends NodeID, designAction extends DesignActions> = Disjoint<SectionID, BoxID> extends true
    ? {
        // this is the key part of the game. We can make this type dependent on BoxLayoutShape and transformations type
        [K1 in SectionID]: {
            boxes: Partial<Record<BoxID, DesignSteps<SectionID, BoxID>[designAction]['BoxValue']>>;
            transformations?: DesignSteps<SectionID, BoxID>[designAction]['Innertransformation'];
            boundingBox?: DesignSteps<SectionID, BoxID>[designAction]['BoundingBox'];
        }

    } & { transformations?: DesignSteps<SectionID, BoxID>[designAction]['Outertransformation'] } : never;


// export type LayoutBySection<
//     SectionID extends NodeID,
//     BoxID extends NodeID,
//     BoxValue,
//     HasTransform extends boolean> = Disjoint<SectionID, BoxID> extends true
//     ? {
//         // this is the key part of the game. We can make this type dependent on BoxLayoutShape and transformations type
//         [K1 in SectionID]: {
//             boxes: Partial<Record<BoxID, BoxValue>>;
//             transformations?: HasTransform extends true ? BoxTransformations<BoxID> : never;
//         }

//     } & { transformations?: HasTransform extends true ? BoxTransformations<SectionID> : never } : never;
// // this is the main type for a box layout configuration

// type BoxShapesLayout<
//     SectionID extends NodeID,
//     BoxID extends NodeID,
//     Element,
//     HasTransform extends boolean = true
// > = LayoutBySection<SectionID, BoxID, Element, HasTransform>;

// type Transformations<T extends LayoutElement> =  T extends GridBox ? {} : BoxTransformations<NodeID>;

// // this is the main type for a box layout configuration
// export type BoxShapesLayout<SectionID extends NodeID, BoxID extends NodeID, Element extends LayoutElement=BoxLayoutShape> = Disjoint<SectionID, BoxID> extends true
//     ? {
//         // this is the key part of the game. We can make this type dependent on BoxLayoutShape and transformations type
//         [K1 in SectionID]: {
//             boxes: Partial<Record<BoxID, Element>>;
//             transformations?: Transformations<Element>;
//         }

//     } & { transformations?: Transformations<Element> } : never;



// and an example of usage
const example: Layout<'header' | 'footer', 'block_1' | 'block_2', 'spec'> = {

    header: {
        boxes: {
            block_1: 'unitCell',
            // block_2: 'doubleCell',
        },

        transformations:
        {
            xs: [
                {
                    moveTo: {
                        from: {
                            boxId: 'block_1',
                            anchor: 'topLeft'
                        },
                        to: {
                            boxId: 'block_1',
                            anchor: 'bottomRight'
                        }
                    }
                },
                {
                    alignToY: {
                        from: {
                            boxId: 'block_1',
                            anchor: 'center'
                        },
                        to: 300
                    }
                }
            ]
        }

    },
    footer: {
        boxes: {
            block_1: 'unitCell',
            block_2: { xs: 'doubleCell' },
        },
        transformations: {
            xs: [{
                alignAllToX: {
                    to: 500,
                    anchor: 'center'
                }
            }]
        }

    },
    transformations: {
        xs: [{
            stackHorizontally: { gap: 20 }
        }],

        lg: [{
            moveTo: {
                from: {
                    boxId: 'footer',
                    anchor: 'topLeft'
                },
                to: {
                    boxId: 'footer',
                    anchor: 'bottomRight'
                }
            }
        }]
    },
};

// export type LayoutCatalog = Record<string,Layout<any, any, 'spec'>>;
// type CatalogKeys = keyof LayoutCatalog;




// let kii: BoxMovesProps<'block_1' | 'aside'> = {
//     moveTo: {
//         from: {
//             boxId: 'aside',
//             anchor: 'center'
//         },
//         to: {
//             boxId: 'block_1',
//             anchor: 'topLeft'
//         }
//     },
// }