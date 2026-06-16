import type { ReactNode } from 'react';
import { IconPicker } from '../../../lib/icon/IconPicker';
import { DropDownGroup, type DropDownGroupProps } from './DropDownGroup';
import { DropDownLink, type DropDownLinkProps } from './DropDownLink';
import type {
  AnyNavigationNode,
  RenderedNavigationRegistry,
  RuntimeNavigationTreeOverrides,
} from './DropDownMenuTreeTypes';
import { DropDownNavGroup, type DropDownNavGroupProps } from './DropDownNavGroup';

export type DefaultDropDownMenuRenderingProps = {
  link: DropDownLinkProps;
  group: DropDownGroupProps;
  navGroup: DropDownNavGroupProps;
};

export const defaultDropDownMenuRegistry = {
  link: {
    type: 'link',
    rendering({ node, overrides }) {
      const Icon = <IconPicker name={node.iconKey ?? node.label} />;
      return (
        <DropDownLink href={node.href} id={node.id} label={node.label} icon={Icon} {...overrides} />
      );
    },
  },
  group: {
    type: 'group',
    rendering({ node, overrides }) {
      return <DropDownGroup id={node.id} items={node.children} label={node.label} {...overrides} />;
    },
  },
  navGroup: {
    type: 'navGroup',
    rendering({ node, overrides }) {
      return (
        <DropDownNavGroup id={node.id} items={node.children} label={node.label} {...overrides} />
      );
    },
  },
} satisfies RenderedNavigationRegistry<DefaultDropDownMenuRenderingProps>;

export type RenderDropDownMenuNode = (args: { node: AnyNavigationNode }) => {
  rendered: ReactNode;
};

export function defaultRenderDropDownMenuNode({
  renderedRegistry = defaultDropDownMenuRegistry,
  runtimeOverrides,
}: {
  renderedRegistry?: RenderedNavigationRegistry<DefaultDropDownMenuRenderingProps>;
  runtimeOverrides?: RuntimeNavigationTreeOverrides<DefaultDropDownMenuRenderingProps>;
}): RenderDropDownMenuNode {
  //
  const rt: RenderDropDownMenuNode = ({ node }) => {
    const nodeType = node.type;
    const nodeId = node.id;

    if (nodeType === 'group') {
      const groupNode = node;
      const overrides = runtimeOverrides?.[nodeType]?.[nodeId];

      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: groupNode,
          overrides,
        }),
      };
    } else if (nodeType === 'link') {
      const linkNode = node;
      const overrides = runtimeOverrides?.[nodeType]?.[nodeId];

      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: linkNode,
          overrides,
        }),
      };
    } else if (nodeType === 'navGroup') {
      const linkNode = node;
      const overrides = runtimeOverrides?.[nodeType]?.[nodeId];

      return {
        rendered: renderedRegistry[nodeType].rendering({
          node: linkNode,
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
