// .ladle/components.tsx
import type { GlobalProvider } from "@ladle/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import "@fontsource/crimson-pro/index.css";
import "@fontsource/inter/index.css";

import { quantumMathMusicPaperPreset } from "../src/theme/presets/quantumMathMusic";

const theme = createTheme(quantumMathMusicPaperPreset);

export const Provider: GlobalProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        "--font-textbook": '"Crimson Pro", Charter, Georgia, "Times New Roman", serif',
        "--font-ui":
          '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
        p: 2,
      }}
    >
      {children}
    </Box>
  </ThemeProvider>
);
