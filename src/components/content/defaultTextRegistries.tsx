import { ReactNode } from 'react';
import { RenderedRegistry } from '../../core/rendering/RegistryTypes';
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

/// Here we define the labels
export type SectionKind = 'section';
export type SubSectionKind = 'subsection';
export type RichText = 'richText';
export type InlineTextKind = 'text' | 'strong' | 'emphasis' | 'strongEmphasis' | 'code' | 'link';

export type TextNodeKind = InlineTextKind; //| SectionKind | SubSectionKind | RichText;

export type BlockTextKind = SectionKind | SubSectionKind;

// this is the default contract, the only source of truth between nodes and props
export type DefaultRenderingContract = {
  // Inline
  text: {
    node: {
      type: 'text';
      body: string;
    };
    props: InlineTextProps;
  };
  strong: {
    node: {
      type: 'strong';
      body: string;
    };
    props: InlineStrongProps;
  };
  emphasis: {
    node: {
      type: 'emphasis';
      body: string;
    };
    props: InlineEmphasisProps;
  };
  strongEmphasis: {
    node: {
      type: 'strongEmphasis';
      body: string;
    };
    props: InlineStrongEmphasisProps;
  };
  code: {
    node: {
      type: 'code';
      body: string;
    };
    props: InlineCodeProps;
  };
  link: {
    node: {
      type: 'link';
      body: string;
      href: string;
    };
    props: InlineLinkProps;
  };
};

// here we create the list of all possible text nodes
export type TextNodeMap = {
  [K in keyof DefaultRenderingContract]: DefaultRenderingContract[K]['node'];
};
export type PropsNodeMap = {
  [K in keyof DefaultRenderingContract]: DefaultRenderingContract[K]['props'];
};

export type AnyRenderTextNode = TextNodeMap[keyof DefaultRenderingContract];
export type AnyRenderTextProp = PropsNodeMap[keyof DefaultRenderingContract];

/// this is the prototype of the entry of the registry
// this is wrong --> K extends keyof DefaultRenderingContract
// should be K extends TextNodeKeys but we need to make it work now
type RenderedTextRegistryEntry<K extends TextNodeKind> = {
  type: K;
  rendering: ({
    node,
    overrides,
    Component,
  }: {
    node: TextNodeMap[K];
    overrides?: Partial<PropsNodeMap[K]>;
    Component?: React.ComponentType<PropsNodeMap[K]>;
  }) => ReactNode;
};

// then we define the registry type
export type RenderedTextRegistry = {
  [K in TextNodeKind]: RenderedTextRegistryEntry<K>;
};

// and the actual instance
export function createDefaultRenderedRegistry(): RenderedTextRegistry {
  return {
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
  };
}

// this is the type of the function passed in the context
export type RenderTextNode<R extends RenderedTextRegistry> = ({
  node,
  renderedRegistry,
  // latexPropsOverride, I need tom implement the overrides
}: {
  node: AnyRenderTextNode;
  renderedRegistry: R;
  // latexPropsOverride?: LatexPropsOverrides<any>;
}) => { rendered: React.ReactNode };

export function defaultRenderTextNode<R extends RenderedTextRegistry>(): RenderTextNode<R> {
  //

  const rt: RenderTextNode<R> = ({ node, renderedRegistry }) => {
    //

    const nodeType = node.type;

    if (nodeType === 'code') {
      const rt = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: rt }) };
    } else if (nodeType === 'emphasis') {
      const rt = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: rt }) };
    } else if (nodeType === 'link') {
      const rt = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: rt }) };
    } else if (nodeType === 'strong') {
      const rt = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: rt }) };
    } else if (nodeType === 'strongEmphasis') {
      const rt = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: rt }) };
    } else if (nodeType === 'text') {
      const rt = node;
      return { rendered: renderedRegistry[nodeType].rendering({ node: rt }) };
    } else {
      const _exhaustive: never = node;
      return {
        rendered: <>Renderer registry is missing support for node type: {nodeType}</>,
      };
    }
  };

  return rt;
}
