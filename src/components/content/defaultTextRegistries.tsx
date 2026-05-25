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

export type AnyRenderTextNode = {
  [K in keyof DefaultRenderingContract]: DefaultRenderingContract[K]['node'];
}[keyof DefaultRenderingContract];

/// this is the prototype of the entry of the registry
// this is wrong --> K extends keyof DefaultRenderingContract
// should be K extends TextNodeKeys but we need to make it work now
type RenderedTextRegistryEntry<
  K extends TextNodeKind,
  D extends DefaultRenderingContract = DefaultRenderingContract,
> = {
  type: K;
  rendering: ({
    node,
    overrides,
    Component,
  }: {
    node: D[K]['node'];
    overrides?: Partial<D[K]['props']>;
    Component?: React.ComponentType<D[K]['props']>;
  }) => ReactNode;
};

// then we define the registry
export type RenderedTextRegistry<D extends DefaultRenderingContract = DefaultRenderingContract> = {
  [K in TextNodeKind]: RenderedTextRegistryEntry<K, D>;
};

export function createDefaultRenderedRegistry<
  D extends DefaultRenderingContract = DefaultRenderingContract,
>(): RenderedTextRegistry<D> {
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

export type RenderTextNode<R extends RenderedTextRegistry> = ({
  node,
  renderedRegistry,
  // latexPropsOverride, I need tom implement the overrides
}: {
  node: AnyRenderTextNode;
  renderedRegistry: R;
  // latexPropsOverride?: LatexPropsOverrides<any>;
}) => { rendered: React.ReactNode };

export function defaultRenderTextNode<R extends RenderedTextRegistry>(): RenderTextNode<R>  {

function renderWithOverrides<T extends RenderingLabels>(
    type: T,
    node: RenderingNodes[T],
  ) {
    const overrides = latexPropsOverride?.[type]?.[node.id];
    return {
      rendered: renderedRegistry[type].rendering({ node, overrides }),
    };
  }
  return ({node,renderedRegistry}) => {

     const nodeType = node.type;

     if(nodeType==='code') {
      
      return renderedRegistry[nodeType].rendering(node);
     }

  }




}