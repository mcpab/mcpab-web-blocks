import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SubscribeButton from "./SubscribeButton";

const mockSubscribe = async (email: string) => {
  // eslint-disable-next-line no-console
  console.log("[mockSubscribe]", email);
  await new Promise((r) => setTimeout(r, 600));
  return email.includes("@");
};

export const InlineForm: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 560 }}>
    <Typography variant="h6">SubscribeButton</Typography>

    <SubscribeButton
      onSubscribe={mockSubscribe}
      placeholder="Enter your email"
      successMessage="Thanks! Check your inbox."
      errorMessage="Please enter a valid email."
      variant="contained"
    >
      Subscribe
    </SubscribeButton>

    <SubscribeButton
      onSubscribe={mockSubscribe}
      showInlineForm={false}
      variant="outlined"
    >
      Get updates
    </SubscribeButton>
  </Stack>
);

InlineForm.storyName = "Inline form";
