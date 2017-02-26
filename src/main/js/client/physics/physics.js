import * as THREE from 'three';


// assumes aabb is present
export function updateAabb(object3d) {
    object3d.userData.aabb.setFromObject(object3d);
}

// assumes aabb is updated and velocity are present
var floorY = 0;
export function infiniteFloor(object3d) {
    let aabb = object3d.userData.aabb;
    let velocity = object3d.userData.velocity;
    if (aabb.min.y < floorY) {
        object3d.position.y += floorY - aabb.min.y;
        if (velocity.y < 0) velocity.y *= -0.5;
    }
}


export function momentum(object3d) {
    object3d.position.add(object3d.userData.velocity);
}

let mediumDensity = 0.01;
export function simpleDrag(object3d) {
    let velocity = object3d.userData.velocity;
    let force = object3d.userData.velocity.clone().multiplyScalar(-mediumDensity);
    velocity.add(force);
}

let gravity3 = new THREE.Vector3(0,-9.8/60/10,0);
export function getUniformGravity() {
    return gravity3.clone();
}
export function uniformGravity(object3d) {
    object3d.userData.velocity.add(gravity3);
}

