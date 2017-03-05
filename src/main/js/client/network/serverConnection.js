
let ws = undefined;
let enabled = true;
let changeListener = undefined;

export function init() {
    setImmediate(checkConnection);
}

export function setEnabled(newValue) {
    enabled = newValue;
}

export function isEnabled() {
    return enabled;
}

export function isConnected() {
    return (ws && ws.readyState == 1);
}

export function setChangeListener(newChangeListener) {
    changeListener = newChangeListener;
}

function checkConnection() {
    if (ws) {
        if (ws.readyState == 3) { // closed
            ws = undefined;
        }
    }
    if (ws && !enabled) {
        console.log("disconnecting");
        ws.close();
    }
    if (!ws && enabled) {
        console.log("connecting to server");
        ws = new WebSocket('ws://localhost:8088/');
        ws.onopen = onopen;
        ws.onmessage = onmessage;
        ws.onclose = onclose;
        ws.onerror = onerror;
    }
    notifyStateChange();
    setTimeout(checkConnection, 1000);
}

function onopen(event) {
    console.log("rx connected");
    ws.send("ping");
}

function onmessage(event) {
    console.log("rx message");
}

function onclose(event) {
    console.log("rx closed");
    ws = undefined;
}

function onerror(event) {
    console.log("rx error");
}

function notifyStateChange() {
    if (changeListener) changeListener();
}