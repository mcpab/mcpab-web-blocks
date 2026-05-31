import type { ReactNode } from 'react';

import { IconPicker } from '../../../lib/icon';
import type {
  AnyDrawerMenuNode,
  DrawerMenuNodeKind,
  DrawerMenuNodeMap,
  DrawerMenuTree,
} from './DrawerMenuTreeTypes';
import type { DrawerMenuLinkProps } from './DrawerMenuLink';
import { DrawerMenuLink } from './DrawerMenuLink';
import type { DrawerMenuGroupProps } from './DrawerMenuGroup';
import { DrawerMenuGroup } from './DrawerMenuGroup';

export type DefaultDrawerMenuRenderingProps = {
  link: DrawerMenuLinkProps;
  group: DrawerMenuGroupProps;
};

type RenderedDrawerMenuRegistryEntry<K extends DrawerMenuNodeKind> = {
  type: K;
  rendering: ({
    node,
    overrides,
  }: {
    node: DrawerMenuNodeMap[K];
    overrides?: Partial<DefaultDrawerMenuRenderingProps[K]>;
  }) => ReactNode;
};

export type RenderedDrawerMenuRegistry = {
  [K in DrawerMenuNodeKind]: RenderedDrawerMenuRegistryEntry<K>;
};

export type IdsOfType<T, I> = I extends { type: T; id: string }
  ? I['id']
  : I extends readonly (infer C)[]
    ? IdsOfType<T, C>
    : I extends Record<string, infer C>
      ? IdsOfType<T, C>
      : never;

export type DrawerMenuTreeOverrides<T extends DrawerMenuTree> = {
  [K in DrawerMenuNodeKind]?: Partial<{
    [ID in Extract<IdsOfType<K, T>, string>]: Partial<DefaultDrawerMenuRenderingProps[K]>;
  }>;
};

export type RuntimeDrawerMenuTreeOverrides = {
  [K in DrawerMenuNodeKind]?: Record<string, Partial<DefaultDrawerMenuRenderingProps[K]>>;
};

export const defaultDrawerMenuRegistry: RenderedDrawerMenuRegistry = {
  group: {
    type: 'group',
    rendering({ node, overrides }) {
      return (
        <DrawerMenuGroup
          id={node.id}
          items={node.children}
          label={node.label}
          {...overrides}
        />
      );
    },
  },
  link: {
    type: 'link',
    rendering({ node, overrides }) {
      const Icon = <IconPicker name={node.iconKey ?? node.label} />;
      return (
        <DrawerMenuLink
          href={node.href}
          label={node.label}
          disabled={false}
          id={node.id}
          icon={Icon}
          {...overrides}
        />
      );
    },
  },
};

export type RenderDrawerMenuNode = (args: { node: AnyDrawerMenuNode }) => {
  rendered: ReactNode;
};

export function defaultRenderDrawerMenuNode({
  renderedRegistry = defaultDrawerMenuRegistry,
  runtimeOverrides,
}: {
  renderedRegistry?: RenderedDrawerMenuRegistry;
  runtimeOverrides?: RuntimeDrawerMenuTreeOverrides;
}): RenderDrawerMenuNode {
  //
  const rt: RenderDrawerMenuNode = ({ node }) => {
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
