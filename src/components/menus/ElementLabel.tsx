import { ListItemIcon, ListItemText, Typography } from "@mui/material";
import IconPicker from "../../lib/icon/IconPicker";
import { capitalizeWords } from "../../lib/utils";


export type ElementLabelProps = {
  label: string;
  fontWeight?: 'normal' | 'bold';
  capitalize?: boolean; 
  pickIcon?: boolean;
};

export function ElementLabel({ label, fontWeight = 'normal' , capitalize = true, pickIcon = true }: ElementLabelProps) {
  //
  const elementIcon = (
    <ListItemIcon sx={{ minWidth: 36 }}>{pickIcon ? <IconPicker name={label} /> : null}</ListItemIcon>
  );

  return (
    <>
      {elementIcon}
      <ListItemText
        primary={
          <Typography variant="narrative" fontWeight={fontWeight}>
            {capitalize ? capitalizeWords(label) : label}
          </Typography>
        }
      />
    </>
  );
}