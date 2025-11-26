import { uniformGridBuilder } from "./uniformGridBuilder";
import { DefaultNodeManager } from "../core/gridCSS/core/DefaultNodeManager";
import { DiagnosticEntry } from "../core/gridCSS/core/gridErrorShape";
import { LayoutFactory } from "../core/gridCSS/core/layoutTypes";
import { defaultGrid } from "../core/gridCSS/defaults/defaults";
import { addNodeWithDiagnostics } from "../core/gridCSS/lib/utils";

export type Kinds_1_2 = 'block_1' | 'block_2';

export function OneByTwoFactory(): LayoutFactory<Kinds_1_2> {
    return {
        createLayout(gridOptions, nodeOptions, nodeIntents) {
            let diagnostics: DiagnosticEntry[] = [];

            const nodeManager = new DefaultNodeManager<Kinds_1_2>();

            const { nodes, errors } = uniformGridBuilder({
                partitionsX: 2,
                partitionsY: 1,
                xsMode: 'tile',
            });

            diagnostics = diagnostics.concat(errors);

            diagnostics = addNodeWithDiagnostics(
                nodeManager,
                diagnostics,
                nodes[0],
                'block_1',
                nodeOptions?.['block_1']
            );

            diagnostics = addNodeWithDiagnostics(
                nodeManager,
                diagnostics,
                nodes[1],
                'block_2',
                nodeOptions?.['block_2']
            );

            if (nodeIntents) {
                const patches = nodeManager.patchNodes(nodeIntents);
                diagnostics = diagnostics.concat(patches);
            }

            return {
                grid: defaultGrid<Kinds_1_2>(nodeManager, gridOptions),
                diagnostics,
            };
        },
    };
}
