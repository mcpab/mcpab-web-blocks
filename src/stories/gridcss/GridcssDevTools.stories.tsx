// stories/gridcss/GridcssDevTools.stories.tsx
import type { Story } from "@ladle/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { AnyBBEntry, layoutsCatalog } from "src/core/gridCSS/templates/boxLayoutsCatalog";
import { CSSLayout } from "src/core/gridCSS/core/boxDesign/CSSlayout";
import { DiagnosticEntry } from "src/core/gridCSS/core/gridErrorShape";
import { GridCssMuiRenderer } from "src/core/gridCSS/integration/mui/GridCssMuiRenderer";

import { BREAKPOINTS } from "src/core/gridCSS/core/breakpoints";
import { BlockIdsFromBBEntry, LayoutRenderingOverride, SectionsFromBBEntry } from "src/core/gridCSS/core/boxLayout/boxLayoutTypes";

const layoutCategoriesKeys = Object.keys(layoutsCatalog) as (keyof typeof layoutsCatalog)[];

type CategoryID = keyof typeof layoutsCatalog;


export function typedKeys<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

type LayoutsCatalog = typeof layoutsCatalog;

const hasOwn = (obj: object, key: PropertyKey): boolean =>
    Object.prototype.hasOwnProperty.call(obj, key);

/**
 * Option A boundary:
 * - UI state is string/string
 * - runtime-validate category + entry
 * - return a safe AnyBBEntry (with a stable fallback)
 * - all casts live ONLY in here
 */
export function resolveLayout(
    catalog: LayoutsCatalog,
    categoryID: string,
    entryID: string,
    fallbackCategory: keyof LayoutsCatalog = "primary20",
    fallbackEntry: string = "page_band",
): AnyBBEntry {

    // 1) If category exists, use it
    if (hasOwn(catalog, categoryID)) {
        const category = catalog[categoryID as keyof LayoutsCatalog];

        // 1a) If entry exists in that category, use it
        if (hasOwn(category, entryID)) {
            return category[entryID as keyof typeof category] as AnyBBEntry;
        }

        // 1b) Otherwise fall back to first entry in that category (if any)
        const firstKey = Object.keys(category)[0];
        if (firstKey && hasOwn(category, firstKey)) {
            return category[firstKey as keyof typeof category] as AnyBBEntry;
        }
    }

    // 2) If selected category was invalid/empty, fall back to fallbackCategory's first entry
    const fallbackCat = catalog[fallbackCategory];
    const fallbackFirstKey = Object.keys(fallbackCat)[0];

    if (fallbackFirstKey && hasOwn(fallbackCat, fallbackFirstKey)) {
        return fallbackCat[fallbackFirstKey as keyof typeof fallbackCat] as AnyBBEntry;
    }

    // 3) Absolute last resort: a specific known layout
    // (kept explicit so you always have *some* layout)
    const hard = catalog[fallbackCategory] as unknown as Record<string, AnyBBEntry>;
    if (hasOwn(hard, fallbackEntry)) return hard[fallbackEntry];

    // 4) If even that doesn't exist (shouldn't happen), return an empty entry
    return {};
}

