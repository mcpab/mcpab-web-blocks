'use client';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import React from 'react';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { TextDrawerElement, TextDrawerElementUI } from './TextDrawerTypes';
 
import { TextTreeRendererContext, TextTreeRendererContextType } from './TextTreeRenderContext';
import { TreeTextDepthContext } from './TreeDepthContext';
import { TextElement } from './TextElement';
import { defaultRendersRegistry } from './textNodeRenderers/defaultTextPolicyRegister';

/**
 * Props for `TextDrawer_Client` — identical surface to `TextDrawerProps`
 * so the parent `TextDrawer` can forward its own props unchanged.
 *
 * @internal
 */
export type TextDrawer_ClientProps = {
  treeFromRoot: StratifyPayload<TextDrawerElement, TextDrawerElementUI>;
  indent?: number;
};

/**
 * Client-side rendering shell for the text drawer tree.
 *
 * @remarks
 * This component sits behind the `'use client'` boundary and is responsible for:
 * - Constructing the {@link TextTreeRendererContextType} (indicators, registry,
 *   indent policy) and providing it via `TextTreeRendererContext`.
 * - Seeding `TreeTextDepthContext` at depth 0 for the root level.
 * - Iterating the top-level children of `treeFromRoot` and mounting a
 *   `TextElement` for each one.
 *
 * The default `indentPolicy` is linear: `baseIndent * depth`.  To override,
 * replace this component or extend the context above it.
 *
 * The default renderer registry is {@link defaultRendersRegistry}.  To use a
 * custom registry, fork this component and replace `rendersRegistry`.
 *
 * @internal - Mount `TextDrawer` instead.
 */
export function TextDrawer_Client({ treeFromRoot, indent = 0 }: TextDrawer_ClientProps) {
  const renderContext: TextTreeRendererContextType = {
    baseIndent: indent,
    openIndicator: <ExpandLess />,
    closeIndicator: <ExpandMore />,
    rendersRegistry: defaultRendersRegistry,
    indentPolicy({ baseIndent, depth }) {
      return baseIndent * depth;
    },
  };

  const childrenComponents = treeFromRoot.children
    ? Object.entries(treeFromRoot.children).map(([childId, childBranch]) => (
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

  return (
    <TextTreeRendererContext.Provider value={renderContext}>
      <TreeTextDepthContext.Provider value={{ depth: 0 }}>
        {childrenComponents}
      </TreeTextDepthContext.Provider>
    </TextTreeRendererContext.Provider>
  );
}
