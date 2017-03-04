import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";
import * as object3dUtils from "../scene/object3dUtils";
import * as mouseHandler from "../input/mouseHandler";
import * as cameraManager from "../camera/cameraManager";
import * as cameraSubject from "../camera/cameraSubject";

const cursor = new THREE.AxisHelper(1);
const raycaster = new THREE.Raycaster();

export function init() {
    sceneInstance.getScene().add(cursor);
    object3dUtils.addCallbacks(cursor, object3dUtils.POST_RENDER, [ postRenderCb ]);
}

function postRenderCb() {
    let normalizedPosition = mouseHandler.getNormalizedPosition();
    raycaster.setFromCamera(normalizedPosition, cameraManager.getCamera());
    let groundPlane = new THREE.Plane(new THREE.Vector3(0,1,0));
    let point = raycaster.ray.intersectPlane(groundPlane);
    if (point) {
        cursor.position.copy(point);
    }
    let exaggerated = normalizedPosition.clone().multiply(new THREE.Vector2(3,1));
    raycaster.setFromCamera(exaggerated, cameraManager.getCamera());
    let q = new THREE.Quaternion();
    let directionAlongGround = raycaster.ray.direction.clone().setComponent(1,0).normalize();
    // console.log(directionAlongGround);
    q.setFromUnitVectors(new THREE.Vector3(0,0,1), directionAlongGround);
    cursor.quaternion.copy(q);
    if (mouseHandler.clicked) {
        mouseHandler.clicked = false; // consume event
        cameraSubject.setFocus(cursor.position, cursor.quaternion);
    }
}
