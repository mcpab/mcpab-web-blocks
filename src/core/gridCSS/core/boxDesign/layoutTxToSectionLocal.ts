import { BlocksIDs, SectionIDs } from "../../templates/layoutIDs";
import { GridBox } from "../box/gridBoxTypes";
import { BoxTransformations, LocalGridBoxes } from "../boxLayout/boxLayoutTypes";
import { LayoutSectionLocal, LayoutWithTx } from "../boxLayout/boxLayoutTypes";
import { DefaultBoxTransformations } from "../boxTransformations/defaultBoxTransformations";
import { BPs } from "../breakpoints";
import { DiagnosticEntry } from "../gridErrorShape";
import { getLocalGridBoxes } from "./getLocalGridBoxes";
import { transformBoxMove } from "./transformBoxMove";

export function layoutTxToSectionLocal<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>(
    layoutTx: LayoutWithTx<sectionIDs, blockIDs>, diagnostics: DiagnosticEntry[]): LayoutSectionLocal<sectionIDs, blockIDs> {

    const defaultBoxTransformations = DefaultBoxTransformations();

    // initialize the layoutSectionLocal structure
    let layoutSectionLocal: LayoutSectionLocal<sectionIDs, blockIDs> = {
        sections: {} as Record<sectionIDs, LocalGridBoxes<blockIDs>>,
        transformations: {} as BoxTransformations<sectionIDs>
    };

    // initialize the layoutSectionLocal structure woth empty boxes
    for (const sectionId in layoutTx.sections) {

        const sectionKey = sectionId as sectionIDs;
        const sectionTx = layoutTx.sections[sectionKey];

        const localGridBoxes = getLocalGridBoxes(
            sectionTx,
            diagnostics,
            sectionKey
        );

        layoutSectionLocal.sections[sectionKey] = {
            gridBoxes: localGridBoxes,
        };

    }

    layoutSectionLocal.transformations = layoutTx.transformations ? layoutTx.transformations : {} as BoxTransformations<sectionIDs>;

    //  Now we apply transformations if any
    // here we initialize the layoutSectionLocal structure
    for (const sectionId in layoutSectionLocal.sections) {

        // evaluating transformations for this section
        const transformations: BoxTransformations<blockIDs> | undefined = layoutTx.sections[sectionId as sectionIDs].transformations;

        if (!transformations) {
            continue; // no transformations to apply
        }

        // get the local grid boxes.
        let localGridBoxesPerBp: BPs<Partial<Record<blockIDs, GridBox>>> = layoutSectionLocal.sections[sectionId as sectionIDs].gridBoxes;

        //export type BoxTransformations<BoxId extends NodeID> = BPs<Array<SingleBoxMoveProps<BoxId>>>;
        // export const transformBoxMove = <BoxID extends NodeID>(
        //     transformationFactory: BoxMovesFunctions<BoxID>,
        //     boxTransformations: BoxTransformations<BoxID>, ==> BoxTransformations<BoxId extends NodeID> = BPs<Array<BoxMovesProps<BoxId>>>;
        //     gridBoxes: BPs<Partial<Record<BoxID, GridBox>>>,
        //     diagnostics: DiagnosticEntry[]) => {

        transformBoxMove<blockIDs>(
            defaultBoxTransformations,
            transformations,
            localGridBoxesPerBp,
            diagnostics
        );

    }

    return layoutSectionLocal;

}




