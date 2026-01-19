/**
 * @file hierarchyD3.test.ts
 *
 * Stress tests for:
 *  - convertToD3Stratify
 *  - sortD3Stratify
 *  - buildTreeFromStratify
 *
 * Adjust the import paths to match your repo.
 */

import type { HierarchyIssue } from '../hierarchyErrorShape';
import { HIERARCHY_ERROR_CODE } from '../hierarchyErrorShape';

// ✅ adjust these paths
import { convertToD3Stratify } from '../convertToD3Stratify';
import { sortD3Stratify } from '../sortD3Stratify';
import { buildTreeFromStratify } from '../buildTreeFromStratify';

// ✅ adjust if your types live elsewhere
import type { PayloadMap, HierarchyTree, HierarchyTreeOverrides } from '../hierarchyTypes';

type MenuNode = { label: string; order: number };
type MenuUI = { icon?: string; dense?: boolean };

function makeIssues(): HierarchyIssue[] {
  return [];
}

/** Helper: collect children IDs for a given D3 node id */
function childrenIds(root: any, id: string): string[] {
  const n = root.descendants().find((x: any) => x.id === id);
  if (!n) return [];
  return (n.children ?? []).map((c: any) => c.id);
}

/** Helper: safe read of node datum payload */
function datum(root: any, id: string) {
  const n = root.descendants().find((x: any) => x.id === id);
  return n?.data;
}

describe('convertToD3Stratify', () => {
  test('creates a D3 hierarchy with dummy root and correct parent wiring', () => {
    //
    const map = {
      a: { label: 'A', order: 2 },
      b: { label: 'B', order: 1 },
      c: { label: 'C', order: 3 },
    } as const satisfies PayloadMap<MenuNode>;

    const hierarchyTree = {
      root: { label: 'MenuRoot' },
      nodes: {
        a: { payload: { label: 'A', order: 2 }, parent: 'root' },
        b: { payload: { label: 'B', order: 1 }, parent: 'root' },
        c: { payload: { label: 'C', order: 3 }, parent: 'a' },
      },
    } as const satisfies HierarchyTree<typeof map, { label: string }>;

    const overrides = {
      root: { payload: { anything: true } },
      nodes: {
        a: { payload: { icon: 'A_ICON' } },
        c: { payload: { dense: true } },
      },
    } as const satisfies HierarchyTreeOverrides<
      typeof map,
      typeof hierarchyTree,
      { anything: boolean },
      MenuUI
    >;

    const issues = makeIssues();
    const returnValue = convertToD3Stratify(hierarchyTree.nodes, overrides.nodes );

    if( returnValue.ok === false ) {
      console.error('Issues:', returnValue.issues);
    }

    expect(returnValue.ok).toBe(true);
    const root = returnValue.ok ? returnValue.root : null;

    expect(issues).toHaveLength(0);
    expect(root).not.toBeNull();

    // dummy root exists
    expect(root!.id).toBe('root');
    // root children should be a and b (order not guaranteed yet)
    const rc = childrenIds(root, 'root');
    expect(rc.sort()).toEqual(['a', 'b'].sort());

    // a has child c
    expect(childrenIds(root, 'a')).toEqual(['c']);
    // console.log('root:', root);
    // console.log('a children:', datum(root, 'a'));
    // Payload is attached per node
    expect(datum(root, 'a')!.payload.node).toEqual({ label: 'A', order: 2 });
    expect(datum(root, 'b')!.payload.node).toEqual({ label: 'B', order: 1 });
    expect(datum(root, 'c')!.payload.node).toEqual({ label: 'C', order: 3 });

    // Overrides attach only to matching keys
    expect(datum(root, 'a')!.payload.overrides).toEqual({ icon: 'A_ICON' });
    expect(datum(root, 'b')!.payload.overrides).toBeUndefined();
    expect(datum(root, 'c')!.payload.overrides).toEqual({ dense: true });
  });

  test('pushes D3_STRATIFY_ERROR on duplicate ids and returns null', () => {
    // Here we intentionally defeat typing and inject duplicate ids by crafting
    // a hierarchyTree with two keys that stringify to same id is not possible,
    // so we do a runtime hack: call convert with a tree, then monkey-patch the
    // data-building via overrides—NOT possible. Instead, simulate a d3 error
    // by giving multiple roots: parentId null for two nodes (via bad input).
    //
    // Since your convert always sets parentId from hierarchy[key].parent and
    // uses dummy root, the easiest forced failure is: parent points to a missing id,
    // which d3 will throw.
    const hierarchyTree = {
      root: {},
      nodes: {
        a: { payload: { label: 'A', order: 0 }, parent: 'missing' as any },
      },
    } as const satisfies HierarchyTree<PayloadMap<MenuNode>, {}>;

    const overrides = { nodes: {} } as const satisfies HierarchyTreeOverrides<
      PayloadMap<MenuNode>,
      typeof hierarchyTree,
      unknown,
      MenuUI
    >;

 
    const returnValue = convertToD3Stratify(hierarchyTree.nodes, overrides.nodes );

    expect(returnValue.ok).toBe(false);
    const issues = returnValue.ok ? [] : returnValue.issues;
    expect(issues.some((x) => x.code === HIERARCHY_ERROR_CODE.D3_STRATIFY_ERROR)).toBe(true);
  });
});

