import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import BookingButton from "./BookingButton";

export const Variants: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 520 }}>
    <Typography variant="h6">BookingButton</Typography>

    <BookingButton variant="contained" />

    <BookingButton
      bookingUrl="https://calendly.com/example/intro"
      serviceType="intro call"
      duration="15 min"
      variant="outlined"
    >
      Schedule intro call
    </BookingButton>
  </Stack>
);

Variants.storyName = "Variants";
