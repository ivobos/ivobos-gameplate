import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";

var floorY = 0;

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
    var aabb = object3d.userData.aabb;
    if (!aabb) {
        object3d.userData.aabb = aabb = new THREE.Box3();
    }
    aabb.setFromObject(object3d);
    //console.log(aabb.min.y);
    if (aabb.min.y < floorY) {
        object3d.position.y += floorY - aabb.min.y;
        var velocity = object3d.userData.velocity;
        if (velocity)
        {
            if (velocity.y < 0) velocity.y *= -1;
        }
    }
}
