import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import BackButton, { RouterProvider } from "./BackButton";

const mockRouter = {
  back: () => {
    // eslint-disable-next-line no-console
    console.log("[mockRouter.back] called");
  },
  push: (path: string) => {
    // eslint-disable-next-line no-console
    console.log("[mockRouter.push] called:", path);
  },
};

export const WithProvider: Story = () => (
  <RouterProvider router={mockRouter}>
    <Stack spacing={2} sx={{ p: 3, maxWidth: 560 }}>
      <Typography variant="h6">BackButton</Typography>

      <BackButton variant="contained">Back (router.back)</BackButton>

      <BackButton fallbackHref="/products" variant="outlined">
        Back with fallbackHref
      </BackButton>

      <BackButton showIcon={false} variant="text">
        No icon
      </BackButton>
    </Stack>
  </RouterProvider>
);

WithProvider.storyName = "With RouterProvider";

export const WithPropRouter: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 560 }}>
    <Typography variant="h6">BackButton</Typography>

    <BackButton router={mockRouter} variant="contained">
      Back (router prop)
    </BackButton>
  </Stack>
);

WithPropRouter.storyName = "Router via prop";
