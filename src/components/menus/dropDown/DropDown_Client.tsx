'use client';
import Box from '@mui/material/Box';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { DefaultLinkLike, LinkTypeComponent } from 'src/core/link';
import { DropDownElement } from '../../DropDownElement';
import { MenuRenderContext } from '../../MenuContext';
import { MenuTreeElement, MenuTreeElementUI, RootOverridesUI, RootTreeElement } from '../../MenuTypes';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
type DropDownPlacement = 'block-start' | 'block-end' | 'inline-start' | 'inline-end';

type DropDownClientProps = {
  root: RootTreeElement;
  treeFromRoot: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
  rootOverrides?: RootOverridesUI;

  placement?: DropDownPlacement;
};
export function DropDown_Client({
  root: root,
  treeFromRoot: treeFromRoot,
  rootOverrides,
  placement = 'block-end',
}: DropDownClientProps) {
  //
  //
    console.log('TreeFromRoot in DropDown_Client:', treeFromRoot);

  const linkLikeComp: LinkTypeComponent = rootOverrides?.linkComponent ?? DefaultLinkLike;
  //
  const children = treeFromRoot.children;

  const childrenComponents = children
    ? Object.entries(children).map(([childId, childBranch]) => (
        <Box key={childId} display='flex' justifyContent="center" alignItems="center" >
          <DropDownElement branch={childBranch} />
        </Box>
      ))
    : [];

  return (
    <MenuRenderContext.Provider  value={{
          linkLikeComp: linkLikeComp,
          branchLabelWeight: 'bold',
          openIcon: <ArrowDropDown />,
          closeIcon: <ArrowDropDown />,
        }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        {childrenComponents}
      </Box>
    </MenuRenderContext.Provider>
  );
}
