import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import WhatsAppButton from "./WhatsAppButton";

export const Basic: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 560 }}>
    <Typography variant="h6">WhatsAppButton</Typography>

    <WhatsAppButton
      phone="+15551234567"
      message="Hi! I have a question."
      variant="contained"
    >
      Chat on WhatsApp
    </WhatsAppButton>

    <WhatsAppButton
      phone="+15551234567"
      message="Hello from a compact button."
      variant="outlined"
      size="small"
    >
      WhatsApp (small)
    </WhatsAppButton>
  </Stack>
);

Basic.storyName = "Basic";
