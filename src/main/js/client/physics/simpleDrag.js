import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";

var mediumDensity = 0.01;

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
    var velocity = object3d.userData.velocity;
    if (!velocity) {
        object3d.userData.velocity = velocity = new THREE.Vector3();
    }
    var force = velocity.clone().multiplyScalar(-mediumDensity);
    velocity.add(force);
}
