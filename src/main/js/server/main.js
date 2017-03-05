import * as clientConnections from "./clientConnections";

console.log("starting server");

setImmediate(tick);
clientConnections.listen();

function tick() {
    // console.log("tick");
    setTimeout(tick, 1000);
}
