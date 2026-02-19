import { buildTreeFromStratify } from 'src/core/hierarchy/buildTreeFromStratify';
import { convertToD3Stratify } from 'src/core/hierarchy/convertToD3Stratify';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { HierarchyIssue } from 'src/core/hierarchy/hierarchyErrorShape';
import { PayloadMap } from 'src/core/hierarchy/hierarchyTypes';
import { resolver } from 'src/core/hierarchy/resolver';
import { sortD3Stratify } from 'src/core/hierarchy/sortD3Stratify';
import { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';
import { type MenuProps } from './drawer/hierarchyToDrawerProps';

/** @internal Input shape for {@link createMenuTree} — `MenuProps` minus display-only fields. */
export type PrepareMenuTreeProps<P extends PayloadMap<MenuTreeElement>> = Omit<
  MenuProps<P>,
  'indent' | 'payloadMap'
> & { issues: HierarchyIssue[] };

/**
 * Validates, converts, sorts, and builds a typed menu tree from a raw hierarchy definition.
 *
 * Runs the full hierarchy pipeline:
 * 1. `resolver` — validates node references and detects cycles.
 * 2. `convertToD3Stratify` — maps node + override payloads to the stratify format.
 * 3. `sortD3Stratify` — orders siblings by `MenuTreeElement.order`.
 * 4. `buildTreeFromStratify` — assembles the nested {@link StratifyPayload} tree.
 *
 * Returns `{ ok: false, issues }` at the first pipeline failure so callers can
 * surface validation errors rather than rendering broken trees.
 *
 * @returns `{ ok: true, root }` on success, or `{ ok: false, issues }` on failure.
 *
 * @internal Called by {@link hierarchyToDrawerProps}.
 */
export default function createMenuTree<P extends PayloadMap<MenuTreeElement>>({
  hierarchy,
  overrides,
}: PrepareMenuTreeProps<P>):
  | { ok: false; issues: HierarchyIssue[] }
  | { ok: true; root: StratifyPayload<MenuTreeElement, MenuTreeElementUI> } {
  const resolverReturn = resolver<typeof hierarchy>(hierarchy);

  if (!resolverReturn.ok) {
    console.error('Hierarchy issues detected:', resolverReturn.issues);
    return { ok: false, issues: resolverReturn.issues };
  }

  const resultHtoD3 = convertToD3Stratify<MenuTreeElement, MenuTreeElementUI, P>(
    hierarchy.nodes,
    overrides.nodes,
  );

  if (!resultHtoD3.ok) {
    console.error('Failed to convert hierarchy to D3 Stratify:', resultHtoD3.issues);
    return { ok: false, issues: resultHtoD3.issues };
  }

  const sorted = sortD3Stratify<MenuTreeElement, MenuTreeElementUI>(resultHtoD3.root);
  if (!sorted.ok) {
    console.error('Failed to sort D3 Stratify:', sorted.issues);
    return { ok: false, issues: sorted.issues };
  }

  const treeBuildResult = buildTreeFromStratify(sorted.root);

  if (treeBuildResult.issues.length > 0) {
    console.error('Failed to build tree from D3 Stratify:', treeBuildResult.issues);
    return { ok: false, issues: treeBuildResult.issues };
  }

  return { ok: true, root: treeBuildResult.root };
}
