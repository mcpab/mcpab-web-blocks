import { NodeID } from "../../templates/layoutIDs";
import { DiagnosticEntry } from "../gridErrorShape";



export interface INodeOrderManager<K extends NodeID> {

  readonly idsOrder: Array<K>;

  orderIds: (ids: Array<K>) => { ids: Array<K> | undefined, errors: DiagnosticEntry[]};

};

