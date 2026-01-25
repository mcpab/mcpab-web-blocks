import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';
import { resolver } from 'src/core/hierarchy/resolver';
import { LinkTypeComponent } from 'src/core/link';

import { buildTreeFromStratify } from 'src/core/hierarchy/buildTreeFromStratify';
import { convertToD3Stratify } from 'src/core/hierarchy/convertToD3Stratify';
import { DrawerMenu_Client } from './DrawerMenu_Client';
import { sortD3Stratify } from 'src/core/hierarchy/sortD3Stratify';

export type MenuTreeElement = {
  label: string;
  link?: string;
  order?: number;
};

export type RootTreeElement = {
  label: 'Menu';
};

export type MenuTreeElementUI = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  display?: boolean;
  divider?: boolean;
};

export type RootOverridesUI = {
  linkComponent: LinkTypeComponent;
  rootPath?: string;
};

type DrawerMenuProps<
  P extends PayloadMap<MenuTreeElement>,
  H extends HierarchyTree<P, RootTreeElement>,
  HR extends HierarchyTreeOverrides<P, H, RootOverridesUI, MenuTreeElementUI>,
> = {
  hierarchy: H;
  overrides: HR;
};

export function DrawerMenu<
  P extends PayloadMap<MenuTreeElement>,
  H extends HierarchyTree<P, RootTreeElement>,
  HR extends HierarchyTreeOverrides<P, H, RootOverridesUI, MenuTreeElementUI>,
>({ hierarchy, overrides }: DrawerMenuProps<P, H, HR>) {
  //
  // checking the integrity of the hierarchy
  const resolverReturn = resolver<H>(hierarchy);
  //
  if (!resolverReturn.ok) {
    console.error('Hierarchy issues detected:', resolverReturn.issues);
    return <div>Hierarchy issues detected. Check console for details.</div>;
  }

  const resultHtoD3 = convertToD3Stratify<MenuTreeElement, MenuTreeElementUI, P>(
    hierarchy.nodes,
    overrides.nodes,
  );

  if (!resultHtoD3.ok) {
    console.error('Failed to convert hierarchy to D3 Stratify:', resultHtoD3.issues);
    return <div>Failed to convert hierarchy to D3 Stratify. Check console for details.</div>;
  }

  const d3StratifyRoot = resultHtoD3.root;

  const sortedNodes = sortD3Stratify<MenuTreeElement, MenuTreeElementUI>(d3StratifyRoot);

  if (sortedNodes.ok === false) {
    console.error('Failed to sort D3 Stratify:', sortedNodes.issues);
    return <div>Failed to sort D3 Stratify. Check console for details.</div>;
  }

  const treeBuildResult = buildTreeFromStratify(sortedNodes.root);

  if (treeBuildResult.issues.length > 0) {
    console.error('Failed to build tree from D3 Stratify:', treeBuildResult.issues);
    return <div>Failed to build tree from D3 Stratify. Check console for details.</div>;
  }

  const root = treeBuildResult.root;

  return <DrawerMenu_Client root={root} />;
}
