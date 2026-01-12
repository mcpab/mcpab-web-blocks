import React from 'react';
import { RenderNode } from './HierarchyElementType';

export function renderNode(menuElement: RenderNode<any> ): React.ReactElement {
 
  const {key, Component, props, children} = menuElement;
  
 

  return (
    <Component key={key} {...props}>
      {children?.map(renderNode)}
    </Component>
  );
}
