let keyMap = {};

export function init() {
    document.addEventListener('keydown', onKeyDownCb, false);
    document.addEventListener('keyup', onKeyUpCb, false);
}

export function isKeyDown(key) {
    return key in keyMap;
}

function onKeyDownCb(event) {
    keyMap[event.key] = true;
}

function onKeyUpCb(event) {
    delete keyMap[event.key];
}

