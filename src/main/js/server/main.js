import * as socketServer from "./socketServer";

console.log("Starting server version: "+ VERSION);

const tickDurationMsec = 1000 / 60;
let nextTick = timestamp();
setImmediate(tick);
socketServer.listen();

function tick() {
    socketServer.updateClients();
    nextTick += tickDurationMsec;
    let sleepTime = nextTick - timestamp();
    if (sleepTime > 0) {
        setTimeout(tick, sleepTime);
    } else {
        console.log("having trouble keeping up");
        nextTick = timestamp() + tickDurationMsec;
        setImmediate(tick);
    }
}

function timestamp() {
    return new Date().getTime();
}