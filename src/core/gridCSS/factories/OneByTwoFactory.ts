import { GridOptions, GridOptionsInput, LayoutFactory } from "../core/layoutTypes";
import { DefaultNodeManager } from "../core/DefaultNodeManager";
import { uniformGridBuilder } from "../builders/uniformGridBuilder";
import { defaultCanonicalGrid } from "../defaults/defaults";
import { GridNodeOptions } from "../core/GridNodeTypes";
import { AddNodeReturnValue, PatchIntentByKind } from "../core/nodeManagerTypes";
import { DiagnosticEntry } from "../core/gridErrorShape";
import { NodeID } from "../ids/kinds";


type Kinds_1_2 = 'block_1' | 'block_2';

type OneByTwoFactoryProps = {

    gridOptions?: Partial<GridOptions>;
    nodeOptions?: Partial<Record<Kinds_1_2, GridNodeOptions>>;
    nodePatches?: ReadonlyArray<PatchIntentByKind<Kinds_1_2>>;
};


export function OneByTwoFactory(): LayoutFactory<Kinds_1_2> {

    const layout: LayoutFactory<Kinds_1_2> = {
        createLayout(
            gridOptions?: Readonly<GridOptionsInput>,
            nodeOptions?: Partial<Record<Kinds_1_2, GridNodeOptions>>,
            nodeIntents?: ReadonlyArray<PatchIntentByKind<Kinds_1_2>>
        ) {

            let diagnostics: ReadonlyArray<DiagnosticEntry> = [];

            let id: NodeID | undefined = undefined;
            let diagnostic: DiagnosticEntry | undefined = undefined;

            const nodeManager = new DefaultNodeManager<Kinds_1_2>();

            const { nodes, errors } = uniformGridBuilder(
                {
                    partitionsX: 2,
                    partitionsY: 1,
                    xsMode: "tile"
                }
            )

            diagnostics = diagnostics.concat(errors);

            let rt: AddNodeReturnValue = nodeManager.addNode(
                nodes[0],
                'block_1',
                {
                    ...nodeOptions?.['block_1']
                }
            );

            ({ id, diagnostic: diagnostic } = rt)

            if (diagnostic) {
                diagnostics = diagnostics.concat([diagnostic]);
            }


            nodeManager.addNode(
                nodes[1],
                'block_2',
                {
                    ...nodeOptions?.['block_2']
                }
            );

            ({ id, diagnostic: diagnostic } = rt)
            if (diagnostic) {
                diagnostics = diagnostics.concat([diagnostic]);
            }

            if (nodeIntents) {
                const patches = nodeManager.patchNodes(nodeIntents);
                diagnostics = diagnostics.concat(patches);
            }

            return { grid: defaultCanonicalGrid<Kinds_1_2>(nodeManager, gridOptions), diagnostics: diagnostics };

        }

    };

    return layout;



}


