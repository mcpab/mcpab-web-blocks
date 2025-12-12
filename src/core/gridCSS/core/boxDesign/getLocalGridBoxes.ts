import { BlocksIDs, NodeID, SectionIDs } from "../../templates/layoutIDs"
import { GridBox } from "../box/gridBoxTypes"
import { makeGridBox } from "../box/gridBoxUtils";
import { BoxDimensionIdsAndTx } from "../boxLayout/boxLayoutTypes";
import { BoxDimensionIdsCSS } from "../boxShapes/boxShapeType";
import { BPs, BREAKPOINTS } from "../breakpoints"
import { DiagnosticEntry, makeError, GRID_ERROR_CODE } from "../gridErrorShape";
import { getDiagonal } from "./getDiagonal";
import { origin } from "../../geometry/coordinateAlgebra";


export const getLocalGridBoxes = <blockIds extends BlocksIDs>(
    blocks: BoxDimensionIdsAndTx<blockIds>,
    diagnostics: DiagnosticEntry[],
    sectionId: SectionIDs): BPs<Partial<Record<blockIds, GridBox>>> => {


    let localGridBoxes: BPs<Partial<Record<blockIds, GridBox>>> = {} as BPs<Partial<Record<blockIds, GridBox>>>;

    BREAKPOINTS.forEach(bp => {

        // loop over the block IDs to create their grid boxes
        const gridBox: Partial<Record<blockIds, GridBox>> = {} as Partial<Record<blockIds, GridBox>>;

        for (const blockID in blocks.boxDimensionIds) {

            // getting the box shape for this block ID
            const boxShape: BoxDimensionIdsCSS | undefined = blocks.boxDimensionIds[blockID as blockIds];

            // if not present, log error and skip
            if (!boxShape) {
                diagnostics.push(makeError('layoutTxToSectionLocal',
                    GRID_ERROR_CODE.NO_BOXES_PROCESSED,
                    `No box shape found for block ID ${blockID} in section ${sectionId}. Skipping block.`)
                );
                continue;
            }

            // getting the diagonal.
            const diagonal = getDiagonal(boxShape, diagnostics, sectionId, blockID as blockIds);

            // for each breakpoint, create the grid box from origin and diagonal
            gridBox[blockID] = makeGridBox(origin(), diagonal[bp]);

        }

        localGridBoxes[bp] = gridBox;


    });

    return localGridBoxes;


}