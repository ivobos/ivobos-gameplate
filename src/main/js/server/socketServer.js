import * as WebSocket from "ws";
import ClientConnection from "./ClientConnection";

let clientConnections = new Set();

export function listen() {
    console.log("listening on 8088");
    const wss = new WebSocket.Server({port: 8088});

    wss.on('connection', function connection(ws) {
        console.log("socketServer: client connected");
        clientConnections.add(new ClientConnection(ws, disconnectHandler));
    });
}

function disconnectHandler(ws) {
    console.log("socketServer: client disconnected");
    for (let clientConnection of clientConnections) {
        if (clientConnection.getWs() === ws) {
            console.log("socketServer: removing client connection");
            clientConnections.delete(clientConnection);
        }
    }
}

export function isUserConnected(username) {
    for (let clientConnection of clientConnections) {
        if (clientConnection.getUsername() === username) return true;
    }
    return false;
}


export function updateClients() {
    for (let clientConnection of clientConnections) {
        clientConnection.update();
    }
}