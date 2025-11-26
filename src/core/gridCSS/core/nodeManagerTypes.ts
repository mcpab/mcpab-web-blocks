import { NodeID } from "../ids/kinds";
import { AbsoluteNode, GridNodeOptions, NodeAbsoluteCoordinates } from "./gridNodeTypes";
import { DiagnosticEntry } from "./gridErrorShape";
import { BPs, PartialBps } from "./breakpoints";



/**
 * A single patch intent targeting exactly ONE node, addressed by its human-friendly Kind.
 * (Given you enforce a per-layout bijection Kind ↔ NodeId, `selector` resolves to one NodeId
 * or yields an UNKNOWN_KIND diagnostic.)
 *
 * Both coordinates and options are PER-BREAKPOINT partials:
 *  - Omitted breakpoints leave existing values unchanged.
 *  - Multiple intents applied to the same node/bp follow "last wins".
 */
export type PatchIntentByKind<K extends string> = {
  /** Human-friendly key for the node (bijective with NodeId within a layout/version). */
  selector: K;

  /** Optional per-breakpoint options patch (partial). Omitted BPs = unchanged. */
  options?: Partial<Readonly<BPs<GridNodeOptions>>>;

  /** Optional per-breakpoint coordinates patch (partial). Omitted BPs = unchanged. */
  coordinates?: Partial<Readonly<BPs<NodeAbsoluteCoordinates>>>;
};

/** Result for a single PatchIntent application. */
// export type PatchResult = {
//   /** The concrete NodeId targeted by this intent (if resolved). */
//   id?: NodeID;
//   /** Diagnostics produced while resolving & applying this intent. */
//   diagnostics: GridErrorShape[];
// };

/** Batch result for an array of PatchIntent objects. */
// export type PatchBatchResult = {
//   /** Per-intent results in the same order as provided. */
//   results: Array<PatchResult>;
//   /** Quick roll-up counts to drive UI badges / summaries. */
//   summary: { errors: number; warnings: number };
// };

/**
 * NodeManager — the single source of truth for Kind ↔ NodeId mapping and selector resolution.
 *
 * CONTRACT
 * - Owns the vocabulary map (ID → Kind) and validates at initialization time that it is a bijection.
 * - Resolves Kind selectors to NodeIds (1→1). Unknown kinds produce diagnostics.
 * - Applies per-breakpoint partial patches in order; for the same node+bp, later intents override earlier ones ("last wins").
 * - Geometry/policy validation (bounds, overlaps, ancestry) may be performed here or delegated to the factory/engine;
 *   any issues must surface as diagnostics in the corresponding PatchResult.
 *
 * NOTES
 * - `nodesVocabularyID_K` should be treated as immutable after successful initialization.
 * - Bijection scope is per layout/version; if the layout version changes, the manager should rebuild & re-validate.
 */

export type duplicateKindPolicy = 'allow' | 'warn' | 'error';
export type AddNodeReturnValue = {
  id: NodeID | undefined;
  diagnostic?: DiagnosticEntry;
}

export interface NodeManagerInterface<K extends string> {

  readonly duplicateKindPolicy: duplicateKindPolicy;
  /** Authoritative ID → Kind map for this layout/version (bijective; validated at init). */
  // readonly nodesVocabularyID_K: Readonly<Record<ID, K>>;

  /** Sparse registry: not every ID must be present. */
  readonly nodesRegistry: Partial<Record<NodeID, AbsoluteNode<K>>>;

  /** Insert a new node and receive its stable NodeId. */
  addNode: (node: PartialBps<NodeAbsoluteCoordinates>, kind: K, options?: GridNodeOptions) => AddNodeReturnValue;

  /**
   * Apply a sequence of patch intents.
   * Semantics:
   *  - Intents are applied in array order; for the same node/bp, later intents override earlier ones.
   *  - Each intent addresses exactly one node via `selector` (bijective Kind ↔ NodeId).
   *  - Per-breakpoint partials: omitted BPs remain unchanged.
   *  - Diagnostics include resolution issues (UNKNOWN_KIND) and any geometry/policy errors detected during application.
   */
  patchNodes: (patches: ReadonlyArray<PatchIntentByKind<K>>) => ReadonlyArray<DiagnosticEntry>;

};

