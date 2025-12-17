// Put these in a file like src/core/gridCSS/boxDesign/catalog/pagePartitions20.ts
// and spread them into bbCatalog like you do with singleCells/twoCells/...

import { defineEntry } from "./bbCatalogTypes";
import { DefaultTransformations } from "./defaultBPTransformations";

export const pagePartitions20 = {
  twoCol_10_10: defineEntry({
    description: "Two columns: 10 + 10 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "10WideCell", block_2: "10WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  twoCol_5_15: defineEntry({
    description: "Two columns: 5 + 15 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "5WideCell", block_2: "15WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  twoCol_15_5: defineEntry({
    description: "Two columns: 15 + 5 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "15WideCell", block_2: "5WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  twoCol_4_16: defineEntry({
    description: "Two columns: 4 + 16 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "4WideCell", block_2: "16WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  twoCol_16_4: defineEntry({
    description: "Two columns: 16 + 4 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "16WideCell", block_2: "4WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  twoCol_8_12: defineEntry({
    description: "Two columns: 8 + 12 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "8WideCell", block_2: "12WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  twoCol_12_8: defineEntry({
    description: "Two columns: 12 + 8 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "12WideCell", block_2: "8WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  threeCol_5_10_5: defineEntry({
    description: "Three columns: 5 + 10 + 5 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "5WideCell", block_2: "10WideCell", block_3: "5WideCell" },
      transformations: DefaultTransformations,
    },
  }),

  threeCol_3_14_3: defineEntry({
    description: "Docs columns: 3 + 14 + 3 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "tripleWideCell", block_2: "14WideCell", block_3: "tripleWideCell" },
      transformations: DefaultTransformations,
    },
  }),

  threeCol_4_12_4: defineEntry({
    description: "Docs columns: 4 + 12 + 4 (sum=20)",
    boxDimensionIdsAndTx: {
      boxDimensionIds: { block_1: "4WideCell", block_2: "12WideCell", block_3: "4WideCell" },
      transformations: DefaultTransformations,
    },
  }),
} as const;
