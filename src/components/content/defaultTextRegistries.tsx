import type { ReactNode } from 'react';
import {
  InlineCode,
  InlineEmphasis,
  InlineLink,
  InlineStrong,
  InlineStrongEmphasis,
  InlineText,
  type InlineCodeProps,
  type InlineEmphasisProps,
  type InlineLinkProps,
  type InlineStrongEmphasisProps,
  type InlineStrongProps,
  type InlineTextProps,
} from './inline';

import { RichText } from './RichText';
import type { RichTextProps } from './RichText';
import { SubSection } from './SubSection';
import type { SubSectionProps } from './SubSection';
import { Section, type SectionProps } from './Section';

/// Here we define the labels
export type SectionKind = 'section';
export type SubSectionKind = 'subSection';
export type RichTextKind = 'richText';

export type TextKind = 'text';
export type StrongKind = 'strong';
export type EmphasisKind = 'emphasis';
export type StrongEmphasisKind = 'strongEmphasis';
export type CodeKind = 'code';
export type LinkKind = 'link';

export type InlineTextKind =
  | TextKind
  | StrongKind
  | EmphasisKind
  | StrongEmphasisKind
  | CodeKind
  | LinkKind;

export type TextNodeKind = InlineTextKind | RichTextKind | SubSectionKind | SectionKind;

export type BlockTextKind = SectionKind | SubSectionKind;

type SingleTextNode<K extends InlineTextKind> = {
  id: string;
  type: K;
  body: string;
};

export type InlineTextNodesMap = {
  text: SingleTextNode<TextKind>;
  strong: SingleTextNode<StrongKind>;
  emphasis: SingleTextNode<EmphasisKind>;
  strongEmphasis: SingleTextNode<StrongEmphasisKind>;
  code: SingleTextNode<CodeKind>;
  link: SingleTextNode<LinkKind> & { href: string };
};

export type AnyInlineTextNode = InlineTextNodesMap[InlineTextKind];

export type RichTextBlock = {
  id: string;
  type: RichTextKind;
  content: AnyInlineTextNode[];
};

export type SubSectionBlock = {
  id: string;
  title: RichTextBlock;
  type: SubSectionKind;
  content: RichTextBlock[];
};

export type SectionBlock = {
  id: string;
  type: SectionKind;
  title: RichTextBlock;
  content: (RichTextBlock | SubSectionBlock)[];
};

export type TextNodesMap = InlineTextNodesMap & {
  richText: RichTextBlock;
  subSection: SubSectionBlock;
  section: SectionBlock;
};

export type ContentTreeNode = RichTextBlock | SectionBlock | SubSectionBlock;

export type ContentTree = {
  type: 'root';
  id: 'root';
  children: ContentTreeNode[];
};

export type OverridableTypes = SectionKind | SubSectionKind;
function isOverridableType(type: TextNodeKind): type is OverridableTypes {
  return type === 'section' || type === 'subSection';
}
type NonOverridableContentProps = 'title' | 'content';

export type IdsOfType<T, I> = I extends { type: T; id: string }
  ? I['id']
  : I extends readonly (infer C)[]
    ? IdsOfType<T, C>
    : I extends Record<string, infer C>
      ? IdsOfType<T, C>
      : never;

export type TextTreeOverrides<T extends ContentTree> = {
  [K in OverridableTypes]?: Partial<{
    [ID in Extract<IdsOfType<K, T>, string>]: Partial<
      Omit<DefaultRenderingPropsMap[K], NonOverridableContentProps>
    >;
  }>;
};
export type AnyTextNode = TextNodesMap[TextNodeKind];

export type DefaultRenderingPropsMap = {
  text: InlineTextProps;
  strong: InlineStrongProps;
  emphasis: InlineEmphasisProps;
  strongEmphasis: InlineStrongEmphasisProps;
  code: InlineCodeProps;
  link: InlineLinkProps;
  richText: RichTextProps;
  subSection: SubSectionProps;
  section: SectionProps;
};

/// this is the prototype of the entry of the registry
// this is wrong --> K extends keyof DefaultRenderingContract
// should be K extends TextNodeKeys but we need to make it work now
type RenderedTextRegistryEntry<K extends TextNodeKind> = {
  type: K;
  rendering: ({
    node,
    overrides,
  }: {
    node: TextNodesMap[K];
    overrides?: Partial<DefaultRenderingPropsMap[K]>;
  }) => ReactNode;
};

