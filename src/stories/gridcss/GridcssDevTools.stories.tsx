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
import type { LayoutWithTx } from "src/core/gridCSS/core/boxLayout/boxLayoutTypes";
import {
    DiagnosticEntry,
    GridCssMuiRenderer,
    type Breakpoint,
    type NodeID
} from "../..";

import { layoutsCatalog } from "src/core/gridCSS/templates/boxLayoutsCatalog";

const layoutCategoriesKeys = Object.keys(layoutsCatalog) as (keyof typeof layoutsCatalog)[];

type CategoryID = keyof typeof layoutsCatalog;

type LayoutID<C extends CategoryID> = keyof typeof layoutsCatalog[C];

export const DevTools: Story = () => {


    const [categoryID, setCategoryID] = React.useState<CategoryID>('primary20');
    const [tab, setTab] = React.useState(0);

    const [layoutID, setLayoutID] = React.useState<LayoutID<'primary20'>>('page_band');
layoutsCatalog['primary20']['page_band']

    const layout: LayoutWithTx<any, any> = layoutsCatalog['primary20']['page_band'];

    const layoutKeys = Object.keys(layout) as (keyof typeof layout)[];

    const handleCategoryChange = (
        event: React.ChangeEvent<{ value: unknown }> | any
    ) => {
        console.log("changing category to ", event.target.value);
        setCategoryID(event.target.value as CategoryID);
    };

    const handleLayoutChange = (
        event: React.ChangeEvent<{ value: unknown }> | any
    ) => {
        console.log("changing layout to ", event.target.value);
        setLayoutID(event.target.value as LayoutID<CategoryID>);
    };

    if (!layout) {
        return (
            <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", py: 4 }}>
                <Container maxWidth="lg">
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            GridCSS DevTools
                        </Typography>
                        <Typography color="error">
                            No layout returned for pattern <code>{categoryID}</code>.
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
                                Pattern: <code>{categoryID}</code>
                            </Typography>
                        </Box>

                        <Divider />

                        {/* category selector */}
                        <Box display={'flex'} flexDirection={'row'} gap={4}> <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ display: "block", mb: 0.5 }}
                            >
                                Select category
                            </Typography>
                            <Select
                                size="small"
                                value={categoryID}
                                onChange={handleCategoryChange}
                            >
                                {Object.entries(layoutCategoriesKeys).map(([id, p]) => (
                                    <MenuItem key={p} value={p}>
                                        <Typography component="span">{p}</Typography>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                            <Box>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ display: "block", mb: 0.5 }}
                                >
                                    Select layout
                                </Typography>
                                <Select
                                    size="small"
                                    value={layoutID}
                                    onChange={handleLayoutChange}
                                >
                                    {Object.entries(layoutKeys).map(([id, p]) => (
                                        <MenuItem key={p} value={p}>
                                            <Typography component="span">{p}</Typography>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Box></Box>

                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            {/* Left: rendered grid */}
                            <Box sx={{ flex: 2, minWidth: 0 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Grid preview
                                </Typography>
                                TO BE DONE
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


                            </Box>
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};
function renderGrid

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
