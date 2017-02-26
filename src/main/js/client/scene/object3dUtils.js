import * as THREE from 'three'

export const PRE_RENDER = "PRE_RENDER";
export const POST_RENDER = "POST_RENDER";
export const ON_TICK = "ON_TICK";

export function addCallbacks(object3d, cbType, callbacks) {
    let cbArray = object3d.userData[cbType];
    if (!cbArray) object3d.userData[cbType] = cbArray = [];
    cbArray.push.apply(cbArray, callbacks);
}

export function processCallbacks(object3d, cbType) {
    if (object3d.userData[cbType]) {
        for (let callback of object3d.userData[cbType]) {
            callback(object3d);
        }
    }
}

export function enablePhysics(object3d) {
    object3d.userData.velocity = new THREE.Vector3Node();
}