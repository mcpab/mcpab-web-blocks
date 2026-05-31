import type { AnyDrawerMenuNode, DrawerMenuTree } from './DrawerMenuTreeTypes';

export type DrawerMenuSelectors = {
  isSelected: (nodeId: string) => boolean;
  isAncestorSelected: (nodeId: string) => boolean;
  selectedId: string | null;
  selectedPathIds: string[];
};

type WalkTreePayload = {
  ancestorIds: string[];
  selectedId: string | null;
};

function walkTree({
  drawerMenuNode,
  currentPath,
  ancestorIds,
  payload,
}: {
  drawerMenuNode: AnyDrawerMenuNode;
  currentPath: string;
  ancestorIds: string[];
  payload: WalkTreePayload;
}) {
  if (payload.selectedId !== null) {
    return;
  }

  if (drawerMenuNode.type === 'link') {
    if (drawerMenuNode.href === currentPath) {
      payload.selectedId = drawerMenuNode.id;
      payload.ancestorIds = ancestorIds;
    }

    return;
  }

  const childAncestorIds = [...ancestorIds, drawerMenuNode.id];

  for (const child of drawerMenuNode.children) {
    walkTree({
      drawerMenuNode: child,
      currentPath,
      ancestorIds: childAncestorIds,
      payload,
    });
  }
}

export function getDrawerMenuSelectors({
  drawerMenuTree,
  currentPath,
}: {
  drawerMenuTree: DrawerMenuTree;
  currentPath: string;
}): DrawerMenuSelectors {
  const payload: WalkTreePayload = {
    ancestorIds: [],
    selectedId: null,
  };

  for (const child of drawerMenuTree.children) {
    walkTree({
      drawerMenuNode: child,
      currentPath,
      ancestorIds: [],
      payload,
    });
  }

  const selectedPathIds = payload.ancestorIds;
  const selectedId = payload.selectedId;

  return {
    selectedId,
    selectedPathIds,
    isSelected(nodeId) {
      return selectedId === nodeId;
    },
    isAncestorSelected(nodeId) {
      return selectedPathIds.includes(nodeId);
    },
  };
}
