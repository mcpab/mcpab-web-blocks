import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import { gridUnitValueToString, gapValueToString } from "../../core/cssStringify";
import { LayoutAbsolute } from "../../core/boxLayout/boxLayoutTypes";
import { GridOptions } from "../../core/gridOptionsTypes";
import { defaultGridNodeOptions, GridRenderersRegistry } from "../../core/nodeViewOptions";
import { BlocksIDs, NodeID, SectionIDs } from "../../templates/layoutIDs";
import { DefaultNodeRender } from "./DefaultNodeRender";

type MainProps<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs> = {
    layoutAbsolute: LayoutAbsolute<sectionIDs, blockIDs>;
    gridOptionsOverride?: Partial<GridOptions>;
    children?: React.ReactNode;
};

function getSxProps(gridOptions: Partial<GridOptions>): SxProps {

    const sxProps: SxProps = {

        gridAutoColumns: gridOptions.implicitColumnUnits ?
            gridUnitValueToString(gridOptions.implicitColumnUnits) : 'auto',
        gridAutoRows: gridOptions.implicitRowUnits ?
            gridUnitValueToString(gridOptions.implicitRowUnits) : 'auto',

        gridAutoFlow: gridOptions.autoFlow ? gridOptions.autoFlow : "row",

        overflow: gridOptions.overflow ? gridOptions.overflow : "visible",

        justifyItems: gridOptions.justifyItems ? gridOptions.justifyItems : "stretch",
        alignItems: gridOptions.alignItems ? gridOptions.alignItems : "stretch",

        justifyContent: gridOptions.justifyContent ? gridOptions.justifyContent : "start",
        alignContent: gridOptions.alignContent ? gridOptions.alignContent : "start",

        gap: gridOptions.gap ? gapValueToString(gridOptions.gap) : '0px',
        rowGap: gridOptions.gap ? gridOptions.gap : { unit: "px", value: 0 },
        columnGap: gridOptions.gap ? gridOptions.gap : { unit: "px", value: 0 },

    }

    return sxProps;

}

function TopContainer<sectionIDs extends SectionIDs, blockIDs extends BlocksIDs>({ layoutAbsolute, gridOptionsOverride, children }: MainProps<sectionIDs, blockIDs>) {

    const
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
                    xs: `repeat(${layoutAbsolute.gridDimensions.columns.xs}, minmax(0, 1fr))`,
                    sm: `repeat(${layoutAbsolute.gridDimensions.columns.sm}, minmax(0, 1fr))`,
                    md: `repeat(${layoutAbsolute.gridDimensions.columns.md}, minmax(0, 1fr))`,
                    lg: `repeat(${layoutAbsolute.gridDimensions.columns.lg}, minmax(0, 1fr))`,
                    xl: `repeat(${layoutAbsolute.gridDimensions.columns.xl}, minmax(0, 1fr))`,
                },
                gridTemplateRows: {
                    xs: `repeat(${layoutAbsolute.gridDimensions.rows.xs}, minmax(0, 1fr))`,
                    sm: `repeat(${layoutAbsolute.gridDimensions.rows.sm}, minmax(0, 1fr))`,
                    md: `repeat(${layoutAbsolute.gridDimensions.rows.md}, minmax(0, 1fr))`,
                    lg: `repeat(${layoutAbsolute.gridDimensions.rows.lg}, minmax(0, 1fr))`,
                    xl: `repeat(${layoutAbsolute.gridDimensions.rows.xl}, minmax(0, 1fr))`,
                },
                // 🔒 no gap – spacing is delegated to children / nodes
                // gap: 0,

                // applying default grid options
                ...defaultGridOptions,
                ...gridOptionsOverride,
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