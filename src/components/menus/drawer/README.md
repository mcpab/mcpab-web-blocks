# Drawer Menu

The drawer menu renders a recursive navigation tree inside a Material UI
`Drawer`. It is designed as a small renderer over plain data: the menu shape,
selection state, rendering registry, and open/closed drawer state are kept in
separate files so the pieces can be changed independently.

The drawer tree is intentionally simple:

```txt
root
  link | group
    link | group
```

Use this menu when the root of the tree may contain either direct links or
groups. If the root must contain only top-level navigation groups for a desktop
mega menu, use the dropdown menu instead.

## Basic Usage

```tsx
import {
  DrawerMenuRoot,
  type DrawerMenuTree,
} from './index';

const menuTree = {
  id: 'root',
  type: 'root',
  children: [
    {
      id: 'home',
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      id: 'products',
      type: 'group',
      label: 'Products',
      children: [
        {
          id: 'analytics',
          type: 'link',
          label: 'Analytics',
          href: '/products/analytics',
        },
      ],
    },
  ],
} as const satisfies DrawerMenuTree;

export function Menu() {
  return (
    <DrawerMenuRoot
      currentPath="/products/analytics"
      menuTree={menuTree}
    />
  );
}
```

`DrawerMenuRoot` computes the selected item from `currentPath`, opens ancestor
groups by default, creates the render context, and renders the drawer trigger.

## Tree Data

Drawer tree types live in `DrawerMenuTreeTypes.ts`.

The root is a `DrawerMenuTree`:

```ts
export type DrawerMenuTree = {
  id: 'root';
  type: 'root';
  children: DrawerMenuTreeNode[];
};
```

Each child is either a link or a group:

```ts
export type DrawerMenuLinkNode = {
  id: string;
  type: 'link';
  label: string;
  href: string;
  iconKey?: string;
};

export type DrawerMenuGroupNode = {
  id: string;
  type: 'group';
  label: string;
  children: DrawerMenuTreeNode[];
};
```

Node ids are used for React keys, selected state, open group state, and runtime
overrides. Keep them stable.

## Selection

`getDrawerMenuSelectors` in `DrawerMenuSelectors.ts` walks a `DrawerMenuTree`
and compares link `href` values to `currentPath`.

It returns:

```ts
export type DrawerMenuSelectors = {
  isSelected: (nodeId: string) => boolean;
  isAncestorSelected: (nodeId: string) => boolean;
  selectedId: string | null;
  selectedPathIds: string[];
};
```

For a selected nested link, `selectedPathIds` contains the group ids on the path
to that link. `DrawerMenuRoot` uses those ids to open selected ancestor groups
when the drawer store is created.

## Rendering Registry

The default renderer lives in `defaultDrawerMenuRegistry.tsx`.

The registry maps node kinds to React renderers:

```txt
link  -> DrawerMenuLink
group -> DrawerMenuGroup
```

`defaultRenderDrawerMenuNode` returns a `nodesRenderer` function used by
`DrawerMenuRoot` and nested groups. It accepts optional runtime overrides keyed
by node type and node id.

```tsx
const nodesRenderer = defaultRenderDrawerMenuNode({
  runtimeOverrides: {
    link: {
      careers: {
        disabled: true,
      },
    },
  },
});
```

Most consumers should use `DrawerMenuRoot` directly and pass `treeOverrides`.
Reach for the registry only when you need to replace rendering behavior.

## Runtime Overrides

`treeOverrides` lets callers customize individual nodes without modifying the
tree data:

```tsx
<DrawerMenuRoot
  currentPath="/company/careers"
  menuTree={menuTree}
  treeOverrides={{
    group: {
      products: {
        labelTypographyProps: { fontWeight: 700 },
      },
    },
    link: {
      careers: {
        disabled: true,
      },
    },
  }}
/>
```

The runtime override shape is:

```ts
export type RuntimeDrawerMenuTreeOverrides = {
  [K in DrawerMenuNodeKind]?: Record<
    string,
    Partial<DefaultDrawerMenuRenderingProps[K]>
  >;
};
```

## Link Components

`DrawerMenuRoot` accepts `LinkComponent`. By default it uses a plain anchor-like
component. Next.js consumers can pass an anchor-compatible link adapter.

```tsx
<DrawerMenuRoot
  currentPath={pathname}
  menuTree={menuTree}
  LinkComponent={NextLinkAdapter}
/>
```

The component must satisfy `LinkTypeComponent` from `core/link`.

## Import Notes

This folder has its own barrel file in `index.ts`. The examples above use that
local barrel because the package-level drawer subpath is not currently shown in
`package.json` exports. If a public drawer subpath is added later, consumers can
import the same symbols from that subpath.

## File Guide

### `DrawerMenuRoot.tsx`

The composition root for the drawer menu. It owns the MUI `Drawer`, the open
drawer button, selector creation, drawer store creation, and React providers.

Use this file when you want the complete drawer experience.

### `DrawerMenuTreeTypes.ts`

Pure TypeScript tree types for the drawer menu. This file does not import React
or MUI and should stay as data contracts only.

### `DrawerMenuSelectors.ts`

Pure tree-walking selector logic. It converts `currentPath` into selected ids
and selected ancestor ids. It should stay deterministic and UI-free.

### `defaultDrawerMenuRegistry.tsx`

Default rendering registry for drawer nodes. It connects data nodes to
`DrawerMenuGroup` and `DrawerMenuLink`, and exposes `defaultRenderDrawerMenuNode`
for recursive rendering.

### `DrawerMenuGroup.tsx`

Renders a collapsible group inside the drawer. It reads depth from
`MenuDepthContext`, open state from the drawer menu store, and recursively
renders child nodes through the render context.

### `DrawerMenuLink.tsx`

Renders a link row using MUI `ListItemButton`. It reads selected state from the
shared selection context and link behavior from the drawer render context.

### `DrawerMenuRenderContext.ts`

React context for rendering dependencies: the node renderer, link component,
open/close indicators, and indentation base padding.

### `DrawerMenuControllerContext.ts`

React context for the drawer menu store. Group components use this to read and
update their open/closed state.

### `drawerMenuStore.ts`

Small external store for group open state. It uses `useSyncExternalStore` so
each group can subscribe to only the state it needs.

### `DrawerMenuRoot.stories.tsx`

Ladle story showing a realistic nested drawer tree, selected path, and runtime
overrides.

### `index.ts`

Public exports for the drawer menu folder.

## SSR Notes

The drawer renderer is client-oriented because it uses React state, MUI Drawer,
Collapse, and external-store subscriptions. Keep pure data and selectors outside
React components, and keep client boundaries close to the renderer.
