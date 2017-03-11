
class WsStateHandler {
    constructor(ws, disconnectHandler) {
        this.ws = ws;
        this.disconnectHandler = disconnectHandler;
        ws.onclose = this.onclose.bind(this);
        ws.onerror = this.onerror.bind(this);
    }

    onclose(event) {
        console.log("WsStateHandler onclose "+event);
        this.disconnectHandler(this.ws);
    }

    onerror(event) {
        console.log("WsStateHandler onerror "+event);
    }

}

export default WsStateHandler;