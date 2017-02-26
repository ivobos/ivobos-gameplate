import * as THREE from 'three'
import * as object3dUtils from "../scene/object3dUtils";
import * as cameraTarget from "./cameraTarget";

const camera = new THREE.PerspectiveCamera();

// const size = new THREE.Vector3(1, 6, 1);
camera.onBeforeRender = updateCamera;
let followOffset = new THREE.Vector3(0, 2, -15);

camera.position.set(4, 2, 5);
camera.lookAt(new THREE.Vector3());
camera.userData.aabb = new THREE.Box3();
camera.userData.velocity = new THREE.Vector3();
object3dUtils.addCallbacks(camera, object3dUtils.PRE_RENDER, [ preRenderCb ]);

function updateCamera() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function preRenderCb() {
    let target = cameraTarget.getTarget();
    camera.position.copy(target.position);
    let offset = followOffset.clone().applyQuaternion(target.quaternion);
    camera.position.add(offset);
    camera.quaternion.copy(target.quaternion);
    camera.rotateY(180 * THREE.Math.DEG2RAD);
}

export function getCamera() {
    return camera;
}

