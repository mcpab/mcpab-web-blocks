import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CallToActionButton from "./CallToActionButton";

export const States: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 560 }}>
    <Typography variant="h6">CallToActionButton</Typography>

    <CallToActionButton variant="contained" endIcon={<ArrowForwardIcon />}>
      Get started
    </CallToActionButton>

    <CallToActionButton
      variant="contained"
      loading
      loadingText="Submitting…"
      endIcon={<ArrowForwardIcon />}
    >
      Submit
    </CallToActionButton>

    <CallToActionButton
      variant="contained"
      success
      successText="Done!"
      endIcon={<ArrowForwardIcon />}
    >
      Save
    </CallToActionButton>
  </Stack>
);

States.storyName = "States";
