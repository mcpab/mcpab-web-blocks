'use client';

import { Collapse } from '@mui/material';
import React from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { TextDrawerElement, TextDrawerElementUI } from './TextDrawerTypes';
import { TextElement } from './TextElement';
import { useTextTreeRendererContext } from './TextTreeRenderContext';
import { TreeTextDepthContext } from './TreeDepthContext';

/**
 * Internal props for `TextOpenClose`.
 *
 * @internal
 */
type TextOpenCloseProps = {
  /** Stable node identifier (not rendered; used for keying children). */
  id: string;
  /** Payload for this parent node — drives which renderer is selected. */
  textDrawerElement: TextDrawerElement | null;
  /** Merged UI overrides for this node. */
  textDrawerElementUI: TextDrawerElementUI | undefined;
  /** Non-empty child map (guaranteed by `TextElement` before calling this). */
  children: Record<string, StratifyPayload<TextDrawerElement, TextDrawerElementUI>>;
  /** Whether this section is currently expanded. */
  isOpen: boolean;
  /** Callback to flip the open state; wired to the shared `TreeTextStore`. */
  onToggle: (open: boolean) => void;
  /** Zero-based depth of this node (passed through to the renderer's `props` factory). */
  depth: number;
};

/**
 * Collapsible parent-node renderer.
 *
 * @remarks
 * Responsible for two things:
 * 1. **Header** — selects the renderer from the registry by `textDrawerElement.renderer`,
 *    calls its `props` factory with `hasChildren: true` and `onClick: handleClick`,
 *    and mounts the resulting component.  The renderer is responsible for
 *    displaying the open/close indicator it receives.
 * 2. **Animated children** — wraps child `TextElement`s in a MUI `Collapse`,
 *    providing a new `TreeTextDepthContext` at `depth + 1` so each child reads
 *    the correct nesting level.
 *
 * `TextOpenClose` never applies indent itself — that is owned by the wrapping
 * `Box` in `TextElement`.
 *
 * @internal - Rendered by `TextElement` for nodes with children.
 */
export function TextOpenClose({
  id,
  textDrawerElement,
  textDrawerElementUI,
  children,
  isOpen,
  onToggle,
  depth,
}: TextOpenCloseProps) {
  const { openIndicator, closeIndicator, rendersRegistry } =
    useTextTreeRendererContext();

  if (!textDrawerElement) return null;

  const handleClick = () => {
    onToggle(!isOpen);
  };

  const childrenComponents = children
    ? Object.entries(children).map(([childId, childBranch]) => (
        <React.Fragment key={childId}>
          <TextElement
            id={childId}
            children={childBranch.children}
            textDrawerElement={childBranch.node}
            textDrawerElementUI={childBranch.overrides}
          />
        </React.Fragment>
      ))
    : [];

  const renderer = textDrawerElement.renderer;

  const props = rendersRegistry[renderer].props({
    textDrawerElement,
    textDrawerElementUI,
    depth,
    hasChildren: true,
    isOpen,
    closeIndicator,
    openIndicator,
    onClick:handleClick
  });

  const Component = rendersRegistry[renderer].renderer;

  return (
    <>
      <Component {...props} />
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <TreeTextDepthContext.Provider value={{ depth: depth + 1 }}>
          {childrenComponents}
        </TreeTextDepthContext.Provider>
      </Collapse>
    </>
  );
}
