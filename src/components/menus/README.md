# Menu System

A tree-based, policy-driven navigation system with two rendering variants: a collapsible slide-in **DrawerMenu** and a horizontal **DropDown** mega menu bar. Both share the same hierarchy data model, context infrastructure, and row-styling pattern.

---

## Variants

### `DrawerMenu`

A slide-in side panel with nested collapsible items. Each node toggles open/closed independently via a shared `menuStore`. Open/close state persists for the lifetime of the component.

```tsx
import { DrawerMenu } from 'src/components/menus/drawer/DrawerMenu';
import { hierarchyToDrawerProps } from 'src/components/menus/drawer/hierarchyToDrawerProps';

const result = hierarchyToDrawerProps({ hierarchy, overrides, indent: 2 });
if (result.ok) {
  return (
    <DrawerMenu
      {...result}
      anchor="left"
      selector={(id) => id === currentPageId}
    />
  );
}
```

### `DropDown`

A sticky `AppBar` where top-level items open MUI `Popover` panels (mega menus) laid out in columns. Depth-1 items are column headers; depth-2+ items are column entries.

```tsx
import { DropDown } from 'src/components/menus/dropDown/DropDown';
import { hierarchyToDrawerProps } from 'src/components/menus/drawer/hierarchyToDrawerProps';

const result = hierarchyToDrawerProps({ hierarchy, overrides });
if (result.ok) {
  return (
    <DropDown
      {...result}
      selector={(id) => id === currentPageId}
      megaMenuPolicy={compactMegaMenuPolicy}
    />
  );
}
```

> Both variants accept props built by **`hierarchyToDrawerProps`** — there is no separate builder for `DropDown`.

---

## Building Props — `hierarchyToDrawerProps`

Validates the raw hierarchy definition and converts it to the `MenuProps` shape expected by both variants. Returns `{ ok: false, issues }` on validation failure so errors can be surfaced before rendering.

Internally calls `createMenuTree` (`prepareMenuTree.ts`), which runs the full hierarchy pipeline: `resolver → convertToD3Stratify → sortD3Stratify → buildTreeFromStratify`.

---

## Data Model

### `MenuTreeElement` (node payload)

| Field   | Type     | Description                              |
|---------|----------|------------------------------------------|
| `label` | `string` | Display text.                            |
| `link`  | `string` | Navigation href. Omit for toggle nodes.  |
| `order` | `number` | Sort order among siblings (ascending).   |

### `MenuTreeElementUI` (per-node overrides)

| Field     | Type                            | Description                            |
|-----------|---------------------------------|----------------------------------------|
| `onClick` | `MouseEventHandler`             | Additional click handler on the row.   |
| `display` | `boolean`                       | Set `false` to hide the node entirely. |
| `divider` | `boolean`                       | Render a divider below the row.        |

### `RootOverridesUI` (top-level overrides)

| Field           | Type                | Description                                          |
|-----------------|---------------------|------------------------------------------------------|
| `linkComponent` | `LinkTypeComponent` | Custom link renderer (e.g. Next.js `Link`).          |

---

## The Policy Pattern

Visual styling is fully separated from rendering logic. Each menu variant creates a **`RowPolicy`** — a plain function `(RowPolicyProps) => RowPlan` — and injects it via `MenuRenderContext`. Components never hard-code colours, weights, or sizes.

```
RowPolicyProps  →  RowPolicy  →  RowPlan  →  ElementButton / ElementLabel
(depth, node,                    (text, icon,
 isSelected, …)                  indicator, sx, …)
```

**Built-in policies:**

| Policy | Used by | File |
|--------|---------|------|
| `defaultDrawerRowPolicy` | `DrawerMenu` | `drawer/defaultDrawerRowPolicy.tsx` |
| `defaultDropDownPolicy` | `DropDown` | `dropDown/defaultDropDownRowPolicy.tsx` |

Pass a custom `RowPolicy` via `MenuRenderContext` to restyle either variant without touching any component.

### `MegaMenuPolicy` (dropdown only)

Controls the structural layout of mega menu panels: column dividers, item dividers, column min-width, and outer padding. Two presets are provided:

- **`standardMegaMenuPolicy`** — dividers, 160 px columns, padding 3.
- **`compactMegaMenuPolicy`** — no dividers, 120 px columns, padding 1.

---

## Shared Infrastructure

### Contexts

All contexts are created once at the top of each variant and consumed anywhere in the subtree. Missing context throws a descriptive error.

