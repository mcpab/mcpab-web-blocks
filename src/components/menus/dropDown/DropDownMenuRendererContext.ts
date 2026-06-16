import { createContext, useContext } from 'react';
import type { LinkTypeComponent } from '../../../core/link/linkExtensions';
import type { RenderDropDownMenuNode } from './defaultDropDownMenuRegistry';

export type DropDownMenuRenderContextType = {
  nodesRenderer: RenderDropDownMenuNode;
  LinkComponent: LinkTypeComponent;
  basePadding: number;
};

export const DropDownMenuRenderContext = createContext<DropDownMenuRenderContextType | null>(null);

export function useDropDownMenuRenderContext() {
  const ctx = useContext(DropDownMenuRenderContext);

  if (!ctx)
    throw new Error('DropDownMenuRenderContext missing. Wrap with <DropDownMenuRenderContext>.');
  return ctx;
}
