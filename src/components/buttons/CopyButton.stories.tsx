import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import CopyButton from "./CopyButton";

export const Basic: Story = () => {
  const text = "https://example.com/some/long/link?utm_source=ladle";

  return (
    <Stack spacing={2} sx={{ p: 3, maxWidth: 680 }}>
      <Typography variant="h6">CopyButton</Typography>

      <TextField value={text} fullWidth size="small" />

      <Stack direction="row" spacing={2} alignItems="center">
        <CopyButton text={text} variant="contained">
          Copy link
        </CopyButton>

        <CopyButton text={text} iconOnly showTooltip />
      </Stack>
    </Stack>
  );
};

Basic.storyName = "Basic";
