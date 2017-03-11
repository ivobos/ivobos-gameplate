import * as hashUtils from "./hashUtils";

const REP_TYPE = "rep";

// the replication is asymetric
// any changes to objects in the client are replicated to server
// server uses client sent location to decide which objects to replicate to client
//
// each change object has the following structure
// {
//      uuid: "123e4567-e89b-12d3-a456-426655440000", // will be derived from the three.js Object3D UUID
//      hash: <hashchain>,                       // sequence of hashes from the newest to the oldest
//      [payload: { ... }]                              // the state object
// }
//
// when the client receives a change object it will try to apply the change to the client state
// if the client doesn't contain the change.uuid, the client will create the object from the payload
// if the change.payload != client.object.payload, the client.object will be updated
// client.object will attempt pushto server
//
// during game loop, all objects will attempt to be pushed to server
//
// attempt to push to server
// if the replicator contains a change with the given uuid and payload, the push attempt will be discarded
// replicator will remember the attempted push
//
// client holds the following information for each objects
//  - server hash and timestamp
//  - client hash and timestamp
//
// object changes from server can either
//  - do nothing
//  - when client timestamp is older
//
class ObjectReplicator {

    constructor(transportHandler, rxObjectHandler) {
        this.txObjectDatahashMap = new Map();
        this.transportHandler = transportHandler;
        this.transportHandler.setRxCallback(REP_TYPE, this.rxCallback.bind(this));
        this.rxObjectHandler = rxObjectHandler;
    }

    // tell replicator to replicate an object of the following structure
    // { uuid: ..., data: ... }
    pushObject(object) {
        let datahash = hashUtils.hash(JSON.stringify(object.data));
        let queuedOrSentDatahash = this.txObjectDatahashMap.get(object.uuid);
        if (queuedOrSentDatahash === datahash) {
            // sent this previously
            return;
        }

        // TODO: if the object was sent just a moment ago and
        // not acknowledged by server, we should not send again
        // if (notacked) return;

        // send the object
        let repmsg = {
            uuid: object.uuid,
            data: object.data,
            datahash: datahash
        };
        console.log("tx "+JSON.stringify(repmsg));
        this.txObjectDatahashMap.set(object.uuid, datahash);
        this.transportHandler.send(REP_TYPE, repmsg);
    }

    // get next change from replicator to send to another replicator
    // commented out because not needed because we're writing to ws in the pushObject method
    // export function popMessage() {
    //
    // }
    // receive change from another replicator to push into this one
    // repmsg = { uuid: <uuid>, data: <data>, datahash: <datahash> }
    rxCallback(repmsg) {
        if (this.txObjectDatahashMap.get(repmsg.uuid) !== repmsg.datahash) {
            this.rxObjectHandler(repmsg.uuid, repmsg.data);
        }
    }

}

export default ObjectReplicator;

