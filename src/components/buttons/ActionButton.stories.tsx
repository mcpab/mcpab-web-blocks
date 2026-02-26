import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import ActionButton from "./ActionButton";

export const Basic: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 520 }}>
    <Typography variant="h6">ActionButton</Typography>

    <ActionButton href="/somewhere" variant="contained">
      Internal link
    </ActionButton>

    <ActionButton
      href="https://example.com"
      icon={<OpenInNewIcon />}
      variant="outlined"
    >
      External link (target=_blank)
    </ActionButton>
  </Stack>
);

Basic.storyName = "Basic";
