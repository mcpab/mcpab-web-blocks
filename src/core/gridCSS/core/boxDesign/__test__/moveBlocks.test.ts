import { NodeID } from 'src/core/gridCSS/templates/layoutIDs';
import { GridBox } from '../../box/gridBoxTypes';
import { BoxDimensionIdsAndTx } from "../../boxLayout/boxLayoutTypes";
import { DefaultBoxTransformations } from '../../boxTransformations/defaultBoxTransformations';
import { DiagnosticEntry } from '../../gridErrorShape';
import { getLocalGridBoxes } from '../getLocalGridBoxes';
import { transformBoxMove } from '../transformBoxMove';
 

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Helper that:
 *  - Narrows away undefined at runtime using Jest's expect()
 *  - Returns a non-optional GridBox so TS stops complaining
 */
function getBox<
  BoxID extends NodeID = NodeID,
  GridBoxes extends Record<BreakpointKey, any> = Record<BreakpointKey, any>
>(
  gridBoxes: GridBoxes,
  bp: BreakpointKey,
  boxId: BoxID
): GridBox {
  const boxesAtBp = (gridBoxes as any)[bp];
  expect(boxesAtBp).toBeDefined();

  const box = boxesAtBp[boxId];
  expect(box).toBeDefined();

  return box as GridBox;
}

/**
 * Small helper to assert origin only (if you don’t care about diagonal / _normalized)
 */
function expectOrigin<
  BoxID extends NodeID = NodeID,
  GridBoxes extends Record<BreakpointKey, any> = Record<BreakpointKey, any>
>(
  gridBoxes: GridBoxes,
  bp: BreakpointKey,
  boxId: BoxID,
  origin: { x: number; y: number }
) {
  const box = getBox(gridBoxes, bp, boxId);
  expect(box.origin).toEqual(origin);
}

// -----------------------------------------------------------------------------
// 1. Basic moveTo tests (your original ones, rewritten with helpers)
// -----------------------------------------------------------------------------

describe('moveTwoBlocks Transformation', () => {
  test('moveTo block_2 to absolute coordinate (10,10) at all breakpoints', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
      },
      transformations: {
        xs: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { x: 10, y: 10 },
            },
          },
        ],
        sm: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { x: 10, y: 10 },
            },
          },
        ],
        md: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { x: 10, y: 10 },
            },
          },
        ],
        lg: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { x: 10, y: 10 },
            },
          },
        ],
        xl: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { x: 10, y: 10 },
            },
          },
        ],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);

    // initial state: all at origin
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
      expectOrigin(gridBoxes, bp, 'block_2', { x: 0, y: 0 });
    });

    // apply moves
    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    // block_1 never moves
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
    });

    // block_2 moved to (10,10) on all breakpoints
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      const box2 = getBox(gridBoxes, bp, 'block_2');
      expect(box2).toEqual({
        origin: { x: 10, y: 10 },
        diagonal: { x: 1, y: 1 },
        _normalized: 'GridBox',
      });
    });
  });
});

describe('block_2 bottomLeft moveTo block_1 topRight', () => {
  test('anchor-to-anchor move between boxes', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
      },
      transformations: {
        xs: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        sm: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        md: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        lg: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        xl: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);

    // initial state: all at origin
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
      expectOrigin(gridBoxes, bp, 'block_2', { x: 0, y: 0 });
    });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    // block_1 stays at origin
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
    });

    // For unitCell (origin (0,0), diagonal (1,1)):
    // topRight of block_1 is (1,1)
    // bottomLeft of block_2 is its origin, so origin must become (1,1)
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      const box2 = getBox(gridBoxes, bp, 'block_2');
      expect(box2).toEqual({
        origin: { x: 1, y: 1 },
        diagonal: { x: 1, y: 1 },
        _normalized: 'GridBox',
      });
    });
  });
});

// -----------------------------------------------------------------------------
// 2. Per-breakpoint BoxTransformations (BPs<Array<BoxMovesProps<BoxId>>>)
// -----------------------------------------------------------------------------

