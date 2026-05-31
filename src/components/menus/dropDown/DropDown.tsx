import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Fragment } from 'react';
import { MenuDepthContext } from '../tree/MenuDepthContext';
import { MenuSelectionContext } from '../tree/MenuSelectionContext';

import type { DropDownMenuSelectors } from './DropDownMenuSelectors';
import { DropDownMenuRenderContext } from './DropDownMenuRendererContext';
import type { DropDownMenuRenderContextType } from './DropDownMenuRendererContext';
import type { NavigationTree } from './DropDownMenuTreeTypes';

/** Props for the {@link DropDown} component. Extends the shared {@link MenuPropsRendering}. */
export type DropDownMenuProps = {
  navigationTree: NavigationTree;
  selectors: DropDownMenuSelectors;
  rendererContext: DropDownMenuRenderContextType;
};

export function DropDown({ navigationTree, selectors, rendererContext }: DropDownMenuProps) {
  //
  //

  const { nodesRenderer } = rendererContext;

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar
        component="nav"
        aria-label="Primary"
        sx={{
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <MenuSelectionContext.Provider value={selectors}>
          <DropDownMenuRenderContext.Provider value={rendererContext}>
            <MenuDepthContext.Provider value={{ depth: 0 }}>
              {navigationTree.children.map((item) => {
                return <Fragment key={item.id}>{nodesRenderer({ node: item }).rendered}</Fragment>;
              })}
            </MenuDepthContext.Provider>
          </DropDownMenuRenderContext.Provider>
        </MenuSelectionContext.Provider>
      </Toolbar>
    </AppBar>
  );

  //
}