function NodesPanel({ layoutAbsolute }: { layoutAbsolute: any }) {
    return (
        <Box>
            <Typography variant="subtitle2" gutterBottom>
                Layout Sections & Boxes
            </Typography>
            <Stack spacing={1}>
                {Object.entries(layoutAbsolute.sections).map(([sectionId, section]) => (
                    <Box key={sectionId} sx={{ p: 1, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
                        <Typography variant="caption" fontWeight="bold">
                            {sectionId}
                        </Typography>
                        {Object.keys((section as any).coordinates).map((bp: string) => (
                            <Box key={bp} sx={{ ml: 1, mt: 0.5 }}>
                                <Typography variant="caption" color="text.secondary">
                                    @{bp}: {Object.keys((section as any).coordinates[bp]).join(', ')}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}

function CoordsPanel({ layoutAbsolute }: { layoutAbsolute: any }) {
    return (
        <Box>
            <Typography variant="subtitle2" gutterBottom>
                Grid Coordinates
            </Typography>
            <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                {Object.entries(layoutAbsolute.sections).map(([sectionId, section]) => (
                    <Box key={sectionId} sx={{ mb: 2 }}>
                        <Typography variant="caption" fontWeight="bold" sx={{ display: 'block', mb: 1 }}>
                            {sectionId}
                        </Typography>
                        {Object.entries((section as any).coordinates).map(([bp, coords]) => (
                            <Box key={bp} sx={{ ml: 1, mb: 1 }}>
                                <Typography variant="caption" color="primary.main" sx={{ display: 'block' }}>
                                    @{bp}
                                </Typography>
                                {Object.entries(coords as any).map(([boxId, coord]: [string, any]) => (
                                    <Box key={boxId} sx={{ ml: 1, fontSize: 11, fontFamily: 'monospace' }}>
                                        {boxId}: col({coord.gridColumnStart}-{coord.gridColumnEnd}) row({coord.gridRowStart}-{coord.gridRowEnd})
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

function GridJsonPanel({ layoutAbsolute }: { layoutAbsolute: any }) {
    return (
        <Box>
            <Typography variant="subtitle2" gutterBottom>
                Layout JSON
            </Typography>
            <Box sx={{ 
                maxHeight: 400, 
                overflow: 'auto',
                bgcolor: 'grey.50',
                p: 1,
                borderRadius: 1,
                border: 1,
                borderColor: 'grey.300'
            }}>
                <pre style={{ 
                    fontSize: 11, 
                    margin: 0, 
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                }}>
                    {JSON.stringify(layoutAbsolute, null, 2)}
                </pre>
            </Box>
        </Box>
    );
}

export const DevTools: Story = () => {

    const [categoryID, setCategoryID] = React.useState<string>('primary20');
    const [tab, setTab] = React.useState(0);

    const [BBEntry, setBBEntry] = React.useState<string>('page_band');
    console.log("Rendering DevTools with category ", categoryID, " and layout ", BBEntry);

    const BBentries = typedKeys(layoutsCatalog[categoryID as keyof LayoutsCatalog]);

    const handleCategoryChange = (event: any) => {
        const nextCategory = event.target.value as CategoryID;

        setCategoryID(nextCategory);

        const nextCat = layoutsCatalog[nextCategory];

        // if current BBEntry exists in the next category, keep it
        if (BBEntry in nextCat) return;

        // otherwise reset to the first valid key of the next category
        setBBEntry(typedKeys(nextCat)[0]);
    };

    const handleLayoutChange = (
        event: React.ChangeEvent<{ value: unknown }> | any
    ) => {
        console.log("changing layout to ", event.target.value);
        setBBEntry(event.target.value as string);
    };

    const layout: AnyBBEntry = resolveLayout(layoutsCatalog, categoryID, BBEntry);

    type LayoutType = typeof layout;

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


    let diagnostics: DiagnosticEntry[] = [];

    const layoutAbsolute = CSSLayout({ BBentry: layout, diagnostics });
    console.log("LayoutAbsolute in DevTools: ", layoutAbsolute);

    let layoutRendering: LayoutRenderingOverride<SectionsFromBBEntry<LayoutType>, BlockIdsFromBBEntry<LayoutType>> = {};

    for (const sectionId of typedKeys(layoutAbsolute.sections)) {

        layoutRendering[sectionId] = {};
        const coord = layoutAbsolute.sections[sectionId].coordinates;

        for (const bp of BREAKPOINTS) {

 
            layoutRendering[sectionId][bp] = {};
            for (const boxId of typedKeys(coord[bp])) {
                console.log("Defining rendering for ", sectionId, boxId, " at bp ", bp);
                layoutRendering[sectionId][bp][boxId] = {
                    contentRenderer: ({ sectionId, bp, boxId, coords }) => {
                        return (
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    bgcolor: "rgba(100, 181, 246, 0.3)",
                                    border: "2px solid rgba(25, 118, 210, 0.7)",
                                    borderRadius: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 12,
                                    textAlign: "center",
                                    // p: 0.5,
                                    gap: 1,
                                }}
                            >
                                <div>
                                    <strong>{sectionId}_{boxId} @ {bp}</strong>
                                </div>
                                <div>
                                    origin:[{coords.gridColumnStart}, {coords.gridRowStart}]<br />
                                    diagonal: [{coords.gridColumnEnd - coords.gridColumnStart} ,{coords.gridRowEnd - coords.gridRowStart}]
                                </div>
                            </Box>
                        );
                    },
                };
            }
        }
    }


    const layoutRendered = GridCssMuiRenderer({ layoutAbsolute, diagnostics, layoutRendering });

    console.log("Diagnostics: ", diagnostics);
    console.log("LayoutAbsolute: ", layoutAbsolute);
    console.log("Layout rendered: ", layoutRendered);

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "grey.100", }}>
            <Box sx={{ px: 2 }}>
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
                                    value={BBEntry}
                                    onChange={handleLayoutChange}
                                >
                                    {Object.entries(BBentries).map(([id, p]) => (
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
                                {layoutRendered}
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

                                {/* Tab Content */}
                                <Box sx={{ mt: 2 }}>
                                    {tab === 0 && <NodesPanel layoutAbsolute={layoutAbsolute} />}
                                    {tab === 1 && <CoordsPanel layoutAbsolute={layoutAbsolute} />}
                                    {tab === 2 && <GridJsonPanel layoutAbsolute={layoutAbsolute} />}
                                    {tab === 3 && <DiagnosticsPanel diagnostics={diagnostics} />}
                                </Box>


                            </Box>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    );
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

    // Check what properties the diagnostics actually have
    console.log("Diagnostics structure:", diagnostics);

    const warnings = diagnostics.filter((d) => d.severity === "warning");
    const errors = diagnostics.filter((d) => d.severity === "error");
    const info = diagnostics.filter((d) => d.severity === "info");

    const renderDiagnostic = (d: DiagnosticEntry, i: number, color: string, bgColor: string) => (
        <Box
            key={i}
            sx={{
                p: 1,
                borderRadius: 1,
                border: "1px dashed",
                borderColor: color,
                bgcolor: bgColor,
                fontSize: 12,
            }}
        >
            <Typography variant="caption" fontWeight="bold" sx={{ color }}>
                {d.issue.code}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
                {d.issue.message}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                Origin: {String(d.origin)}
                {d.issue.elementId ? ` | Element: ${d.issue.elementId}` : ''}
            </Typography>
        </Box>
    );

    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
                {errors.length > 0 && (
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="error.main" gutterBottom>
                            Errors ({errors.length})
                        </Typography>
                        <Stack spacing={1}>
                            {errors.map((e, i) => renderDiagnostic(e, i, "error.main", "error.50"))}
                        </Stack>
                    </Box>
                )}

                {warnings.length > 0 && (
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="warning.main" gutterBottom>
                            Warnings ({warnings.length})
                        </Typography>
                        <Stack spacing={1}>
                            {warnings.map((w, i) => renderDiagnostic(w, i, "warning.main", "warning.50"))}
                        </Stack>
                    </Box>
                )}

                {info.length > 0 && (
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="info.main" gutterBottom>
                            Info ({info.length})
                        </Typography>
                        <Stack spacing={1}>
                            {info.map((inf, i) => renderDiagnostic(inf, i, "info.main", "info.50"))}
                        </Stack>
                    </Box>
                )}
            </Stack>

            {/* Show all diagnostics if we have them but they don't fit standard categories */}
            {warnings.length === 0 && errors.length === 0 && info.length === 0 && diagnostics.length > 0 && (
                <Box>
                    <Typography variant="subtitle2" gutterBottom>
                        All Diagnostics ({diagnostics.length})
                    </Typography>
                    <Stack spacing={1}>
                        {diagnostics.map((d, i) => (
                            <Box
                                key={i}
                                sx={{
                                    p: 1,
                                    borderRadius: 1,
                                    border: "1px solid",
                                    borderColor: "grey.400",
                                    bgcolor: "grey.50",
                                    fontSize: 12,
                                }}
                            >
                                <Typography variant="caption" fontWeight="bold">
                                    {d.issue?.code || d.severity || 'Unknown'}
                                </Typography>
                                <div>{d.issue?.message || 'No message available'}</div>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            )}
        </Stack>
    );
}
