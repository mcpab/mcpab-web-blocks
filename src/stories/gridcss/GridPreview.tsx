import { Typography, Box, Breakpoint } from "@mui/material";

import { Kinds, GridPath, createLayoutFactoryFromBoxFlow, logDiagnostics, GridCssMuiRenderer, AbsoluteNode } from "src/core/gridCSS";
import { AbsoluteGrid } from "src/core/gridCSS/core/absoluteGridTypes";
type GridAny = AbsoluteGrid<Kinds>;

export function GridPreview<K extends Kinds>({
    grid,
    pattern,
}: {
    grid: AbsoluteGrid<K>;
    pattern: GridPath<K>;
}) {

    console.log("grid", grid);

    const nodesArray = Object.values(grid.nodes);

    type SlotKinds = (typeof pattern.slots)[number];

    const nodesByKind = nodesArray.reduce(
        (acc, node) => {
            if (!node) return acc;
            acc[node.kind as SlotKinds] = node as AbsoluteNode<K>;
            return acc;
        },
        {} as Partial<Record<SlotKinds, AbsoluteNode<K>>>
    );

    const children: Partial<Record<SlotKinds, React.ReactNode>> = {};

    for (const kind of pattern.slots) {
        const node = nodesByKind[kind];

        children[kind] = (
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
                    {renderCoords(nodesByKind[kind])}
                </Box>
            </Box>
        );
    }

    return (
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
                grid={grid}
                gridChildComponents={children}
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
    );
}

const renderCoords = <K extends Kinds>(node: AbsoluteNode<K> | undefined) => {
    if (!node) return <span>no node for this slot</span>;

    const orderedBps: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

    return (
        <>
            {orderedBps.map((bp) => {
                const c = node.coordinates[bp];
                if (!c) return null;
                return (
                    <span key={bp}>
                        {bp}: C{c.gridColumnStart}–{c.gridColumnEnd} · R{c.gridRowStart}–{c.gridRowEnd}
                    </span>
                );
            })}
        </>
    );
};
