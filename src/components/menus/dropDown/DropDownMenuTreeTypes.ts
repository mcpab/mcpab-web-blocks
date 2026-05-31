import type { ReactNode } from 'react';

export type NavigationLinkKind = 'link';
export type NavigationGroupKind = 'group';
export type NavigationRootKind = 'root';
export type NavigationBarGroupKind = 'navGroup';

export type NavigationNodeKind =
  | NavigationLinkKind
  | NavigationGroupKind
  | NavigationBarGroupKind;

export type NavigationLinkNode = {
  id: string;
  type: NavigationLinkKind;
  label: string;
  href: string;
  iconKey?: string;
};

export type NavigationGroupNode = {
  id: string;
  type: NavigationGroupKind;
  label: string;
  children: NavigationTreeNode[];
};

export type NavigationTreeNode = NavigationLinkNode | NavigationGroupNode;

export type NavigationBarGroupNode = {
  id: string;
  type: NavigationBarGroupKind;
  label: string;
  children: NavigationTreeNode[];
};

export type NavigationTree = {
  id: 'root';
  type: NavigationRootKind;
  children: NavigationBarGroupNode[];
};

export type NavigationNodeMap = {
  link: NavigationLinkNode;
  group: NavigationGroupNode;
  navGroup: NavigationBarGroupNode;
};

export type AnyNavigationNode = NavigationNodeMap[NavigationNodeKind];

export type RenderedNavigationRegistryEntry<
  K extends NavigationNodeKind,
  P extends object,
> = {
  type: K;
  rendering: ({
    node,
    overrides,
  }: {
    node: NavigationNodeMap[K];
    overrides?: Partial<P>;
  }) => ReactNode;
};

export type NavigationRenderingPropsMap = {
  [K in NavigationNodeKind]: object;
};

export type RenderedNavigationRegistry<
  PropsMap extends NavigationRenderingPropsMap,
> = {
  [K in NavigationNodeKind]: RenderedNavigationRegistryEntry<K, PropsMap[K]>;
};

export type IdsOfType<T, I> = I extends { type: T; id: string }
  ? I['id']
  : I extends readonly (infer C)[]
    ? IdsOfType<T, C>
    : I extends Record<string, infer C>
      ? IdsOfType<T, C>
      : never;

export type NavigationTreeOverrides<
  T extends NavigationTree,
  PropsMap extends NavigationRenderingPropsMap,
> = {
  [K in NavigationNodeKind]?: Partial<{
    [ID in Extract<IdsOfType<K, T>, string>]: Partial<PropsMap[K]>;
  }>;
};

export type RuntimeNavigationTreeOverrides<
  PropsMap extends NavigationRenderingPropsMap,
> = {
  [K in NavigationNodeKind]?: Record<string, Partial<PropsMap[K]>>;
};