| Context | What it holds | Set by |
|---------|---------------|--------|
| `MenuRenderContext` | `rowPolicy`, `linkLikeComp`, `megaMenuPolicy` | `DrawerMenu_Client`, `DropDown_Client` |
| `MenuDepthContext` | `depth` (zero-based nesting level) | each collapsible element on open |
| `MenuSelectorContext` | `isSelected`, `isAncestorSelected`, `selectedId` | `DrawerMenu`, `DropDown` |
| `MenuControllerContext` | `menuStore` (open/close state) | `DrawerMenu_Client` |

### `menuStore` — open/close state

A minimal observable store (`useSyncExternalStore`-compatible) that maps node id → `boolean`. Only the `DrawerMenu` uses it; the `DropDown` manages popover state locally with `useState`.

```ts
const store = createMenuStore({});
useNodeOpen(store, nodeId);   // subscribe in a component
setOpen(store, nodeId)(true); // update from anywhere
```

### Selection — `pathSelectors`

`getSelectors` walks the tree depth-first to find the selected node and records the full ancestor path. Returns stable `isSelected` / `isAncestorSelected` function references suitable for React context.

```ts
const selector: IsSelectedMenuElement = (id) => id === currentPageId;
const selectors = getSelectors({ treeFromRoot, selector });
```

### `useRowPlan`

A convenience hook used by leaf/column elements that don't manage open/close state. Reads all three contexts (`depth`, `selector`, `rowPolicy`) and returns `{ rowPlan, depth, hasChildren }`.

---

## Rendering Components

### Shared

| Component | Role |
|-----------|------|
| `ElementButton` | Root-level row element. Renders a link button, click button, or plain item based on props. |
| `ElementLabel` | Inner content: optional left icon + `Typography` label. |

### DrawerMenu

```
DrawerMenu
└─ DrawerMenu_Client        ← AppBar / Toolbar / menuStore
   └─ DrawerElement         ← leaf or toggle decision
      ├─ ElementButton       ← leaf node (link or plain)
      └─ DrawerOpenClose     ← toggle node (Collapse + children)
         └─ DrawerElement[]  ← recursive
```

### DropDown

```
DropDown
└─ DropDown_Client          ← sticky AppBar / Toolbar
   └─ DropDownElement       ← depth-0 only: leaf or popover decision
      ├─ ElementButton       ← leaf node
      └─ DropDownOpenClose   ← Popover trigger
         └─ DropDownMegaMenu ← column layout
            └─ ColumnElement ← depth-1 header + depth-2+ items via useRowPlan
```

---

## File Map

```
menus/
├── MenuTypes.ts              — MenuTreeElement, MenuTreeElementUI, MenuProps, …
├── RowPolicyTypes.ts         — RowPlan, RowPolicy, RowPolicyProps, MegaMenuPolicy
├── MenuRenderContext.ts      — render config context (policy, link comp, mega policy)
├── MenuDepthContext.ts       — nesting depth context
├── MenuSelectorContext.ts    — selection state context
├── MenuControllerContext.ts  — open/close store context (drawer only)
├── menuStore.ts              — createMenuStore, useNodeOpen, setOpen
├── prepareMenuTree.ts        — createMenuTree (full hierarchy pipeline)
├── ElementButton.tsx         — interactive row wrapper (link / button / item)
├── ElementLabel.tsx          — icon + label inner content
├── useRowPlan.ts             — hook: depth + selection + rowPolicy → RowPlan
│
├── drawer/
│   ├── DrawerMenu.tsx                — top-level entry point
│   ├── DrawerMenuTypes.ts            — DrawerMenuProps
│   ├── DrawerMenu_Client.tsx         — client: MUI Drawer + menuStore setup
│   ├── DrawerElement.tsx             — leaf vs toggle decision
│   ├── DrawerOpenClose.tsx           — Collapse toggle with children
│   ├── defaultDrawerRowPolicy.tsx    — default RowPolicy for drawer
│   ├── hierarchyToDrawerProps.tsx    — hierarchy → MenuProps builder
│   └── pathSelectors.ts             — getSelectors, IsSelectedMenuElement
│
└── dropDown/
    ├── DropDown.tsx                  — top-level entry point
    ├── DropDown_Client.tsx           — client: sticky AppBar + Toolbar
    ├── DropDownElement.tsx           — depth-0 leaf vs popover decision
    ├── DropDownOpenClose.tsx         — Popover trigger button
    ├── DropDownMegaMenu.tsx          — column layout panel
    ├── defaultDropDownRowPolicy.tsx  — default RowPolicy for dropdown
    └── defaultMegaMenuPolicy.ts     — standardMegaMenuPolicy, compactMegaMenuPolicy
```
