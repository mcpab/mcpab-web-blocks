import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SocialButton from "./SocialButton";

export const Platforms: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 720 }}>
    <Typography variant="h6">SocialButton</Typography>

    <Stack direction="row" spacing={1} flexWrap="wrap">
      {(
        [
          "linkedin",
          "twitter",
          "facebook",
          "instagram",
          "youtube",
          "github",
          "email",
        ] as const
      ).map((platform) => (
        <SocialButton
          key={platform}
          platform={platform}
          href="https://example.com"
          variant="outlined"
        >
          {platform}
        </SocialButton>
      ))}
    </Stack>

    <Stack direction="row" spacing={1}>
      <SocialButton
        platform="linkedin"
        href="https://example.com"
        iconOnly
        aria-label="LinkedIn"
      />
      <SocialButton
        platform="github"
        href="https://example.com"
        iconOnly
        useBrandColors
        aria-label="GitHub"
      />
    </Stack>
  </Stack>
);

Platforms.storyName = "Platforms";
