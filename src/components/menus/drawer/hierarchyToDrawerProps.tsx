import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';

import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { HierarchyIssue } from 'src/core/hierarchy/hierarchyErrorShape';
import { MenuTreeElement, MenuTreeElementUI, RootOverridesUI, RootTreeElement } from '../MenuTypes';
import createMenuTree from '../prepareMenuTree';

export type MenuProps<P extends PayloadMap<MenuTreeElement>> = {
  hierarchy: HierarchyTree<P, RootTreeElement>;
  overrides: HierarchyTreeOverrides<
    P,
    HierarchyTree<P, RootTreeElement>,
    RootOverridesUI,
    MenuTreeElementUI
  >;
};

type HierachyToDrawerPropsReturn =
  | { ok: false; issues: HierarchyIssue[] }
  | {
      ok: true;
      root: RootTreeElement;
      treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
      rootOverrides?: RootOverridesUI;
    };

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
