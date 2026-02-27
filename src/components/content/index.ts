/**
 * Content — collapsible text drawer and supporting infrastructure.
 *
 * @remarks
 * This module provides a typed, hierarchy-driven accordion component (`TextDrawer`)
 * that renders a tree of text nodes using a pluggable renderer registry.
 *
 * ## Typical usage
 *
 * ```tsx
 * import { hierarchyToTextDrawerProps } from 'src/components/content';
 * import TextDrawer from 'src/components/content/TextDrawer';
 *
 * const hierarchy = { ... } as const satisfies HierarchyTree<P, RootTextElement>;
 * const overrides = { ... };
 *
 * const result = hierarchyToTextDrawerProps({ hierarchy, overrides });
 * if (result.ok) {
 *   return <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
 * }
 * ```
 *
 * ## Architecture layers
 *
 * ```
 * TextDrawer                   ← public mount point (creates store, wraps contexts)
 *   └─ TextDrawer_Client       ← sets up render context + root depth
 *       └─ TextElement         ← per-node: reads store/depth/registry, delegates to…
 *           ├─ TextOpenClose   ← parent nodes: header renderer + Collapse + depth+1
 *           └─ <Renderer />    ← leaf nodes: resolved from Registry by key
 * ```
 *
 * ## Data flow
 *
 * ```
 * HierarchyTree literal
 *   → hierarchyToTextDrawerProps   (validates, sorts, builds StratifyPayload)
 *   → TextDrawer.treeFromRoot prop
 *   → TreeTextStore (open/closed state, seeded from defaultOpen overrides)
 *   → TextElement (per-node read from store + registry lookup)
 *   → Renderer component
 * ```
 *
 * ## Renderer registry
 * See `./textNodeRenderers` for the full list of built-in renderers and the
 * type utilities for building custom registries.
 */

// ─── Public component ───────────────────────────────────────────────────────

export { default as TextDrawer } from './TextDrawer';

// ─── Public entry point ──────────────────────────────────────────────────────

export { hierarchyToTextDrawerProps } from './hierarchyToTextDrawerProps';
export type {
  HierachyToTextDrawerProps,
  HierachyToTextDrawerPropsReturn,
} from './hierarchyToTextDrawerProps';

// ─── Data types ───────────────────────────────────────────────────────────────

export type {
  TextDrawerElement,
  TextDrawerElementUI,
  TextDrawerProps,
  RootTextElement,
  RootTextElementUI,
} from './TextDrawerTypes';

// ─── Store (for advanced / controlled usage) ─────────────────────────────────

export type { TreeTextState, TreeTextStore } from './textTreeStore';
export { createTreeTextStore, useTreeTextOpen, setTreeTextOpen } from './textTreeStore';

// ─── Renderer registry types ─────────────────────────────────────────────────

export type {
  TextTypes,
  TextPolicyProps,
  RegistryEntry,
  Registry,
  TextDrawerElement_Rg,
  Payload_Rg,
  FilterTypesInRegistry,
  GetTypesInRegistry,
} from './textNodeRenderers/rendersRegistryTypes';
export { defineEntry } from './textNodeRenderers/rendersRegistryTypes';

// ─── Default registry ────────────────────────────────────────────────────────

export { defaultRendersRegistry } from './textNodeRenderers/defaultTextPolicyRegister';
export type { DefaultRendersRegistry } from './textNodeRenderers/defaultTextPolicyRegister';
