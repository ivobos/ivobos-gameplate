
let userUuidMap = new Map();

export function setUserUuid(username, uuid) {
    if (userUuidMap.has(username)) {
        if (userUuidMap.get(username) !== uuid) {
            console.log("Boom, new uuid doesn't match existing, don't update it!");
        }
    } else {
        userUuidMap.set(username, uuid);
    }
}

export function getUuid(username) {
    return userUuidMap.get(username);
}

