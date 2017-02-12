import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";

var gravity3 = new THREE.Vector3(0,-9.8/60/10,0);

export function setGravity(vector3) {
    gravity3.copy(vector3);
}

export function process() {
    var scene = sceneInstance.getScene();
    for (var i = 0; i < scene.children.length; i++) {
        var child = scene.children[i];
        if (child.type == "Group") {
            processObject3d(child);
        }
    }
}

function processObject3d(object3d) {
    if (!object3d.userData.velocity) {
        object3d.userData.velocity = new THREE.Vector3();
    }
    object3d.userData.velocity.add(gravity3);
}