describe('per-breakpoint BoxTransformations produce different layouts', () => {
  test('block_2 behaves differently per breakpoint', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
      },
      transformations: {
        // xs: absolute moveTo to coordinate (10,10)
        xs: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { x: 10, y: 10 },
            },
          },
        ],
        // sm: moveBy by vector (5, 0)
        sm: [
          {
            moveBy: {
              from: { boxId: 'block_2' },
              by: { x: 5, y: 0 },
            },
          },
        ],
        // md: alignToY to numeric value 7
        md: [
          {
            alignToY: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: 7,
            },
          },
        ],
        // lg: alignToX to numeric value 12
        lg: [
          {
            alignToX: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: 12,
            },
          },
        ],
        // xl: no transformations
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);

    // initial state: all at origin
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
      expectOrigin(gridBoxes, bp, 'block_2', { x: 0, y: 0 });
    });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    // block_1 never moves
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
    });

    // xs: moved absolutely to (10, 10)
    const xs2 = getBox(gridBoxes, 'xs', 'block_2');
    expect(xs2.origin).toEqual({ x: 10, y: 10 });

    // sm: moved by (5, 0) from origin
    const sm2 = getBox(gridBoxes, 'sm', 'block_2');
    expect(sm2.origin).toEqual({ x: 5, y: 0 });

    // md: aligned Y to 7, X unchanged
    const md2 = getBox(gridBoxes, 'md', 'block_2');
    expect(md2.origin).toEqual({ x: 0, y: 7 });

    // lg: aligned X to 12, Y unchanged
    const lg2 = getBox(gridBoxes, 'lg', 'block_2');
    expect(lg2.origin).toEqual({ x: 12, y: 0 });

    // xl: no transforms
    const xl2 = getBox(gridBoxes, 'xl', 'block_2');
    expect(xl2.origin).toEqual({ x: 0, y: 0 });
  });
});

// -----------------------------------------------------------------------------
// 3. moveBy (number & coordinate)
// -----------------------------------------------------------------------------

