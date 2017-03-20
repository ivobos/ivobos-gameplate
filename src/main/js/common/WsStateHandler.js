import * as messageTypes from "./messageTypes";

const PING_PONG_TIMEOUT = 5000; // how long to wait for a pong before closing connection
const PING_PONG_DELTA = 3000;   // delay from next ping after receiving a pong

class WsStateHandler {
    constructor(ws, transportHandler, disconnectHandler) {
        this.ws = ws;
        this.disconnectHandler = disconnectHandler;
        this.transportHandler = transportHandler;
        ws.onclose = this.onclose.bind(this);
        ws.onerror = this.onerror.bind(this);
        this.transportHandler.setRxCallback(messageTypes.PING_TYPE, this.rxPing.bind(this));
        this.transportHandler.setRxCallback(messageTypes.PONG_TYPE, this.rxPong.bind(this));
        setTimeout(this.sendPing.bind(this), PING_PONG_TIMEOUT);
    }

    onclose(event) {
        if (this.timer) clearTimeout(this.timer);
        console.log("WsStateHandler onclose "+event);
        this.disconnectHandler(this.ws);
    }

    onerror(event) {
        console.log("WsStateHandler onerror "+event);
    }

    sendPing() {
        this.transportHandler.send(messageTypes.PING_TYPE, {});
        this.timer = setTimeout(this.handlePingPongTimeout.bind(this), PING_PONG_TIMEOUT);
    }

    rxPing(message) {
       this.transportHandler.send(messageTypes.PONG_TYPE, {});
    }

    rxPong(message) {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.sendPing.bind(this), PING_PONG_DELTA);
    }

    handlePingPongTimeout() {
        this.timer = undefined;
        console.log("ping pong timeout, closing connection");
        this.ws.close();
    }

}

export default WsStateHandler;