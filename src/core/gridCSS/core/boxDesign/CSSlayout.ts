import { AnyBBEntry } from "../../templates/boxLayoutsCatalog";
import { BlocksIDs, SectionIDs } from "../../templates/layoutIDs";
import { BlockIdsFromBBEntry, BoxDimensionIdsAndTx, LayoutAbsolute, LayoutSectionBounds, LayoutTxOverrides, SectionsFromBBEntry } from "../boxLayout/boxLayoutTypes";
import { BREAKPOINTS } from "../breakpoints";
import { DiagnosticEntry, GRID_ERROR_CODE, makeError, makeWarning } from "../gridErrorShape";
import { CSSCoordinates } from "../gridNodeTypes";
import { bbEntryToLayoutWithTx } from "./bbEntryToLayoutWithTx";
import { layoutSectionBtoAbsolute } from "./layoutSectionBtoAbsolute";
import { layoutSectionToBounds } from "./layoutSectionToBounds";
import { layoutTxToSectionLocal } from "./layoutTxToSectionLocal";

type GridDiagnostic = {
    overlapPolicy?: "allow" | "warn" | "error";
    breakpoints?: readonly (typeof BREAKPOINTS)[number][];
}

type CSSLayoutProps<E extends AnyBBEntry>  =
    {
         BBentry: E;
        diagnostics: DiagnosticEntry[];
        layoutTxOverrides?: LayoutTxOverrides<E>;
        gridDiagnostic?: GridDiagnostic;
    };
 

export function CSSLayout<E extends AnyBBEntry>({
    BBentry, diagnostics, layoutTxOverrides, gridDiagnostic = { overlapPolicy: "allow", breakpoints: BREAKPOINTS } }: CSSLayoutProps<E>): 
    LayoutAbsolute<SectionsFromBBEntry<E>, BlockIdsFromBBEntry<E>> {

    const layoutWithTx = bbEntryToLayoutWithTx({ BBentry, diagnostics, layoutTxOverrides });

    const layoutSectionLocal = layoutTxToSectionLocal<SectionsFromBBEntry<E>, BlockIdsFromBBEntry<E>>(layoutWithTx, diagnostics);

    const layoutSecBonds: LayoutSectionBounds<SectionsFromBBEntry<E>, BlockIdsFromBBEntry<E>> = layoutSectionToBounds(layoutSectionLocal, diagnostics)

    const layoutSecAbs: LayoutAbsolute<SectionsFromBBEntry<E>, BlockIdsFromBBEntry<E>> = layoutSectionBtoAbsolute(layoutSecBonds, diagnostics)

    const overlapPolicy = gridDiagnostic.overlapPolicy || "allow";
    const breakpoints = gridDiagnostic.breakpoints || BREAKPOINTS;

    // we check overlap of sections boxes if needed
    if (overlapPolicy !== "allow") {
        checkSectionsOverlap<SectionsFromBBEntry<E>, BlockIdsFromBBEntry<E>>(
            layoutSecAbs,
            diagnostics,
            overlapPolicy,
            breakpoints
        );
    }

    return layoutSecAbs;

}

type OverlapRect = {
    colStart: number;
    colEnd: number;
    rowStart: number;
    rowEnd: number;
};

type OverlapRef<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> = {
    sectionId: sectionIDs;
    boxId: blockIDs;
    rect: OverlapRect;
};

type OverlapDetails<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> = {
    bp: (typeof BREAKPOINTS)[number];
    a: OverlapRef<sectionIDs, blockIDs>;
    b: OverlapRef<sectionIDs, blockIDs>;
    pairKey: string;
};

type BoxWithMeta<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> = {
    id: string;
    bp: (typeof BREAKPOINTS)[number];
    sectionId: sectionIDs;
    boxId: blockIDs;
    coords: CSSCoordinates;
};

export function checkSectionsOverlap<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>(
    layoutAbsolute: LayoutAbsolute<sectionIDs, blockIDs>,
    diagnostics: DiagnosticEntry[],
    overlapPolicy: "warn" | "error",
    breakpoints: readonly (typeof BREAKPOINTS)[number][]
) {
    breakpoints.forEach((bp) => {
        const boxesByBp: BoxWithMeta<sectionIDs, blockIDs>[] = [];

        for (const sectionId in layoutAbsolute.sections) {
            const sectionBoxes = layoutAbsolute.sections[sectionId as sectionIDs].coordinates[bp];
            if (!sectionBoxes) continue;

            for (const boxId in sectionBoxes) {
                const crd = sectionBoxes[boxId as blockIDs];
                if (!crd) continue;

                const sId = sectionId as sectionIDs;
                const bId = boxId as blockIDs;

                boxesByBp.push({
                    id: `${bp}::${sId}::${bId}`,
                    bp,
                    sectionId: sId,
                    boxId: bId,
                    coords: crd as CSSCoordinates,
                });
            }
        }

        for (let i = 0; i < boxesByBp.length; i++) {
            const a = boxesByBp[i];

            for (let j = i + 1; j < boxesByBp.length; j++) {
                const b = boxesByBp[j];

                const overlap =
                    a.coords.gridColumnStart < b.coords.gridColumnEnd &&
                    b.coords.gridColumnStart < a.coords.gridColumnEnd &&
                    a.coords.gridRowStart < b.coords.gridRowEnd &&
                    b.coords.gridRowStart < a.coords.gridRowEnd;

                if (!overlap) continue;

                const details: OverlapDetails<sectionIDs, blockIDs> = {
                    bp,
                    a: {
                        sectionId: a.sectionId,
                        boxId: a.boxId,
                        rect: {
                            colStart: a.coords.gridColumnStart,
                            colEnd: a.coords.gridColumnEnd,
                            rowStart: a.coords.gridRowStart,
                            rowEnd: a.coords.gridRowEnd,
                        },
                    },
                    b: {
                        sectionId: b.sectionId,
                        boxId: b.boxId,
                        rect: {
                            colStart: b.coords.gridColumnStart,
                            colEnd: b.coords.gridColumnEnd,
                            rowStart: b.coords.gridRowStart,
                            rowEnd: b.coords.gridRowEnd,
                        },
                    },
                    pairKey: `${a.id}__${b.id}`,
                };

                const message = `Boxes ${a.id} and ${b.id} are overlapping.`;

                if (overlapPolicy === "warn") {
                    diagnostics.push(
                        makeWarning("CSSLayout", GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED, message, { details })
                    );
                } else {
                    diagnostics.push(
                        makeError("CSSLayout", GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED, message, { details })
                    );
                }
            }
        }
    });
}