describe('sortD3Stratify', () => {
  test('sorts children under each parent by node.order ascending', () => {
    const payloadMap = {
      a: { label: 'A', order: 2 },
      b: { label: 'B', order: 1 },
      c: { label: 'C', order: 3 },
      d: { label: 'D', order: 0 },
      e: { label: 'E', order: 5 },
      f: { label: 'F', order: 4 },
    } as const satisfies PayloadMap<MenuNode>;

    const hierarchyTree = {
      root: {},
      nodes: {
        a: { payload: { label: 'A', order: 2 }, parent: 'root' },
        b: { payload: { label: 'B', order: 1 }, parent: 'root' },
        c: { payload: { label: 'C', order: 3 }, parent: 'root' },
        d: { payload: { label: 'D', order: 0 }, parent: 'b' },
        e: { payload: { label: 'E', order: 5 }, parent: 'b' },
        f: { payload: { label: 'F', order: 4 }, parent: 'b' },
      },
    } as const satisfies HierarchyTree<typeof payloadMap, {}>;

    const overrides = { nodes: {} } as const satisfies HierarchyTreeOverrides<
      typeof payloadMap,
      typeof hierarchyTree,
      unknown,
      MenuUI
    >;

    const issues = makeIssues();
    const returnValue = convertToD3Stratify(hierarchyTree.nodes, overrides.nodes );

    expect(returnValue.ok).toBe(true);
    const root = returnValue.ok ? returnValue.root : null;
    expect(issues).toHaveLength(0);

    const issues2 = makeIssues();
    const returnValue2 = sortD3Stratify(root as any );
    expect(returnValue2.ok).toBe(true);
    const sortedRoot = returnValue2.ok ? returnValue2.root : null;
    expect(issues2).toHaveLength(0);

    // Under dummy root: b (1), a (2), c (3)
    expect(childrenIds(sortedRoot, 'root')).toEqual(['b', 'a', 'c']);

    // Under b: d (0), f (4), e (5)
    expect(childrenIds(sortedRoot, 'b')).toEqual(['d', 'f', 'e']);
  });

  test('does not crash on dummy root node:null during sort', () => {
    const hierarchyTree = {
      root: {},
      nodes: {
        a: { payload: { label: 'A', order: 1 }, parent: 'root' },
      },
    } as const satisfies HierarchyTree<PayloadMap<MenuNode>, {}>;

    const overrides = { nodes: {} } as const satisfies HierarchyTreeOverrides<
      PayloadMap<MenuNode>,
      typeof hierarchyTree,
      unknown,
      MenuUI
    >;

    const issues = makeIssues();
    const returnValue = convertToD3Stratify(hierarchyTree.nodes, overrides.nodes );
    expect(returnValue.ok).toBe(true);
    const root = returnValue.ok ? returnValue.root : null;
    expect(issues).toHaveLength(0);
    expect(root).not.toBeNull();

    const issues2 = makeIssues();
    const returnValue2 = sortD3Stratify(root as any );
    expect(returnValue2.ok).toBe(true);
  });
});

