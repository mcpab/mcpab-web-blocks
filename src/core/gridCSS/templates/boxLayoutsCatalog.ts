import { bbCatalog } from "./buildingBlocks/bbCatalog";

// type PrimaryKeys  = 'header' | 'content' | 'footer' | "row_1" | 'main' | 'row_2' | 'row_3' | 'row_4';

import { BoxesInBBCatalog, getBoxesAndTx } from "./buildingBlocks/bbCatalog";
import { SectionIDs } from "./layoutIDs";

export const layoutsCatalog = {
  /** ✅ Page-wide layouts: each row-like section fits a 20-wide canvas at sm+ */
  primary20: {
    page_band: {
      row_1:  getBoxesAndTx("20WideCell"),
    },

    page_headerContentFooter: {
      header: getBoxesAndTx("20WideCell"),
      content: getBoxesAndTx("20WideCell"),
      footer: getBoxesAndTx("20WideCell"),
    },

    page_twoCol_10_10: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("twoCol_10_10"), // NEW bbCatalog entry
      footer: getBoxesAndTx("20WideCell"),
    },

    page_twoCol_5_15: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("twoCol_5_15"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_twoCol_15_5: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("twoCol_15_5"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_twoCol_4_16: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("twoCol_4_16"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_twoCol_16_4: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("twoCol_16_4"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_twoCol_8_12: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("twoCol_8_12"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_twoCol_12_8: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("twoCol_12_8"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_threeCol_5_10_5: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("threeCol_5_10_5"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_docs_3_14_3: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("threeCol_3_14_3"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_docs_4_12_4: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("threeCol_4_12_4"), // NEW
      footer: getBoxesAndTx("20WideCell"),
    },

    page_fourCol_5_5_5_5: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("four5Wide"), // exists in your list
      footer: getBoxesAndTx("20WideCell"),
    },

    page_dashboard_kpis_then_content: {
      header: getBoxesAndTx("20WideCell"),
      main: getBoxesAndTx("four5Wide"), // 4 KPIs
      content: getBoxesAndTx("twoCol_8_12"), // chart + panel
      footer: getBoxesAndTx("20WideCell"),
    }  
  } satisfies  Record<string,Partial<Record<SectionIDs, BoxesInBBCatalog >>>,

  /** 🔧 Component and experimental layouts: not constrained to 20-wide */
  secondary: {
    // your existing “classic” ones can live here unchanged:
    singleCell: {
      row_1: getBoxesAndTx("unitCell"),
    },

    twoCells: {
      row_1: getBoxesAndTx("twoUnitCells"),
    },

    sideBarAndContent: {
      row_1: getBoxesAndTx("unitCellWith5Wide"),
    },

    footerHeader5Columns: {
      header: getBoxesAndTx("unitCellWith5Wide"),
      content: getBoxesAndTx("fiveUnitCells"),
      footer: getBoxesAndTx("unitCellWith5Wide"),
    },

    footerHeader3Columns: {
      header: getBoxesAndTx("tripleWideCell"),
      content: getBoxesAndTx("threeUnitCells"),
      footer: getBoxesAndTx("tripleWideCell"),
    },

    header2colFooter: {
      header: getBoxesAndTx("unitCell"),
      content: getBoxesAndTx("twoUnitCells"),
      footer: getBoxesAndTx("unitCell"),
    },

    header3colFooter: {
      header: getBoxesAndTx("unitCell"),
      content: getBoxesAndTx("threeUnitCells"),
      footer: getBoxesAndTx("unitCell"),
    },

    twoRowsOf3: {
      row_1: getBoxesAndTx("threeUnitCells"),
      row_2: getBoxesAndTx("threeUnitCells"),
    },

    twoRowsOf6: {
      row_1: getBoxesAndTx("sixUnitCells"),
      row_2: getBoxesAndTx("sixUnitCells"),
    },

    mixedDensityShowcase: {
      header: getBoxesAndTx("unitCell"),
      row_1: getBoxesAndTx("twoUnitCells"),
      row_2: getBoxesAndTx("threeUnitCells"),
      row_3: getBoxesAndTx("fourUnitCells"),
      row_4: getBoxesAndTx("fiveUnitCells"),
      footer: getBoxesAndTx("sixUnitCells"),
    },

    // keep your “featured” / “marketing” composites here:
    featuredRow4: {
      row_1:getBoxesAndTx("fourUnitOneDoubleWide"),
    },
    featuredRow5: {
      row_1: getBoxesAndTx("fiveUnitOneDoubleWide"),
    },
    featuredRow5Big: {
      row_1: getBoxesAndTx("fiveUnitOneTripleWide"),
    },
  }  satisfies  Record<string,Partial<Record<SectionIDs, BoxesInBBCatalog >>>,
} as const satisfies  Record<string,Record<string,Partial<Record<SectionIDs, BoxesInBBCatalog>>>> ;

type LayoutsCatalog = typeof layoutsCatalog['primary20'] & typeof layoutsCatalog['secondary'];

export type Primary20Catalog = typeof layoutsCatalog['primary20'];
export type Primary20CatalogEntries = Primary20Catalog[keyof  Primary20Catalog];
 

export type SecondaryCatalog = typeof layoutsCatalog['secondary'];
export type SecondaryCatalogEntries = SecondaryCatalog[keyof  SecondaryCatalog];

export type LayoutsCatalogEntries = Primary20CatalogEntries | SecondaryCatalogEntries;

// const kk = getBoxesAndTx("fourUnitOneDoubleWide");
// const kl = bbCatalog['fourUnitOneDoubleWide'].boxDimensionIdsAndTx;


// const kk = bbCatalog['fiveUnitCells'].boxDimensionIdsAndTx.transformations;
// const lp = layoutsCatalog['footerHeader3Columns'];

// type lq = typeof lp['header']['boxes'];

// type LP = typeof lp;

// type ll = {
//     [sectionId in keyof LP]: {  
//         [boxId in keyof LP[sectionId]['boxes']['boxDimensionIds']] : string
//     }
// }

// import { singleCells } from "./buildingBlocks/singleCells";

// const jj = singleCells['unitCell'];