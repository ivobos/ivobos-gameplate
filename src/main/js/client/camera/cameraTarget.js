import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";
import * as object3dUtils from "../scene/object3dUtils";
import * as keyboardHandler from "../input/keyboardHandler";

const target = new THREE.AxisHelper(1);
const newTarget = new THREE.Object3D();
const oldTarget = new THREE.Object3D();
let isNewTargetValid = false;
let interpolationFactor = 0;
const interpolationStep = 0.05;

export function init() {
    sceneInstance.getScene().add(target);
    object3dUtils.addCallbacks(target, object3dUtils.ON_TICK, [ tickCb ]);
}

export function getTarget() {
    return target;
}

export function setTarget(position, quaternion) {
    newTarget.position.copy(position);
    newTarget.quaternion.copy(quaternion);
    oldTarget.position.copy(target.position);
    oldTarget.quaternion.copy(target.quaternion);
    interpolationFactor = interpolationStep;

    isNewTargetValid = true;
}

function tickCb() {
    if (isNewTargetValid) {
        if (interpolationFactor < 1) {
            target.position.copy(oldTarget.position.clone().lerp(newTarget.position, interpolationFactor));
            target.quaternion.copy(oldTarget.quaternion.clone().slerp(newTarget.quaternion, interpolationFactor));
            interpolationFactor += interpolationStep;
        } else {
            target.position.copy(newTarget.position);
            isNewTargetValid = false;
        }
    }
    let forward = target.getWorldDirection();
    let up = target.up;
    let left = up.clone().cross(forward).normalize();
    if (keyboardHandler.isKeyDown('w')) {
        target.position.add(forward);
    }
    if (keyboardHandler.isKeyDown('s')) {
        target.position.sub(forward);
    }
    if (keyboardHandler.isKeyDown('d')) {
        target.position.sub(left);
    }
    if (keyboardHandler.isKeyDown('a')) {
        target.position.add(left);
    }
    let leftRotate = new THREE.Quaternion();
    leftRotate.setFromAxisAngle(up, 1 * THREE.Math.DEG2RAD);
    if (keyboardHandler.isKeyDown('ArrowLeft')) {
        // camera.quaternion.multiply(leftRotate).normalize();
        target.quaternion.copy(leftRotate.clone().multiply(target.quaternion).normalize());
    }
    if (keyboardHandler.isKeyDown('ArrowRight')) {
        target.quaternion.copy(leftRotate.clone().inverse().multiply(target.quaternion).normalize());
    }
}
