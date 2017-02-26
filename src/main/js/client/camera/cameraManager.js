import * as THREE from 'three'

import * as fixedCamera from "./fixedCamera";
import * as trackingCamera from "./trackingCamera";
import * as userControlledCamera from "./userControlledCamera";
import * as sceneInstance from "../scene/sceneInstance";
import * as cameraTarget from "./cameraTarget";

let currentCameraIdx = 0;
let cameras = [];

export function init() {
    cameraTarget.init();
    // user controlled
    addCamera(userControlledCamera.getCamera());
    // fixed camera
    addCamera(fixedCamera.getCamera());
    fixedCamera.getCamera().position.set(35, 35, 35);
    fixedCamera.getCamera().lookAt(new THREE.Vector3());
    // tracking camera
    addCamera(trackingCamera.getCamera());
}

export function addCamera(camera) {
    cameras.push(camera);
    sceneInstance.getScene().add(camera);
}

export function getCurrentCamera() {
    return cameras[currentCameraIdx];
}

export function selectNextCamera() {
    currentCameraIdx = (currentCameraIdx + 1) % cameras.length;
}
