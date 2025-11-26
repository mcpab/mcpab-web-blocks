"use client";

// Adjust the import to wherever your types live, or inline the type if needed
// import type { DiagnosticEntry } from "path/to/types";


import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {
  AbsoluteNode,
  Breakpoint,
  createLayoutFactoryFromBoxFlow,
  GridCssMuiRenderer, GridPath, Kinds,
  logDiagnostics,
  OneByTwoPattern,
  ThreeByThreePattern,
  TwoByTwoPattern
} from "@mcpab/web-blocks";
import { MenuItem } from "@mui/material";

export default function Home() {

  const [patternId, setPatternId] = useState<PatternId>('1x2');

  const handlePatternChange = (event: SelectChangeEvent) => {
    setPatternId(event.target.value as PatternId);
  }

  type PatternId = '1x2' | '2x2' | '3x3';

  const patterns: Record<PatternId, GridPath<Kinds>> = {
    '1x2': OneByTwoPattern,
    '2x2': TwoByTwoPattern,
    '3x3': ThreeByThreePattern,
  };

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
              <Select
                value={patternId}
                onChange={handlePatternChange}
              >
                {Object.entries(patterns).map(([id, p]) => (
                  <MenuItem key={id} value={id}>
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
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

                {RenderGrid(patterns[patternId])}

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
                    <strong>Factory:</strong> <code>{patternId}</code>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Blocks:</strong>
                    {patterns[patternId].slots.map(s => <code key={s}> {s}</code>)}
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
    </Box>);

}

function RenderGrid<K extends Kinds>(pattern: GridPath<K>,): React.ReactNode {

  const layout = createLayoutFactoryFromBoxFlow(pattern)();

  const grid = layout.grid;
  console.log('grid', grid);
  logDiagnostics(layout.diagnostics);
  if (!grid) {
    
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
            <Typography variant="h6" color="error">
              Error: Grid layout could not be created.
            </Typography>
          </Paper>
        </Container>
      </Box>
    );
  }

  type SlotKinds = typeof pattern.slots[number];
  let ert: Partial<Record<SlotKinds, React.ReactNode>> = {};
  let nodes = Object.values(grid.nodes);

  const nodesArray = Object.values(grid.nodes);

  // map from kind → node
  const nodesByKind = nodesArray.reduce(
    (acc, node) => {
      if (!node) return acc;
      acc[node.kind as SlotKinds] = node as AbsoluteNode<K>;
      return acc;
    },
    {} as Partial<Record<SlotKinds, AbsoluteNode<K>>>
  );

  for (const kind of pattern.slots) {
    const node = nodesByKind[kind];

    ert[kind] = (
      <Box
        sx={{
          bgcolor: "primary.light",
          color: "primary.contrastText",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 1,
          border: "1px solid",
          borderColor: "primary.main",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 1.5,
            py: 0.75,
            borderBottom: "1px solid",
            borderColor: "primary.main",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {kind}
        </Box>

        {/* Coordinates for all BPs */}
        <Box
          sx={{
            flex: 1,
            px: 1.5,
            py: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0.25,
            bgcolor: "primary.dark",
            fontFamily: "monospace",
            fontSize: 12,
          }}
        >
          {renderCoords(node)}
        </Box>
      </Box>
    );
  }

  return <Box
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
      grid={grid}
      gridChildComponents={ert}
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


}

const renderCoords = <K extends Kinds>(node: AbsoluteNode<K> | undefined) => {

  if (!node) return <span>no node for this slot</span>;

  // If you have a known order, use it:
  const orderedBps: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  orderedBps.filter((bp) => node.coordinates[bp as keyof typeof node.coordinates]);

  return (
    <>
      {orderedBps.map((bp) => {
        const c = node.coordinates[bp]!;
        return (
          <span key={bp}>
            {bp}: C{c.gridColumnStart}–{c.gridColumnEnd} · R{c.gridRowStart}–{c.gridRowEnd}
          </span>
        );
      })}
    </>
  );
};

