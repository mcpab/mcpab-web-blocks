import { AnyBBEntry } from "../../templates/boxLayoutsCatalog";
import { DefaultTransformations } from "../../templates/buildingBlocks/defaultBPTransformations";
import { BlockIdsFromBBEntry, BoxDimensionIdsAndTx, BoxTransformations, LayoutTxOverrides, LayoutWithTx, SectionsFromBBEntry } from "../boxLayout/boxLayoutTypes";
import { DiagnosticEntry, GRID_ERROR_CODE, makeError } from "../gridErrorShape";

export function typedKeys<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

export function typedSectionKeys<E extends AnyBBEntry>(obj: E): Array<SectionsFromBBEntry<E>> {
    return Object.keys(obj) as Array<SectionsFromBBEntry<E>>;
}
type BBEntryToLayoutWithTxProp<E extends AnyBBEntry> =
    {
        BBentry: E;
        diagnostics: DiagnosticEntry[];
        layoutTxOverrides?: LayoutTxOverrides<E>;
    };

export function bbEntryToLayoutWithTx<E extends AnyBBEntry>(
    { BBentry, diagnostics, layoutTxOverrides }: BBEntryToLayoutWithTxProp<E>
): LayoutWithTx<SectionsFromBBEntry<E>, BlockIdsFromBBEntry<E>> {

    type sectionIDs = SectionsFromBBEntry<E>;
    type blockIDs = BlockIdsFromBBEntry<E>;

    let layoutWithTx: LayoutWithTx<sectionIDs, blockIDs> = {} as LayoutWithTx<sectionIDs, blockIDs>;

    layoutWithTx["sections"] = {} as Record<sectionIDs, BoxDimensionIdsAndTx<blockIDs>>;

    layoutWithTx.transformations = DefaultTransformations;
    // we have defined the object now.
    for (const secID of typedSectionKeys(BBentry)) {
        const v = BBentry[secID];
        if (!v) continue; // (still needed because AnyBBEntry is partial-ish)
        layoutWithTx.sections[secID] = v as BoxDimensionIdsAndTx<BlockIdsFromBBEntry<E>>;

    }

    // we apply overrides if any
    if (layoutTxOverrides) {

        // section-level transformations
        if (layoutTxOverrides.transformations) {
            layoutWithTx.transformations = layoutTxOverrides.transformations;
        }

        for (const secID of typedSectionKeys(BBentry)) {
            if (secID in layoutTxOverrides) {
                // we have an override for this section
                const sectionOverrideTx = layoutTxOverrides[secID];
                if (sectionOverrideTx) {
                    layoutWithTx.sections[secID].transformations = sectionOverrideTx ;
                }
            }
        }

        for (const secID of typedKeys(layoutTxOverrides)) {

            if (secID === "transformations") {
                continue; // already handled
            }
            if (!(secID in layoutWithTx.sections) && layoutTxOverrides[secID]) {

                diagnostics.push(makeError(
                    'bbEntryToLayoutWithTx',
                    GRID_ERROR_CODE.NO_SECTION_ID,
                    `LayoutTxOverrides contains an override for section ID '${String(secID)}' which does not exist in the BB entry.`
                ));
            }

        }

    }

    return layoutWithTx;

}

// const kk = layoutsCatalog['primary20']['page_twoCol_16_4'];

// const hh = <sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>(
//     BBentry: BBEntryToLayoutWithTxProp<sectionIDs, blockIDs>) => { return BBentry };

// const gg = hh({ BBentry: kk, diagnostics: [] });

// const mn: LayoutTxOverrides<typeof kk> = {

//     main: DefaultTransformations,
// }
// const kkk = bbEntryToLayoutWithTx({
//     BBentry: kk, diagnostics: [], layoutTxOverrides: {
//         header: DefaultTransformations,
//         main: {
//             xs: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             sm: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             md: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             lg: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ],
//             xl: [
//                 {
//                     moveBy: {
//                         from: { boxId: 'block_1' },
//                         by: {
//                             x: 100,
//                             y: 200
//                         }
//                     }
//                 }
//             ]
//         }
//     }
// });