describe('buildTreeFromStratify', () => {
  test('materializes nested JSON payload tree with correct children maps', () => {
    const map = {
      a: { label: 'A', order: 2 },
      b: { label: 'B', order: 1 },
      c: { label: 'C', order: 3 },
      d: { label: 'D', order: 4 },
    } as const satisfies PayloadMap<MenuNode>;

    const hierarchyTree = {
      root: {},
      nodes: {
        a: { payload: { label: 'A', order: 2 }, parent: 'root' },
        b: { payload: { label: 'B', order: 1 }, parent: 'root' },
        c: { payload: { label: 'C', order: 3 }, parent: 'a' },
        d: { payload: { label: 'D', order: 4 }, parent: 'a' },
      },
    } as const satisfies HierarchyTree<typeof map, {}>;

    const overrides = {
      nodes: {
        a: { payload: { icon: 'A_ICON' } },
        d: { payload: { dense: true } },
      },
    } as const satisfies HierarchyTreeOverrides<typeof map, typeof hierarchyTree, unknown, MenuUI>;

    const issues = makeIssues();
    const returnValue = convertToD3Stratify(hierarchyTree.nodes, overrides.nodes );
    expect(returnValue.ok).toBe(true);
    const root = returnValue.ok ? returnValue.root : null;
    expect(issues).toHaveLength(0);

    // optional: sort then build (if you want stable ordering before materializing)
    const issues2 = makeIssues();
    const returnValue2 = sortD3Stratify(root as any );
    expect(returnValue2.ok).toBe(true);
    const sortedRoot = returnValue2.ok ? returnValue2.root : null;
    expect(issues2).toHaveLength(0);

    console.log('sortedRoot',sortedRoot);
    const tree = buildTreeFromStratify(sortedRoot as any);

    console.log('tree', tree);
    console.log('tree a', tree.root?.children?.a);
    // Dummy root node is null
    expect(tree.root).not.toBeNull();

    expect(tree.root!.node).toBeNull();

    // Root has children map with a and b
    expect(tree.root!.children).toBeDefined();
    expect(Object.keys(tree.root!.children!)).toEqual(expect.arrayContaining(['a', 'b']));

    // Node a has children c and d
    expect(tree.root!.children!.a.children).toBeDefined();
    expect(Object.keys(tree.root!.children!.a.children!)).toEqual(
      expect.arrayContaining(['c', 'd']),
    );

    // Overrides are attached
    expect(tree.root!.children!.a.overrides).toEqual({ icon: 'A_ICON' });
    expect(tree.root!.children!.a.children!.d.overrides).toEqual({ dense: true });

    // Leaves omit children (depending on your convention)
    expect(tree.root!.children!.b.children).toBeUndefined();
    expect(tree.root!.children!.a.children!.c.children).toBeUndefined();
  });

  test('stress: random-ish tree shapes preserve parent-child integrity after conversion', () => {
    // Deterministic pseudo-random generator
    let seed = 1337;
    const rnd = () => {
      seed = (seed * 1103515245 + 12345) % 2 ** 31;
      return seed / 2 ** 31;
    };

    // Build a random tree with N nodes; each node i chooses parent among earlier nodes or root
    const N = 60;
    const nodes: Record<string, any> = {};
    for (let i = 0; i < N; i++) {
      const id = `n_${i}`;
      const parentPick = i === 0 ? 'root' : rnd() < 0.25 ? 'root' : `n_${Math.floor(rnd() * i)}`;
      nodes[id] = {
        payload: { label: id, order: i },
        parent: parentPick,
      };
    }

    const hierarchyTree = {
      root: {},
      nodes,
    } satisfies HierarchyTree<PayloadMap<MenuNode>, {}>;

    const overrides = { nodes: {} } satisfies HierarchyTreeOverrides<
      PayloadMap<MenuNode>,
      typeof hierarchyTree,
      unknown,
      MenuUI
    >;

    const issues = makeIssues();
    const returnValue = convertToD3Stratify(hierarchyTree.nodes, overrides.nodes );
    expect(returnValue.ok).toBe(true);
    const root = returnValue.ok ? returnValue.root : null;
    expect(issues).toHaveLength(0);

    const tree = buildTreeFromStratify(root!);
    console.log('tree:', tree);
    expect(tree.root!.children).toBeDefined();


    // Validate that every node appears exactly once in the nested tree
    const seen = new Set<string>();
    const walk = (t: any, id?: string) => {
      if (id) {
        expect(seen.has(id)).toBe(false);
        seen.add(id);
      }
      const ch = t.children;
      if (!ch) return;
      for (const [cid, child] of Object.entries(ch)) {
        walk(child, cid);
      }
    };
    walk(tree.root!,'root');

    expect(seen.size).toBe(N+1);

    // Validate parent-child integrity: for every node whose parent is 'root', it must be a direct child of dummy root
    const direct = new Set(Object.keys(tree.root!.children!));
    for (let i = 0; i < N; i++) {
      const id = `n_${i}`;
      const p = nodes[id].parent;
      if (p === 'root') {
        expect(direct.has(id)).toBe(true);
      }
    }
  });
});
