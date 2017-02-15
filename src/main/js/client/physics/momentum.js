import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";

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
        object3d.position.add(object3d.userData.velocity);
    }
}
