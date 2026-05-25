import Typography from '@mui/material/Typography';

export type InlineTextProps = {
  body: string;
};

export function InlineText({ body }: InlineTextProps) {
  return (
    <Typography component="span" variant="inherit">
      {body}
    </Typography>
  );
}

