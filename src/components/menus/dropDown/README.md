# Dropdown Menu

The dropdown menu renders a desktop navigation bar with top-level nav groups
that open mega-menu panels. It is intentionally separate from the drawer menu
because its tree contract is different.

The dropdown tree is:

```txt
root
  navGroup
    link | group
      link | group
```

This means the root can only contain `navGroup` nodes. Nested content inside a
nav group can contain normal links and groups. This gives the dropdown renderer
a stable top-level navigation shape without relying on depth checks.

## Basic Usage

```tsx
import { DefaultLinkLike } from '../../../core/link';
import {
  DropDown,
  defaultRenderDropDownMenuNode,
  getDropDownMenuSelectors,
  type NavigationTree,
} from './index';

const navigationTree = {
  id: 'root',
  type: 'root',
  children: [
    {
      id: 'products',
      type: 'navGroup',
      label: 'Products',
      children: [
        {
          id: 'platform',
          type: 'group',
          label: 'Platform',
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
    },
  ],
} as const satisfies NavigationTree;

const selectors = getDropDownMenuSelectors({
  navigationTree,
  currentPath: '/products/analytics',
});

const nodesRenderer = defaultRenderDropDownMenuNode({});

export function Navigation() {
  return (
    <DropDown
      navigationTree={navigationTree}
      selectors={selectors}
      rendererContext={{
        LinkComponent: DefaultLinkLike,
        basePadding: 2,
        nodesRenderer,
      }}
    />
  );
}
```

The dropdown root does not compute `currentPath` itself. That keeps routing
concerns outside the renderer and makes the component easier to use in SSR
frameworks where path state may live in framework-specific hooks.

## Tree Data

Dropdown tree types live in `DropDownMenuTreeTypes.ts`.

The root is a `NavigationTree`:

```ts
export type NavigationTree = {
  id: 'root';
  type: 'root';
  children: NavigationBarGroupNode[];
};
```

Top-level children are nav groups:

```ts
export type NavigationBarGroupNode = {
  id: string;
  type: 'navGroup';
  label: string;
  children: NavigationTreeNode[];
};
```

Nested children are normal links or groups:

```ts
export type NavigationTreeNode = NavigationLinkNode | NavigationGroupNode;
```

This distinction is the main difference from the drawer menu. A `navGroup`
means "render this as an item in the navigation bar"; a nested `group` means
"render this as a section inside the mega menu".

## Selection

`getDropDownMenuSelectors` in `DropDownMenuSelectors.ts` walks the
`NavigationTree` and compares link `href` values to `currentPath`.

It returns:

```ts
export type DropDownMenuSelectors = {
  isSelected: (nodeId: string) => boolean;
  isAncestorSelected: (nodeId: string) => boolean;
  selectedId: string | null;
  selectedPathIds: string[];
};
```

For a selected nested link, `selectedPathIds` contains the top-level nav group
id and any nested group ids on the path to that link. Components use this to
highlight selected nav groups and selected sections.

## Rendering Registry

The default registry lives in `defaultDropDownMenuRegistry.tsx`.

It maps node kinds to renderers:

```txt
link     -> DropDownLink
group    -> DropDownGroup
navGroup -> DropDownNavGroup
```

`defaultRenderDropDownMenuNode` returns the recursive `nodesRenderer` function
used by the root, nav groups, and nested groups. It accepts an optional registry
and optional runtime overrides.

```tsx
const nodesRenderer = defaultRenderDropDownMenuNode({
  runtimeOverrides: {
    link: {
      analytics: {
        disabled: true,
      },
    },
  },
});
```

## Runtime Overrides

Runtime overrides are keyed by render node kind and node id:

```tsx
const nodesRenderer = defaultRenderDropDownMenuNode({
  runtimeOverrides: {
    navGroup: {
      products: {
        headerProps: { color: 'primary' },
      },
    },
    group: {
      platform: {
        labelTypographyProps: { fontWeight: 700 },
      },
    },
    link: {
      analytics: {
        disabled: true,
      },
    },
  },
});
```

Use overrides for presentational changes. Keep the tree itself focused on
serializable navigation data: ids, type, label, href, icon key, and children.

## Mega Menu Layout

`DropDownNavGroup` owns the MUI `Popover`. Its internal `MegaMenu` function
lays out the rendered children using a CSS grid:

```tsx
display="grid"
gridAutoFlow="column"
gridAutoColumns="minmax(180px, 1fr)"
columnGap={3}
rowGap={2}
padding={3}
```

Callers can pass `megaMenuProps` through nav group overrides to tune the panel
layout. The popover already provides the paper surface, so the mega menu only
owns the inner grid.

## Link Components

`DropDownLink` reads `LinkComponent` from `DropDownMenuRenderContext`.
Consumers can pass a plain anchor-compatible component, or a framework adapter
such as a Next.js link wrapper.

```tsx
rendererContext={{
  LinkComponent: NextLinkAdapter,
  basePadding: 2,
  nodesRenderer,
}}
```

The component must satisfy `LinkTypeComponent` from `core/link`.

## Import Notes

This folder has its own barrel file in `index.ts`. The examples above use that
local barrel because the package-level dropdown subpath is not currently shown
in `package.json` exports. If a public dropdown subpath is added later,
consumers can import the same symbols from that subpath.

## File Guide

### `DropDown.tsx`

The root navigation bar. It renders the MUI `AppBar` and `Toolbar`, provides
selection, render, and depth contexts, and renders root `navGroup` nodes.

### `DropDownMenuTreeTypes.ts`

Pure TypeScript tree and registry helper types for the dropdown menu. The file
defines the dropdown-specific `navGroup` root invariant.

### `DropDownMenuSelectors.ts`

Pure selector logic for `NavigationTree`. It converts a current path into a
selected link id and selected ancestor ids.

### `defaultDropDownMenuRegistry.tsx`

Default rendering registry for dropdown nodes. It connects `link`, `group`,
and `navGroup` nodes to their default React components and exposes
`defaultRenderDropDownMenuNode`.

### `DropDownNavGroup.tsx`

Renders a top-level navigation item and owns the MUI `Popover` that displays
the mega menu panel. It passes nested items to the recursive node renderer.

### `DropDownGroup.tsx`

Renders a section inside a mega menu panel. It reads depth from
`MenuDepthContext`, applies indentation for nested groups, and recursively
renders child nodes.

### `DropDownLink.tsx`

Renders a link with MUI `Button`. It reads selected state from the shared
selection context and link behavior from `DropDownMenuRenderContext`.

### `DropDownMenuRendererContext.ts`

React context for dropdown rendering dependencies: node renderer, link
component, and base indentation.

### `DropDownMenu.stories.tsx`

Ladle story showing a direct `NavigationTree`, selector creation, default
renderer creation, and root `DropDown` usage.

### `index.ts`

Public exports for the dropdown menu folder.

## SSR Notes

The tree, selectors, and registry contracts are plain TypeScript-friendly data
and functions. The rendered dropdown is client-oriented because it uses MUI
Popover and React interaction state inside `DropDownNavGroup`.

Keep routing hooks and framework-specific path logic outside `DropDown`; pass
the computed `selectors` and `rendererContext` in from the calling site.
