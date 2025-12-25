
// type PrimaryKeys  = 'header' | 'content' | 'footer' | "row_1" | 'main' | 'row_2' | 'row_3' | 'row_4';

import { BoxDimensionIdsAndTx, BoxTransformations, LayoutWithTx } from "../core/boxLayout/boxLayoutTypes";
import { getBoxesAndTx } from "./buildingBlocks/bbCatalog";
import { DefaultTransformationsResponsiveColumns } from "./buildingBlocks/defaultBPTransformations";
import { BlocksIDs, SectionIDs } from "./layoutIDs";

// type BBValue = BoxesInBBCatalog;
// export type AnyBBEntry = Partial<Record<SectionIDs, BBValue>>;
// Given a single section payload, infer its block ids from boxDimensionIds keys
type BlocksFromSectionValue<V> =
  V extends { boxDimensionIds: infer BD }
  ? (keyof BD & BlocksIDs)
  : never;

// Given the whole sections object, infer all sections + all blocks used anywhere
type InferLayoutIdsFromSections<S> = {
  sectionIDs: keyof S & SectionIDs;
  blockIDs: {
    [K in keyof S]: BlocksFromSectionValue<S[K]>;
  }[keyof S];
};

// The actual helper: you pass the literal, it returns the same value,
// but typed as LayoutWithTx<inferredSectionIDs, inferredBlockIDs>
export function defineLayout<
  S extends Record<string, BoxDimensionIdsAndTx<any>> // keep generic; we refine below
>(
  layout: { sections: S; transformations?: BoxTransformations<any> }
): LayoutWithTx<
  InferLayoutIdsFromSections<S>["sectionIDs"],
  InferLayoutIdsFromSections<S>["blockIDs"]
> {
  return layout as any;
}

export const layoutsCatalog = {
  /** ✅ Page-wide layouts: each row-like section fits a 20-wide canvas at sm+ */
  primary20: {
    page_band: defineLayout({
      sections: { row_1: getBoxesAndTx("20WideCell") },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_headerContentFooter: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        content: getBoxesAndTx("20WideCell"),
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_twoCol_10_10: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("twoCol_10_10"), // NEW bbCatalog entry
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_twoCol_5_15: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("twoCol_5_15"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_twoCol_15_5: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("twoCol_15_5"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_twoCol_4_16: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("twoCol_4_16"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_twoCol_16_4: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("twoCol_16_4"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_twoCol_8_12: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("twoCol_8_12"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_twoCol_12_8: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("twoCol_12_8"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_threeCol_5_10_5: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("threeCol_5_10_5"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_docs_3_14_3: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("threeCol_3_14_3"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_docs_4_12_4: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("threeCol_4_12_4"), // NEW
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_fourCol_5_5_5_5: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("four5Wide"), // exists in your list
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    page_dashboard_kpis_then_content: defineLayout({
      sections: {
        header: getBoxesAndTx("20WideCell"),
        main: getBoxesAndTx("four5Wide"), // 4 KPIs
        content: getBoxesAndTx("twoCol_8_12"), // chart + panel
        footer: getBoxesAndTx("20WideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),
  },

  /** 🔧 Component and experimental layouts: not constrained to 20-wide */
  secondary: {
    // your existing “classic” ones can live here unchanged:
    singleCell: defineLayout({
      sections: {
        row_1: getBoxesAndTx("unitCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    twoCells: defineLayout({
      sections: {
        row_1: getBoxesAndTx("twoUnitCells"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    sideBarAndContent: defineLayout({
      sections: {
        row_1: getBoxesAndTx("unitCellWith5Wide"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    footerHeader5Columns: defineLayout({
      sections: {
        header: getBoxesAndTx("unitCellWith5Wide"),
        content: getBoxesAndTx("fiveUnitCells"),
        footer: getBoxesAndTx("unitCellWith5Wide"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    footerHeader3Columns: defineLayout({
      sections: {
        header: getBoxesAndTx("tripleWideCell"),
        content: getBoxesAndTx("threeUnitCells"),
        footer: getBoxesAndTx("tripleWideCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    header2colFooter: defineLayout({
      sections: {
        header: getBoxesAndTx("unitCell"),
        content: getBoxesAndTx("twoUnitCells"),
        footer: getBoxesAndTx("unitCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    header3colFooter: defineLayout({
      sections: {
        header: getBoxesAndTx("unitCell"),
        content: getBoxesAndTx("threeUnitCells"),
        footer: getBoxesAndTx("unitCell"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    twoRowsOf3: defineLayout({
      sections: {
        row_1: getBoxesAndTx("threeUnitCells"),
        row_2: getBoxesAndTx("threeUnitCells"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    twoRowsOf6: defineLayout({
      sections: {
        row_1: getBoxesAndTx("sixUnitCells"),
        row_2: getBoxesAndTx("sixUnitCells"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    mixedDensityShowcase: defineLayout({
      sections: {
        header: getBoxesAndTx("unitCell"),
        row_1: getBoxesAndTx("twoUnitCells"),
        row_2: getBoxesAndTx("threeUnitCells"),
        row_3: getBoxesAndTx("fourUnitCells"),
        row_4: getBoxesAndTx("fiveUnitCells"),
        footer: getBoxesAndTx("sixUnitCells"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),

    // keep your “featured” / “marketing” composites here:
    featuredRow4: defineLayout({
      sections: {
        row_1: getBoxesAndTx("fourUnitOneDoubleWide"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),
    featuredRow5: defineLayout({
      sections: {
        row_1: getBoxesAndTx("fiveUnitOneDoubleWide"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),
    featuredRow5Big: defineLayout({
      sections: {
        row_1: getBoxesAndTx("fiveUnitOneTripleWide"),
      },
      transformations: DefaultTransformationsResponsiveColumns
    }),
  },
} as const;

export type Primary20Catalog = typeof layoutsCatalog['primary20'];
export type Primary20CatalogEntries = Primary20Catalog[keyof Primary20Catalog];


export type SecondaryCatalog = typeof layoutsCatalog['secondary'];
export type SecondaryCatalogEntries = SecondaryCatalog[keyof SecondaryCatalog];

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