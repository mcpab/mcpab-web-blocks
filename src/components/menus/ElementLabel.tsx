import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { StratifyPayload } from 'src/core/hierarchy/D3StratifyTypes';

import { MenuTreeElement, MenuTreeElementUI } from './MenuTypes';

import { useMenuRenderContext } from './MenuContext';
import { useMenuDepthContext } from './MenuDepthContext';

export type ElementLabelProps = {
  node: StratifyPayload<MenuTreeElement, MenuTreeElementUI>;
};

export function ElementLabel({ node }: ElementLabelProps) {
  //
  // console.log('ElementLabel render:', menuElement);
  // console.log('ElementLabel overrides:', overrides);

  const { display = true } = node.overrides ?? {};

  const { depth } = useMenuDepthContext();

  const { rowPolicy } = useMenuRenderContext();
 
  const { typographyProps, icon ,text} = rowPolicy({ depth, node });

  if (!display) return null;

 

  return (
    <>
      <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>

      <ListItemText primary={<Typography {...typographyProps}>{text}</Typography>} />
    </>
  );
}
