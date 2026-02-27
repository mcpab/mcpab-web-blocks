'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { DefaultLinkLike, LinkTypeComponent } from 'src/core/link';
import { MenuRenderContext, MenuRenderContextType } from '../MenuRenderContext';
import { defaultDropDownPolicy } from './defaultDropDownRowPolicy';
import { standardMegaMenuPolicy } from './defaultMegaMenuPolicy';
import { DropDownMenuProps } from './DropDown';
import { DropDownElement } from './DropDownElement';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MenuDepthContext } from '../MenuDepthContext';

/**
 * Client component that renders the sticky `AppBar` navigation bar.
 *
 * Builds {@link MenuRenderContext} with {@link defaultDropDownPolicy} and the provided
 * (or default) {@link MegaMenuPolicy}, then renders each root child as a {@link DropDownElement}
 * inside a MUI `Toolbar`.
 *
 * @internal Rendered by {@link DropDown} after contexts are set up.
 */
export function DropDown_Client({
  treeFromRoot,
  rootOverrides,
  megaMenuPolicy,
  appBarSx,
  toolbarSx,
}: DropDownMenuProps) {
  const linkLikeComp: LinkTypeComponent = rootOverrides?.linkComponent ?? DefaultLinkLike;
  //
  const children = treeFromRoot.children;

  const renderContext: MenuRenderContextType = {
    linkLikeComp: linkLikeComp,
    rowPolicy: defaultDropDownPolicy({
      baseIndent: 0,
      downIndicator: <ExpandMoreIcon fontSize="small" />,
      rightIndicator: <ChevronRightIcon fontSize="small" />,
    }),
    megaMenuPolicy: megaMenuPolicy !== undefined ? megaMenuPolicy : standardMegaMenuPolicy,
  };

  const childrenComponents = children
    ? Object.entries(children).map(([childId, childBranch]) => (
        <Box key={childId} display="flex" justifyContent="center" alignItems="center">
          <DropDownElement
            id={childId}
            menuTreeElement={childBranch.node}
            overrides={childBranch.overrides}
            children={childBranch.children}
          />
        </Box>
      ))
    : [];

  return (
    <MenuRenderContext.Provider value={renderContext}>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: 'divider', ...appBarSx }}
      >
        <Toolbar
          component="nav"
          aria-label="Primary"
          sx={{
            justifyContent: 'space-between',
            gap: 1,
            ...toolbarSx,
          }}
        >
          <MenuDepthContext.Provider value={{ depth: 0 }}>
            {childrenComponents}
          </MenuDepthContext.Provider>
        </Toolbar>
      </AppBar>
    </MenuRenderContext.Provider>
  );
}
