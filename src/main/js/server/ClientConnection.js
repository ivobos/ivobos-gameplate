import TransportHandler from '../common/TransportHandler';
import WsStateHandler from '../common/WsStateHandler';
import ObjectReplicator from '../common/ObjectReplicator';
import LoginHandler from './LoginHandler';
import * as objectRegistry from './objectRegistry';

class ClientConnection {

    constructor(ws, disconnectHandler) {
        this.transportHandler = new TransportHandler(ws, this.defaultRxHandler.bind(this));
        this.wsStateHandler = new WsStateHandler(ws, this.transportHandler, disconnectHandler);
        this.loginHandler = new LoginHandler(this.transportHandler, this.onLoginSuccessHandler.bind(this));
    }

    getWs() {
        return this.transportHandler.getWs();
    }

    getUsername() {
        return this.loginHandler.getUsername();
    }

    onLoginSuccessHandler() {
        console.log("create new object replicator");
        this.objectReplicator = new ObjectReplicator(this.transportHandler, this.rxObjectHandler.bind(this));
    }

    rxObjectHandler(uuid, data) {
        console.log("received object uuid:"+uuid+" data:"+JSON.stringify(data));
        objectRegistry.set(uuid, data);
    }

    defaultRxHandler(data, transportHandler) {
        console.log("default rx "+JSON.stringify(data));
    }

    update() {
        if (this.objectReplicator) {
            for (let [uuid, data] of objectRegistry.getObjects()) {
                this.objectReplicator.pushObject({
                    uuid: uuid,
                    data: data
                });
            }
        }
    }

}

export default ClientConnection;