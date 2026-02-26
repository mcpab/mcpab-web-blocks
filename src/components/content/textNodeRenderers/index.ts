/**
 * Text node renderers — the visual building blocks of the TextDrawer.
 *
 * @remarks
 * Each renderer is a plain React component paired with a factory function that
 * maps the comprehensive {@link TextPolicyProps} onto the component's specific
 * prop shape.  The pairing is registered in {@link defaultRendersRegistry} and
 * keyed by the `renderer` field of each `TextDrawerElement`.
 *
 * ## Leaf renderers (type `'plainText'` / `'paragraph'`)
 * | Export | Registry key | Description |
 * |---|---|---|
 * | `SimpleText` | `simpleText` | Bare narrative text block. |
 * | `TitledText` | `titledText` | Label heading + body paragraph. |
 * | `LabelOnly` | `labelOnly` | Title-only styled label, no body. |
 * | `LinkedLabel` | `linkedLabel` | Clickable navigation link. |
 *
 * ## Section renderers (type `'section'`)
 * | Export | Registry key | Description |
 * |---|---|---|
 * | `TitleAndSubStd` | `titleAndSubStd` | Fixed-size collapsible section header. |
 * | `TitleAndSubDepth` | `titleAndSubDepth` | Depth-aware collapsible section header. |
 *
 * ## Registry types
 * The registry type system (`Registry`, `RegistryEntry`, `TextPolicyProps`,
 * `defineEntry`, `TextDrawerElement_Rg`, `Payload_Rg`) is re-exported from
 * `rendersRegistryTypes` for use when building custom registries.
 */

// Registry type system
export type {
  TextTypes,
  TextPolicyProps,
  RegistryEntry,
  Registry,
  TextDrawerElement_Rg,
  Payload_Rg,
  Renderers,
  FilterTypesInRegistry,
  GetTypesInRegistry,
} from './rendersRegistryTypes';
export { defineEntry } from './rendersRegistryTypes';

// Default registry
export { defaultRendersRegistry } from './defaultTextPolicyRegister';
export type { DefaultRendersRegistry } from './defaultTextPolicyRegister';

// Leaf renderers
export { SimpleText } from './SimpleText';
export type { SimpleTextProps } from './SimpleText';

export { TitledText } from './TitledText';
export type { TitledTextProps } from './TitledText';

export { LabelOnly } from './LabelOnly';
export type { LabelOnlyProps } from './LabelOnly';

export { LinkedLabel } from './LinkedLabel';
export type { LinkedLabelProps } from './LinkedLabel';

// Section renderers
export { TitleAndSubStd } from './TitleAndSubStd';
export type { TitleAndSubStdProps } from './TitleAndSubStd';

export { TitleAndSubDepth } from './TitleAndSubDepth';
export type { TitleAndSubDepthProps } from './TitleAndSubDepth';
