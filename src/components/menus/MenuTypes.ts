import {
  HierarchyTree,
  HierarchyTreeOverrides,
  PayloadMap,
} from 'src/core/hierarchy/hierarchyTypes';
import { LinkTypeComponent } from 'src/core/link';


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
};

export type RootOverridesUI = {
  linkComponent?: LinkTypeComponent;
};

export type MenuProps<P extends PayloadMap<MenuTreeElement>> = {
  hierarchy: HierarchyTree<P, RootTreeElement>;
  overrides: HierarchyTreeOverrides<
    P,
    HierarchyTree<P, RootTreeElement>,
    RootOverridesUI,
    MenuTreeElementUI
  >;
  indent?: number;
};
