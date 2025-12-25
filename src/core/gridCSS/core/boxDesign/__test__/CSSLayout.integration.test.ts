// CSSLayout.integration.test.ts

import { layoutsCatalog } from "../../../templates/boxLayoutsCatalog";
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

    const layoutWithTx = layoutsCatalog.primary20.page_twoCol_16_4;

    const diagnostics: DiagnosticEntry[] = [];
    const abs = CSSLayout({
      layoutWithTx,
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
    const layoutWithTx = layoutsCatalog.primary20.page_twoCol_16_4;


    layoutWithTx.sections.main.transformations = {
      xs: [], // no transforms => overlap (both start at origin in that section)
      sm: [{ stackHorizontally: {} }],
      md: [{ stackHorizontally: {} }],
      lg: [{ stackHorizontally: {} }],
      xl: [{ stackHorizontally: {} }],
    };
 

    const diagnostics: DiagnosticEntry[] = [];
    CSSLayout({
      layoutWithTx,
      diagnostics,
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
 
    const layoutWithTx = layoutsCatalog.primary20.page_twoCol_16_4;
 

    layoutWithTx.sections.      main.transformations = {
        xs: [], // overlap at xs
        sm: [{ stackHorizontally: {} }],
        md: [{ stackHorizontally: {} }],
        lg: [{ stackHorizontally: {} }],
        xl: [{ stackHorizontally: {} }],
 
    };

    const diagnostics: DiagnosticEntry[] = [];
    CSSLayout({
      layoutWithTx,
      diagnostics,
 
      gridDiagnostic: { overlapPolicy: "allow", breakpoints: ["xs"] },
    });

    expect(findByCode(diagnostics, GRID_ERROR_CODE.OVERLAP_NOT_ALLOWED)).toHaveLength(0);
  });

  test("edge-touching is NOT overlap (end === start)", () => {
    // We force a situation where main boxes touch but do not overlap at md:
    // If your stackHorizontally has gap=0, a typical stack places B after A exactly at A.end.
    // That should be non-overlap by your strict-< predicate.

    const layoutWithTx = layoutsCatalog.primary20.page_twoCol_16_4;
 

    layoutWithTx.sections.main.transformations = {
      xs: [{ stackHorizontally: { gap: 0 } }],
        sm: [{ stackHorizontally: { gap: 0 } }],
        md: [{ stackHorizontally: { gap: 0 } }],
        lg: [{ stackHorizontally: { gap: 0 } }],
        xl: [{ stackHorizontally: { gap: 0 } }],
      };

    const diagnostics: DiagnosticEntry[] = [];
    const abs = CSSLayout({
      layoutWithTx,
      diagnostics,
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

  

  test("section-level transformations channel is wired (does not crash, coords still valid)", () => {
   
    const layoutWithTx = layoutsCatalog.primary20.page_twoCol_16_4;
    

    // We don't assert exact resulting placement here, only that the pipeline accepts it
    // and yields valid absolute coords.
    layoutWithTx.sections.main.transformations = {
      xs: [{ alignAllToX: { to: 1, anchor: "bottomLeft" } }],
      sm: [],
      md: [],
      lg: [],
        xl: [],
      };

    const diagnostics: DiagnosticEntry[] = [];
    const abs = CSSLayout({
      layoutWithTx,
      diagnostics,
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
