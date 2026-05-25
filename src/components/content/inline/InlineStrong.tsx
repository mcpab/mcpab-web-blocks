import Typography from '@mui/material/Typography';

export type InlineStrongProps = {
  body: string;
};

export function InlineStrong({ body }: InlineStrongProps) {
  return (
    <Typography component="strong" variant="inherit" sx={{ fontWeight: 700 }}>
      {body}
    </Typography>
  );
}

