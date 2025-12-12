import { GridBox } from "../../box/gridBoxTypes";
import { LayoutWithTx } from "../../boxLayout/boxLayoutTypes";
import { BPs } from "../../breakpoints";
import { DiagnosticEntry } from "../../gridErrorShape";
import { layoutTxToSectionLocal } from "../layoutTxToSectionLocal";

describe("layoutTxToSectionLocal", () => {
    test("stacks blocks within sections and (later) allows section-level stacking", () => {
        const layoutTx: LayoutWithTx<
            "section_1" | "section_2",
            "block_1" | "block_2" | "block_3"
        > = {
            sections: {
                section_1: {
                    boxDimensionIds: {
                        block_1: "unitCell",
                        block_2: "unitCell",
                    },
                    transformations: {
                        xs: [{ stackHorizontally: {} }],
                        sm: [{ stackHorizontally: {} }],
                        md: [{ stackHorizontally: {} }],
                        lg: [{ stackHorizontally: {} }],
                        xl: [{ stackHorizontally: {} }],
                    },
                },
                section_2: {
                    boxDimensionIds: {
                        block_1: "unitCell",
                        block_2: "unitCell",
                        block_3: "unitCell",
                    },
                    transformations: {
                        xs: [{ stackHorizontally: {} }],
                        sm: [{ stackHorizontally: {} }],
                        md: [{ stackHorizontally: {} }],
                        lg: [{ stackHorizontally: {} }],
                        xl: [{ stackHorizontally: {} }],
                    },
                },
            },
            // section-level transforms (you’ll wire these up in the next step)
            transformations: {
                xs: [{ stackHorizontally: {} }],
                sm: [{ stackHorizontally: {} }],
                md: [{ stackHorizontally: {} }],
                lg: [{ stackHorizontally: {} }],
                xl: [{ stackHorizontally: {} }],
            },
        };

        const diagnostics: DiagnosticEntry[] = [];

        const layoutSectionLocal = layoutTxToSectionLocal(layoutTx, diagnostics);

        // 1) No diagnostics for this valid layout
        expect(diagnostics).toHaveLength(0);

        // 2) For every breakpoint, blocks within each section are stacked horizontally
        (["xs", "sm", "md", "lg", "xl"] as const).forEach((bp) => {
            const s1Boxes = layoutSectionLocal.sections.section_1.gridBoxes[bp]!;
            const s2Boxes = layoutSectionLocal.sections.section_2.gridBoxes[bp]!;

            // section_1 has block_1, block_2
            const s1b1 = s1Boxes.block_1!;
            const s1b2 = s1Boxes.block_2!;

            // Horizontally stacked: same y, strictly increasing x
            expect(s1b1.origin.y).toBe(s1b2.origin.y);
            expect(s1b1.origin.x).toBeLessThan(s1b2.origin.x);

            // section_2 has block_1, block_2, block_3
            const s2b1 = s2Boxes.block_1!;
            const s2b2 = s2Boxes.block_2!;
            const s2b3 = s2Boxes.block_3!;

            // Same y for all three, x strictly increasing
            expect(s2b1.origin.y).toBe(s2b2.origin.y);
            expect(s2b2.origin.y).toBe(s2b3.origin.y);

            expect(s2b1.origin.x).toBeLessThan(s2b2.origin.x);
            expect(s2b2.origin.x).toBeLessThan(s2b3.origin.x);
        });

        // 3) Optional: section-level transformations are preserved in the result
        // (actual section-level *effects* will come once you implement them)
        expect(layoutSectionLocal.transformations).toEqual(layoutTx.transformations);
    });



    test("supports bp-dependent box shapes and different transforms per breakpoint", () => {
        type SectionId = "section_1";
        type BlockId = "block_1" | "block_2";

        const layoutTx: LayoutWithTx<SectionId, BlockId> = {
            sections: {
                section_1: {
                    boxDimensionIds: {
                        // block_1 gets wider on md+
                        block_1: {
                            xs: "unitCell",        // 1×1
                            sm: "unitCell",
                            md: "doubleWideCell",  // 2×1
                            lg: "doubleWideCell",
                            xl: "doubleWideCell",
                        },
                        // block_2 gets taller on md+
                        block_2: {
                            xs: "unitCell",        // 1×1
                            sm: "unitCell",
                            md: "doubleTallCell",  // 1×2
                            lg: "doubleTallCell",
                            xl: "doubleTallCell",
                        },
                    },
                    transformations: {
                        // xs: stack horizontally
                        xs: [{ stackHorizontally: {} }],
                        sm: [],
                        // md: stack vertically
                        md: [{ stackVertically: {} }],
                        lg: [],
                        xl: [],
                    },
                },
            },
            // no section-level transforms in this test
            transformations: {
                xs: [],
                sm: [],
                md: [],
                lg: [],
                xl: [],
            },
        };

        const diagnostics: DiagnosticEntry[] = [];
        const layoutSectionLocal = layoutTxToSectionLocal(layoutTx, diagnostics);

        expect(diagnostics).toHaveLength(0);

        const { gridBoxes } = layoutSectionLocal.sections.section_1;

        // --- Shapes change per breakpoint as per catalog ---

        // xs: both unitCell => 1×1
        expect(gridBoxes.xs.block_1!.diagonal).toEqual({ x: 1, y: 1 });
        expect(gridBoxes.xs.block_2!.diagonal).toEqual({ x: 1, y: 1 });

        // md: block_1 doubleWide => 2×1, block_2 doubleTall => 1×2
        expect(gridBoxes.md.block_1!.diagonal).toEqual({ x: 2, y: 1 });
        expect(gridBoxes.md.block_2!.diagonal).toEqual({ x: 1, y: 2 });

        // --- Transforms differ per breakpoint ---

        // xs: stackHorizontally → same y, increasing x
        const xs_b1 = gridBoxes.xs.block_1!;
        const xs_b2 = gridBoxes.xs.block_2!;
        expect(xs_b1.origin.y).toBe(xs_b2.origin.y);
        expect(xs_b1.origin.x).toBeLessThan(xs_b2.origin.x);

        // md: stackVertically → same x, increasing y
        const md_b1 = gridBoxes.md.block_1!;
        const md_b2 = gridBoxes.md.block_2!;
        expect(md_b1.origin.x).toBe(md_b2.origin.x);
        expect(md_b1.origin.y).toBeLessThan(md_b2.origin.y);
    });

    test("handles multiple sections with mixed dimensions and different per-bp transforms", () => {
        type SectionId = "section_1" | "section_2" | "section_3";
        type BlockId =
            | "block_1"
            | "block_2"
            | "block_3"
            | "block_4"
            | "block_5";

        const layoutTx: LayoutWithTx<SectionId, BlockId> = {
            sections: {
                section_1: {
                    // 3 blocks, wider shapes
                    boxDimensionIds: {
                        block_1: "unitCell",       // 1×1
                        block_2: "doubleWideCell", // 2×1
                        block_3: "tripleWideCell", // 3×1
                    },
                    transformations: {
                        // xs: row
                        xs: [{ stackHorizontally: {} }],
                        sm: [],
                        // md: column
                        md: [{ stackVertically: {} }],
                        lg: [],
                        xl: [],
                    },
                },
                section_2: {
                    // 3 blocks, taller shapes
                    boxDimensionIds: {
                        block_3: "unitCell",       // 1×1
                        block_4: "doubleTallCell", // 1×2
                        block_5: "tripleTallCell", // 1×3
                    },
                    transformations: {
                        // xs: column
                        xs: [{ stackVertically: {} }],
                        sm: [],
                        // md: row
                        md: [{ stackHorizontally: {} }],
                        lg: [],
                        xl: [],
                    },
                },
                section_3: {
                    // 2 blocks, 5×5 and 10×1
                    boxDimensionIds: {
                        block_1: "5Wide5TallCell", // 5×5
                        block_2: "10WideCell",     // 10×1
                    },
                    transformations: {
                        xs: [],
                        md: [{ stackHorizontally: {} }],
                        sm: [],
                        lg: [],
                        xl: [],
                    },
                },
            },
            // still not using section-level moves in this test
            transformations: {
                xs: [],
                sm: [],
                md: [],
                lg: [],
                xl: [],
            },
        };

        const diagnostics: DiagnosticEntry[] = [];
        const layoutSectionLocal = layoutTxToSectionLocal(layoutTx, diagnostics);

        expect(diagnostics).toHaveLength(0);

        // Helper: extract boxes for a section & bp
        const boxesAt = <S extends SectionId>(
            sectionId: S,
            bp: keyof BPs<unknown>,
        ) => layoutSectionLocal.sections[sectionId].gridBoxes[bp]!;

        // --- section_1: xs row, md column ---

        (["xs", "md"] as const).forEach((bp) => {
            const b = boxesAt("section_1", bp);

            const s1_b1 = b.block_1!;
            const s1_b2 = b.block_2!;
            const s1_b3 = b.block_3!;

            if (bp === "xs") {
                // row: same y, increasing x
                expect(s1_b1.origin.y).toBe(s1_b2.origin.y);
                expect(s1_b2.origin.y).toBe(s1_b3.origin.y);
                expect(s1_b1.origin.x).toBeLessThan(s1_b2.origin.x);
                expect(s1_b2.origin.x).toBeLessThan(s1_b3.origin.x);
            } else if (bp === "md") {
                // column: same x, increasing y
                expect(s1_b1.origin.x).toBe(s1_b2.origin.x);
                expect(s1_b2.origin.x).toBe(s1_b3.origin.x);
                expect(s1_b1.origin.y).toBeLessThan(s1_b2.origin.y);
                expect(s1_b2.origin.y).toBeLessThan(s1_b3.origin.y);
            }
        });

        // --- section_2: xs column, md row ---

        (["xs", "md"] as const).forEach((bp) => {
            const b = boxesAt("section_2", bp);

            const s2_b3 = b.block_3!;
            const s2_b4 = b.block_4!;
            const s2_b5 = b.block_5!;

            if (bp === "xs") {
                // column: same x, increasing y
                expect(s2_b3.origin.x).toBe(s2_b4.origin.x);
                expect(s2_b4.origin.x).toBe(s2_b5.origin.x);
                expect(s2_b3.origin.y).toBeLessThan(s2_b4.origin.y);
                expect(s2_b4.origin.y).toBeLessThan(s2_b5.origin.y);
            } else if (bp === "md") {
                // row: same y, increasing x
                expect(s2_b3.origin.y).toBe(s2_b4.origin.y);
                expect(s2_b4.origin.y).toBe(s2_b5.origin.y);
                expect(s2_b3.origin.x).toBeLessThan(s2_b4.origin.x);
                expect(s2_b4.origin.x).toBeLessThan(s2_b5.origin.x);
            }
        });

        // --- section_3: mixed dimensions + horizontal stack at md ---

        const s3_xs = boxesAt("section_3", "xs");
        const s3_md = boxesAt("section_3", "md");

        const s3_xs_b1 = s3_xs.block_1!;
        const s3_xs_b2 = s3_xs.block_2!;

        // xs: no transforms, both at origin (they may overlap)
        expect(s3_xs_b1.origin).toEqual({ x: 0, y: 0 });
        expect(s3_xs_b2.origin).toEqual({ x: 0, y: 0 });

        const s3_md_b1 = s3_md.block_1!;
        const s3_md_b2 = s3_md.block_2!;

        // md: stacked horizontally → same y, b2 to the right of b1
        expect(s3_md_b1.origin.y).toBe(s3_md_b2.origin.y);
        expect(s3_md_b1.origin.x).toBeLessThan(s3_md_b2.origin.x);

        // also verify diagonals reflect shapes we know
        expect(s3_md_b1.diagonal).toEqual({ x: 5, y: 5 });  // 5Wide5TallCell
        expect(s3_md_b2.diagonal).toEqual({ x: 10, y: 1 }); // 10WideCell
    });

    test("no transforms: layoutTxToSectionLocal behaves like pure getLocalGridBoxes", () => {
        type SectionId = "section_1";
        type BlockId = "block_1" | "block_2" | "block_3";

        const layoutTx: LayoutWithTx<SectionId, BlockId> = {
            sections: {
                section_1: {
                    boxDimensionIds: {
                        block_1: "unitCell",        // 1×1
                        block_2: "doubleWideCell",  // 2×1
                        block_3: "doubleTallCell",  // 1×2
                    },
                    // no box-level transformations
                    transformations: undefined,
                },
            },
            // no section-level transformations
            transformations: undefined,
        };

        const diagnostics: DiagnosticEntry[] = [];

        const layoutSectionLocal = layoutTxToSectionLocal(layoutTx, diagnostics);

        expect(diagnostics).toHaveLength(0);

        const gridBoxes = layoutSectionLocal.sections.section_1.gridBoxes;

        (["xs", "sm", "md", "lg", "xl"] as const).forEach((bp) => {
            const boxes = gridBoxes[bp]!;
            expect(boxes.block_1).toEqual({
                origin: { x: 0, y: 0 },
                diagonal: { x: 1, y: 1 },
                _normalized: "GridBox",
            });
            expect(boxes.block_2).toEqual({
                origin: { x: 0, y: 0 },
                diagonal: { x: 2, y: 1 },
                _normalized: "GridBox",
            });
            expect(boxes.block_3).toEqual({
                origin: { x: 0, y: 0 },
                diagonal: { x: 1, y: 2 },
                _normalized: "GridBox",
            });
        });
    });

    test("per-breakpoint transforms: only some breakpoints are affected", () => {
        type SectionId = "section_1";
        type BlockId = "block_1" | "block_2" | "block_3";

        const layoutTx: LayoutWithTx<SectionId, BlockId> = {
            sections: {
                section_1: {
                    boxDimensionIds: {
                        block_1: "unitCell",
                        block_2: "unitCell",
                        block_3: "unitCell",
                    },
                    transformations: {
                        xs: [{ stackHorizontally: { gap: 1 } }],
                        sm: [],                     // untouched
                        md: [],                     // untouched
                        lg: [{ stackVertically: { gap: 2 } }],
                        xl: [],                     // untouched
                    },
                },
            },
            transformations: {
                xs: [],
                sm: [],
                md: [],
                lg: [],
                xl: [],
            },
        };

        const diagnostics: DiagnosticEntry[] = [];
        const layoutSectionLocal = layoutTxToSectionLocal(layoutTx, diagnostics);

        expect(diagnostics).toHaveLength(0);

        const gridBoxes = layoutSectionLocal.sections.section_1.gridBoxes;

        // xs: row (stackHorizontally)
        {
            const xs = gridBoxes.xs!;
            const b1 = xs.block_1!;
            const b2 = xs.block_2!;
            const b3 = xs.block_3!;

            expect(b1.origin.y).toBe(b2.origin.y);
            expect(b2.origin.y).toBe(b3.origin.y);

            expect(b1.origin.x).toBeLessThan(b2.origin.x);
            expect(b2.origin.x).toBeLessThan(b3.origin.x);
        }

        // lg: column (stackVertically)
        {
            const lg = gridBoxes.lg!;
            const b1 = lg.block_1!;
            const b2 = lg.block_2!;
            const b3 = lg.block_3!;

            expect(b1.origin.x).toBe(b2.origin.x);
            expect(b2.origin.x).toBe(b3.origin.x);

            expect(b1.origin.y).toBeLessThan(b2.origin.y);
            expect(b2.origin.y).toBeLessThan(b3.origin.y);
        }

        // sm / md / xl: untouched, all at origin
        (["sm", "md", "xl"] as const).forEach((bp) => {
            const boxes = gridBoxes[bp]!;
            expect(boxes.block_1!.origin).toEqual({ x: 0, y: 0 });
            expect(boxes.block_2!.origin).toEqual({ x: 0, y: 0 });
            expect(boxes.block_3!.origin).toEqual({ x: 0, y: 0 });
        });
    });

    test("sparse boxDimensionIds: missing shape logs diagnostic and skips block", () => {
        type SectionId = "section_1";
        type BlockId = "block_1" | "block_2";

        const layoutTx: LayoutWithTx<SectionId, BlockId> = {
            sections: {
                section_1: {
                    boxDimensionIds: {
                        block_1: "unitCell",
                        // simulate a missing/invalid shape at runtime

                        block_2: undefined,
                    },
                    transformations: undefined,
                },
            },
            transformations: undefined,
        };

        const diagnostics: DiagnosticEntry[] = [];
        const layoutSectionLocal = layoutTxToSectionLocal(layoutTx, diagnostics);

        // At least one diagnostic for block_2
        expect(diagnostics.length).toBeGreaterThan(0);
        const diagStr = JSON.stringify(diagnostics);
        expect(diagStr).toContain("No box shape found for block ID block_2");

        const gridBoxes = layoutSectionLocal.sections.section_1.gridBoxes;

        // block_1 exists at all breakpoints
        (["xs", "sm", "md", "lg", "xl"] as const).forEach((bp) => {
            const boxes = gridBoxes[bp]!;
            expect(boxes.block_1).toEqual({
                origin: { x: 0, y: 0 },
                diagonal: { x: 1, y: 1 },
                _normalized: "GridBox",
            });
        });

        // block_2 was skipped at all breakpoints
        (["xs", "sm", "md", "lg", "xl"] as const).forEach((bp) => {
            const boxes = gridBoxes[bp]!;
            expect(boxes.block_2).toBeUndefined();
        });
    });

});
