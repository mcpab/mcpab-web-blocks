import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from '../../../core/hierarchy/hierarchyTypes';

import { StratifyPayload } from '../../../core/hierarchy/D3StratifyTypes';
import { HierarchyIssue } from '../../../core/hierarchy/hierarchyErrorShape';
import { MenuTreeElement, MenuTreeElementUI, RootOverridesUI, RootTreeElement } from '../MenuTypes';
import prepareMenuTree from '../prepareMenuTree';

/** Input shape for {@link hierarchyToDrawerInput}. */
export type HierachyToDrawerinputProps<P extends PayloadMap<MenuTreeElement>> = {
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
 * Return type of {@link hierarchyToDrawerInput}.
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
export function hierarchyToDrawerInput<P extends PayloadMap<MenuTreeElement>>({
  hierarchy,
  overrides,
}: HierachyToDrawerinputProps<P>): HierachyToDrawerPropsReturn {
  //
  //

  const treeRoot = prepareMenuTree<P>({ hierarchy, overrides, issues: [] });

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
