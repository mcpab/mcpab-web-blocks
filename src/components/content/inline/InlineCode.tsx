import Typography from '@mui/material/Typography';

export type InlineCodeProps = {
  body: string;
};

export function InlineCode({ body }: InlineCodeProps) {
  return (
    <Typography
      component="code"
      variant="inherit"
      sx={{
        borderRadius: 0.5,
        bgcolor: 'action.hover',
        fontFamily: 'monospace',
        px: 0.5,
      }}
    >
      {body}
    </Typography>
  );
}

