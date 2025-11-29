import { Box } from "@mui/material";
import React from "react";
import { AbsoluteGrid } from "../../core/absoluteGridTypes";
import { defaultGridNodeOptions, GridRenderersRegistry } from "../../core/nodeViewOptions";
import { formatGridUnitValue } from "../../core/utils/utils";
import { NodeID } from "../../templates/layoutIDs";
import { DefaultNodeRender } from "./DefaultNodeRender";


type MainProps<K extends NodeID> = {
    grid: AbsoluteGrid<K>;
    children?: React.ReactNode;
};

function TopContainer<K extends NodeID>({ grid, children }: MainProps<K>) {
    return (
        <Box
            sx={{
                display: "grid",

                // 🔒 hard clamp to parent width
                width: "100%",
                maxWidth: "100%",
                minWidth: 0,
                boxSizing: "border-box",

                // 🔒 allow tracks to shrink
                gridTemplateColumns: {
                    xs: `repeat(${grid.columns.xs}, minmax(0, 1fr))`,
                    sm: `repeat(${grid.columns.sm}, minmax(0, 1fr))`,
                    md: `repeat(${grid.columns.md}, minmax(0, 1fr))`,
                    lg: `repeat(${grid.columns.lg}, minmax(0, 1fr))`,
                    xl: `repeat(${grid.columns.xl}, minmax(0, 1fr))`,
                },
                gridTemplateRows: {
                    xs: `repeat(${grid.rows.xs}, minmax(0, 1fr))`,
                    sm: `repeat(${grid.rows.sm}, minmax(0, 1fr))`,
                    md: `repeat(${grid.rows.md}, minmax(0, 1fr))`,
                    lg: `repeat(${grid.rows.lg}, minmax(0, 1fr))`,
                    xl: `repeat(${grid.rows.xl}, minmax(0, 1fr))`,
                },
                // 🔒 no gap – spacing is delegated to children / nodes
                // gap: 0,

                justifyItems: grid.options.justifyItems,
                alignItems: grid.options.alignItems,
                justifyContent: grid.options.justifyContent,
                alignContent: grid.options.alignContent,

                gridAutoFlow: grid.options.autoFlow,

                // keep implicit units for now, they’re not the problem anymore
                gridAutoRows: grid.options.implicitRowUnits
                    ? formatGridUnitValue(grid.options.implicitRowUnits)
                    : undefined,
                gridAutoColumns: grid.options.implicitColumnUnits
                    ? formatGridUnitValue(grid.options.implicitColumnUnits)
                    : undefined,

                // last-resort visual safety: hide any accidental overflow
                overflowX: "hidden",
            }}
        >
            {children}
        </Box>
    );
}


export type GridCssMuiRendererProps<K extends NodeID> = {

    grid: AbsoluteGrid<K>;
    nodesRegister: GridRenderersRegistry<K>;

};

export function GridCssMuiRenderer<K extends NodeID>({ grid, nodesRegister }: GridCssMuiRendererProps<K>) {


    return <TopContainer grid={grid}>
        {Object.values(grid.nodes).map((node) =>
            <DefaultNodeRender
                key={node.id}
                node={node.node}
                view={nodesRegister[node.id].view || defaultGridNodeOptions}
            >
                {nodesRegister[node.id].contentRenderer(node.id, node.node)}
            </DefaultNodeRender>)}
    </TopContainer>;

}