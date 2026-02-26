'use client';

import { LabelOnly } from './LabelOnly';
import { LinkedLabel } from './LinkedLabel';
import { Registry, defineEntry } from './rendersRegistryTypes';
import { SimpleText } from './SimpleText';
import { TitleAndSubDepth } from './TitleAndSubDepth';
import { TitleAndSubStd } from './TitleAndSubStd';
import { TitledText } from './TitledText';

/**
 * Default renderer registry — the set of renderers available to every
 * `TextDrawer` out of the box.
 *
 * @remarks
 * Each key is a `renderer` value that can appear in a `TextDrawerElement`
 * payload.  The registry is passed to `TextDrawer_Client` via
 * {@link TextTreeRendererContextType.rendersRegistry}.
 *
 * ## Available renderers
 *
 * | Key | Type | Component | Description |
 * |---|---|---|---|
 * | `simpleText` | `plainText` | `SimpleText` | Bare narrative text; uses `content` or falls back to `title`. |
 * | `titledText` | `paragraph` | `TitledText` | Label + optional subtitle + body text. |
 * | `labelOnly` | `plainText` | `LabelOnly` | Title rendered as a non-link label with no body. |
 * | `titleAndSubStd` | `section` | `TitleAndSubStd` | Collapsible section header at a fixed size. |
 * | `titleAndSubDepth` | `section` | `TitleAndSubDepth` | Collapsible section header that shrinks from h3→h4 at depth > 0. |
 * | `linkedLabel` | `plainText` | `LinkedLabel` | Clickable MUI link; requires `href` in the payload. |
 *
 * All entries are wrapped in {@link defineEntry} (except `simpleText` which is
 * inlined as a plain object — both approaches are valid) to ensure that the
 * `props` return shape is validated against the renderer's prop type at
 * compile time.
 *
 * @example
 * ```ts
 * // Using the default registry (automatic — no action needed)
 * <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />
 *
 * // Referencing the type for payload type-checking:
 * const payloads = { ... } as const satisfies Payload_Rg<DefaultRendersRegistry>;
 * ```
 */
export const defaultRendersRegistry = {
  /** Bare narrative text. Uses `content`; falls back to `title` when absent. Supports `sx`. */
  simpleText: {
    type: 'plainText',
    props: ({ textDrawerElement, textDrawerElementUI }) => ({
      text: textDrawerElement.content ?? textDrawerElement.title,
      sx: textDrawerElementUI?.sx,
    }),
    renderer: SimpleText,
  },
  /** Label + optional subtitle + body paragraph. Uses `content`; falls back to `title`. Supports `sx`. */
  titledText: defineEntry({
    type: 'paragraph',
    props: ({ textDrawerElement, textDrawerElementUI }) => ({
      title: textDrawerElement.title,
      subtitle: textDrawerElement.subtitle,
      text: textDrawerElement.content ?? textDrawerElement.title,
      sx: textDrawerElementUI?.sx,
    }),
    renderer: TitledText,
  }),
  /** Title-only label with no body content. Supports `sx`. */
  labelOnly: defineEntry({
    type: 'plainText',
    props: ({ textDrawerElement, textDrawerElementUI }) => ({
      title: textDrawerElement.title,
      sx: textDrawerElementUI?.sx,
    }),
    renderer: LabelOnly,
  }),
  /**
   * Collapsible section header — fixed heading size (h3 / `SubsectionTitle`).
   * Use when the section is always at the top level and heading size must not vary.
   */
  titleAndSubStd: defineEntry({
    type: 'section',
    props: ({ textDrawerElement, isOpen, openIndicator, closeIndicator, onClick }) => {
      const indicator = isOpen ? openIndicator : closeIndicator;
      return { title: textDrawerElement.title, subtitle: textDrawerElement.subtitle, indicator, onClick };
    },
    renderer: TitleAndSubStd,
  }),
  /**
   * Collapsible section header — depth-aware heading size.
   * Renders `SubsectionTitleLabel` (h3) at depth 0 and `SubsubsectionTitleLabel` (h4)
   * at depth > 0.  Prefer this over `titleAndSubStd` for sections that may be nested.
   */
  titleAndSubDepth: defineEntry({
    type: 'section',
    props: ({ textDrawerElement, isOpen, openIndicator, closeIndicator, onClick, depth }) => {
      const indicator = isOpen ? openIndicator : closeIndicator;
      return { title: textDrawerElement.title, subtitle: textDrawerElement.subtitle, indicator, onClick, depth };
    },
    renderer: TitleAndSubDepth,
  }),
  /**
   * Clickable link leaf node.  Requires `href` in the payload; falls back to `'#'`
   * if missing.  Supports `sx`.
   */
  linkedLabel: defineEntry({
    type: 'plainText',
    props: ({ textDrawerElement, textDrawerElementUI }) => ({
      title: textDrawerElement.title,
      href: textDrawerElement.href ?? '#',
      sx: textDrawerElementUI?.sx,
    }),
    renderer: LinkedLabel,
  }),
} as const satisfies Registry;

/**
 * Convenience type alias for the default registry — use as the type argument
 * to `Payload_Rg<DefaultRendersRegistry>` when defining payload constants.
 */
export type DefaultRendersRegistry = typeof defaultRendersRegistry;
