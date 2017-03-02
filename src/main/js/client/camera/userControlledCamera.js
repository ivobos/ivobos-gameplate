import * as THREE from 'three'

import * as object3dUtils from "../scene/object3dUtils";
import * as cameraSubject from "./cameraSubject";
import * as sceneInstance from "../scene/sceneInstance";

const camera3d = new THREE.PerspectiveCamera();

let cameraStrategy = undefined;

export function init(initialCameraStrategy) {
    cameraStrategy = initialCameraStrategy;
    object3dUtils.addCallbacks(camera3d, object3dUtils.PRE_RENDER, [ preRenderCb ]);
    sceneInstance.getScene().add(camera3d);
}

export function setCameraStrategy(newCameraMode) {
    cameraStrategy = newCameraMode;
}

export function getCamera3d() {
    return camera3d;
}

function preRenderCb() {
    cameraStrategy.updatePosAndQuat(camera3d, cameraSubject.getSubject());
    camera3d.aspect = window.innerWidth / window.innerHeight;
    camera3d.updateProjectionMatrix();
}

