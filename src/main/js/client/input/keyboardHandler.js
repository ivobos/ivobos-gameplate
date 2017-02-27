let keyMap = {};

export function init() {
    document.addEventListener('keydown', onKeyDownCb, false);
    document.addEventListener('keyup', onKeyUpCb, false);
}

export function isKeyDown(key) {
    return key in keyMap;
}

function onKeyDownCb(event) {
    if (event.target == document.body) {
        keyMap[event.key] = true;
    }
}

function onKeyUpCb(event) {
    if (event.target == document.body) {
        delete keyMap[event.key];
    }
}

