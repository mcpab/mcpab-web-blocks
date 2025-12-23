import { layoutsCatalog, LayoutsCatalogEntries } from "../../templates/boxLayoutsCatalog";
import { BoxesInBBCatalog } from "../../templates/buildingBlocks/bbCatalog";
import { SectionIDs, BlocksIDs } from "../../templates/layoutIDs";
import { BoxDimensionIdsAndTx, LayoutTxOverrides, LayoutWithTx } from "../boxLayout/boxLayoutTypes";
import { DiagnosticEntry } from "../gridErrorShape";
import { CSSLayoutProps } from "./CSSlayout"


const kk = layoutsCatalog['primary20']['page_twoCol_16_4'];

type BBEntryToLayoutWithTxProp<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> =
{
    BBentry: Record<sectionIDs,BoxDimensionIdsAndTx<blockIDs>>;    
};

const hh = <sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>(
    BBentry:BBEntryToLayoutWithTxProp<sectionIDs,blockIDs> ) => {return BBentry};

const gg = hh({BBentry:kk});

export function bbEntryToLayoutWithTx<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>(
    { BBentry, diagnostics, layoutTxOverrides}: BBEntryToLayoutWithTxProp<E> 
) : LayoutWithTx<sectionIDs,blockIDs> {

    let layoutWithTx: LayoutWithTx<sectionIDs,blockIDs> = {} as LayoutWithTx<sectionIDs,blockIDs>;

    layoutWithTx["sections"] = {} as Record<sectionIDs, BoxDimensionIdsAndTx<blockIDs>>;

    for( const secID in BBentry ) {

        layoutWithTx.sections[secID as sectionIDs] = 



    }

    return layoutWithTx;



}

