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
  label: string;
};

export type MenuTreeElementUI = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  display?: boolean;
  divider?: boolean;
  pickIcon?: boolean;
  fontWeight?: 'normal' | 'bold';
  capitalize?: boolean;
  pl?: number;
};

export type RootOverridesUI = {
  linkComponent?: LinkTypeComponent;
  rootPath?: string;
};

type DrawerMenuProps<P extends PayloadMap<MenuTreeElement>> = {
  hierarchy: HierarchyTree<P, RootTreeElement>;
  overrides: HierarchyTreeOverrides<
    P,
    HierarchyTree<P, RootTreeElement>,
    RootOverridesUI,
    MenuTreeElementUI
  >;
  indent?: number;
};

export function DrawerMenu<P extends PayloadMap<MenuTreeElement>>({
  hierarchy,
  overrides,
  indent = 0,
}: DrawerMenuProps<P>) {
  //
  //

  type H = typeof hierarchy;
  const resolverReturn = resolver<H>(hierarchy);

  if (!resolverReturn.ok) {
    const msg = resolverReturn.issues[0]?.message ?? 'Unknown hierarchy error';
    console.error('Hierarchy issues detected:', resolverReturn.issues);
    return <div>Menu hierarchy error: {msg}</div>;
  }

  const resultHtoD3 = convertToD3Stratify<MenuTreeElement, MenuTreeElementUI, P>(
    hierarchy.nodes,
    overrides.nodes,
  );

  if (!resultHtoD3.ok) {
    const msg = resultHtoD3.issues[0]?.message ?? 'Unknown stratify error';
    console.error('Failed to convert hierarchy to D3 Stratify:', resultHtoD3.issues);
    return <div>Menu stratify error: {msg}</div>;
  }

  const sorted = sortD3Stratify<MenuTreeElement, MenuTreeElementUI>(resultHtoD3.root);
  if (!sorted.ok) {
    const msg = sorted.issues[0]?.message ?? 'Unknown sort error';
    console.error('Failed to sort D3 Stratify:', sorted.issues);
    return <div>Menu sort error: {msg}</div>;
  }

  // console.log('DrawerMenu sorted stratify:', sorted.root);

  const treeBuildResult = buildTreeFromStratify(sorted.root);
  ///
  const root = hierarchy.root;
  const rootOverrides = overrides.root?.payload;

  // console.log('DrawerMenu treeBuildResult:', treeBuildResult);
  if (treeBuildResult.issues.length > 0) {
    const msg = treeBuildResult.issues[0]?.message ?? 'Unknown build error';
    console.error('Failed to build tree from D3 Stratify:', treeBuildResult.issues);
    return <div>Menu build error: {msg}</div>;
  }
  //
  return <DrawerMenu_Client root={root} treeFromRoot={treeBuildResult.root} rootOverrides={rootOverrides} indent={indent} />;
  //
}
