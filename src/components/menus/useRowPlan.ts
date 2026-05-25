import type { StratifyPayload } from '../../core/hierarchy/D3StratifyTypes';
import { useMenuDepthContext } from './MenuDepthContext';
import { useMenuRenderContext } from './MenuRenderContext';
import { useMenuSelectorContext } from './MenuSelectorContext';
import type { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';
import type { RowPlan } from './RowPolicyTypes';

/** @internal Props for {@link useRowPlan}. */
export type UseRowPlanProps = {
  id: string;
  node: MenuTreeElement|null;
  children: Record<string, StratifyPayload<MenuTreeElement, MenuTreeElementUI>> | undefined;
  overrides: MenuTreeElementUI | undefined;
};

/**
 * Computes the {@link RowPlan} for a single menu node by combining depth,
 * selection state, and the active {@link RowPolicy} from context.
 *
 * Reads from {@link MenuDepthContext}, {@link MenuSelectorContext}, and
 * {@link MenuRenderContext} — all three must be provided by an ancestor.
 *
 * @returns The computed `rowPlan`, the current `depth`, and a `hasChildren` flag.
 *
 * @internal Used by leaf and column elements that do not manage open/close state themselves.
 */
export function useRowPlan({ id, node, children, overrides }: UseRowPlanProps): {
  rowPlan: RowPlan;
  depth: number;
  hasChildren: boolean;
} |null  {

  const { isSelected, isAncestorSelected } = useMenuSelectorContext();
  const hasChildren = children !== undefined && Object.keys(children).length > 0;
  const { depth } = useMenuDepthContext();
  const isSelectedNode = isSelected(id);
  const isAncestorSelectedNode = isAncestorSelected(id);
  const { rowPolicy } = useMenuRenderContext();

  if(node===null) return null;
  
  const rowPlan = rowPolicy({
    depth,
    menuTreeElement: node,
    menuTreeElementUI: overrides,
    isOpen: true,
    isSelected: isSelectedNode,
    isAncestorSelected: isAncestorSelectedNode,
    hasChildren,
  });

  return { rowPlan, depth, hasChildren };
}
