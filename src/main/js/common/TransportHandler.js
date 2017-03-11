
class TransportHandler {

    // ws is opened connection
    constructor(ws, defaultRxCallback) {
        this.ws = ws;
        this.rxCallbackByType = new Map();
        this.defaultRxCallback = defaultRxCallback;
        this.ws.onmessage = this.onmessage.bind(this);
    }

    getWs() {
        return this.ws;
    }

    setRxCallback(type, callback) {
        this.rxCallbackByType.set(type, callback);
    }

    send(type, data) {
        let msg = {
          type: type,
          data: data
        };
        this.ws.send(JSON.stringify(msg));
    }

    onmessage(event) {
        let msg = JSON.parse(event.data);
        let callback = this.rxCallbackByType.get(msg.type);
        if (callback === undefined) callback = this.defaultRxCallback;
        callback(msg.data, this);
    }

}

export default TransportHandler;

