'use client';

import Divider from '@mui/material/Divider';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';
import { ElementButton } from '../ElementButton';
import { MenuTreeElement, MenuTreeElementUI } from '../MenuTypes';

////
type DropDownElementProps = {
  branch: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
};

export function DropDownElement({ branch }: DropDownElementProps) {
  ///

  const menuTreeElement = branch.node;

  if (!menuTreeElement) return null;

  let ui  = branch.overrides;
  if (ui?.display === false) return null;

//   if(branch.children && Object.keys(branch.children).length > 0){

//     ui = { ...ui, 

//   }

    console.log('DropDownElement overrides:', ui);

  return (
    <>
      <ElementButton menuElement={menuTreeElement} overrides={ui} />
      {ui?.divider && <Divider />}
    </>
  );
}
