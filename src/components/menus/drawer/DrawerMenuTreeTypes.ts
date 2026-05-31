export type DrawerMenuLinkKind = 'link';
export type DrawerMenuGroupKind = 'group';
export type DrawerMenuRootKind = 'root';

export type DrawerMenuNodeKind = DrawerMenuGroupKind | DrawerMenuLinkKind;

export type DrawerMenuLinkNode = {
  id: string;
  type: DrawerMenuLinkKind;
  label: string;
  href: string;
  iconKey?: string;
};

export type DrawerMenuGroupNode = {
  id: string;
  type: DrawerMenuGroupKind;
  label: string;
  children: DrawerMenuTreeNode[];
};

export type DrawerMenuTreeNode = DrawerMenuLinkNode | DrawerMenuGroupNode;

export type DrawerMenuTree = {
  id: 'root';
  type: DrawerMenuRootKind;
  children: DrawerMenuTreeNode[];
};

export type DrawerMenuNodeMap = {
  link: DrawerMenuLinkNode;
  group: DrawerMenuGroupNode;
};

export type AnyDrawerMenuNode = DrawerMenuNodeMap[DrawerMenuNodeKind];
