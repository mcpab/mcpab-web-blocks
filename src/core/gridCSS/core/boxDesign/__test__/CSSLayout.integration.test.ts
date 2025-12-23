// CSSLayout.integration.test.ts

import { layoutsCatalog } from "../../../templates/boxLayoutsCatalog";
import { LayoutTxOverrides } from "../../boxLayout/boxLayoutTypes";
import { BREAKPOINTS } from "../../breakpoints";
import { DiagnosticEntry, GRID_ERROR_CODE } from "../../gridErrorShape";
import { CSSCoordinates } from "../../gridNodeTypes";
import { CSSLayout } from "../CSSlayout";

 
// ---- helpers (keep them in the test file like you do elsewhere) ----

const findByCode = (diags: DiagnosticEntry[], code: string) =>
  diags.filter((d: any) => d?.issue?.code === code);

function assertCoordsValid(coords: CSSCoordinates) {
  expect(coords.gridColumnStart).toBeGreaterThanOrEqual(1);
  expect(coords.gridRowStart).toBeGreaterThanOrEqual(1);
  expect(coords.gridColumnEnd).toBeGreaterThan(coords.gridColumnStart);
  expect(coords.gridRowEnd).toBeGreaterThan(coords.gridRowStart);
}

 

describe("CSSLayout (integration)", () => {
  test("produces LayoutAbsolute with valid coords for primary20.page_twoCol_16_4 (no overrides)", () => {
    const entry = layoutsCatalog.primary20.page_twoCol_16_4;
    const BBentry = layoutsCatalog.primary20.page_twoCol_16_4;

    const diagnostics: DiagnosticEntry[] = [];
    const abs = CSSLayout({
      BBentry,
      diagnostics,
      gridDiagnostic: { overlapPolicy: "allow", breakpoints: BREAKPOINTS },
    });

    // pipeline should be clean for a normal catalog entry
    expect(findByCode(diagnostics, GRID_ERROR_CODE.NO_SECTION_ID)).toHaveLength(0);

    // verify coords exist and are sane
    for (const bp of BREAKPOINTS) {
      for (const sectionId in abs.sections) {
        const section = abs.sections[sectionId as keyof typeof abs.sections];
        const coordsAtBp = section.coordinates[bp];
        expect(coordsAtBp).toBeDefined();

        for (const boxId in coordsAtBp) {
          const c = coordsAtBp[boxId as keyof typeof coordsAtBp];
          if (!c) continue;
          assertCoordsValid(c);
        }
      }
    }
  });

  test("bp-dependent override can create overlap at xs only; overlapPolicy=warn + breakpoints=['xs'] reports exactly 1", () => {
    const entry = layoutsCatalog.primary20.page_twoCol_16_4;
        const BBentry = layoutsCatalog.primary20.page_twoCol_16_4;

    // Create overlap at xs in main by removing stacking so both boxes start at origin.
    // Keep md stacked horizontally to avoid overlap there.
    type LA = typeof BBentry;

    const layoutTxOverrides: LayoutTxOverrides<LA> = {
      main: {
        xs: [], // no transforms => overlap (both start at origin in that section)
        sm: [{ stackHorizontally: {} }],
        md: [{ stackHorizontally: {} }],
        lg: [{ stackHorizontally: {} }],
        xl: [{ stackHorizontally: {} }],
      },
    };

    const diagnostics: DiagnosticEntry[] = [];
    CSSLayout({
      BBentry,
      diagnostics,
      layoutTxOverrides,
      gridDiagnostic: { overlapPolicy: "warn", breakpoints: ["xs"] },
    });

    const overlaps = findByCode(diagnostics, GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED);
    expect(overlaps).toHaveLength(1);

    const d: any = overlaps[0];
    expect(d.severity).toBe("warning");
    expect(d.origin).toBe("CSSLayout");
    // details structure is what you standardized earlier
    expect(d.issue?.details?.bp).toBe("xs");
  });

  test("same layout/override with overlapPolicy=allow produces no overlap diagnostics", () => {
    const entry = layoutsCatalog.primary20.page_twoCol_16_4;
    const BBentry =layoutsCatalog.primary20.page_twoCol_16_4;
    type LA = typeof BBentry;

    const layoutTxOverrides: LayoutTxOverrides<LA> = {
      main: {
        xs: [], // overlap at xs
        sm: [{ stackHorizontally: {} }],
        md: [{ stackHorizontally: {} }],
        lg: [{ stackHorizontally: {} }],
        xl: [{ stackHorizontally: {} }],
      },
    };

    const diagnostics: DiagnosticEntry[] = [];
    CSSLayout({
      BBentry,
      diagnostics,
      layoutTxOverrides,
      gridDiagnostic: { overlapPolicy: "allow", breakpoints: ["xs"] },
    });

    expect(findByCode(diagnostics, GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED)).toHaveLength(0);
  });

  test("edge-touching is NOT overlap (end === start)", () => {
    // We force a situation where main boxes touch but do not overlap at md:
    // If your stackHorizontally has gap=0, a typical stack places B after A exactly at A.end.
    // That should be non-overlap by your strict-< predicate.
    const entry = layoutsCatalog.primary20.page_twoCol_16_4;
    const BBentry =layoutsCatalog.primary20.page_twoCol_16_4;
    type LA = typeof BBentry;

    const layoutTxOverrides: LayoutTxOverrides<LA> = {
      main: {
        xs: [{ stackHorizontally: { gap: 0 } }],
        sm: [{ stackHorizontally: { gap: 0 } }],
        md: [{ stackHorizontally: { gap: 0 } }],
        lg: [{ stackHorizontally: { gap: 0 } }],
        xl: [{ stackHorizontally: { gap: 0 } }],
      }  
    };

    const diagnostics: DiagnosticEntry[] = [];
    const abs = CSSLayout({
      BBentry,
      diagnostics,
      layoutTxOverrides,
      gridDiagnostic: { overlapPolicy: "error", breakpoints: ["md"] },
    });

    // No overlap diagnostic expected at md
    expect(findByCode(diagnostics, GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED)).toHaveLength(0);

    // Additionally sanity check: md coords are valid
    const main = abs.sections["main" as keyof typeof abs.sections];
    const mdBoxes = main.coordinates.md!;
    for (const boxId in mdBoxes) {
      const c = mdBoxes[boxId as keyof typeof mdBoxes];
      if (!c) continue;
      assertCoordsValid(c);
    }
  });

  test("unknown override key is diagnosed (runtime robustness)", () => {
    const entry = layoutsCatalog.primary20.page_twoCol_16_4;
    const BBentry = layoutsCatalog.primary20.page_twoCol_16_4;
    type LA = typeof BBentry;

    // Force a wrong key via cast
    const layoutTxOverrides:LayoutTxOverrides<LA> = {
      notASection: { xs: [{ stackVertically: {} }] },
    } as any as LayoutTxOverrides<LA>;

    const diagnostics: DiagnosticEntry[] = [];
    CSSLayout({
      BBentry,
      diagnostics,
      layoutTxOverrides,
      gridDiagnostic: { overlapPolicy: "allow", breakpoints: ["xs"] },
    });

    const bad = findByCode(diagnostics, GRID_ERROR_CODE.NO_SECTION_ID);
    expect(bad.length).toBeGreaterThanOrEqual(1);
  });

  test("section-level transformations channel is wired (does not crash, coords still valid)", () => {
    const entry = layoutsCatalog.primary20.page_twoCol_16_4;
    const BBentry = layoutsCatalog.primary20.page_twoCol_16_4;
    type LA = typeof BBentry;

    // We don't assert exact resulting placement here, only that the pipeline accepts it
    // and yields valid absolute coords.
    const layoutTxOverrides: LayoutTxOverrides<LA> = {
      transformations: {
        xs: [{ alignAllToX: { to: 1, anchor: "bottomLeft" } }],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      }  ,
    };

    const diagnostics: DiagnosticEntry[] = [];
    const abs = CSSLayout({
      BBentry,
      diagnostics,
      layoutTxOverrides,
      gridDiagnostic: { overlapPolicy: "allow", breakpoints: BREAKPOINTS },
    });

    for (const bp of BREAKPOINTS) {
      for (const sectionId in abs.sections) {
        const section = abs.sections[sectionId as keyof typeof abs.sections];
        const coordsAtBp = section.coordinates[bp];
        if (!coordsAtBp) continue;
        for (const boxId in coordsAtBp) {
          const c = coordsAtBp[boxId as keyof typeof coordsAtBp];
          if (!c) continue;
          assertCoordsValid(c);
        }
      }
    }
  });
});
