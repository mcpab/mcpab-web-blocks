///
///

export type PayloadMap<NodePayload = unknown> = Record<string, NodePayload>;

type AllowedParents<N extends string, P extends PayloadMap> = Exclude<Extract<keyof P, string>, N>;

// the hierarchy model type, where each element is associated with its parent, and the parent must be specified.
// the ids are the keys of the model.
/* 
"root" is an anchor id (may or may not have a node entry)

It’s always valid as a parent


4) One important thought (to save future pain)

Even if the core stays minimal, make sure you lock down these invariants early (types + runtime):

Parent id must be a known node id or "root".

No self-parenting.

No cycles. (Runtime validation. This one matters a lot once you derive children lists.)

Types can do the first two well; the third needs runtime.
*/
export type HierarchyRelations<P extends PayloadMap> = {
  [K in Exclude<keyof P, 'root'>]: {
    payload: P[K];
    parent: AllowedParents<K & string, P> | 'root';
  };
};

export type HierarchyTree<P extends PayloadMap, RootPayLoad = unknown> = {
  root: RootPayLoad;
  nodes: HierarchyRelations<P>;
};

export type HierarchyRelationsOverrides<
  P extends PayloadMap,
  H extends HierarchyRelations<P>,
  // PN,
> = {
  [K in Extract<keyof H, string>]?: {
    payload: unknown;
  };
};

export type HierarchyTreeOverrides<
  P extends PayloadMap,
  H extends HierarchyRelations<P>,
  RootOverridePayload = unknown,
> = {
  root?: {
    payload: RootOverridePayload;
  };
  nodes?: HierarchyRelationsOverrides<P, H>;
};

const ex = {
  a: { name: 'a' },
  b: { name: 'b', other: 'aa' },
  c: { name: 'c', jk: 'b' },
  root: { name: 'root', pp: 'c' }, // this is allowed
} as const satisfies PayloadMap;

const rt = {
  a: { payload: { name: 'a' }, parent: 'b' },
  b: { payload: { name: 'b', other: 'aa' }, parent: 'a' },
  c: { payload: { name: 'c', jk: 'b' }, parent: 'b' },
  // root: { payload: { name: 'root', pp: 'c' }, parent: 'c' }, this does not work
} as const satisfies HierarchyRelations<typeof ex>;

const jjk = {};
type kl = { topo: string };

const ov = {
  a: { payload: { id: 'aaa' } },
  b: { payload: { idd: 'bbb' } },
  c: { payload: { idasd: 'ccc', gh: 2 } },
} as const satisfies HierarchyRelationsOverrides<typeof ex, typeof rt>;
