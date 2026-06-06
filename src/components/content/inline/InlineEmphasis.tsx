import Typography from '@mui/material/Typography';

export type InlineEmphasisProps = {
  body: string;
};

export function InlineEmphasis({ body }: InlineEmphasisProps) {
  return (
    <Typography component="em" variant="inherit" sx={{ fontStyle: 'italic' }}>
      {body}
    </Typography>
  );
}

export default InlineEmphasis;
