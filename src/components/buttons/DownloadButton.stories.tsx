import * as React from "react";
import type { Story } from "@ladle/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import DownloadButton from "./DownloadButton";

export const Variants: Story = () => (
  <Stack spacing={2} sx={{ p: 3, maxWidth: 640 }}>
    <Typography variant="h6">DownloadButton</Typography>

    <DownloadButton
      href="https://example.com/report.pdf"
      fileName="report.pdf"
      fileType="pdf"
      fileSize="2.4 MB"
      variant="contained"
    >
      Download PDF
    </DownloadButton>

    <DownloadButton
      href="https://example.com/data.csv"
      fileName="data.csv"
    
      fileSize="812 KB"
      variant="outlined"
      showProgress={false}
    >
      Download CSV
    </DownloadButton>
  </Stack>
);

Variants.storyName = "Variants";
