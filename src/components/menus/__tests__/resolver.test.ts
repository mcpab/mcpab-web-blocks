import { HIERARCHY_ERROR_CODE } from '../../../core/hierarchy/hierarchyErrorShape';
import { resolver } from '../../../core/hierarchy//resolver';

describe('hierarchy resolver', () => {
  test('valid hierarchy returns ok: true', () => {
    const h = {
      a: { payload: { label: 'A' }, parent: 'root' },
      b: { payload: { label: 'B' }, parent: 'a' },
      c: { payload: { label: 'C' }, parent: 'b' },
      root: { payload: { topo: 'root' }, parent: 'root' },
    } as const;

    const res = resolver(h as any);
 
    if (!res.ok) {
      console.log('issues', res.issues);
    }
    expect(res.ok).toBe(true);

    if (res.ok) {
      expect(res.resolvedHierarchy).toBe(h);
    }
  });

  test('missing parent returns ok: false + MISSING_PARENT', () => {
    const h = {
      a: { payload: { label: 'A' }, parent: 'root' },
      // parent missing (runtime invalid)
      b: { payload: { label: 'B' } },
      root: { payload: {}, parent: 'root' },
    } as any;

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.MISSING_PARENT)).toBe(true);
    }
  });

  test('unknown parent returns ok: false + INVALID_PARENT', () => {
    const h = {
      a: { payload: { label: 'A' }, parent: 'root' },
      b: { payload: { label: 'B' }, parent: 'does_not_exist' },
      root: { payload: {}, parent: 'root' },
    } as any;

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_PARENT)).toBe(true);
    }
  });

  test('self-parent returns ok: false + INVALID_PARENT', () => {
    const h = {
      a: { payload: { label: 'A' }, parent: 'a' },
      root: { payload: {}, parent: 'root' },
    } as any;

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_PARENT)).toBe(true);
    }
  });

  test('root cannot have a parent other than root', () => {
    const h = {
      a: { payload: { label: 'A' }, parent: 'root' },
      root: { payload: {}, parent: 'a' }, // invalid by your rule
    } as any;

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_PARENT)).toBe(true);
    }
  });

  test('cycle detection: 2-cycle fails and includes cycle path', () => {
    const h = {
      a: { payload: { label: 'A' }, parent: 'b' },
      b: { payload: { label: 'B' }, parent: 'a' },
      root: { payload: {}, parent: 'root' },
      // also ensure at least one node points to root (your current rule)
      x: { payload: { label: 'X' }, parent: 'root' },
    } as any;

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_HIERARCHY)).toBe(true);

      // optional: your message contains "Cycle detected..."
      const cycleMsg =
        res.issues.find((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_HIERARCHY)?.message ?? '';
      expect(cycleMsg.toLowerCase()).toContain('cycle');
      // and should show loop closure like "a -> b -> a" or "b -> a -> b"
      expect(cycleMsg).toMatch(/a.*b.*a|b.*a.*b/);
    }
  });

  test('cycle detection: 3-cycle fails', () => {
    const h = {
      a: { payload: { label: 'A' }, parent: 'b' },
      b: { payload: { label: 'B' }, parent: 'c' },
      c: { payload: { label: 'C' }, parent: 'a' },
      root: { payload: {}, parent: 'root' },
      x: { payload: { label: 'X' }, parent: 'root' },
    } as any;

    const res = resolver(h);
    expect(res.ok).toBe(false);
    if (!res.ok) {
      expect(res.issues.some((i) => i.code === HIERARCHY_ERROR_CODE.INVALID_HIERARCHY)).toBe(true);
    }
  });
  test("root-only hierarchy is valid", () => {
  const h = {
    root: { payload: { topo: "root" }, parent: "root" },
  } as const;

  const res = resolver(h as any);
  expect(res.ok).toBe(true);
});

test("valid hierarchy with siblings + grandchildren returns ok: true", () => {
  const h = {
    a: { payload: { label: "A" }, parent: "root" },
    b: { payload: { label: "B" }, parent: "root" },
    c: { payload: { label: "C" }, parent: "a" },
    d: { payload: { label: "D" }, parent: "a" },
    e: { payload: { label: "E" }, parent: "b" },
    root: { payload: { topo: "root" }, parent: "root" },
  } as const;

  const res = resolver(h as any);
  expect(res.ok).toBe(true);
});

test("collects multiple structural errors and does not crash", () => {
  const h = {
    // non-root self-parent
    a: { payload: { label: "A" }, parent: "a" },
    // unknown parent
    b: { payload: { label: "B" }, parent: "does_not_exist" },
    // keep root valid
    root: { payload: {}, parent: "root" },
    // (optional) include a proper child of root if your resolver still checks for it
    c: { payload: { label: "C" }, parent: "root" },
  } as any;

  const res = resolver(h);
  expect(res.ok).toBe(false);

  if (!res.ok) {
    const codes = res.issues.map((i) => i.code);
    expect(codes).toContain(HIERARCHY_ERROR_CODE.INVALID_PARENT);
    // Depending on how you code unknown-parent vs self-parent,
    // this may also be INVALID_PARENT (same code) or INVALID_HIERARCHY.
    // If you have a distinct code for unknown parent, assert it here instead.
  }
});

});
