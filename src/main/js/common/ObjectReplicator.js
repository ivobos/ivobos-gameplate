import * as hashUtils from "./hashUtils";
import * as messageTypes from "./messageTypes";

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
        this.transportHandler.setRxCallback(messageTypes.REP_TYPE, this.rxCallback.bind(this));
        this.rxObjectHandler = rxObjectHandler;
    }

    // tell replicator to replicate an object of the following structure
    // { uuid: ..., data: ..., datahash: datahash }
    // keep a record of the replication effort in a map keyed by uuid with following data
    // { datahash: ..., acked: ...}
    pushObject(object) {
        if (!object.uuid) {
            console.log("dont give me shit objects without uuid");
            return;
        }
        let txrecord = this.txObjectDatahashMap.get(object.uuid);
        if (txrecord && !txrecord.acked) {
            return; // previous replication wasn't acked yet, wait
        }
        let datahash = hashUtils.hash(JSON.stringify(object.data));
        if (txrecord && txrecord.datahash === datahash) {
            return; // object didn't change, no need to resend
        }
        // send the object
        let repmsg = {
            uuid: object.uuid,
            data: object.data,
            datahash: datahash
        };
        this.transportHandler.send(messageTypes.REP_TYPE, repmsg);
        this.txObjectDatahashMap.set(object.uuid, { datahash: datahash, acked: false });
    }

    pretendSynced(object) {
        let datahash = hashUtils.hash(JSON.stringify(object.data));
        this.txObjectDatahashMap.set(object.uuid, { datahash: datahash, acked: true });
    }

    // receive change from the other end, this can be either an update or an ack
    // { uuid: ..., data: ..., datahash:... }
    // { uuid: ..., ack: true, datahash:... }
    rxCallback(repmsg) {
        if (repmsg.data) {
            let datahash = hashUtils.hash(JSON.stringify(repmsg.data));
            if (datahash !== repmsg.datahash) {
                console.log("dammit datash error, expected "+datahash+" but was "+repmsg.datahash);
            }
        }
        let txrecord = this.txObjectDatahashMap.get(repmsg.uuid);
        if (repmsg.data && (!txrecord || txrecord.acked)) {
            // new uuid or already acked msg, ack it and pass it through to the app
            this.transportHandler.send(messageTypes.REP_TYPE, { uuid: repmsg.uuid, ack: true, datahash: repmsg.datahash });
            this.txObjectDatahashMap.set(repmsg.uuid, { datahash: repmsg.datahash, acked: true });
            this.rxObjectHandler(repmsg.uuid, repmsg.data);
            return;
        }
        if (repmsg.ack && repmsg.datahash === txrecord.datahash && !txrecord.acked) {
            // received an ack, remember this uuid has been acked
            txrecord.acked = true;
            return;
        }
        // ok, got here means the protocol is not working
        console.log("fuckup in protocol, repmsg="+JSON.stringify(repmsg)+" txrecord="+JSON.stringify(txrecord));
    }

}

export default ObjectReplicator;

