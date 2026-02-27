import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import PageLayout from './PageLayout';

export default {
  title: 'Layout/Page Layout',
};

const SampleBlock: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'divider',
      bgcolor: 'background.paper',
    }}
  >
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {body}
    </Typography>
  </Paper>
);

const Content = (
  <>
    <SampleBlock
      title="Hero region"
      body="Top-level section content with consistent vertical rhythm."
    />
    <SampleBlock
      title="Feature region"
      body="Demonstrates spacing behavior provided by StandardStack size='large'."
    />
    <SampleBlock
      title="Footer region"
      body="Final section in the flow. Add as many blocks as needed."
    />
  </>
);

export const Default: Story = () => (
  <PageLayout>
    <Box sx={{ p: { xs: 1, md: 2 } }}>{Content}</Box>
  </PageLayout>
);

Default.storyName = 'Default';

export const Transparent: Story = () => (
  <Box
    sx={{
      p: { xs: 1, md: 2 },
      borderRadius: 2,
      background:
        'linear-gradient(130deg, rgba(14,116,144,0.16), rgba(30,41,59,0.08))',
    }}
  >
    <PageLayout transparent>
      <Box>{Content}</Box>
    </PageLayout>
  </Box>
);

Transparent.storyName = 'Transparent';

export const CustomSx: Story = () => (
  <PageLayout
    sx={{
      p: { xs: 1, md: 3 },
      borderRadius: 2,
      border: '1px dashed',
      borderColor: 'primary.main',
      bgcolor: 'rgba(25, 118, 210, 0.06)',
    }}
  >
    {Content}
  </PageLayout>
);

CustomSx.storyName = 'Custom sx';
