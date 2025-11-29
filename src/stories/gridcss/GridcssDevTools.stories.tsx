// stories/gridcss/GridcssDevTools.stories.tsx
import type { Story } from "@ladle/react";
import {
    Box,
    Container,
    Divider,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Paper,
    Select,
    Stack,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import * as React from "react";

import {
    DiagnosticEntry,
    GridCssMuiRenderer,
    GridCssMuiRendererProps,
    type Breakpoint,
    type NodeID
} from "../..";
import { GridPreview } from "./GridPreview";


import { LayoutsRegistry } from "../../core/gridCSS/integration/mui/muiLayoutsRegistry";

const layoutsKeys = Object.keys(LayoutsRegistry);

type PatternId = keyof typeof LayoutsRegistry;

export const DevTools: Story = () => {

    console.log(layoutsKeys);
    const [patternId, setPatternId] = React.useState<PatternId>('1x2');
    const [tab, setTab] = React.useState(0);

    const layout = LayoutsRegistry[patternId];

    const grid = layout.gridBuilder.buildGrid().grid;
    const diagnostics = layout.gridBuilder.buildGrid().diagnostics;
    const registry = layout.register;


    const handlePatternChange = (
        event: React.ChangeEvent<{ value: unknown }> | any
    ) => {
        console.log("changing pattern to ", event.target.value);
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
                            No grid returned for pattern <code>{patternId}</code>.
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
                                Pattern: <code>{patternId}</code>
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
                                {Object.entries(layoutsKeys).map(([id, p]) => (
                                    <MenuItem key={p} value={p}>
                                        <Typography component="span">( {p})</Typography>
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
                                    <GridPreview grid={grid as any} nodesRegister={registry as any} />
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
                                    {tab === 0 && <NodesPanel grid={grid} />}
                                    {tab === 1 && <CoordsPanel grid={grid} />}
                                    {tab === 2 && <GridJsonPanel grid={grid} />}
                                    {tab === 3 && <DiagnosticsPanel diagnostics={diagnostics} />}
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

function NodesPanel({
    grid,
}: {
    grid: GridAny;
}) {


    return (
        <List dense>
            {grid.nodes.map((node) => {

                return (
                    <ListItem key={node.id} disableGutters>
                        <ListItemText
                            primary={
                                <>
                                    <code>{String(node.id)}</code>{" "}

                                </>
                            }
                            secondary={
                                <>
                                    kind: <code>{String(node.id)}</code>{" "}

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

function CoordsPanel<K extends NodeID>({
    grid,

}: {
    grid: GridAny;

}) {


    return (
        <Stack spacing={1}>
            {grid.nodes.map((node) => (
                <Box
                    key={node.id}
                    sx={{
                        p: 1,
                        borderRadius: 1,
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "grey.50",
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        {String(node.id)}
                    </Typography>
                    <Box sx={{ fontFamily: "monospace", fontSize: 12 }}>
                        {ORDERED_BPS.map((bp) => {
                            const c = node.node.coordinates[bp];
                            if (!c) return null;
                            return (
                                <div key={bp}>
                                    {bp}: C{c.gridColumnStart}–{c.gridColumnEnd} · R
                                    {c.gridRowStart}–{c.gridRowEnd}
                                </div>
                            );
                        })}
                    </Box>
                </Box>))}

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

                    id: node.id,

                    coordinates: node.node.coordinates,

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
