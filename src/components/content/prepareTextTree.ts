import { resolver } from 'src/core/hierarchy/resolver';
import { sortD3Stratify } from 'src/core/hierarchy/sortD3Stratify';

import { buildTreeFromStratify } from 'src/core/hierarchy/buildTreeFromStratify';
import { convertToD3Stratify } from 'src/core/hierarchy/convertToD3Stratify';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { HierarchyIssue } from 'src/core/hierarchy/hierarchyErrorShape';
import { PayloadMap } from 'src/core/hierarchy/hierarchyTypes';
import { HierachyToTextDrawerProps } from './hierarchyToTextDrawerProps';
import {
  TextDrawerElement,
  TextDrawerElementUI
} from './TextDrawerTypes';

/**
 * Internal input type for the `prepareTextTree` pipeline.
 *
 * @remarks
 * Extends {@link HierachyToTextDrawerProps} with a pre-allocated `issues`
 * accumulator so that each pipeline stage can append errors before returning.
 * Not part of the public API — use {@link hierarchyToTextDrawerProps} instead.
 *
 * @internal
 */
export type PrepareTextTreeProps<P extends PayloadMap<TextDrawerElement>> =
  HierachyToTextDrawerProps<P> & {
    /** Pre-allocated issue accumulator; pass `[]` from the call site. */
    issues: HierarchyIssue[];
  };

/**
 * Internal pipeline that validates and transforms a `HierarchyTree` into a
 * `StratifyPayload` tree ready for rendering.
 *
 * @remarks
 * Runs four sequential stages, short-circuiting on the first failure:
 *
 * 1. **resolver** — checks that every `parent` reference resolves to an
 *    existing node and that there are no cycles.
 * 2. **convertToD3Stratify** — flattens the hierarchy + overrides into a list
 *    of D3-stratify–compatible records with merged UI fields.
 * 3. **sortD3Stratify** — sorts sibling arrays by their `order` field.
 * 4. **buildTreeFromStratify** — rebuilds the recursive `StratifyPayload` tree
 *    from the sorted flat list.
 *
 * This function is **internal** (`default` export, not re-exported from the
 * index).  Call {@link hierarchyToTextDrawerProps} from consuming code.
 *
 * @internal
 * @typeParam P - Payload map literal inferred from the caller's `hierarchy`.
 */
export default function prepareTextTree<P extends PayloadMap<TextDrawerElement>>({
  hierarchy,
  overrides,
}: PrepareTextTreeProps<P>):
  | { ok: false; issues: HierarchyIssue[] }
  | { ok: true; root: StratifyPayload<TextDrawerElement, TextDrawerElementUI> } {
  const resolverReturn = resolver<typeof hierarchy>(hierarchy);

  if (!resolverReturn.ok) {
    console.error('Hierarchy issues detected:', resolverReturn.issues);
    return { ok: false, issues: resolverReturn.issues };
  }

  const resultHtoD3 = convertToD3Stratify<TextDrawerElement, TextDrawerElementUI, P>(
    hierarchy.nodes,
    overrides.nodes,
  );

  if (!resultHtoD3.ok) {
    console.error('Failed to convert hierarchy to D3 Stratify:', resultHtoD3.issues);
    return { ok: false, issues: resultHtoD3.issues };
  }

  const sorted = sortD3Stratify<TextDrawerElement, TextDrawerElementUI>(resultHtoD3.root);
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
