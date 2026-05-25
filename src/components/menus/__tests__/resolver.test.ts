import { describe, expect, test } from '@jest/globals';
import { HIERARCHY_ERROR_CODE } from '../../../core/hierarchy/hierarchyErrorShape';
import { resolver } from '../../../core/hierarchy/resolver';
import type {
  HierarchyRelations,
  HierarchyTree,
  PayloadMap,
} from '../../../core/hierarchy/hierarchyTypes';

type TestPayload = { label?: string; topo?: string };
type TestHierarchyTree = HierarchyTree<PayloadMap<TestPayload>, TestPayload>;

function treeFromNodes(nodes: unknown, root: TestPayload = {}): TestHierarchyTree {
  return {
    root,
    nodes: nodes as HierarchyRelations<PayloadMap<TestPayload>>,
  };
}

describe('hierarchy resolver', () => {
  test('valid hierarchy returns ok: true', () => {
    const nodes = {
      a: { payload: { label: 'A' }, parent: 'root' },
      b: { payload: { label: 'B' }, parent: 'a' },
      c: { payload: { label: 'C' }, parent: 'b' },
    } as const;
    const h = treeFromNodes(nodes, { topo: 'root' });

    const res = resolver(h);
    expect(res.ok).toBe(true);

    if (res.ok) {
      expect(res.resolvedHierarchy).toBe(h);
    }
  });

  test('missing parent returns ok: false + MISSING_PARENT', () => {
    const h = treeFromNodes({
      a: { payload: { label: 'A' }, parent: 'root' },
      // parent missing (runtime invalid)
      b: { payload: { label: 'B' } },
    });

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.MISSING_PARENT)).toBe(true);
    }
  });

  test('unknown parent returns ok: false + INVALID_PARENT', () => {
    const h = treeFromNodes({
      a: { payload: { label: 'A' }, parent: 'root' },
      b: { payload: { label: 'B' }, parent: 'does_not_exist' },
    });

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_PARENT)).toBe(true);
    }
  });

  test('self-parent returns ok: false + INVALID_PARENT', () => {
    const h = treeFromNodes({
      a: { payload: { label: 'A' }, parent: 'a' },
    });

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_PARENT)).toBe(true);
    }
  });

  test('root cannot be a node key', () => {
    const h = treeFromNodes({
      a: { payload: { label: 'A' }, parent: 'root' },
      root: { payload: {}, parent: 'a' },
    });

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_HIERARCHY)).toBe(true);
    }
  });

  test('cycle detection: 2-cycle fails and includes cycle path', () => {
    const h = treeFromNodes({
      a: { payload: { label: 'A' }, parent: 'b' },
      b: { payload: { label: 'B' }, parent: 'a' },
      // also ensure at least one node points to root (your current rule)
      x: { payload: { label: 'X' }, parent: 'root' },
    });

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_CYCLE)).toBe(true);

      // optional: your message contains "Cycle detected..."
      const cycleMsg =
        res.issues.find((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_CYCLE)?.message ?? '';
      expect(cycleMsg.toLowerCase()).toContain('cycle');
      // and should show loop closure like "a -> b -> a" or "b -> a -> b"
      expect(cycleMsg).toMatch(/a.*b.*a|b.*a.*b/);
    }
  });

  test('cycle detection: 3-cycle fails', () => {
    const h = treeFromNodes({
      a: { payload: { label: 'A' }, parent: 'b' },
      b: { payload: { label: 'B' }, parent: 'c' },
      c: { payload: { label: 'C' }, parent: 'a' },
      x: { payload: { label: 'X' }, parent: 'root' },
    });

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_CYCLE)).toBe(true);
    }
  });

  test('root-only hierarchy is invalid without a root-attached node', () => {
    const h = treeFromNodes({}, { topo: 'root' });

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.MISSING_ROOT_ATTACHMENT)).toBe(
        true,
      );
    }
  });

  test('valid hierarchy with siblings + grandchildren returns ok: true', () => {
    const h = treeFromNodes(
      {
        a: { payload: { label: 'A' }, parent: 'root' },
        b: { payload: { label: 'B' }, parent: 'root' },
        c: { payload: { label: 'C' }, parent: 'a' },
        d: { payload: { label: 'D' }, parent: 'a' },
        e: { payload: { label: 'E' }, parent: 'b' },
      },
      { topo: 'root' },
    );

    const res = resolver(h);
    expect(res.ok).toBe(true);
  });

  test('collects multiple structural errors and does not crash', () => {
    const h = treeFromNodes({
      // non-root self-parent
      a: { payload: { label: 'A' }, parent: 'a' },
      // unknown parent
      b: { payload: { label: 'B' }, parent: 'does_not_exist' },
      // include a proper child of root so other structural errors are visible
      c: { payload: { label: 'C' }, parent: 'root' },
    });

    const res = resolver(h);
    expect(res.ok).toBe(false);

    if (!res.ok) {
      const codes = res.issues.map((i) => i.code);
      expect(codes).toContain(HIERARCHY_ERROR_CODE.INVALID_PARENT);
    }
  });
});
