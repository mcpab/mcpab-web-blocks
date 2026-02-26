import React from 'react';
import { TextDrawerElement, TextDrawerElementUI } from '../TextDrawerTypes';

/**
 * Semantic category of a text drawer node.
 *
 * - `'plainText'` — a leaf node that renders static content (text, label, link).
 * - `'paragraph'`— a leaf node that pairs a heading with body text.
 * - `'section'` — a parent node with collapsible children; must display an
 *   open/close indicator and handle `onClick` to toggle the `Collapse`.
 */
export type TextTypes = 'plainText' | 'section' | 'paragraph';

/**
 * Fixed input type for every renderer's `props` factory function.
 *
 * @remarks
 * All available context is passed in one go so that each registry entry can
 * destructure only what it needs without having to declare a narrower input
 * type.  The **output** is what varies per entry (captured by `RendererProps`
 * in {@link RegistryEntry}); the input is always this type.
 *
 * Keeping the input fixed (not generic) avoids the "unknown at call site"
 * problem that would arise if the input type were also a type parameter.
 */
export type TextPolicyProps = {
  /** The node's serialised data payload. */
  textDrawerElement: TextDrawerElement;
  /** Merged UI overrides for this node; `undefined` when none were provided. */
  textDrawerElementUI: TextDrawerElementUI | undefined;
  /** Zero-based nesting depth; passed to depth-aware renderers. */
  depth: number;
  /** Whether the node is currently in the open/expanded state. */
  isOpen: boolean;
  /** Whether the node has child nodes (always `true` for `section` renderers). */
  hasChildren: boolean;
  /** React node to display when the section is expanded (e.g. `<ExpandLess />`). */
  openIndicator: React.ReactNode;
  /** React node to display when the section is collapsed (e.g. `<ExpandMore />`). */
  closeIndicator: React.ReactNode;
  /**
   * Callback to toggle this node's collapsed/expanded state.
   * Must be wired to the `TreeTextStore` setter by the calling component.
   * Passed as a no-op for leaf nodes.
   */
  onClick: () => void;
};

/**
 * A single renderer entry in a {@link Registry}.
 *
 * @remarks
 * The existential pattern here is intentional:
 * - `RendererProps` is the **only** generic — it ties `props` output to
 *   `renderer` input so TypeScript can catch mismatches.
 * - The `Registry` type erases `RendererProps` to `any` (existential) so that
 *   a heterogeneous map of entries can be stored.  Type safety is enforced
 *   **per entry** via the {@link defineEntry} helper, not at the map level.
 *
 * @typeParam RendererProps - The prop type of the associated React component.
 */
export type RegistryEntry<RendererProps extends unknown> = {
  /**
   * Semantic category; must match `TextDrawerElement.type` for payloads that
   * use this renderer key.
   */
  type: TextTypes;
  /**
   * Pure factory that maps the comprehensive {@link TextPolicyProps} onto the
   * narrower props expected by `renderer`.  Destructure only what is needed.
   */
  props: (props: TextPolicyProps) => RendererProps;
  /** The React component that receives the output of `props`. */
  renderer: React.ComponentType<RendererProps>;
};

/**
 * A map of renderer keys to their {@link RegistryEntry} definitions.
 *
 * @remarks
 * `RegistryEntry<any>` is the correct existential type here — using `unknown`
 * breaks spread at the call sites in `TextElement` and `TextOpenClose`.
 * Type correctness per entry is guaranteed by {@link defineEntry}.
 */
export type Registry = Record<string, RegistryEntry<any>>;

/**
 * Derive a discriminated-union element type from a registry `R`.
 *
 * @remarks
 * Distributes over all keys `K` in `R` and produces a union where each
 * member has `renderer: K` and `type: R[K]['type']` correlated at compile
 * time.  This prevents assigning a `renderer` key whose `type` disagrees with
 * the node's `type` field.
 *
 * Use this when defining a payload map for `HierarchyTree`:
 *
 * @example
 * ```ts
 * const payloads = { ... } as const satisfies Payload_Rg<DefaultRendersRegistry>;
 * ```
 *
 * @typeParam R - The concrete registry (e.g. `DefaultRendersRegistry`).
 */
export type TextDrawerElement_Rg<R extends Registry> = {
  [K in keyof R]: {
    title: string;
    renderer: K;
    type: R[K]['type'];
    subtitle?: string;
    icon?: string;
    content?: string;
    href?: string;
    order?: number;
  };
}[keyof R];

/**
 * A record of named payloads where every value is a valid element for registry `R`.
 *
 * @remarks
 * Convenience alias for `Record<string, TextDrawerElement_Rg<R>>` — use it
 * as the `satisfies` target when declaring a hierarchy's payload constants.
 *
 * @typeParam R - The concrete registry (e.g. `DefaultRendersRegistry`).
 */
export type Payload_Rg<R extends Registry> = Record<string, TextDrawerElement_Rg<R>>;

/** All renderer keys in the default (or any other) registry. */
export type Renderers = keyof Registry;

/**
 * Extracts the subset of renderer keys in `R` whose `type` matches `T`.
 *
 * @example
 * ```ts
 * type SectionRenderers = FilterTypesInRegistry<'section', DefaultRendersRegistry>;
 * // → 'titleAndSubStd' | 'titleAndSubDepth'
 * ```
 *
 * @typeParam T - The `TextTypes` value to filter by.
 * @typeParam R - The registry to search.
 */
export type FilterTypesInRegistry<T extends TextTypes, R extends Registry> = {
  [K in keyof R]: R[K]['type'] extends T ? K : never;
}[keyof R];

/**
 * Extracts the union of all `type` values present in registry `R`.
 *
 * @typeParam R - The registry to inspect.
 */
export type GetTypesInRegistry<R extends Registry> = {
  [K in keyof R]: R[K]['type'];
}[keyof R];

/**
 * Identity helper that forces TypeScript to infer `RendererProps` concretely
 * for a single registry entry, catching `props`/`renderer` mismatches that
 * `satisfies Registry` (which erases to `any`) would miss.
 *
 * @remarks
 * Without this helper, `renderer: MyComponent` and `props: () => wrongShape`
 * would compile silently because `Registry` uses `RegistryEntry<any>`.
 * Wrapping each entry in `defineEntry({...})` gives TypeScript enough
 * information to infer `RP` and validate that `props` returns a type
 * assignable to `MyComponent`'s props.
 *
 * @example
 * ```ts
 * titleAndSubStd: defineEntry({
 *   type: 'section',
 *   props: ({ textDrawerElement, isOpen, openIndicator, closeIndicator, onClick }) => ({
 *     title: textDrawerElement.title,
 *     indicator: isOpen ? openIndicator : closeIndicator,
 *     onClick,
 *   }),
 *   renderer: TitleAndSubStd, // TS verifies the shape matches TitleAndSubStdProps
 * }),
 * ```
 */
export function defineEntry<RP>(e: RegistryEntry<RP>): RegistryEntry<RP> {
  return e;
}

