import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";

var mediumDensity = 0.01;

export function process() {
    var scene = sceneInstance.getScene();
    for (var i = 0; i < scene.children.length; i++) {
        var child = scene.children[i];
        if (child.type == "Group" || child.isMesh) {
            processObject3d(child);
        }
    }
}

function processObject3d(object3d) {
    if (object3d.userData.velocity) {
        var force = object3d.userData.velocity.clone().multiplyScalar(-mediumDensity);
        object3d.userData.velocity.add(force);
    }
}
