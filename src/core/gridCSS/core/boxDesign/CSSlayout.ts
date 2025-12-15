import { SectionIDs, BlocksIDs } from "../../templates/layoutIDs";
import { LayoutSectionBounds, LayoutAbsolute, LayoutSectionLocal } from "../boxLayout/boxLayoutTypes";
import { DiagnosticEntry } from "../gridErrorShape";
import { layoutSectionToBounds } from "./layoutSectionToBounds";

export function layoutSectionBtoAbsolute<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>(
    layoutSectionLocal: LayoutSectionLocal<sectionIDs, blockIDs>, diagnostics: DiagnosticEntry[]): LayoutAbsolute<sectionIDs, blockIDs> {

    const layoutSecBonds: LayoutSectionBounds<sectionIDs, blockIDs> = layoutSectionToBounds(layoutSectionLocal, diagnostics)

    const layoutSecAbs: LayoutAbsolute<sectionIDs, blockIDs> = layoutSectionBtoAbsolute(layoutSecBonds, diagnostics)

    return layoutSecAbs;

}