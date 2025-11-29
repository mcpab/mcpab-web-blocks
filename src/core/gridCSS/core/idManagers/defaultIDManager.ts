import { NodeID } from "../../templates/layoutIDs";
import { DiagnosticEntry, GRID_ERROR_CODE, makeError } from "../gridErrorShape";
import { INodeOrderManager } from "./idManagerTypes";

export class DefaultIDManager<K extends NodeID> implements INodeOrderManager<K> {

    idsOrder: Array<K> = [];

    diagnosticEntries: Array<DiagnosticEntry> = [];

    constructor(idsOrder?: Array<K>) {
        if (idsOrder) {
            this.idsOrder = idsOrder;
        }
    }


    orderIds(ids: Array<K>): { ids: Array<K> | undefined, errors: DiagnosticEntry[] } {

        this.diagnosticEntries = [];

        if (this.idsOrder.length === 0) {
            return { ids, errors: [] };
        } else {
            const orderedIds = this.sortIds(ids);
            return { ids: orderedIds, errors: this.diagnosticEntries };
        }


    }

    private sortIds(ids: Array<K>): Array<K> | undefined {

        if (this.idsOrder.length !== ids.length) {

            this.diagnosticEntries.push(makeError('nodeManager', GRID_ERROR_CODE.NODE_ORDER_MISMATCH, 'Node count does not match order count',));

            return undefined
        }

        let sortedIDs: Array<K> = [];
        let usedIds: Set<K> = new Set();

        for (const nd of this.idsOrder) {

            const foundId = ids.find(n => n === nd);

            if (foundId) {

                if (usedIds.has(foundId)) {
                    this.diagnosticEntries.push(makeError('nodeManager',
                        GRID_ERROR_CODE.NODE_ORDER_MISMATCH,
                        ` Duplicate ID ${foundId} in ordering`,));
                    return undefined;
                }

                usedIds.add(foundId);
                sortedIDs.push(foundId);


            } else {
                this.diagnosticEntries.push(makeError('nodeManager',
                    GRID_ERROR_CODE.NODE_ORDER_MISMATCH,
                    ` ID ${nd} not found during ordering`,));
                return undefined;
            }
        }

        return sortedIDs;

    }


}
export default DefaultIDManager;