import * as WebSocket from "ws";

export function listen() {
    console.log("listening on 8088");
    const wss = new WebSocket.Server({port: 8088});

    wss.on('connection', function connection(ws) {
        console.log("client connected");
        ws.on('message', function incoming(message) {
            console.log("rx %s", message);
        });

        let data = "HelloClient";
        console.log("tx %s", data);
        ws.send(data);
    });
}
