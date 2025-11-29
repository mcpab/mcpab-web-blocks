import { Box, Breakpoint } from "@mui/material";
import React from "react";

import { AbsoluteNode, GridCssMuiRenderer, GridCssMuiRendererProps, NodeID } from "src/core/gridCSS";
import { GridRenderersRegistry } from "src/core/gridCSS/core/nodeViewOptions";

function renderNode<K extends NodeID>(nodeId: K,node:AbsoluteNode): React.ReactNode {

    if (!node) return(
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
        Node Not Defined
    </Box>)

    return  (
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
                {nodeId}
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
                {renderCoords(node)}
            </Box>
        </Box>)
 
}

function overrideContent<K extends NodeID>(nodesRegister: GridRenderersRegistry<K>) : GridRenderersRegistry<K> {

    let registry: GridRenderersRegistry<K> = {} as GridRenderersRegistry<K>;

    for (const key in nodesRegister) {
        const nodeConfig = nodesRegister[key as K];
        registry[key as K] = {
            ...nodeConfig,
            contentRenderer: (nodeId: K,node:AbsoluteNode) => renderNode(nodeId,node)
        }
    }

    return registry;


}
export function GridPreview<K extends NodeID>({ grid, nodesRegister }: GridCssMuiRendererProps<K>) {

    const registry = overrideContent(nodesRegister);

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
                nodesRegister={registry}

            />
        </Box>
    );
}

const renderCoords = <K extends NodeID>(node: AbsoluteNode| undefined) => {
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
