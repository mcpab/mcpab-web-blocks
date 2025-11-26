// stories/gridcss/GridcssDevTools.stories.tsx
import * as React from "react";
import type { Story } from "@ladle/react";
import {
    Box,
    Container,
    Divider,
    Paper,
    Stack,
    Tabs,
    Tab,
    Typography,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
} from "@mui/material";

import {
    GridCssMuiRenderer,
    type AbsoluteNode,
    type GridPath,
    type Kinds,
    type Breakpoint,
    DiagnosticEntry,
} from "../..";
import { OneByTwoPattern, TwoByTwoPattern, ThreeByThreePattern } from "../.."; // or from patterns
import { GridPreview } from "./GridPreview";
import { useGridLayout } from "./useGridLayout";

type PatternId = "1x2" | "2x2" | "3x3";

const patterns: Record<PatternId, GridPath<Kinds>> = {
    "1x2": OneByTwoPattern,
    "2x2": TwoByTwoPattern,
    "3x3": ThreeByThreePattern,
};

export const DevTools: Story = () => {

    const [patternId, setPatternId] = React.useState<PatternId>("1x2");
    const [tab, setTab] = React.useState(0);

    const pattern = patterns[patternId];
    const layout = useGridLayout(pattern);
    const grid = layout.grid;

    const handlePatternChange = (
        event: React.ChangeEvent<{ value: unknown }> | any
    ) => {
        setPatternId(event.target.value as PatternId);
    };

    if (!grid) {
        return (
            <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
                <Container maxWidth="lg">
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            GridCSS DevTools
                        </Typography>
                        <Typography color="error">
                            No grid returned for pattern <code>{pattern.name}</code>.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        );
    }
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                    <Stack spacing={2}>
                        {/* Header */}
                        <Box>
                            <Typography variant="h5" gutterBottom>
                                GridCSS DevTools
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Pattern: <code>{pattern.name}</code>
                            </Typography>
                        </Box>

                        <Divider />

                        {/* pattern selector */}
                        <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ display: "block", mb: 0.5 }}
                            >
                                Select pattern
                            </Typography>
                            <Select
                                size="small"
                                value={patternId}
                                onChange={handlePatternChange}
                            >
                                {Object.entries(patterns).map(([id, p]) => (
                                    <MenuItem key={id} value={id}>
                                        {p.name} <Typography component="span">({id})</Typography>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>

                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            {/* Left: rendered grid */}
                            <Box sx={{ flex: 2, minWidth: 0 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Grid preview
                                </Typography>
                                {grid ? (
                                    <GridPreview grid={grid} pattern={pattern} />
                                ) : (
                                    <Typography color="error">No grid returned.</Typography>
                                )}
                            </Box>

                            {/* Right: inspector */}
                            <Box sx={{ flex: 1.5, minWidth: 0 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Inspector
                                </Typography>
                                <Tabs
                                    value={tab}
                                    onChange={(_, v) => setTab(v)}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                >
                                    <Tab label="Nodes" />
                                    <Tab label="Coords" />
                                    <Tab label="Grid JSON" />
                                    <Tab label="Diagnostics" />
                                </Tabs>

                                <Box sx={{ mt: 2, maxHeight: 400, overflow: "auto" }}>
                                    {tab === 0 && <NodesPanel grid={grid} pattern={pattern} />}
                                    {tab === 1 && <CoordsPanel grid={grid} pattern={pattern} />}
                                    {tab === 2 && <GridJsonPanel grid={grid} />}
                                    {tab === 3 && <DiagnosticsPanel diagnostics={layout.diagnostics} />}
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};
type GridAny = Parameters<typeof GridCssMuiRenderer>[0]["grid"];

function NodesPanel<K extends Kinds>({
    grid,
    pattern,
}: {
    grid: GridAny;
    pattern: GridPath<K>;
}) {
    // slot kinds actually used by the pattern
    type SlotKinds = (typeof pattern.slots)[number];

    const nodesArray = Object.values(grid.nodes).filter(
        (n): n is AbsoluteNode<K> => Boolean(n)
    );

    return (
        <List dense>
            {nodesArray.map((node) => {
                const slotMatch = pattern.slots.includes(node.kind as SlotKinds);
                return (
                    <ListItem key={node.identity.id} disableGutters>
                        <ListItemText
                            primary={
                                <>
                                    <code>{String(node.identity.id)}</code>{" "}
                                    {slotMatch && (
                                        <Typography
                                            component="span"
                                            variant="caption"
                                            sx={{ ml: 1, bgcolor: "primary.light", px: 0.5, borderRadius: 1 }}
                                        >
                                            slot: {String(node.kind)}
                                        </Typography>
                                    )}
                                </>
                            }
                            secondary={
                                <>
                                    kind: <code>{String(node.kind)}</code>{" "}
                                    {node.identity.parentId && (
                                        <>
                                            · parent: <code>{String(node.identity.parentId)}</code>
                                        </>
                                    )}
                                </>
                            }
                        />
                    </ListItem>
                );
            })}
        </List>
    );
}

const ORDERED_BPS: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

function CoordsPanel<K extends Kinds>({
    grid,
    pattern,
}: {
    grid: GridAny;
    pattern: GridPath<K>;
}) {
    const nodesArray = Object.values(grid.nodes).filter(
        (n): n is AbsoluteNode<K> => Boolean(n)
    );

    return (
        <Stack spacing={1}>
            {nodesArray.map((node) => (
                <Box
                    key={node.identity.id}
                    sx={{
                        p: 1,
                        borderRadius: 1,
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "grey.50",
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        {String(node.identity.id)} · kind: {String(node.kind)}
                    </Typography>
                    <Box sx={{ fontFamily: "monospace", fontSize: 12 }}>
                        {ORDERED_BPS.map((bp) => {
                            const c = node.coordinates[bp];
                            if (!c) return null;
                            return (
                                <div key={bp}>
                                    {bp}: C{c.gridColumnStart}–{c.gridColumnEnd} · R
                                    {c.gridRowStart}–{c.gridRowEnd}
                                </div>
                            );
                        })}
                    </Box>
                </Box>
            ))}
        </Stack>
    );
}

function GridJsonPanel({ grid }: { grid: GridAny }) {
    if (!grid) return <Typography>No grid.</Typography>;

    const snapshot = {
        rows: grid.rows,
        columns: grid.columns,
        options: grid.options,
        nodes: Object.fromEntries(
            Object.entries(grid.nodes).map(([id, node]) => [
                id,
                node && {
                    kind: node.kind,
                    id: node.identity.id,
                    parentId: node.identity.parentId,
                    coordinates: node.coordinates,
                    options: node.options,
                    order: node.order,
                },
            ])
        ),
    };

    return (
        <Box
            component="pre"
            sx={{
                fontFamily: "monospace",
                fontSize: 11,
                whiteSpace: "pre",
                overflowX: "auto",
                m: 0,
            }}
        >
            {JSON.stringify(snapshot, null, 2)}
        </Box>
    );
}
type LayoutWithDiagnostics = {
    diagnostics: {
        warnings: any[];
        errors: any[];
    };
};

function DiagnosticsPanel({
  diagnostics,
}: {
  diagnostics: readonly DiagnosticEntry[] | undefined;
}) {
  if (!diagnostics || diagnostics.length === 0) {
    return (
      <Typography variant="body2" color="success.main">
        ✔ No diagnostics. Layout looks clean.
      </Typography>
    );
  }

  const warnings = diagnostics.filter((d) => (d as any).kind === "warning");
  const errors = diagnostics.filter((d) => (d as any).kind === "error");

  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" color="warning.main" gutterBottom>
          Warnings ({warnings.length})
        </Typography>
        <Stack spacing={1}>
          {warnings.map((w, i) => (
            <Box
              key={i}
              sx={{
                p: 1,
                borderRadius: 1,
                border: "1px dashed",
                borderColor: "warning.main",
                bgcolor: "warning.50",
                fontSize: 12,
              }}
            >
              <code>{(w as any).code}</code>
              <div>{(w as any).message}</div>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" color="error.main" gutterBottom>
          Errors ({errors.length})
        </Typography>
        <Stack spacing={1}>
          {errors.map((e, i) => (
            <Box
              key={i}
              sx={{
                p: 1,
                borderRadius: 1,
                border: "1px dashed",
                borderColor: "error.main",
                bgcolor: "error.50",
                fontSize: 12,
              }}
            >
              <code>{(e as any).code}</code>
              <div>{(e as any).message}</div>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
