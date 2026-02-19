import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';

/**
 * Callback used to determine whether a menu node is the currently active (selected) item.
 *
 * @param id - The node's unique string key in the hierarchy.
 * @param menuTreeElement - The node's data payload, or `null` if the node has no data.
 * @returns `true` if this node should be treated as the selected item.
 *
 * @example
 * ```ts
 * const selector: IsSelectedMenuElement = (id) => id === currentPageId;
 * ```
 */
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

/**
 * Derived selection state computed from a single {@link IsSelectedMenuElement} callback.
 * Consumed by {@link MenuSelectorContext} throughout the menu tree.
 */
export type GetSelectorsReturnType = {
  /** Returns `true` if the given node is the selected item. */
  isSelected: (nodeId: string) => boolean;
  /** Returns `true` if the given node is an ancestor of the selected item (but not selected itself). */
  isAncestorSelected: (nodeId: string) => boolean;
  /** The id of the selected node, or `null` if nothing is selected. */
  selectedId: string | null;
  /** Set of all node ids on the path from root to the selected node (inclusive). */
  selectedPathIds: Set<string>;
};

const EarlyReturnValue = {
  isSelected: () => false,
  isAncestorSelected: () => false,
  selectedId: null,
  selectedPathIds: new Set<string>(),
};

const DefaultNullSelector: IsSelectedMenuElement = () => false;

/**
 * Walks the menu tree using a depth-first search to find the selected node and
 * records the full ancestor path along the way.
 *
 * Returns {@link GetSelectorsReturnType} with stable function references for
 * `isSelected` and `isAncestorSelected`, suitable for passing into React context.
 * If no node matches the selector, all functions return `false`/`null`.
 *
 * @param treeFromRoot - The stratified menu tree produced by {@link hierarchyToDrawerProps}.
 * @param selector - Callback that identifies the selected node.
 */
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

