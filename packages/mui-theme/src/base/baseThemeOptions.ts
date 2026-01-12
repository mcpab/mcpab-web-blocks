import type { ThemeOptions } from "@mui/material/styles";

export const baseThemeOptions: ThemeOptions = {
  // No palette here (brand lives in presets)

  shape: { borderRadius: 12 },

  typography: {
    // Safe fallback; presets can override freely.
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          // Web-block layout tokens (keep if your blocks rely on them)
          "--block-h": "clamp(420px, 35vh, 600px)",
          "--section-gap": "clamp(32px, 5vh, 64px)",
          "--container-pad": "clamp(16px, 3vw, 32px)",
        },

        // Small quality-of-life defaults that rarely conflict with branding
        html: { textRendering: "optimizeLegibility" },
        body: { margin: 0 },
      },
    },

    // Buttons: consistent casing + pill feel as a house policy
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
        },
      },
    },

    // Links: let presets control color, but keep underline behavior consistent
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },

    // Menu/list ergonomics (general; doesn’t force colors)
    MuiList: {
      defaultProps: {
        disablePadding: true,
        dense: false,
      },
    },

    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10, // aligns with shape but not pill
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 36, // tighter menu icon column; feels better in drawers
        },
      },
    },
  },
};