// then we define the registry type
export type RenderedTextRegistry = {
  [K in TextNodeKind]: RenderedTextRegistryEntry<K>;
};

export const defaultRenderedRegistry = {
  text: {
    type: 'text',
    rendering({ node, overrides }) {
      return <InlineText body={node.body} {...overrides} />;
    },
  },
  strong: {
    type: 'strong',
    rendering({ node, overrides }) {
      return <InlineStrong body={node.body} {...overrides} />;
    },
  },
  emphasis: {
    type: 'emphasis',
    rendering({ node, overrides }) {
      return <InlineEmphasis body={node.body} {...overrides} />;
    },
  },
  strongEmphasis: {
    type: 'strongEmphasis',
    rendering({ node, overrides }) {
      return <InlineStrongEmphasis body={node.body} {...overrides} />;
    },
  },
  code: {
    type: 'code',
    rendering({ node, overrides }) {
      return <InlineCode body={node.body} {...overrides} />;
    },
  },
  link: {
    type: 'link',
    rendering({ node, overrides }) {
      return <InlineLink body={node.body} href={node.href} {...overrides} />;
    },
  },
  richText: {
    type: 'richText',
    rendering({ node, overrides }) {
      return <RichText inlineNodes={node.content} {...overrides} />;
    },
  },
  subSection: {
    type: 'subSection',
    rendering({ node, overrides }) {
      return <SubSection title={node.title} content={node.content} hasDivider {...overrides} />;
    },
  },
  section: {
    type: 'section',
    rendering({ node, overrides }) {
      return (
        <Section
          defaultOpen
          content={node.content}
          title={node.title}
          collapsible
          hasDivider
          {...overrides}
        />
      );
    },
  },
} satisfies RenderedTextRegistry;

// this is the type of the function passed in the context
export type RenderTextNode = (args: { node: AnyTextNode }) => { rendered: React.ReactNode };

const isValidId = <T extends ContentTree, K extends TextNodeKind>(
  textOverrides: TextTreeOverrides<T> | undefined,
  type: K,
  id: string,
): id is Extract<IdsOfType<K, T>, string> => {
  //

  if (!isOverridableType(type)) return false;
  if (textOverrides === undefined) return false;
  if (textOverrides[type] === undefined) return false;
  if (id in textOverrides[type]) {
    return true;
  }
  return false;
};

export function defaultRenderTextNode<T extends ContentTree>({
  contentTree,
  renderedRegistry = defaultRenderedRegistry,
  textOverrides,
}: {
  contentTree: T;
  renderedRegistry?: RenderedTextRegistry;
  textOverrides?: TextTreeOverrides<T>;
}): RenderTextNode {
  //
  void contentTree;

  const rt: RenderTextNode = ({ node }) => {
    //
    const nodeType = node.type;
    const nodeId = node.id;

    if (nodeType === 'code') {
      const codeNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: codeNode }) };
    } else if (nodeType === 'emphasis') {
      const emphasisNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: emphasisNode }) };
    } else if (nodeType === 'link') {
      const linkNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: linkNode }) };
    } else if (nodeType === 'strong') {
      const strongNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: strongNode }) };
    } else if (nodeType === 'strongEmphasis') {
      const strongEmphasisNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: strongEmphasisNode }) };
    } else if (nodeType === 'text') {
      const textNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: textNode }) };
    } else if (nodeType === 'richText') {
      const richTextNode = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: richTextNode }) };
    } else if (nodeType === 'subSection') {
      const subSectionNode = node;
      const overrides = isValidId(textOverrides, nodeType, nodeId)
        ? textOverrides?.[nodeType]?.[nodeId]
        : undefined;

      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: subSectionNode,
          overrides,
        }),
      };
    } else if (nodeType === 'section') {
      const sectionNode = node;
      const overrides = isValidId(textOverrides, nodeType, nodeId)
        ? textOverrides?.[nodeType]?.[nodeId]
        : undefined;

      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: sectionNode,
          overrides,
        }),
      };
    } else {
      const _exhaustive: never = node;
      void _exhaustive;
      return {
        rendered: <>Renderer registry is missing support for node type: {nodeType}</>,
      };
    }
  };

  return rt;
}
