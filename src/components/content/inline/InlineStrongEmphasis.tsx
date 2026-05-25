import Typography from '@mui/material/Typography';

export type InlineStrongEmphasisProps = {
  body: string;
};

export function InlineStrongEmphasis({ body }: InlineStrongEmphasisProps) {
  return (
    <Typography
      component="strong"
      variant="inherit"
      sx={{ fontStyle: 'italic', fontWeight: 700 }}
    >
      <em>{body}</em>
    </Typography>
  );
}

