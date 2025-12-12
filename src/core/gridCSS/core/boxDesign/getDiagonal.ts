import { origin } from "../../geometry/coordinateAlgebra";
import { Coordinate } from "../../geometry/coordinateTypes";
import { SectionIDs, BlocksIDs } from "../../templates/layoutIDs";
import { boxShapesCatalog } from "../boxShapes/boxShapesCatalog";
import { BoxDimensionIdsCSS, BoxDimensionId, BoxDimensions } from "../boxShapes/boxShapeType";
import { BPs, BREAKPOINTS } from "../breakpoints";
import { DiagnosticEntry, makeError, GRID_ERROR_CODE } from "../gridErrorShape";
 
// this function retrieves the diagonal (width and height) for a given box dimension ID or responsive box dimension IDs
export const getDiagonal = (boxDimensionId: BoxDimensionIdsCSS, diagnostic: DiagnosticEntry[], section: SectionIDs, blockID: BlocksIDs): BPs<Coordinate> => {

    // initiazing the diagonals object with dummy zeros
    let diagonals: BPs<Coordinate> = { xs: origin(), sm: origin(), md: origin(), lg: origin(), xl: origin() }; // just placeholders for now

    // iterating over breakpoints to get the diagonal for each
    let boxId: BoxDimensionId;

    if (typeof boxDimensionId === "string") {
        // single box dimension ID for all breakpoints
        boxId = boxDimensionId;
        const boxShapeDef: BoxDimensions = boxShapesCatalog[boxId];

        BREAKPOINTS.forEach(bp => {
            diagonals[bp] = {
                x: boxShapeDef[0],
                y: boxShapeDef[1]
            };
        });

        return diagonals;
    }

    // checking if boxDimensionId is responsive
    else if (typeof boxDimensionId === "object" && boxDimensionId !== null) {

        BREAKPOINTS.forEach(bp => {

            // expecting a BPs<BoxDimensionId>, full responsiveness
            if (bp in boxDimensionId) {
                if (boxDimensionId[bp] === undefined) {
                    diagnostic.push(makeError('layoutTxToSectionLocal',
                        GRID_ERROR_CODE.BOX_SHAPE_MISSING_BP,
                        `Box shape is undefined for breakpoint ${bp}. Section: ${section}, BlockID: ${blockID}. Setting unitCell as default.`)
                    );
                    boxId = 'unitCell';

                } else {
                    boxId = boxDimensionId[bp]; // safe now
                }
                // the dimension ID is defined for this breakpoint
            } else {
                diagnostic.push(makeError('layoutTxToSectionLocal',
                    GRID_ERROR_CODE.BOX_SHAPE_MISSING_BP,
                    `Box shape is undefined for breakpoint ${bp}. Section: ${section}, BlockID: ${blockID}. Setting unitCell as default.`)
                );
                boxId = 'unitCell';
            }

            // retrieving the box shape definition
            const boxShapeDef: BoxDimensions = boxShapesCatalog[boxId];

            // assigning the diagonal for this breakpoint
            diagonals[bp] = {
                x: boxShapeDef[0],
                y: boxShapeDef[1]
            };

            // end of breakpoint iteration
        });

        return diagonals;

    } else {
        // invalid type
        diagnostic.push(makeError('layoutTxToSectionLocal',
            GRID_ERROR_CODE.BOX_SHAPE_MISSING_BP,
            `Invalid box shape definition. Section: ${section}, BlockID: ${blockID}. Setting unitCell as default.`)
        );

        // setting all to unit cell
        BREAKPOINTS.forEach(bp => {
            diagonals[bp] = {
                x: 1,
                y: 1
            };
        });

        return diagonals;
    }

};
