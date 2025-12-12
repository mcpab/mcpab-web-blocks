import { BlocksIDs, SectionIDs } from "../../../templates/layoutIDs";
import { BoxDimensionIdsCSS } from "../../boxShapes/boxShapeType";
import { DiagnosticEntry } from "../../gridErrorShape";
import { getDiagonal } from "../getDiagonal";

let section: SectionIDs = 'section_1';
let blockID: BlocksIDs = 'block_1';

describe('getDiagonal', () => {
    test('unitCell', () => {
        const boxDimensionId = 'unitCell';
        const diagnostics: DiagnosticEntry[] = [];

        const diagonal = getDiagonal(boxDimensionId, diagnostics, section, blockID);

        expect(diagonal).toEqual({
            xs: { x: 1, y: 1 },
            sm: { x: 1, y: 1 },
            md: { x: 1, y: 1 },
            lg: { x: 1, y: 1 },
            xl: { x: 1, y: 1 },
        });
        expect(diagnostics).toHaveLength(0);
    });

    test('doubleWideCell', () => {
        const boxDimensionId = 'doubleWideCell';
        const diagnostics: DiagnosticEntry[] = [];

        const diagonal = getDiagonal(boxDimensionId, diagnostics, section, blockID);

        expect(diagonal).toEqual({
            xs: { x: 2, y: 1 },
            sm: { x: 2, y: 1 },
            md: { x: 2, y: 1 },
            lg: { x: 2, y: 1 },
            xl: { x: 2, y: 1 },
        });
        expect(diagnostics).toHaveLength(0);
    });

    test('responsive boxDimensionId', () => {

        const boxDimensionId: BoxDimensionIdsCSS = {
            xs: 'unitCell',
            sm: 'doubleWideCell',
            md: 'doubleTallCell',
            lg: 'doubleCell',
            xl: 'tripleCell',
        };
        const diagnostics: DiagnosticEntry[] = [];

        const diagonal = getDiagonal(boxDimensionId, diagnostics, section, blockID);

        expect(diagonal).toEqual({
            xs: { x: 1, y: 1 },
            sm: { x: 2, y: 1 },
            md: { x: 1, y: 2 },
            lg: { x: 2, y: 2 },
            xl: { x: 3, y: 3 },
        });
        expect(diagnostics).toHaveLength(0);
    });
});





