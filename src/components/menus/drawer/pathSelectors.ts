import { HierarchyRelations, PayloadMap } from 'src';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';

export type IsSelectedMenuElement = (
  id: string,
  menuTreeElement: MenuTreeElement | null,
) => boolean;

type GetSelectedPathProps = {
  nodeId: string;
  menuNode: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  selector: IsSelectedMenuElement;
  path: string[];
};

type GetselectorsProps = {
  treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  selector: IsSelectedMenuElement | undefined;
};

export type GetSelectorsReturnType = {
  isSelected: (nodeId: string) => boolean;
  isAncestorSelected: (nodeId: string) => boolean;
  selectedId: string | null;
  selectedPathIds: Set<string>;
};

const EarlyReturnValue = {
  isSelected: () => false,
  isAncestorSelected: () => false,
  selectedId: null,
  selectedPathIds: new Set<string>(),
};

const DefaultNullSelector: IsSelectedMenuElement = () => false;

export function getSelectors({
  treeFromRoot,
  selector,
}: GetselectorsProps): GetSelectorsReturnType {
  //

  const select = selector ?? DefaultNullSelector;

  const path: string[] = [];

  const rootChildren = treeFromRoot.children;

  if (!rootChildren) {
    console.warn('The menu tree is empty. No nodes to select.');
    return EarlyReturnValue;
  }

  let selectedInfo: { selectedId: string } | null = null;

  for (const key in rootChildren) {
    //

    const childBranch = rootChildren[key];
    selectedInfo = getSelectedAndPath({
      nodeId: key,
      menuNode: childBranch,
      selector: select,
      path,
    });

    if (selectedInfo !== null) {
      break;
    }
  }

  if (!selectedInfo) {
    console.warn('No selected node found in the menu tree based on the provided selector.');
    return EarlyReturnValue;
  }

  const selectedId = selectedInfo.selectedId;

  const isSelected = (nodeId: string) => selectedId === nodeId;

  const selectedPathIds = new Set(path);

  const isAncestorSelected = (nodeId: string) =>
    selectedPathIds.has(nodeId) && selectedId !== nodeId;

  return {
    isSelected,
    isAncestorSelected,
    selectedId: selectedId,
    selectedPathIds: selectedPathIds,
  };

  //
  //
}

export function getSelectedAndPath({ nodeId, menuNode, selector, path }: GetSelectedPathProps): {
  selectedId: string;
} | null {
  //

  const node = menuNode.node;
  const children = menuNode.children;

  path.push(nodeId);

  const isThisSelected = selector(nodeId, node);
  if (isThisSelected) {
    return { selectedId: nodeId };
  }

  if (children === undefined) {
    path.pop();
    return null;
  }

  for (const key in children) {
    const childBranch = children[key];
    const selectedChild = getSelectedAndPath({
      nodeId: key,
      menuNode: childBranch,
      selector,
      path,
    });

    if (selectedChild) {
      return selectedChild;
    }
  }

  path.pop();
  return null;
}

// export function geetPathSelectors<P extends PayloadMap<MenuTreeElement>>(
//   nodes: HierarchyRelations<P>,
// ): SelectorsReturn {
//   //

//   const getSelectedId: GetSelectedId = (selector: IsSelected) => {
//     //
//     const found =
//       Object.keys(nodes).find((id) => {
//         const menuTreeElement = nodes[id].payload;
//         return selector(id, menuTreeElement);
//       }) ?? null;
//     return found;
//   };

//   const getAncestorPath: GetAncestorPath = (selectedId: string) => {
//     //

//     if (!selectedId) return new Set<string>();

//     let cursor = selectedId;
//     const path = new Set<string>();

//     while (cursor) {
//       path.add(cursor);
//       const parent = nodes[cursor].parent;
//       if (parent === 'root') break;
//       cursor = parent;
//     }

//     return path;
//   };

//   return {
//     getAncestorPath,
//     getSelectedId,
//   };
// }
