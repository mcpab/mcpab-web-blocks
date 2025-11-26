import { defaultGridNode } from "./defaultNode";
import { NodeID } from "../ids/kinds";
import { DiagnosticEntry, GRID_ERROR_CODE } from "./gridErrorShape";
import { AbsoluteNode, GridNodeOptions, NodeAbsoluteCoordinates } from "./gridNodeTypes";
import { PartialBps } from "./breakpoints";
import { AddNodeReturnValue, duplicateKindPolicy, NodeManagerInterface, PatchIntentByKind } from "./nodeManagerTypes";
import { makeError, makeWarning } from "./gridErrorShape";

export class DefaultNodeManager<K extends string>
    implements NodeManagerInterface<K> {

    /** Authoritative ID → Kind map for this layout/version (bijective; validated at init). */
    // readonly nodesVocabularyID_K: Readonly<Record<ID, K>>;

    /** Sparse registry: not every ID must be present. */
    readonly nodesRegistry: Partial<Record<NodeID, AbsoluteNode<K>>> = {};

    readonly duplicateKindPolicy: duplicateKindPolicy;
    private N = 0;

    kind = new Set<K>();
    constructor(
        duplicateKindPolicy: duplicateKindPolicy = 'error'
    ) {
        this.duplicateKindPolicy = duplicateKindPolicy;
    }

    private mintID(): NodeID {
        return (`n-${++this.N}`) as NodeID;
    }
    addNode(
        node: PartialBps<NodeAbsoluteCoordinates>,
        kind: K,
        options?: GridNodeOptions
    ): AddNodeReturnValue {

        let diagnostics: DiagnosticEntry | undefined = undefined;
        
        if (this.kind.has(kind)) {
            if (this.duplicateKindPolicy === 'error') {
                return {
                    id: undefined,
                    diagnostic: makeError(
                        'nodeManager',
                        GRID_ERROR_CODE.DUPLICATE_KIND,
                        `A node with kind '${kind}' has already been added; duplicate kinds are not allowed.`,
                        { details: { kind } })
                }
            };
        } else if (this.duplicateKindPolicy === 'warn') {
            diagnostics = makeWarning(
                'nodeManager',
                GRID_ERROR_CODE.DUPLICATE_KIND,
                `A node with kind '${kind}' has already been added; duplicate kinds may lead to unexpected behavior.`,
                { details: { kind } });
            return { id: undefined, diagnostic: diagnostics };
        }

        this.kind.add(kind);

        const id = this.mintID();

        const nd = defaultGridNode<K>(kind, id, node, options);

        this.nodesRegistry[id] = nd;

        return { id: id, diagnostic: diagnostics };
    };
    //---------------------------------------------------------------------------
    /** Apply a sequence of patch intents. */
    patchNodes(
        patches: ReadonlyArray<PatchIntentByKind<K>>
    ): ReadonlyArray<DiagnosticEntry> {

        let results: Array<DiagnosticEntry> = [];

        const nodes = Object.values(this.nodesRegistry).filter(
            (n): n is AbsoluteNode<K> => n !== undefined
        );


        if (!nodes) {
            results.push(makeError('nodeManager',
                GRID_ERROR_CODE.NO_NODES,
                `No nodes are registered in the NodeManager; cannot apply patches.`));

            return results;
        }



        for (const intent of patches) {

            const { selector, coordinates, options } = intent;

            const matchedIDS = nodes.find(
                (n) => n.kind === selector
            );

            if (!matchedIDS) {
                results.push(makeError('nodeManager',
                    GRID_ERROR_CODE.UNKNOWN_KIND,
                    `No node matches the selector kind '${selector}'.`,
                    { details: { selector } },));
                //
                continue;
            }

            for (const ids in matchedIDS) {
                if (coordinates) {
                    matchedIDS.coordinates = {
                        ...matchedIDS.coordinates,
                        ...coordinates,
                    };
                }
                if (options) {
                    matchedIDS.options = {
                        ...matchedIDS.options,
                        ...options,
                    };
                }
            }


        }

        return results;
    }

}
export default DefaultNodeManager;