describe('moveBy transformation', () => {
  test('moveBy by Coordinate translates by given vector', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1'> = {
      boxDimensionIds: { block_1: 'unitCell' },
      transformations: {
        xs: [
          {
            moveBy: {
              from: { boxId: 'block_1' },
              by: { x: 5, y: -2 },
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 5, y: -2 });
  });

  test('moveBy by number translates isotropically', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1'> = {
      boxDimensionIds: { block_1: 'unitCell' },
      transformations: {
        xs: [
          {
            moveBy: {
              from: { boxId: 'block_1' },
              by: 3,
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 3, y: 3 });
  });
});

// -----------------------------------------------------------------------------
// 4. alignToY / alignToX
// -----------------------------------------------------------------------------

describe('alignToY / alignToX transformations', () => {
  test('alignToY to numeric value aligns from-anchor Y to that value', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1'> = {
      boxDimensionIds: { block_1: 'unitCell' },
      transformations: {
        xs: [
          {
            alignToY: {
              from: { boxId: 'block_1', anchor: 'bottomLeft' },
              to: 10,
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);
    // bottomLeft.y = origin.y, should now be 10
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 10 });
  });

  test('alignToY to another box anchor aligns Y while preserving X', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
      },
      transformations: {
        xs: [
          {
            alignToY: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });
    expectOrigin(gridBoxes, 'xs', 'block_2', { x: 0, y: 0 });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const box1 = getBox(gridBoxes, 'xs', 'block_1');
    const box2 = getBox(gridBoxes, 'xs', 'block_2');

    // For unitCell, topRight.y = origin.y + diagonal.y = 1
    expect(box1.origin).toEqual({ x: 0, y: 0 });
    expect(box2.origin.x).toBe(0); // X unchanged
    expect(box2.origin.y).toBe(1); // bottomLeft.y aligned to block_1 topRight.y
  });

  test('alignToX to numeric value aligns from-anchor X to that value', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1'> = {
      boxDimensionIds: { block_1: 'unitCell' },
      transformations: {
        xs: [
          {
            alignToX: {
              from: { boxId: 'block_1', anchor: 'bottomLeft' },
              to: 7,
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);
    // bottomLeft.x = origin.x, should now be 7
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 7, y: 0 });
  });
});

// -----------------------------------------------------------------------------
// 5. alignAllToY / alignAllToX
// -----------------------------------------------------------------------------

describe('alignAllToY / alignAllToX transformations', () => {
  test('alignAllToY aligns all boxes anchors to same Y', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2' | 'block_3'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
        block_3: 'unitCell',
      },
      transformations: {
        xs: [
          {
            alignAllToY: { to: 5, anchor: 'bottomLeft' },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');
    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const y1 = getBox(gridBoxes, 'xs', 'block_1').origin.y;
    const y2 = getBox(gridBoxes, 'xs', 'block_2').origin.y;
    const y3 = getBox(gridBoxes, 'xs', 'block_3').origin.y;

    expect(y1).toBe(5);
    expect(y2).toBe(5);
    expect(y3).toBe(5);
  });

  test('alignAllToX aligns all boxes anchors to same X', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2' | 'block_3'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
        block_3: 'unitCell',
      },
      transformations: {
        xs: [
          {
            alignAllToX: { to: 8, anchor: 'bottomLeft' },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');
    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const x1 = getBox(gridBoxes, 'xs', 'block_1').origin.x;
    const x2 = getBox(gridBoxes, 'xs', 'block_2').origin.x;
    const x3 = getBox(gridBoxes, 'xs', 'block_3').origin.x;

    expect(x1).toBe(8);
    expect(x2).toBe(8);
    expect(x3).toBe(8);
  });
});

// -----------------------------------------------------------------------------
// 6. stackVertically / stackHorizontally
// -----------------------------------------------------------------------------

describe('stackVertically / stackHorizontally transformations', () => {
  test('stackVertically stacks boxes with consistent vertical gaps', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2' | 'block_3'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
        block_3: 'unitCell',
      },
      transformations: {
        xs: [
          {
            stackVertically: { gap: 2 },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');
    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const y1 = getBox(gridBoxes, 'xs', 'block_1').origin.y;
    const y2 = getBox(gridBoxes, 'xs', 'block_2').origin.y;
    const y3 = getBox(gridBoxes, 'xs', 'block_3').origin.y;

    expect(y1).toBeLessThan(y2);
    expect(y2).toBeLessThan(y3);

    const gap12 = y2 - y1;
    const gap23 = y3 - y2;
    expect(gap12).toBe(gap23);
  });

  test('stackHorizontally stacks boxes with consistent horizontal gaps', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1' | 'block_2' | 'block_3'> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
        block_3: 'unitCell',
      },
      transformations: {
        xs: [
          {
            stackHorizontally: { gap: 1 },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');
    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const x1 = getBox(gridBoxes, 'xs', 'block_1').origin.x;
    const x2 = getBox(gridBoxes, 'xs', 'block_2').origin.x;
    const x3 = getBox(gridBoxes, 'xs', 'block_3').origin.x;

    expect(x1).toBeLessThan(x2);
    expect(x2).toBeLessThan(x3);

    const gap12 = x2 - x1;
    const gap23 = x3 - x2;
    expect(gap12).toBe(gap23);
  });
});

// -----------------------------------------------------------------------------
// 7. Diagnostics paths
// -----------------------------------------------------------------------------

describe('box move diagnostics', () => {
  test('unknown "from" boxId produces a diagnostic and no movement', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1'> = {
      boxDimensionIds: { block_1: 'unitCell' },
      transformations: {
        xs: [
          {
            moveTo: {
              from: {
                boxId: 'missing_block' as any,
                anchor: 'bottomLeft',
              },
              to: { x: 10, y: 10 },
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');
    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    // we expect at least one diagnostic
    expect(diagnostics.length).toBeGreaterThan(0);

    // assert message contains the text we emit in validateBoxFrom()
    const serialized = JSON.stringify(diagnostics);
    expect(serialized).toContain("transformation has invalid 'from' boxId");

    // block_1 unchanged
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });
  });

  test('unknown "to" anchor produces a diagnostic and no movement', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1'> = {
      boxDimensionIds: { block_1: 'unitCell' },
      transformations: {
        xs: [
          {
            moveTo: {
              from: { boxId: 'block_1', anchor: 'bottomLeft' },
              to: {
                boxId: 'block_1',
                anchor: 'middleLeftish' as any, // invalid anchor
              },
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');
    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBeGreaterThan(0);

    const serialized = JSON.stringify(diagnostics);
    expect(serialized).toContain("transformation has invalid 'to' anchor");

    // no movement
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });
  });

  test('invalid "to" parameter shape produces a diagnostic and no movement', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    const boxes: BoxDimensionIdsAndTx<'block_1'> = {
      boxDimensionIds: { block_1: 'unitCell' },
      transformations: {
        xs: [
          {
 
            moveTo: {
              from: { boxId: 'block_1', anchor: 'bottomLeft' },
              to: { foo: 'bar' } as any,
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');
    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBeGreaterThan(0);

    const serialized = JSON.stringify(diagnostics);
    expect(serialized).toContain("transformation has invalid 'to' parameter");

    // no movement
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });
  });
});

// -----------------------------------------------------------------------------
// 8. Combo: moveTo -> alignToY -> stackVertically (one breakpoint)
// -----------------------------------------------------------------------------

describe('combo transformations: moveTo + alignToY + stackVertically', () => {
  test('applies sequential transforms in order on three boxes', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    type BoxId = 'block_1' | 'block_2' | 'block_3';

    const boxes: BoxDimensionIdsAndTx<BoxId> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
        block_3: 'unitCell',
      },
      transformations: {
        xs: [
          // 1) Place block_1 at (2,2)
          {
            moveTo: {
              from: { boxId: 'block_1', anchor: 'bottomLeft' },
              to: { x: 2, y: 2 },
            },
          },
          // 2) Move block_2 bottomLeft to block_1 topRight
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
          // 3) Align block_3 bottomLeft.Y to block_2 topRight.Y
          {
            alignToY: {
              from: { boxId: 'block_3', anchor: 'bottomLeft' },
              to: { boxId: 'block_2', anchor: 'topRight' },
            },
          },
          // 4) Finally stack all three vertically with a gap of 1
          {
            stackVertically: { gap: 1 },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_1');

    expect(diagnostics.length).toBe(0);

    // initial: all origin (0,0)
    expectOrigin(gridBoxes, 'xs', 'block_1', { x: 0, y: 0 });
    expectOrigin(gridBoxes, 'xs', 'block_2', { x: 0, y: 0 });
    expectOrigin(gridBoxes, 'xs', 'block_3', { x: 0, y: 0 });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const b1 = getBox(gridBoxes, 'xs', 'block_1');
    const b2 = getBox(gridBoxes, 'xs', 'block_2');
    const b3 = getBox(gridBoxes, 'xs', 'block_3');

    // We don't assume absolute numbers after stackVertically, but we do expect:
    // - A strict vertical ordering
    // - Consistent vertical spacing between neighbors

    const y1 = b1.origin.y;
    const y2 = b2.origin.y;
    const y3 = b3.origin.y;

    expect(y1).toBeLessThan(y2);
    expect(y2).toBeLessThan(y3);

    const gap12 = y2 - y1;
    const gap23 = y3 - y2;

    // With gap: 1, and identical diagonals, we expect equal spacing
    expect(gap12).toBe(gap23);
  });
});

// -----------------------------------------------------------------------------
// 9. Combo: per-breakpoint sequences (xs vs sm vs md)
// -----------------------------------------------------------------------------

describe('combo transformations per breakpoint', () => {
  test('different sequences per breakpoint yield different layouts', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    type BoxId = 'block_1' | 'block_2' | 'block_3';

    const boxes: BoxDimensionIdsAndTx<BoxId> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'unitCell',
        block_3: 'unitCell',
      },
      transformations: {
        // xs: only move block_1 to (3,1)
        xs: [
          {
            moveTo: {
              from: { boxId: 'block_1', anchor: 'bottomLeft' },
              to: { x: 3, y: 1 },
            },
          },
        ],

        // sm: move all, then alignAllToX to same X
        sm: [
          {
            moveTo: {
              from: { boxId: 'block_1', anchor: 'bottomLeft' },
              to: { x: 2, y: 0 },
            },
          },
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { x: 5, y: 2 },
            },
          },
          {
            moveTo: {
              from: { boxId: 'block_3', anchor: 'bottomLeft' },
              to: { x: 9, y: -1 },
            },
          },
          {
            alignAllToX: {
              to: 4,
              anchor: 'bottomLeft',
            },
          },
        ],

        // md: moveBy for each, then stackHorizontally
        md: [
          {
            moveBy: {
              from: { boxId: 'block_1' },
              by: { x: 1, y: 0 },
            },
          },
          {
            moveBy: {
              from: { boxId: 'block_2' },
              by: { x: 3, y: 0 },
            },
          },
          {
            moveBy: {
              from: { boxId: 'block_3' },
              by: { x: 5, y: 0 },
            },
          },
          {
            stackHorizontally: { gap: 2 },
          },
        ],

        // lg / xl: no transforms (control)
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(boxes, diagnostics, 'section_2');

    expect(diagnostics.length).toBe(0);

    // Initially: all origins are (0,0) at all breakpoints
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
      expectOrigin(gridBoxes, bp, 'block_2', { x: 0, y: 0 });
      expectOrigin(gridBoxes, bp, 'block_3', { x: 0, y: 0 });
    });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    // ----- xs: only block_1 moved to some non-zero x -----
    const xs1 = getBox(gridBoxes, 'xs', 'block_1');
    const xs2 = getBox(gridBoxes, 'xs', 'block_2');
    const xs3 = getBox(gridBoxes, 'xs', 'block_3');

    expect(xs1.origin.x).toBe(3);
    expect(xs1.origin.y).toBe(1);
    // block_2 and block_3 unchanged at xs
    expect(xs2.origin).toEqual({ x: 0, y: 0 });
    expect(xs3.origin).toEqual({ x: 0, y: 0 });

    // ----- sm: alignAllToX => all boxes share same x -----
    const sm1 = getBox(gridBoxes, 'sm', 'block_1');
    const sm2 = getBox(gridBoxes, 'sm', 'block_2');
    const sm3 = getBox(gridBoxes, 'sm', 'block_3');

    // alignAllToX with to:4 means bottomLeft X of each should be 4
    expect(sm1.origin.x).toBe(4);
    expect(sm2.origin.x).toBe(4);
    expect(sm3.origin.x).toBe(4);

    // Y can differ; we only care that X is enforced equal
    expect(sm1.origin.y).not.toBeNaN();
    expect(sm2.origin.y).not.toBeNaN();
    expect(sm3.origin.y).not.toBeNaN();

    // ----- md: stackHorizontally => strictly increasing x with consistent gap -----
    const md1 = getBox(gridBoxes, 'md', 'block_1');
    const md2 = getBox(gridBoxes, 'md', 'block_2');
    const md3 = getBox(gridBoxes, 'md', 'block_3');

    const x1 = md1.origin.x;
    const x2 = md2.origin.x;
    const x3 = md3.origin.x;

    expect(x1).toBeLessThan(x2);
    expect(x2).toBeLessThan(x3);

    const gap12 = x2 - x1;
    const gap23 = x3 - x2;
    expect(gap12).toBe(gap23);

    // Y in md should stay the same (we only moved in x)
    expect(md1.origin.y).toBe(md2.origin.y);
    expect(md2.origin.y).toBe(md3.origin.y);

    // ----- lg / xl: control, unchanged from origin -----
    (['lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      expectOrigin(gridBoxes, bp, 'block_1', { x: 0, y: 0 });
      expectOrigin(gridBoxes, bp, 'block_2', { x: 0, y: 0 });
      expectOrigin(gridBoxes, bp, 'block_3', { x: 0, y: 0 });
    });
  });
});


// -----------------------------------------------------------------------------
// 10. Different-size cells: anchor alignment using diagonals
// -----------------------------------------------------------------------------

describe('anchor-based moveTo with different-size cells', () => {
  test('moving bottomLeft of a tall box to topRight of a wide box uses diagonals correctly', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    type BoxId = 'block_1' | 'block_2';

    const boxes: BoxDimensionIdsAndTx<BoxId> = {
      boxDimensionIds: {
        // wide in X, normal in Y
        block_1: 'doubleWideCell',
        // normal in X, tall in Y
        block_2: 'doubleTallCell',
      },
      transformations: {
        xs: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    // Build initial boxes (no transforms applied yet)
    const gridBoxes = getLocalGridBoxes(
      boxes,
      diagnostics,
      'section_1',
    );

    expect(diagnostics.length).toBe(0);

    const wideBefore = getBox(gridBoxes, 'xs', 'block_1');
    const tallBefore = getBox(gridBoxes, 'xs', 'block_2');

    const wideOrigin = wideBefore.origin;
    const wideDiag = wideBefore.diagonal;
    const tallDiagBefore = tallBefore.diagonal;

    // Apply transform
    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const wideAfter = getBox(gridBoxes, 'xs', 'block_1');
    const tallAfter = getBox(gridBoxes, 'xs', 'block_2');

    // wide_block should be unchanged
    expect(wideAfter.origin).toEqual(wideOrigin);
    expect(wideAfter.diagonal).toEqual(wideDiag);

    // tall_block keeps same diagonal
    expect(tallAfter.diagonal).toEqual(tallDiagBefore);

    // bottomLeft(tallAfter) == topRight(wideBefore) = origin + diagonal
    const expectedTallOrigin = {
      x: wideOrigin.x + wideDiag.x,
      y: wideOrigin.y + wideDiag.y,
    };

    expect(tallAfter.origin).toEqual(expectedTallOrigin);
  });
});

// -----------------------------------------------------------------------------
// 11. Different-height cells: stackVertically with varying heights
// -----------------------------------------------------------------------------

describe('stackVertically with different-height cells', () => {
  test('gap is measured from top of previous to bottom of next, using diagonals', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    type BoxId = 'block_1' | 'block_2' | 'block_3';

    const boxes: BoxDimensionIdsAndTx<BoxId> = {
      boxDimensionIds: {
        block_1: 'unitCell',         // base height
        block_2: 'doubleTallCell',  // taller
        block_3: 'tripleTallCell',    // even taller
      },
      transformations: {
        xs: [
          {
            stackVertically: { gap: 2 },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(
      boxes,
      diagnostics,
      'section_1',
    );

    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const shortBox = getBox(gridBoxes, 'xs', 'block_1');
    const mediumBox = getBox(gridBoxes, 'xs', 'block_2');
    const tallBox = getBox(gridBoxes, 'xs', 'block_3');

    const boxesInOrder = [shortBox, mediumBox, tallBox];

    // 1) Strict vertical ordering by origin.y
    const ys = boxesInOrder.map((b) => b.origin.y);
    expect(ys[0]).toBeLessThan(ys[1]);
    expect(ys[1]).toBeLessThan(ys[2]);

    // 2) For each neighbor: next.bottomY - prev.topY === gap
    const gap = 2;

    for (let i = 0; i < boxesInOrder.length - 1; i++) {
      const prev = boxesInOrder[i];
      const next = boxesInOrder[i + 1];

      const prevTopY = prev.origin.y + prev.diagonal.y;
      const nextBottomY = next.origin.y;
      const actualGap = nextBottomY - prevTopY;

      expect(actualGap).toBe(gap);
    }
  });
});

// -----------------------------------------------------------------------------
// 12. BP-dependent shapes: moveTo uses per-breakpoint diagonals
// -----------------------------------------------------------------------------

describe('bp-dependent shapes with moveTo', () => {
  test('bottomLeft(tall) tracks topRight(wide) across breakpoints with different shapes', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    type BoxId = 'block_1' | 'block_2';

    const boxes: BoxDimensionIdsAndTx<BoxId> = {
      boxDimensionIds: {
        block_1 : {
          xs: 'doubleWideCell', // smaller
          sm: 'doubleWideCell',
          md: '5WideCell',      // wider
          lg: '5WideCell',
          xl: '5WideCell',
        },
        block_2: {
          xs: 'doubleTallCell', // shorter
          sm: 'doubleTallCell',
          md: '5TallCell',      // taller
          lg: '5TallCell',
          xl: '5TallCell',
        },
      },
      transformations: {
        // same logical transform on xs & md:
        // move tall_block bottomLeft to wide_block topRight
        xs: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        sm: [],
        md: [
          {
            moveTo: {
              from: { boxId: 'block_2', anchor: 'bottomLeft' },
              to: { boxId: 'block_1', anchor: 'topRight' },
            },
          },
        ],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(
      boxes,
      diagnostics,
      'section_1',
    );

    expect(diagnostics.length).toBe(0);

    // apply transforms
    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    // Check both xs and md obey anchor relation with their own diagonals
    (['xs', 'md'] as BreakpointKey[]).forEach((bp) => {
      const wide = getBox(gridBoxes, bp, 'block_1');
      const tall = getBox(gridBoxes, bp, 'block_2');

      const topRightWide = {
        x: wide.origin.x + wide.diagonal.x,
        y: wide.origin.y + wide.diagonal.y,
      };

      // bottomLeft(tall) == topRight(wide)
      expect(tall.origin).toEqual(topRightWide);
    });

    // And they really are different across breakpoints (thanks to different shapes)
    const xsWide = getBox(gridBoxes, 'xs', 'block_1');
    const mdWide = getBox(gridBoxes, 'md', 'block_1');

    // With different shapes, diagonals should differ between xs and md
    expect(xsWide.diagonal).not.toEqual(mdWide.diagonal);
  });
});
// -----------------------------------------------------------------------------
// 13. Five boxes: stackVertically + alignAllToX
// -----------------------------------------------------------------------------

describe('five boxes: stackVertically + alignAllToX', () => {
  test('five mixed-height boxes stack with consistent vertical gaps and aligned X', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    type BoxId =
      | 'block_1'
      | 'block_2'
      | 'block_3'
      | 'block_4'
      | 'block_5';

    const boxes: BoxDimensionIdsAndTx<BoxId> = {
      boxDimensionIds: {
        // mix widths and heights a bit
        block_1: 'unitCell',
        block_2: 'doubleTallCell',
        block_3: 'tripleTallCell',
        block_4: 'doubleCell',
        block_5: 'tripleCell',
      },
      transformations: {
        xs: [
          // Give block_3 a little nudge first to prove ordering is recomputed
          {
            moveBy: {
              from: { boxId: 'block_3' },
              by: { x: 3, y: 5 },
            },
          },
          // Then stack all vertically with gap 2
          {
            stackVertically: { gap: 2 },
          },
          // Then align all X to 7
          {
            alignAllToX: { to: 7, anchor: 'bottomLeft' },
          },
        ],
        sm: [],
        md: [],
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(
      boxes,
      diagnostics,
      'section_1',
    );

    expect(diagnostics.length).toBe(0);

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    const b1 = getBox(gridBoxes, 'xs', 'block_1');
    const b2 = getBox(gridBoxes, 'xs', 'block_2');
    const b3 = getBox(gridBoxes, 'xs', 'block_3');
    const b4 = getBox(gridBoxes, 'xs', 'block_4');
    const b5 = getBox(gridBoxes, 'xs', 'block_5');

    const boxesInOrder = [b1, b2, b3, b4, b5];

    // 1) All X origins should be aligned to 7
    boxesInOrder.forEach((b) => {
      expect(b.origin.x).toBe(7);
    });

    // 2) Strictly increasing Y origins
    const ys = boxesInOrder.map((b) => b.origin.y);
    for (let i = 0; i < ys.length - 1; i++) {
      expect(ys[i]).toBeLessThan(ys[i + 1]);
    }

    // 3) Gaps between boxes should be 2, measured from top(prev) to bottom(next)
    const gap = 2;
    for (let i = 0; i < boxesInOrder.length - 1; i++) {
      const prev = boxesInOrder[i];
      const next = boxesInOrder[i + 1];

      const prevTopY = prev.origin.y + prev.diagonal.y;
      const nextBottomY = next.origin.y;
      const actualGap = nextBottomY - prevTopY;

      expect(actualGap).toBe(gap);
    }
  });
});
// -----------------------------------------------------------------------------
// 14. Five boxes: per-breakpoint layouts (horizontal vs vertical)
// -----------------------------------------------------------------------------

describe('five boxes: per-breakpoint horizontal vs vertical sequencing', () => {
  test('five boxes form a row on xs/md and a column on sm, with lg/xl unchanged', () => {
    const defaultBoxTransformations = DefaultBoxTransformations();
    const diagnostics: DiagnosticEntry[] = [];

    type BoxId =
      | 'block_1'
      | 'block_2'
      | 'block_3'
      | 'block_4'
      | 'block_5';

    const boxes: BoxDimensionIdsAndTx<BoxId> = {
      boxDimensionIds: {
        block_1: 'unitCell',
        block_2: 'doubleWideCell',
        block_3: 'tripleWideCell',
        block_4: 'doubleCell',
        block_5: 'tripleCell',
      },
      transformations: {
        // xs: make a horizontal row with small gap
        xs: [
          {
            stackHorizontally: { gap: 1 },
          },
        ],

        // sm: make a vertical column with larger gap
        sm: [
          {
            stackVertically: { gap: 3 },
          },
        ],

        // md: row again, then align all Y to 10
        md: [
          {
            stackHorizontally: { gap: 2 },
          },
          {
            alignAllToY: { to: 10, anchor: 'bottomLeft' },
          },
        ],

        // lg/xl: no transforms (control)
        lg: [],
        xl: [],
      } as const,
    };

    const gridBoxes = getLocalGridBoxes(
      boxes,
      diagnostics,
      'section_1',
    );

    expect(diagnostics.length).toBe(0);

    // initial: everything at origin on all bps
    (['xs', 'sm', 'md', 'lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      (['block_1', 'block_2', 'block_3', 'block_4', 'block_5'] as BoxId[]).forEach(
        (id) => {
          expectOrigin(gridBoxes, bp, id, { x: 0, y: 0 });
        },
      );
    });

    transformBoxMove(
      defaultBoxTransformations,
      boxes.transformations!,
      gridBoxes,
      diagnostics,
    );

    expect(diagnostics.length).toBe(0);

    // ----- xs: horizontal row -----
    const xsBoxes = (['block_1', 'block_2', 'block_3', 'block_4', 'block_5'] as BoxId[])
      .map((id) => getBox(gridBoxes, 'xs', id));

    const xsXs = xsBoxes.map((b) => b.origin.x);
    const xsYs = xsBoxes.map((b) => b.origin.y);

    // Strictly increasing X
    for (let i = 0; i < xsXs.length - 1; i++) {
      expect(xsXs[i]).toBeLessThan(xsXs[i + 1]);
    }

    // Horizontal-ish: Y should all be the same (or very close to same)
    xsYs.forEach((y) => {
      expect(y).toBe(xsYs[0]);
    });

    // Gaps between boxes are consistent, measured using width+gap
    const xsGapActuals: number[] = [];
    for (let i = 0; i < xsBoxes.length - 1; i++) {
      const prev = xsBoxes[i];
      const next = xsBoxes[i + 1];
      const prevRightX = prev.origin.x + prev.diagonal.x;
      xsGapActuals.push(next.origin.x - prevRightX);
    }
    xsGapActuals.forEach((g) => expect(g).toBe(xsGapActuals[0]));

    // ----- sm: vertical column -----
    const smBoxes = (['block_1', 'block_2', 'block_3', 'block_4', 'block_5'] as BoxId[])
      .map((id) => getBox(gridBoxes, 'sm', id));

    const smXs = smBoxes.map((b) => b.origin.x);
    const smYs = smBoxes.map((b) => b.origin.y);

    // Vertical-ish: X should all be the same
    smXs.forEach((x) => {
      expect(x).toBe(smXs[0]);
    });

    // Strictly increasing Y
    for (let i = 0; i < smYs.length - 1; i++) {
      expect(smYs[i]).toBeLessThan(smYs[i + 1]);
    }

    // Vertical gap consistent, using height+gap
    const smGapActuals: number[] = [];
    for (let i = 0; i < smBoxes.length - 1; i++) {
      const prev = smBoxes[i];
      const next = smBoxes[i + 1];
      const prevTopY = prev.origin.y + prev.diagonal.y;
      smGapActuals.push(next.origin.y - prevTopY);
    }
    smGapActuals.forEach((g) => expect(g).toBe(smGapActuals[0]));

    // ----- md: row + alignAllToY -----
    const mdBoxes = (['block_1', 'block_2', 'block_3', 'block_4', 'block_5'] as BoxId[])
      .map((id) => getBox(gridBoxes, 'md', id));

    const mdXs = mdBoxes.map((b) => b.origin.x);
    const mdYs = mdBoxes.map((b) => b.origin.y);

    // Strictly increasing X (row)
    for (let i = 0; i < mdXs.length - 1; i++) {
      expect(mdXs[i]).toBeLessThan(mdXs[i + 1]);
    }

    // All Y aligned to 10 via alignAllToY
    mdYs.forEach((y) => {
      expect(y).toBe(10);
    });

    // ----- lg/xl: unchanged control -----
    (['lg', 'xl'] as BreakpointKey[]).forEach((bp) => {
      (['block_1', 'block_2', 'block_3', 'block_4', 'block_5'] as BoxId[])
        .forEach((id) => {
          expectOrigin(gridBoxes, bp, id, { x: 0, y: 0 });
        });
    });
  });
});
