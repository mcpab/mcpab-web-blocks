import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';

import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { HierarchyIssue } from 'src/core/hierarchy/hierarchyErrorShape';
import { MenuTreeElement, MenuTreeElementUI, RootOverridesUI, RootTreeElement } from '../MenuTypes';
import createMenuTree from '../prepareMenuTree';

/** Input shape for {@link hierarchyToDrawerProps}. */
export type MenuProps<P extends PayloadMap<MenuTreeElement>> = {
  /** Typed hierarchy tree defining the menu structure. */
  hierarchy: HierarchyTree<P, RootTreeElement>;
  /** Per-node and root UI overrides (link component, dividers, display flags, etc.). */
  overrides: HierarchyTreeOverrides<
    P,
    HierarchyTree<P, RootTreeElement>,
    RootOverridesUI,
    MenuTreeElementUI
  >;
};

/**
 * Return type of {@link hierarchyToDrawerProps}.
 * Either a validated prop set ready to pass to {@link DrawerMenu}, or a list of validation issues.
 */
type HierachyToDrawerPropsReturn =
  | { ok: false; issues: HierarchyIssue[] }
  | {
      ok: true;
      root: RootTreeElement;
      treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
      rootOverrides?: RootOverridesUI;
    };

/**
 * Converts a typed hierarchy tree into the prop shape expected by {@link DrawerMenu}.
 *
 * Validates the hierarchy and flattens it into a stratified tree. Returns `ok: false`
 * with a list of {@link HierarchyIssue}s if validation fails.
 *
 * @example
 * ```tsx
 * const result = hierarchyToDrawerProps({ hierarchy, overrides });
 * if (!result.ok) {
 *   console.error(result.issues);
 *   return null;
 * }
 * return <DrawerMenu {...result} selector={(id) => id === currentPageId} />;
 * ```
 */
export function hierarchyToDrawerProps<P extends PayloadMap<MenuTreeElement>>({
  hierarchy,
  overrides,
}: MenuProps<P>): HierachyToDrawerPropsReturn {
  //
  //

  const treeRoot = createMenuTree<P>({ hierarchy, overrides, issues: [] });

  if (!treeRoot.ok) {
    console.error('Failed to prepare menu tree:', treeRoot.issues);
    return { ok: false, issues: treeRoot.issues };
  }

  const root = hierarchy.root;
  const rootOverrides = overrides.root?.payload;

  //
  return {
    ok: true,
    root,
    treeFromRoot: treeRoot.root,
    rootOverrides,
  };
  //
}
