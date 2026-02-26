'use client';

import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { TextDrawerElement, TextDrawerElementUI } from './TextDrawerTypes';
import { useTextControllerContext } from './TextControllerContext';
import { useTextTreeDepthContext } from './TreeDepthContext';
import { useTreeTextOpen, setTreeTextOpen } from './textTreeStore';
import { useTextTreeRendererContext } from './TextTreeRenderContext';
import { TextOpenClose } from './TextOpenClose';
import Box from '@mui/material/Box';

/**
 * Internal props for `TextElement`.
 *
 * @internal
 */
type TextElementProps = {
  /** Stable node identifier used as the store key for open/closed state. */
  id: string;
  /** Serialised payload for this node; `null` when the node is a phantom root. */
  textDrawerElement: TextDrawerElement | null;
  /** Merged UI overrides from `HierarchyTreeOverrides`; `undefined` when absent. */
  textDrawerElementUI: TextDrawerElementUI | undefined;
  /** Child branches; `undefined` for leaf nodes. */
  children: Record<string, StratifyPayload<TextDrawerElement, TextDrawerElementUI>> | undefined;
};

/**
 * Per-node rendering unit — the single component that decides whether a node
 * is a **parent** (collapsible) or **leaf** (static content).
 *
 * @remarks
 * Reads three contexts:
 * - {@link TextControllerContext} — for the shared `TreeTextStore`.
 * - {@link TreeTextDepthContext} — for the current nesting depth.
 * - {@link TextTreeRendererContext} — for the registry, indicators, and indent policy.
 *
 * **Layout contract**: indent (`pl`) is applied at this level via a `Box`
 * wrapper so individual renderers stay layout-agnostic and do not need to
 * know their depth or base indent.
 *
 * **Parent branch**: delegates to `TextOpenClose` which renders the header via
 * the registry and manages the `Collapse` animation for children.
 *
 * **Leaf node**: looks up the renderer by key in `rendersRegistry`, calls its
 * `props` factory with the full `TextPolicyProps`, and renders the resulting
 * component.  `onClick` is a no-op for leaves.
 *
 * @internal - Rendered internally by `TextDrawer_Client` and `TextOpenClose`.
 */
export function TextElement({
  id,
  textDrawerElement,
  textDrawerElementUI,
  children,
}: TextElementProps) {
  const { treeTextStore } = useTextControllerContext();
  const isOpen = useTreeTextOpen(treeTextStore, id);
  const onToggle = (open: boolean) => setTreeTextOpen(treeTextStore, id)(open);

  const { depth } = useTextTreeDepthContext();

  const { rendersRegistry, openIndicator, closeIndicator, baseIndent, indentPolicy } =
    useTextTreeRendererContext();

  if (!textDrawerElement) return null;

  const hasChildren = children !== undefined && Object.keys(children).length > 0;

  if (hasChildren) {
    return (
      <Box pl={indentPolicy({ baseIndent, depth })}>
        <TextOpenClose
          id={id}
          textDrawerElement={textDrawerElement}
          textDrawerElementUI={textDrawerElementUI}
          children={children}
          isOpen={isOpen}
          onToggle={onToggle}
          depth={depth}
        />
      </Box>
    );
  }

  const renderer = textDrawerElement.renderer;

  const props = rendersRegistry[renderer].props({
    textDrawerElement,
    textDrawerElementUI,
    depth,
    hasChildren,
    isOpen,
    closeIndicator,
    openIndicator,
    onClick: () => {},
  });

  const Component = rendersRegistry[renderer].renderer;

  return (
    <Box pl={indentPolicy({ baseIndent, depth })}>
      <Component {...props} />
    </Box>
  );
}
