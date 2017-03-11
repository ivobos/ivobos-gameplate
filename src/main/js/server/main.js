import * as socketServer from "./socketServer";

console.log("starting server");

setImmediate(tick);
socketServer.listen();

function tick() {
    // console.log("tick");
    socketServer.updateClients();
    setTimeout(tick, 100);
}
