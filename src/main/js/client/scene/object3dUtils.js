import * as THREE from 'three'

export function addTickCallback(object3d, callback) {
    if (!object3d.userData.onTick) object3d.userData.onTick = [];
    object3d.userData.onTick.push(callback);
}

export function addTickCallbacks(object3d, callbacks) {
    var onTick = object3d.userData.onTick;
    if (!onTick) object3d.userData.onTick = onTick = [];
    onTick.push.apply(onTick, callbacks);
}

export function processTickCallbacks(object3d) {
    if (object3d.userData.onTick) {
        for (let callback of object3d.userData.onTick) {
            callback(object3d);
        }
    }
}

export function enablePhysics(object3d) {
    object3d.userData.velocity = new THREE.Vector3Node();
}