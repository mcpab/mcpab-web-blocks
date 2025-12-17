import { describe, it, expect } from "@jest/globals";
import { checkSectionsOverlap } from "../../core/boxDesign/CSSlayout";
import { LayoutAbsolute } from "../../core/boxLayout/boxLayoutTypes";
import { BREAKPOINTS, BPs } from "../../core/breakpoints";
import { DiagnosticEntry, GRID_ERROR_CODE } from "../../core/gridErrorShape";
import { CSSCoordinates } from "../../core/gridNodeTypes";
import { SectionIDs, BlocksIDs } from "../../templates/layoutIDs";
import { bbCatalog } from "../../templates/buildingBlocks/bbCatalog";




type BP = (typeof BREAKPOINTS)[number];

const rect = (c1: number, c2: number, r1: number, r2: number): CSSCoordinates => ({
    gridColumnStart: c1,
    gridColumnEnd: c2,
    gridRowStart: r1,
    gridRowEnd: r2,
});

const bps = <T,>(v: T): BPs<T> =>
    ({ xs: v, sm: v, md: v, lg: v, xl: v } as any);

function makeLayoutAbsolute<
    S extends SectionIDs,
    B extends BlocksIDs
>(sections: Partial<Record<S, Partial<Record<BP, Partial<Record<B, CSSCoordinates>>>>>>) {
    const layout: LayoutAbsolute<S, B> = {
        gridDimensions: { rows: bps(12), columns: bps(12) },
        sections: {} as any,
    };

    const allBps: BP[] = ["xs", "sm", "md", "lg", "xl"];

    for (const sectionId of Object.keys(sections) as S[]) {
        const perBp = sections[sectionId] ?? {};
        layout.sections[sectionId] = {
            coordinates: {
                xs: perBp.xs ?? {},
                sm: perBp.sm ?? {},
                md: perBp.md ?? {},
                lg: perBp.lg ?? {},
                xl: perBp.xl ?? {},
            } as any,
        };
    }

    return layout;
}

function findOverlapDiagnostics(diags: DiagnosticEntry[]) {
    return diags.filter((d: any) => d?.issue?.code === GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED);
}

describe("checkSectionsOverlap", () => {
    it("warns when overlapPolicy='warn' and two boxes overlap at the same breakpoint", () => {
        // Use section IDs that exist in your SectionIDs union
        type S = Extract<SectionIDs, "header" | "content">;
        type B = Extract<BlocksIDs, "block_1" | "block_2">;

        const layout = makeLayoutAbsolute<S, B>({
            header: {
                xs: {
                    block_1: rect(1, 4, 1, 3),
                },
            },
            content: {
                xs: {
                    block_2: rect(3, 6, 2, 5), // overlaps with header/block_1
                },
            },
        });

console.log(Object.keys(bbCatalog).sort().join("\n"));
        const diagnostics: DiagnosticEntry[] = [];
        checkSectionsOverlap(layout, diagnostics, "warn", ["xs"]);
        expect(diagnostics.length).toBeGreaterThan(0);
        console.log(diagnostics);

        const overlaps = findOverlapDiagnostics(diagnostics);
        expect(overlaps).toHaveLength(1);

        const entry: any = overlaps[0];
        expect(entry.issue.code).toBe(GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED);
        expect(entry.issue.message).toContain("overlapping");
        expect(entry.severity).toBe("warning"); // in warn tests

        const details = (entry as any).issue.details;
        expect(details).toBeTruthy();
        expect(details.bp).toBe("xs");
        expect(details.pairKey).toContain("xs::");
        expect(details.a.rect.colStart).toBe(1);
        expect(details.b.rect.colStart).toBe(3);
    });

    it("errors when overlapPolicy='error' and two boxes overlap at the same breakpoint", () => {
        type S = Extract<SectionIDs, "header">;
        type B = Extract<BlocksIDs, "block_1" | "block_2">;

        const layout = makeLayoutAbsolute<S, B>({
            header: {
                xs: {
                    block_1: rect(1, 3, 1, 3),
                    block_2: rect(2, 4, 2, 5), // overlaps
                },
            },
        });

        const diagnostics: DiagnosticEntry[] = [];
        checkSectionsOverlap(layout, diagnostics, "error", ["xs"]);

        const overlaps = findOverlapDiagnostics(diagnostics);
        expect(overlaps).toHaveLength(1);

        const entry: any = overlaps[0];
        expect(entry.severity).toBe("error");
        // If you store severity/level, assert it here.
    });

    it("does NOT report overlap when boxes only touch edges (end === start)", () => {
        type S = Extract<SectionIDs, "header">;
        type B = Extract<BlocksIDs, "block_1" | "block_2">;

        const layout = makeLayoutAbsolute<S, B>({
            header: {
                xs: {
                    block_1: rect(1, 3, 1, 3), // cols [1,3)
                    block_2: rect(3, 5, 1, 3), // cols [3,5) touches only
                },
            },
        });

        const diagnostics: DiagnosticEntry[] = [];
        checkSectionsOverlap(layout, diagnostics, "warn", ["xs"]);

        expect(findOverlapDiagnostics(diagnostics)).toHaveLength(0);
    });

    it("checks overlaps per-breakpoint only (overlap at xs, no overlap at md => 1 diagnostic)", () => {
        type S = Extract<SectionIDs, "header">;
        type B = Extract<BlocksIDs, "block_1" | "block_2">;

        const layout = makeLayoutAbsolute<S, B>({
            header: {
                xs: {
                    block_1: rect(1, 3, 1, 3),
                    block_2: rect(2, 4, 2, 4), // overlaps at xs
                },
                md: {
                    block_1: rect(1, 3, 1, 3),
                    block_2: rect(3, 5, 1, 3), // no overlap at md
                },
            },
        });

        const diagnostics: DiagnosticEntry[] = [];
        checkSectionsOverlap(layout, diagnostics, "warn", ["xs", "md"]);

        const overlaps = findOverlapDiagnostics(diagnostics);
        expect(overlaps).toHaveLength(1);
const details = (overlaps[0] as any).issue.details;
expect(details.bp).toBe("xs"); 
    });

    it("details rects match the source coords", () => {
        type S = Extract<SectionIDs, "header" | "footer">;
        type B = Extract<BlocksIDs, "block_1" | "block_2">;

        const a = rect(1, 5, 1, 2);
        const b = rect(4, 6, 1, 3);

        const layout = makeLayoutAbsolute<S, B>({
            header: { lg: { block_1: a } },
            footer: { lg: { block_2: b } },
        });

        const diagnostics: DiagnosticEntry[] = [];
        checkSectionsOverlap(layout, diagnostics, "warn", ["lg"]);

        const overlaps = findOverlapDiagnostics(diagnostics);
        expect(overlaps).toHaveLength(1);

        const entry: any = overlaps[0];
        const details = (entry as any).issue.details;

        expect(details.bp).toBe("lg");
        expect(details.a.rect).toEqual({
            colStart: 1,
            colEnd: 5,
            rowStart: 1,
            rowEnd: 2,
        });
        expect(details.b.rect).toEqual({
            colStart: 4,
            colEnd: 6,
            rowStart: 1,
            rowEnd: 3,
        });
    });
});