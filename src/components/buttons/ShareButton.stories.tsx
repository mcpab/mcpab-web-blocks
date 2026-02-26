import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ShareButton from "./ShareButton";

export const Basic: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 560 }}>
    <Typography variant="h6">ShareButton</Typography>

    <ShareButton
      url="https://example.com/article"
      title="Example article"
      text="A short excerpt to share."
      variant="contained"
      onShare={(success, platform) => {
        // eslint-disable-next-line no-console
        console.log("[onShare]", { success, platform });
      }}
    >
      Share
    </ShareButton>

    <ShareButton
      url="https://example.com/article"
      title="Example article"
      fallbackPlatforms={["twitter", "facebook", "copy"]}
      variant="outlined"
      showFallbackOptions
    >
      Share (show fallbacks)
    </ShareButton>
  </Stack>
);

Basic.storyName = "Basic";
