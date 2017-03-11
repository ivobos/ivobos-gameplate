

let objectsMap = new Map();


export function set(uuid, data) {
    objectsMap.set(uuid, data);
}

export function getObjects() {
    return objectsMap;
}