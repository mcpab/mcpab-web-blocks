/**
 * Map of node IDs to their payload types.
 *
 * @remarks
 * - Keys are node IDs.
 * - `"root"` may exist on the payload map as an anchor payload key.
 * - `"root"` is excluded from node ids in {@link HierarchyRelations}.
 *
 * @typeParam NodePayload - Default payload type when using a uniform payload map.
 */
export type PayloadMap<NodePayload = unknown> = Record<string, NodePayload>;

type ForbidRootKey<P extends Record<string, any>> = 'root' extends keyof P ? never : P;

export type NodeId<P extends PayloadMap> = Extract<keyof ForbidRootKey<P>, string>;

type AllowedParents<N extends string, P extends PayloadMap> = Exclude<Extract<keyof P, string>, N>;

/**
 * Parent relation model for a hierarchy.
 *
 * @remarks
 * This is a **normalized** hierarchy representation: each node explicitly stores its parent.
 *
 * ### Type-level guarantees
 * - Parent id must be a known node id or `"root"`.
 * - No self-parenting.
 *
 * ### Runtime invariants (not enforced by types)
 * - No cycles.
 *
 * @example
 * ```ts
 * const payloads = {
 *   a: { name: "a" },
 *   b: { name: "b" },
 *   c: { name: "c" },
 *   root: { name: "root" }, // allowed as an anchor payload
 * } as const satisfies PayloadMap;
 *
 * const relations = {
 *   a: { payload: { name: "a" }, parent: "b" },
 *   b: { payload: { name: "b" }, parent: "root" },
 *   c: { payload: { name: "c" }, parent: "b" },
 * } as const satisfies HierarchyRelations<typeof payloads>;
 * ```
 *
 * @typeParam P - Node ID → payload type map. `"root"` may be present as an anchor key.
 */
export type HierarchyRelations<P extends PayloadMap> = {
  [K in NodeId<P>]: {
    /** Payload associated with this node key. */
    payload: P[K];
    /**
     * Parent ID.
     *
     * @remarks
     * - Can be `"root"` (anchor)
     * - Can be any other node id in {@link P}
     * - Cannot be the same node key (self-parenting forbidden)
     */
    parent: AllowedParents<K & string, P> | 'root';
  };
};

/**
 * A hierarchy tree wrapper that includes a root payload plus node relations.
 *
 * @remarks
 * The `"root"` entry is treated as an **anchor**, not a node in {@link HierarchyRelations}.
 *
 * @typeParam P - Node ID → payload type map.
 * @typeParam RootPayLoad - Payload type stored at the `"root"` anchor.
 */
export type HierarchyTree<P extends PayloadMap, RootPayLoad = unknown> = {
  /** Payload at the `"root"` anchor. */
  root: RootPayLoad;
  /** Normalized node relations (child → parent). */
  nodes: HierarchyRelations<P>;
};

/**
 * Payload overrides for a hierarchy relations map.
 *
 * @remarks
 * Useful for producing “view-model” payloads (e.g. adding UI fields) while keeping the same structure.
 *
 * @typeParam P - Original payload universe.
 * @typeParam H - Relations map being overridden.
 * @typeParam PN - New payload type for overridden entries.
 */
export type HierarchyRelationsOverrides<
  P extends PayloadMap,
  H extends HierarchyRelations<P>,
  PN,
> = {
  [K in Extract<keyof H, string>]?: {
    payload: PN;
  };
};

/**
 * Overrides for an entire hierarchy tree (root + nodes).
 *
 * @typeParam P - Original payload universe.
 * @typeParam H - Tree being overridden.
 * @typeParam RootOverridePayload - New payload type for the root anchor.
 * @typeParam PN - New payload type for overridden nodes.
 */
export type HierarchyTreeOverrides<
  P extends PayloadMap,
  H extends HierarchyTree<P>,
  RootOverridePayload = unknown,
  PN = unknown,
> = {
  root?: {
    payload: RootOverridePayload;
  };
  nodes?: HierarchyRelationsOverrides<P, H['nodes'], PN>;
};
/**
 * @example
 * ```ts
 * const ex = {
 *   a: { name: "a" },
 *   b: { name: "b", other: "aa" },
 *   c: { name: "c", jk: "b" },
 *   root: { name: "root", pp: "c" }, // allowed as an anchor payload
 * } as const satisfies PayloadMap;
 *
 * const rt = {
 *   a: { payload: { name: "a" }, parent: "b" },
 *   b: { payload: { name: "b", other: "aa" }, parent: "a" },
 *   c: { payload: { name: "c", jk: "b" }, parent: "b" },
 *   // root: { payload: { name: "root", pp: "c" }, parent: "c" }, // not allowed (root isn't a node)
 * } as const satisfies HierarchyRelations<typeof ex>;
 *
 * const ov = {
 *   a: { payload: { id: "aaa" } },
 *   b: { payload: { id: "bbb" } },
 *   c: { payload: { id: "ccc" } },
 * } as const satisfies HierarchyRelationsOverrides<typeof ex, typeof rt, { id: string }>;
 * ```
 */
export type NodeInferred<P> = P extends PayloadMap<infer NodeType> ? NodeType : never;

// const ex = {
//   a: { name: 'a' },
//   b: { name: 'b', other: 'aa' },
//   c: { name: 'c', jk: 'b' },
//   root: { name: 'root', pp: 'c' }, // allowed as an anchor payload
// } as const satisfies PayloadMap;
