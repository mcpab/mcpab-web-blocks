import { bbCatalog } from "../../../templates/buildingBlocks/bbCatalog";
import { BoxDimensionIdsAndTx } from "../../boxLayout/boxLayoutTypes";
import { BoxDimensionId } from "../../boxShapes/boxShapeType";
import { DiagnosticEntry } from "../../gridErrorShape";
import { getLocalGridBoxes } from "../getLocalGridBoxes";


describe('getLocalGridBoxes', () => {


    test('simple case', () => {

        const diagnostics: DiagnosticEntry[] = [];
        let boxDimensionIdsAndTx = bbCatalog['unitCell'].boxDimensionIdsAndTx;

        const gridBoxes = getLocalGridBoxes(boxDimensionIdsAndTx, diagnostics, 'section_1');

        expect(gridBoxes).toEqual({
            xs: {
                block_1: {
                    origin: { x: 0, y: 0 },
                    diagonal: { x: 1, y: 1 },
                    _normalized: 'GridBox',
                },
            },
            sm: {
                block_1: {
                    origin: { x: 0, y: 0 },
                    diagonal: { x: 1, y: 1 },
                    _normalized: 'GridBox',
                },
            },
            md: {
                block_1: {
                    origin: { x: 0, y: 0 },
                    diagonal: { x: 1, y: 1 },
                    _normalized: 'GridBox',
                },
            },
            lg: {
                block_1: {
                    origin: { x: 0, y: 0 },
                    diagonal: { x: 1, y: 1 },
                    _normalized: 'GridBox',
                },
            },
            xl: {
                block_1: {
                    origin: { x: 0, y: 0 },
                    diagonal: { x: 1, y: 1 },
                    _normalized: 'GridBox',
                },
            },
        });

        expect(diagnostics).toHaveLength(0);
    });


    test('three blocks', () => {

        const diagnostics: DiagnosticEntry[] = [];
        let boxDimensionIdsAndTx = bbCatalog['threeUnitCells'].boxDimensionIdsAndTx;

        const gridBoxes = getLocalGridBoxes(boxDimensionIdsAndTx, diagnostics, 'section_1');

        const unitBox = {
            origin: { x: 0, y: 0 },
            diagonal: { x: 1, y: 1 },
            _normalized: 'GridBox',
        };

        expect(gridBoxes).toEqual({
            xs: { block_1: unitBox, block_2: unitBox, block_3: unitBox },
            sm: { block_1: unitBox, block_2: unitBox, block_3: unitBox },
            md: { block_1: unitBox, block_2: unitBox, block_3: unitBox },
            lg: { block_1: unitBox, block_2: unitBox, block_3: unitBox },
            xl: { block_1: unitBox, block_2: unitBox, block_3: unitBox },
        });

        expect(diagnostics).toHaveLength(0);
    });


    test('five cells, variable sizes', () => {

        const diagnostics: DiagnosticEntry[] = [];
        let boxDimensionIdsAndTx = bbCatalog['twoUnitThreeDoubleWide'].boxDimensionIdsAndTx;
        console.log('boxDimensionIdsAndTx:', JSON.stringify(boxDimensionIdsAndTx, null, 2));
        const gridBoxes = getLocalGridBoxes(boxDimensionIdsAndTx, diagnostics, 'section_1');

        console.log('gridBoxes:', JSON.stringify(gridBoxes, null, 2));

        const unitBox = {
            origin: { x: 0, y: 0 },
            diagonal: { x: 1, y: 1 },
            _normalized: 'GridBox',
        };
        const doubleWideBox = {
            origin: { x: 0, y: 0 },
            diagonal: { x: 2, y: 1 },
            _normalized: 'GridBox',
        };

        expect(gridBoxes).toEqual({
            xs: {
                block_1: unitBox,
                block_2: unitBox,
                block_3: doubleWideBox,
                block_4: doubleWideBox,
                block_5: doubleWideBox,
            },
            sm: {
                block_1: unitBox,
                block_2: unitBox,
                block_3: doubleWideBox,
                block_4: doubleWideBox,
                block_5: doubleWideBox,
            },
            md: {
                block_1: unitBox,
                block_2: unitBox,
                block_3: doubleWideBox,
                block_4: doubleWideBox,
                block_5: doubleWideBox,
            },
            lg: {
                block_1: unitBox,
                block_2: unitBox,
                block_3: doubleWideBox,
                block_4: doubleWideBox,
                block_5: doubleWideBox,
            },
            xl: {
                block_1: unitBox,
                block_2: unitBox,
                block_3: doubleWideBox,
                block_4: doubleWideBox,
                block_5: doubleWideBox,
            },
        });

        expect(diagnostics).toHaveLength(0);
    });


    test('twoTripleOne10Wide', () => {

        const diagnostics: DiagnosticEntry[] = [];
        let boxDimensionIdsAndTx = bbCatalog['twoTripleOne10Wide'].boxDimensionIdsAndTx;

        const gridBoxes = getLocalGridBoxes(boxDimensionIdsAndTx, diagnostics, 'section_1');

        const tripleWideBox = {
            origin: { x: 0, y: 0 },
            diagonal: { x: 3, y: 1 },
            _normalized: 'GridBox',
        };
        const tenWideBox = {
            origin: { x: 0, y: 0 },
            diagonal: { x: 10, y: 1 },
            _normalized: 'GridBox',
        };

        expect(gridBoxes).toEqual({
            xs: {
                block_1: tripleWideBox,
                block_2: tripleWideBox,
                block_3: tenWideBox,
            },
            sm: {
                block_1: tripleWideBox,
                block_2: tripleWideBox,
                block_3: tenWideBox,
            },
            md: {
                block_1: tripleWideBox,
                block_2: tripleWideBox,
                block_3: tenWideBox,
            },
            lg: {
                block_1: tripleWideBox,
                block_2: tripleWideBox,
                block_3: tenWideBox,
            },
            xl: {
                block_1: tripleWideBox,
                block_2: tripleWideBox,
                block_3: tenWideBox,
            },
        });

        expect(diagnostics).toHaveLength(0);
    });


    test('5x5With10Tall', () => {

        const diagnostics: DiagnosticEntry[] = [];
        let boxDimensionIdsAndTx = bbCatalog['5x5With10Tall'].boxDimensionIdsAndTx;

        const gridBoxes = getLocalGridBoxes(boxDimensionIdsAndTx, diagnostics, 'section_1');

        const fiveByFiveBox = {
            origin: { x: 0, y: 0 },
            diagonal: { x: 5, y: 5 },
            _normalized: 'GridBox',
        };
        const tenTallBox = {
            origin: { x: 0, y: 0 },
            diagonal: { x: 1, y: 10 },
            _normalized: 'GridBox',
        };

        expect(gridBoxes).toEqual({
            xs: {
                block_1: fiveByFiveBox,
                block_2: tenTallBox,
            },
            sm: {
                block_1: fiveByFiveBox,
                block_2: tenTallBox,
            },
            md: {
                block_1: fiveByFiveBox,
                block_2: tenTallBox,
            },
            lg: {
                block_1: fiveByFiveBox,
                block_2: tenTallBox,
            },
            xl: {
                block_1: fiveByFiveBox,
                block_2: tenTallBox,
            },
        });

        expect(diagnostics).toHaveLength(0);
    });

    test('bp-dependent shapes: different diagonals per breakpoint', () => {
        const diagnostics: DiagnosticEntry[] = [];

        const boxDimensionIdsAndTx: BoxDimensionIdsAndTx<'block_1'> = {
            boxDimensionIds: {
                // BoxDimensionIdsCSS = BPs<BoxDimensionId> here:
                block_1: {
                    xs: 'doubleWideCell',   // 2 × 1
                    sm: 'doubleWideCell',   // 2 × 1
                    md: 'tripleWideCell',   // 3 × 1
                    lg: '5WideCell',        // 5 × 1
                    xl: '10WideCell',       // 10 × 1
                },
            },
            transformations: undefined,
        };

        const gridBoxes = getLocalGridBoxes(boxDimensionIdsAndTx, diagnostics, 'section_1');

        expect(diagnostics).toHaveLength(0);

        expect(gridBoxes.xs.block_1).toEqual({
            origin: { x: 0, y: 0 },
            diagonal: { x: 2, y: 1 },
            _normalized: 'GridBox',
        });
        expect(gridBoxes.sm.block_1).toEqual({
            origin: { x: 0, y: 0 },
            diagonal: { x: 2, y: 1 },
            _normalized: 'GridBox',
        });
        expect(gridBoxes.md.block_1).toEqual({
            origin: { x: 0, y: 0 },
            diagonal: { x: 3, y: 1 },
            _normalized: 'GridBox',
        });
        expect(gridBoxes.lg.block_1).toEqual({
            origin: { x: 0, y: 0 },
            diagonal: { x: 5, y: 1 },
            _normalized: 'GridBox',
        });
        expect(gridBoxes.xl.block_1).toEqual({
            origin: { x: 0, y: 0 },
            diagonal: { x: 10, y: 1 },
            _normalized: 'GridBox',
        });
    });

    test('missing box shape logs diagnostic and skips block', () => {
        const diagnostics: DiagnosticEntry[] = [];

        const boxDimensionIdsAndTx = {
            boxDimensionIds: {
                block_1: 'unitCell' as BoxDimensionId,

                block_2: undefined,
            },
            transformations: undefined,
        } as BoxDimensionIdsAndTx<'block_1' | 'block_2'>;

        const gridBoxes = getLocalGridBoxes(boxDimensionIdsAndTx, diagnostics, 'section_1');

        // One diagnostic for the missing shape (or at least > 0)
        expect(diagnostics.length).toBeGreaterThan(0);

        const diagnosticsStr = JSON.stringify(diagnostics);
        expect(diagnosticsStr).toContain('No box shape found for block ID block_2');

        // block_1 exists at all breakpoints
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach((bp) => {
            expect(gridBoxes[bp as keyof typeof gridBoxes]?.block_1).toEqual({
                origin: { x: 0, y: 0 },
                diagonal: { x: 1, y: 1 },
                _normalized: 'GridBox',
            });
        });

        // block_2 was skipped
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach((bp) => {
            expect(gridBoxes[bp as keyof typeof gridBoxes]?.block_2).toBeUndefined();
        });
    });


});