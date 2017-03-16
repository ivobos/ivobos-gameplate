
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
        let msgstr = JSON.stringify(msg);
        console.log("tx "+msgstr);
        this.ws.send(msgstr);
    }

    onmessage(event) {
        console.log("rx "+event.data);
        let msg = JSON.parse(event.data);
        let callback = this.rxCallbackByType.get(msg.type);
        if (callback === undefined) callback = this.defaultRxCallback;
        callback(msg.data, this);
    }

}

export default TransportHandler;

