import * as THREE from 'three'

var camera = new THREE.PerspectiveCamera();
camera.position.z = 500;
camera.onBeforeRender = updateCamera;

function updateCamera() {
    var aspect = window.innerWidth / window.innerHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
}


export function getCamera() {
    return camera;
}