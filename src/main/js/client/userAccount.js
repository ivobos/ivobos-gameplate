
let username = undefined;
let playerObj = undefined;

export function init(object3d) {
    if (localStorage.username) {
        username = localStorage.username;
    }
    playerObj = object3d;
}

export function getUsername() {
    return username;
}

export function setUsername(newUsername) {
    username = newUsername;
    localStorage.username = username;
}

export function getUuid() {
    return playerObj.uuid;
}

export function setUuid(uuid) {
    return playerObj.uuid = uuid;
}
