import { bbCatalog } from "./buildingBlocks/bbCatalog";

type PrimaryKeys  = 'header' | 'content' | 'footer' | "row_1" | 'main' | 'row_2' | 'row_3' | 'row_4';

import { BoxesInBBCatalog } from "./buildingBlocks/bbCatalog";

export const layoutsCatalog = {
  /** ✅ Page-wide layouts: each row-like section fits a 20-wide canvas at sm+ */
  primary20: {
    page_band: {
      row_1: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_headerContentFooter: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      content: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_twoCol_10_10: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["twoCol_10_10"].boxDimensionIdsAndTx }, // NEW bbCatalog entry
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_twoCol_5_15: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["twoCol_5_15"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_twoCol_15_5: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["twoCol_15_5"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_twoCol_4_16: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["twoCol_4_16"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_twoCol_16_4: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["twoCol_16_4"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_twoCol_8_12: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["twoCol_8_12"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_twoCol_12_8: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["twoCol_12_8"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_threeCol_5_10_5: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["threeCol_5_10_5"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_docs_3_14_3: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["threeCol_3_14_3"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_docs_4_12_4: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["threeCol_4_12_4"].boxDimensionIdsAndTx }, // NEW
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_fourCol_5_5_5_5: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["four5Wide"].boxDimensionIdsAndTx }, // exists in your list
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    },

    page_dashboard_kpis_then_content: {
      header: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
      main: { boxes: bbCatalog["four5Wide"].boxDimensionIdsAndTx }, // 4 KPIs
      content: { boxes: bbCatalog["twoCol_8_12"].boxDimensionIdsAndTx }, // chart + panel
      footer: { boxes: bbCatalog["20WideCell"].boxDimensionIdsAndTx },
    }  
  } satisfies  Record<string,Partial<Record<PrimaryKeys, { boxes:BoxesInBBCatalog }>>>,

  /** 🔧 Component and experimental layouts: not constrained to 20-wide */
  secondary: {
    // your existing “classic” ones can live here unchanged:
    singleCell: {
      row_1: { boxes: bbCatalog["unitCell"].boxDimensionIdsAndTx },
    },

    twoCells: {
      row_1: { boxes: bbCatalog["twoUnitCells"].boxDimensionIdsAndTx },
    },

    sideBarAndContent: {
      row_1: { boxes: bbCatalog["unitCellWith5Wide"].boxDimensionIdsAndTx },
    },

    footerHeader5Columns: {
      header: { boxes: bbCatalog["unitCellWith5Wide"].boxDimensionIdsAndTx },
      content: { boxes: bbCatalog["fiveUnitCells"].boxDimensionIdsAndTx },
      footer: { boxes: bbCatalog["unitCellWith5Wide"].boxDimensionIdsAndTx },
    },

    footerHeader3Columns: {
      header: { boxes: bbCatalog["tripleWideCell"].boxDimensionIdsAndTx },
      content: { boxes: bbCatalog["threeUnitCells"].boxDimensionIdsAndTx },
      footer: { boxes: bbCatalog["tripleWideCell"].boxDimensionIdsAndTx },
    },

    header2colFooter: {
      header: { boxes: bbCatalog["unitCell"].boxDimensionIdsAndTx },
      content: { boxes: bbCatalog["twoUnitCells"].boxDimensionIdsAndTx },
      footer: { boxes: bbCatalog["unitCell"].boxDimensionIdsAndTx },
    },

    header3colFooter: {
      header: { boxes: bbCatalog["unitCell"].boxDimensionIdsAndTx },
      content: { boxes: bbCatalog["threeUnitCells"].boxDimensionIdsAndTx },
      footer: { boxes: bbCatalog["unitCell"].boxDimensionIdsAndTx },
    },

    twoRowsOf3: {
      row_1: { boxes: bbCatalog["threeUnitCells"].boxDimensionIdsAndTx },
      row_2: { boxes: bbCatalog["threeUnitCells"].boxDimensionIdsAndTx },
    },

    twoRowsOf6: {
      row_1: { boxes: bbCatalog["sixUnitCells"].boxDimensionIdsAndTx },
      row_2: { boxes: bbCatalog["sixUnitCells"].boxDimensionIdsAndTx },
    },

    mixedDensityShowcase: {
      header: { boxes: bbCatalog["unitCell"].boxDimensionIdsAndTx },
      row_1: { boxes: bbCatalog["twoUnitCells"].boxDimensionIdsAndTx },
      row_2: { boxes: bbCatalog["threeUnitCells"].boxDimensionIdsAndTx },
      row_3: { boxes: bbCatalog["fourUnitCells"].boxDimensionIdsAndTx },
      row_4: { boxes: bbCatalog["fiveUnitCells"].boxDimensionIdsAndTx },
      footer: { boxes: bbCatalog["sixUnitCells"].boxDimensionIdsAndTx },
    },

    // keep your “featured” / “marketing” composites here:
    featuredRow4: {
      row_1: { boxes: bbCatalog["fourUnitOneDoubleWide"].boxDimensionIdsAndTx },
    },
    featuredRow5: {
      row_1: { boxes: bbCatalog["fiveUnitOneDoubleWide"].boxDimensionIdsAndTx },
    },
    featuredRow5Big: {
      row_1: { boxes: bbCatalog["fiveUnitOneTripleWide"].boxDimensionIdsAndTx },
    },
  }  satisfies  Record<string,Partial<Record<PrimaryKeys, { boxes:BoxesInBBCatalog }>>>,
} as const satisfies  Record<string,Record<string,Partial<Record<PrimaryKeys, { boxes:BoxesInBBCatalog }>>>> ;

type LayoutsCatalog = typeof layoutsCatalog['primary20'] & typeof layoutsCatalog['secondary'];

export type LayoutsCatalogEntries = LayoutsCatalog[keyof LayoutsCatalog];

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