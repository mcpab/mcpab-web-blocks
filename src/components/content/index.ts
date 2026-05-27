/**
 * Content rendering primitives.
 *
 * This barrel exports the current rich-text/content-tree renderer pieces only.
 * The previous TextDrawer stack has been removed from this folder, so it is not
 * re-exported here.
 */

export { ContentTreeView } from './ContentTreeView';
export type { ContentTreeViewProps } from './ContentTreeView';

export { RichText } from './RichText';
export type { RichTextProps } from './RichText';

export { Section } from './Section';
export type { SectionProps } from './Section';

export { SubSection } from './SubSection';
export type { SubSectionProps } from './SubSection';

export {
  TextTreeRendererContext,
  useTextTreeRendererContext,
} from './TextTreeRenderContext';
export type { TextTreeRendererContextType } from './TextTreeRenderContext';

export {
  defaultRenderTextNode,
  defaultRenderedRegistry,
} from './defaultTextRegistries';
export type {
  AnyInlineTextNode,
  AnyTextNode,
  BlockTextKind,
  CodeKind,
  ContentTree,
  ContentTreeNode,
  DefaultRenderingPropsMap,
  EmphasisKind,
  IdsOfType,
  InlineTextKind,
  InlineTextNodesMap,
  LinkKind,
  OverridableTypes,
  RenderedTextRegistry,
  RenderTextNode,
  RichTextBlock,
  RichTextKind,
  SectionBlock,
  SectionKind,
  StrongEmphasisKind,
  StrongKind,
  SubSectionBlock,
  SubSectionKind,
  TextKind,
  TextNodeKind,
  TextNodesMap,
  TextTreeOverrides,
} from './defaultTextRegistries';

export {
  InlineCode,
  InlineEmphasis,
  InlineLink,
  InlineStrong,
  InlineStrongEmphasis,
  InlineText,
} from './inline';
export type {
  InlineCodeProps,
  InlineEmphasisProps,
  InlineLinkProps,
  InlineStrongEmphasisProps,
  InlineStrongProps,
  InlineTextProps,
} from './inline';

export { parseInlineText } from './parseInlineText';
export type { ParseInlineTextOptions } from './parseInlineText';
