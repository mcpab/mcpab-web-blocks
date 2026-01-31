/**
 * Payload stored on each `d3-hierarchy` node after stratification.
 *
 * @remarks
 * - `node` is the original node payload (or `null` for the synthetic `"root"` anchor).
 * - `overrides` optionally stores a per-node override payload.
 * - `children` is only populated for `"root"` during conversion (as a convenience).
 */

export type StratifyPayload<Node, NodeOverrides> = {
  node: Node | null;
  overrides?: NodeOverrides;
  children?: Record<string, StratifyPayload<Node, NodeOverrides>>;
};
/**
 * Row format passed into `d3.stratify()`.
 *
 * @remarks
 * `d3.stratify()` expects an array of objects where each object has:
 * - `id`: unique identifier
 * - `parentId`: parent identifier (or `null` for the root)
 */

export type D3StratifyData<Node, NodeOverrides> = {
  id: string;
  parentId: string | null;
  payload: StratifyPayload<Node, NodeOverrides>;
};
