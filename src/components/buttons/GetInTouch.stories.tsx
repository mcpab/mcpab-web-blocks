import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import GetInTouch from "./GetInTouch";

export const Default: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 560 }}>
    <Typography variant="h6">GetInTouch</Typography>
    <GetInTouch />
  </Stack>
);

Default.storyName = "Default";
