import { makeGridBox } from "../../box/gridBoxUtils";
import { DiagnosticEntry } from "../../gridErrorShape";
import { layoutSectionToBounds } from "../layoutSectionToBounds"; // <-- adjust path

import { GridBox } from "../../box/gridBoxTypes";
import { BoxTransformations, LayoutSectionLocal } from "../../boxLayout/boxLayoutTypes";

type BP = "xs" | "sm" | "md" | "lg" | "xl";

const BPS: readonly BP[] = ["xs", "sm", "md", "lg", "xl"] as const;

function mkBps<T>(value: T): Record<BP, T> {
  return {
    xs: value,
    sm: value,
    md: value,
    lg: value,
    xl: value,
  };
}

describe("layoutSectionToBounds", () => {
  test("normal case: computes correct bounding box from multiple boxes", () => {
    type SectionId = "section_1";
    type BlockId = "block_1" | "block_2" | "block_3";

    const b1 = makeGridBox({ x: 0, y: 0 }, { x: 2, y: 1 }); // right=2, bottom=1
    const b2 = makeGridBox({ x: 3, y: 1 }, { x: 1, y: 4 }); // right=4, bottom=5
    const b3 = makeGridBox({ x: -2, y: 2 }, { x: 2, y: 2 }); // right=0, bottom=4

    const layoutSectionLocal: LayoutSectionLocal<SectionId, BlockId> = {
      sections: {
        section_1: {
          gridBoxes: mkBps<Partial<Record<BlockId, GridBox>>>({
            block_1: b1,
            block_2: b2,
            block_3: b3,
          }),
        },
      },
      transformations: mkBps([]) as BoxTransformations<SectionId>,
    };

    const diagnostics: DiagnosticEntry[] = [];
    const bounds = layoutSectionToBounds(layoutSectionLocal, diagnostics);

     const expected = makeGridBox({ x: -2, y: 0 }, { x: 6, y: 5 });

    BPS.forEach((bp) => {
      expect(bounds.boundingBoxes[bp].section_1).toEqual(expected);
    });
  });

  test("missing bp gridBoxes map: returns empty 0×0 bounding box and logs diagnostic", () => {
    type SectionId = "section_1";
    type BlockId = "block_1" | "block_2";

    const layoutSectionLocal: LayoutSectionLocal<SectionId, BlockId> = {
      sections: {
        section_1: {
          gridBoxes: {
            xs: { block_1: makeGridBox({ x: 0, y: 0 }, { x: 1, y: 1 }) },
            sm: { block_1: makeGridBox({ x: 0, y: 0 }, { x: 1, y: 1 }) },
            // md is intentionally missing
            lg: { block_1: makeGridBox({ x: 0, y: 0 }, { x: 1, y: 1 }) },
            xl: { block_1: makeGridBox({ x: 0, y: 0 }, { x: 1, y: 1 }) },
          } as any, // allow missing bp at runtime
        },
      },
      transformations: mkBps([]) as any,
    };

    const diagnostics: DiagnosticEntry[] = [];
    const bounds = layoutSectionToBounds(layoutSectionLocal, diagnostics);

    // md should be the empty bounds
   
    expect(bounds.boundingBoxes.md.section_1).toEqual(
      makeGridBox({ x: 0, y: 0 }, { x: 0, y: 0 }),
    );

    const diagStr = JSON.stringify(diagnostics);
    expect(diagStr).toContain("No boxes found for section section_1 at breakpoint md");
  }); 

  test("empty/all-undefined boxes at bp: returns empty 0×0 bounding box and logs diagnostic", () => {
    type SectionId = "section_1";
    type BlockId = "block_1" | "block_2";

    const layoutSectionLocal: LayoutSectionLocal<SectionId, BlockId> = {
      sections: {
        section_1: {
          gridBoxes: {
            xs: {}, // empty object => foundAnyBox stays false
            sm: {},
            md: {},
            lg: {},
            xl: {},
          } as any,
        },
      },
      transformations: mkBps([]) as any,
    };

    const diagnostics: DiagnosticEntry[] = [];
    const bounds = layoutSectionToBounds(layoutSectionLocal, diagnostics);

    BPS.forEach((bp) => {
      expect(bounds.boundingBoxes[bp].section_1).toEqual(
        makeGridBox({ x: 0, y: 0 }, { x: 0, y: 0 }),
      );
    });

    const diagStr = JSON.stringify(diagnostics);
    expect(diagStr).toContain("No boxes found for section section_1 at breakpoint xs");
  });
});
