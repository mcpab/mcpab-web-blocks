"use client";

// Adjust the import to wherever your types live, or inline the type if needed
// import type { DiagnosticEntry } from "path/to/types";

export function logDiagnostics(diags: readonly DiagnosticEntry[]) {
  if (!diags || diags.length === 0) {
    console.log(
      "%c✔ No grid diagnostics. Layout looks clean.",
      "color: #4CAF50; font-weight: bold;"
    );
    return;
  }

  console.groupCollapsed(
    `%c⚠ Grid Diagnostics (${diags.length})`,
    "color: #FF9800; font-weight: bold; font-size: 14px;"
  );

  diags.forEach((d, i) => {
    const { severity, origin, issue } = d;
    const { code, message, elementId, details, origin: issueOrigin } = issue;

    const color =
      severity === "error" ? "color: #F44336" : "color: #FFC107";

    const title = `%c${i + 1}. [${severity.toUpperCase()}] ${code}`;
    const style = `${color}; font-weight: bold;`;

    console.groupCollapsed(title, style);

    console.log(
      "%cMessage:%c",
      "color:#2196F3;font-weight:bold",
      "color:inherit",
      message
    );

    if (elementId) {
      console.log(
        "%cElement:%c " + elementId,
        "color:#9C27B0;font-weight:bold",
        "color:inherit"
      );
    }

    // top-level origin + per-issue origin if present
    if (origin || issueOrigin) {
      console.log(
        "%cOrigin:%c " + (issueOrigin ?? origin),
        "color:#673AB7;font-weight:bold",
        "color:inherit"
      );
    }

    if (details !== undefined) {
      console.log(
        "%cDetails:%c",
        "color:#795548;font-weight:bold",
        "color:inherit",
        details
      );
    }

    console.groupEnd();
  });

  console.groupEnd();
}


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { OneByTwoFactory, GridCssMuiRenderer, DiagnosticEntry } from "@mcpab/web-blocks";

export default function Home() {
  const layout = OneByTwoFactory().createLayout();

  logDiagnostics(layout.diagnostics);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "grey.100",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <Stack spacing={3}>
            {/* Header */}
            <Box>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                GridCSS Playground
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Testing <code>OneByTwoFactory</code> and{" "}
                <code>GridCssMuiRenderer</code> from{" "}
                <code>@mcpab/web-blocks</code>.
              </Typography>
            </Box>

            <Divider />

            {/* Main content: left = preview, right = info */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems="stretch"
            >
              {/* Left: grid preview */}
             <Box
  sx={{
    flex: { xs: "1 1 auto", md: "2 1 0" },
    minWidth: 0,          // 🔒 flex item can shrink
    maxWidth: "100%",
  }}
>
  <Typography variant="subtitle1" gutterBottom>
    Preview
  </Typography>

  <Box
    sx={{
      bgcolor: "background.default",
      borderRadius: 2,
      p: 2,
      border: "1px solid",
      borderColor: "divider",
      width: "100%",
      maxWidth: "100%",
      minWidth: 0,
      boxSizing: "border-box",
    }}
  >
    <GridCssMuiRenderer
      grid={layout.grid}
      gridChildComponents={{
        block_1: (
          <Box
            sx={{
              bgcolor: "lightblue",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              minWidth: 0,
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            Block 1
          </Box>
        ),
        block_2: (
          <Box
            sx={{
              bgcolor: "lightgreen",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              minWidth: 0,
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            Block 2
          </Box>
        ),
      }}
      placeholder={
        <Box
          sx={{
            bgcolor: "lightgray",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
            minWidth: 0,
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          Placeholder
        </Box>
      }
    />
  </Box>
</Box>

              {/* Right: info panel */}
              <Box
                sx={{
                  flex: { xs: "1 1 auto", md: "1 1 0" },
                  minWidth: 0,
                }}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Layout details
                </Typography>

                <Box
                  sx={{
                    bgcolor: "grey.50",
                    borderRadius: 2,
                    p: 2,
                    border: "1px dashed",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="body2" gutterBottom>
                    <strong>Factory:</strong> <code>OneByTwoFactory</code>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Blocks:</strong> <code>block_1</code>,{" "}
                    <code>block_2</code>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Renderer:</strong>{" "}
                    <code>GridCssMuiRenderer</code>
                  </Typography>
                  <Typography variant="body2">
                    You can extend this panel later to show breakpoint info,
                    grid metadata, or debug output from your layout engine.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
