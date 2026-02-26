import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { StratifyPayload } from '../../core/hierarchy/D3StratifyTypes';

/**
 * Serializable data for a single node in the text drawer tree.
 *
 * @remarks
 * `renderer` is a key into the active {@link Registry} and must match one of its
 * registered entries.  The fields consumed by each renderer vary — see
 * `textNodeRenderers/defaultTextPolicyRegister` for the built-in mapping.
 *
 * `type` must agree with `renderer`'s declared `type` in the registry; the
 * `TextDrawerElement_Rg` utility type enforces this correlation at compile time
 * when building hierarchy payloads.
 */
export type TextDrawerElement = {
  /** Primary label — shown in every renderer as the summary row or heading. */
  title: string;
  /**
   * Registry key that selects the renderer and `type` for this node.
   * Must be a key of the active {@link Registry}.
   */
  renderer: string;
  /**
   * Semantic category that the chosen renderer belongs to.
   * Matches `RegistryEntry.type` for the corresponding `renderer` key.
   * Values: `'plainText'` | `'section'` | `'paragraph'`.
   */
  type: string;
  /** Optional second line shown in header renderers (`titleAndSubStd`, `titleAndSubDepth`, `titledText`). */
  subtitle?: string;
  /** Header icon identifier — reserved for future icon-picker integration. */
  icon?: string;
  /** Body text used by content renderers (`simpleText`, `titledText`). Falls back to `title` when absent. */
  content?: string;
  /**
   * Navigation target for link renderers (`linkedLabel`).
   * Falls back to `'#'` when the renderer is `linkedLabel` and this field is missing.
   */
  href?: string;
  /** Relative sort order among siblings — lower numbers render first. */
  order?: number;
};

/**
 * UI-only overrides for a single node, merged from `HierarchyTreeOverrides`.
 *
 * @remarks
 * These fields are kept separate from {@link TextDrawerElement} because they
 * are UI concerns (open state, visual tweaks) that are not part of the data
 * model and must not influence hierarchy processing.
 */
export type TextDrawerElementUI = {
  /**
   * When `true`, a visual separator is drawn above this node.
   * Consumed by layout wrappers; not yet forwarded by any built-in renderer.
   */
  divider?: boolean;
  /**
   * When `true`, the collapsible section starts expanded.
   * Seeded into {@link TreeTextStore} initial state by `TextDrawer`.
   * Safe to set on leaf nodes — the store tracks the value but it has no
   * visual effect when there are no children to collapse.
   */
  defaultOpen?: boolean;
  /**
   * Arbitrary MUI `sx` forwarded to the renderer's root element.
   * The renderer must explicitly accept and forward `sx` — all built-in
   * renderers except `titleAndSubStd` / `titleAndSubDepth` do so.
   */
  sx?: SxProps<Theme>;
};

/**
 * Props for the public-facing `TextDrawer` component.
 *
 * @remarks
 * Obtain `treeFromRoot` by calling {@link hierarchyToTextDrawerProps} with a
 * typed `HierarchyTree` literal.  The result is a pre-sorted `StratifyPayload`
 * ready to be passed directly here.
 */
export type TextDrawerProps = {
  /** Pre-built tree produced by {@link hierarchyToTextDrawerProps}. */
  treeFromRoot: StratifyPayload<TextDrawerElement, TextDrawerElementUI>;
};

/**
 * Root-level metadata for the text drawer hierarchy.
 *
 * @remarks
 * Passed as the second type parameter to `HierarchyTree<P, RootTextElement>`.
 * Currently only carries an `id` for future root-level addressing; the field
 * is not consumed by any renderer.
 */
export type RootTextElement = {
  /** Identifier for the root node — not rendered, reserved for future use. */
  id: string;
};

/**
 * Root-level UI overrides (mirrors `TextDrawerElementUI` for the root node).
 * Currently empty; provided so `HierarchyTreeOverrides` receives a concrete type.
 */
export type RootTextElementUI = {
  // empty for now
};
