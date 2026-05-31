import type {
  NavigationBarGroupNode,
  NavigationTree,
  NavigationTreeNode,
} from './DropDownMenuTreeTypes';

export type DropDownMenuSelectors = {
  isSelected: (nodeId: string) => boolean;
  isAncestorSelected: (nodeId: string) => boolean;
  selectedId: string | null;
  selectedPathIds: string[];
};

type WalkNavigationTreePayload = {
  ancestorIds: string[];
  selectedId: string | null;
};

function walkNavigationNode({
  node,
  currentPath,
  ancestorIds,
  payload,
}: {
  node: NavigationBarGroupNode | NavigationTreeNode;
  currentPath: string;
  ancestorIds: string[];
  payload: WalkNavigationTreePayload;
}) {
  if (payload.selectedId !== null) {
    return;
  }

  if (node.type === 'link') {
    if (node.href === currentPath) {
      payload.selectedId = node.id;
      payload.ancestorIds = ancestorIds;
    }

    return;
  }

  const childAncestorIds = [...ancestorIds, node.id];

  for (const child of node.children) {
    walkNavigationNode({
      node: child,
      currentPath,
      ancestorIds: childAncestorIds,
      payload,
    });
  }
}

export function getDropDownMenuSelectors({
  navigationTree,
  currentPath,
}: {
  navigationTree: NavigationTree;
  currentPath: string;
}): DropDownMenuSelectors {
  const payload: WalkNavigationTreePayload = {
    ancestorIds: [],
    selectedId: null,
  };

  for (const child of navigationTree.children) {
    walkNavigationNode({
      node: child,
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
