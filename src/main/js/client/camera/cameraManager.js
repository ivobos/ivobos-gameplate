import * as THREE from 'three'

import * as userControlledCamera from "./userControlledCamera";
import FpsCameraStrategy from "./FpsCameraStrategy";
import TrackingCameraStrategy from "./TrackingCameraStrategy";

let currentCameraIdx = 0;
let cameraStrategies = [];

export function init() {
    cameraStrategies.push(new TrackingCameraStrategy( { followOffset: new THREE.Vector3(0, 10, -15) } ));
    cameraStrategies.push(new FpsCameraStrategy({ offset: new THREE.Vector3(0, 2, 0)}));
    userControlledCamera.init(cameraStrategies[currentCameraIdx]);
}

export function getCamera() {
    return userControlledCamera.getCamera3d();
}

export function selectNextCameraMode() {
    currentCameraIdx = (currentCameraIdx + 1) % cameraStrategies.length;
    userControlledCamera.setCameraStrategy(cameraStrategies[currentCameraIdx]);
}

