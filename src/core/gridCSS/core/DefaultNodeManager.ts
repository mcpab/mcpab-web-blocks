import { defaultGridNode } from "../defaults/defaults";
import { Kinds, NodeID } from "../ids/kinds";
import { DiagnosticEntry } from "./gridErrorShape";
import { AbsoluteNode, GridNodeOptions, NodeAbsoluteCoordinates } from "./GridNodeTypes";
import { PartialBps } from "./layoutTypes";
import { AddNodeReturnValue, duplicateKindPolicy, NodeManagerInterface, PatchIntentByKind } from "./nodeManagerTypes";

export class DefaultNodeManager<K extends Kinds>
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
                    diagnostic: {
                        severity: 'error',
                        origin: 'nodeManager',
                        issue: {
                            code: "DUPLICATE_KIND",
                            message: `A node with kind '${kind}' has already been added; duplicate kinds are not allowed.`,
                            details: { kind },
                            origin: 'nodeManager',
                        }
                    }
                };
            } else if (this.duplicateKindPolicy === 'warn') {
                diagnostics = {
                    severity: 'warning',
                    origin: 'nodeManager',
                    issue: {
                        code: "DUPLICATE_KIND",
                        message: `A node with kind '${kind}' has already been added; duplicate kinds may lead to unexpected behavior.`,
                        details: { kind },
                        origin: 'nodeManager',
                    }
                };
                return { id: undefined, diagnostic: diagnostics };
            }
            // If 'allow', do nothing
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
            results.push({
                severity: 'error',
                origin: 'nodeManager',
                issue: {
                    code: "NO_NODES",
                    message: `No nodes are registered in the NodeManager; cannot apply patches.`,
                    details: {},
                    origin: 'nodeManager',
                },
            });

            return results;
        }



        for (const intent of patches) {

            const { selector, coordinates, options } = intent;

            const matchedIDS = nodes.find(
                (n) => n.kind === selector
            );

            if (!matchedIDS) {
                results.push({
                    severity: 'error',
                    origin: 'nodeManager',
                    issue: {
                        code: "UNKNOWN_KIND",
                        message: `No node matches the selector kind '${selector}'.`,
                        details: { selector },
                        origin: 'nodeManager',
                    }
                });
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