import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { MenuLabelTypographyProps } from './RowPolicyTypes';

export type ElementLabelProps = {  
  icon: React.ReactNode;
  text: React.ReactNode;
  typographyProps?: MenuLabelTypographyProps;
};

export function ElementLabel({ typographyProps, icon, text }: ElementLabelProps) {
 
  // console.log('ElementLabel props:', { typographyProps, icon, text });

 
  return (
    <>
      <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>

      <ListItemText primary={<Typography {...typographyProps}>{text}</Typography>} />
    </>
  );
}
