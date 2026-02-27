import * as React from 'react';
import type { Story } from '@ladle/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import IconPicker from './IconPicker';

export default {
  title: 'Lib/Icon Picker',
};

type PlaygroundArgs = {
  name: string;
  fontSize: 'inherit' | 'small' | 'medium' | 'large';
};

export const Playground: Story<PlaygroundArgs> = (args) => (
  <Box sx={{ p: 3, bgcolor: '#f8fafc', borderRadius: 2 }}>
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="eyebrow" color="text.secondary">
        Single icon lookup
      </Typography>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
        <IconPicker name={args.name} fontSize={args.fontSize} />
        <Typography variant="strapline" color="text.secondary">
          name: {JSON.stringify(args.name)}
        </Typography>
      </Box>
    </Stack>
  </Box>
);

Playground.args = {
  name: 'home',
  fontSize: 'medium',
};

Playground.argTypes = {
  name: { control: { type: 'text' } },
  fontSize: {
    control: { type: 'radio' },
    options: ['inherit', 'small', 'medium', 'large'],
  },
};

Playground.storyName = 'Playground';

const ALIAS_EXAMPLES = [
  'home',
  'settings',
  'profile',
  'account',
  'support',
  'alerts',
  'sign-in',
  'signout',
  'about us',
  '/about-us/',
  'privacy-policy',
] as const;

export const AliasGallery: Story = () => (
  <Box sx={{ p: 3, bgcolor: '#eef2ff', borderRadius: 2 }}>
    <Stack spacing={1.5}>
      <Typography variant="eyebrow" color="text.secondary">
        Alias + normalization coverage
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 1.5,
        }}
      >
        {ALIAS_EXAMPLES.map((name) => (
          <Box key={name} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
            <IconPicker name={name} fontSize="medium" />
            <Typography variant="strapline">{name}</Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  </Box>
);

AliasGallery.storyName = 'Alias gallery';

export const UnknownKey: Story = () => (
  <Box sx={{ p: 3, bgcolor: '#f1f5f9', borderRadius: 2 }}>
    <Stack spacing={1}>
      <Typography variant="eyebrow" color="text.secondary">
        Unknown key returns null
      </Typography>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
        <IconPicker name="totally-unknown-icon-name" />
        <Typography variant="strapline" color="text.secondary">
          No icon should render for this key.
        </Typography>
      </Box>
    </Stack>
  </Box>
);

UnknownKey.storyName = 'Unknown key';
