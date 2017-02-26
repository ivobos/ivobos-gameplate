import * as THREE from 'three'
import * as object3dUtils from "../scene/object3dUtils";
import * as keyboardHandler from "../input/keyboardHandler";
import * as physics from "../physics/physics";

const camera = new THREE.PerspectiveCamera();
const size = new THREE.Vector3(1, 2, 1);
camera.onBeforeRender = updateCamera;
camera.position.set(4, 2, 5);
camera.lookAt(new THREE.Vector3());
camera.userData.aabb = new THREE.Box3();
camera.userData.velocity = new THREE.Vector3();
object3dUtils.addTickCallbacks(camera,
    [ tickCallback, physics.uniformGravity, physics.simpleDrag,
        physics.momentum, physics.infiniteFloor ]);

function updateCamera() {
    let aspect = window.innerWidth / window.innerHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
}

function tickCallback() {
    let aabb = camera.userData.aabb;
    aabb.setFromCenterAndSize(camera.position, size);
    let forward = camera.getWorldDirection();
    let bodyUp = physics.getUniformGravity().multiplyScalar(-1).normalize();
    let bodyLeft = bodyUp.clone().cross(forward).normalize();
    let bodyForward = bodyLeft.clone().cross(bodyUp).normalize();

    // slowly make the camera look body forward
    // var qdiff = new THREE.Quaternion();
    // qdiff.setFromUnitVectors(bodyForward, forward);
    // var change = new THREE.Quaternion();
    // change.slerp(qdiff, 0.01);
    // camera.quaternion.multiply(change);

    if (keyboardHandler.isKeyDown('w')) {
        camera.position.add(bodyForward);
    }
    if (keyboardHandler.isKeyDown('s')) {
        camera.position.sub(bodyForward);
    }
    if (keyboardHandler.isKeyDown('d')) {
        camera.position.sub(bodyLeft);
    }
    if (keyboardHandler.isKeyDown('a')) {
        camera.position.add(bodyLeft);
    }
    let leftRotate = new THREE.Quaternion();
    leftRotate.setFromAxisAngle(bodyUp, 1 * THREE.Math.DEG2RAD);
    if (keyboardHandler.isKeyDown('ArrowLeft')) {
        // camera.quaternion.multiply(leftRotate).normalize();
        camera.quaternion.copy(leftRotate.clone().multiply(camera.quaternion).normalize());
    }
    if (keyboardHandler.isKeyDown('ArrowRight')) {
        camera.quaternion.copy(leftRotate.clone().inverse().multiply(camera.quaternion).normalize());
    }
    let upRotate = new THREE.Quaternion();
    upRotate.setFromAxisAngle(bodyLeft, - 1 * THREE.Math.DEG2RAD);
    if (keyboardHandler.isKeyDown('ArrowUp')) {
        camera.quaternion.copy(upRotate.clone().multiply(camera.quaternion).normalize());
    }
    if (keyboardHandler.isKeyDown('ArrowDown')) {
        camera.quaternion.copy(upRotate.clone().inverse().multiply(camera.quaternion).normalize());
    }
}

export function getCamera() {
    return camera;
}

