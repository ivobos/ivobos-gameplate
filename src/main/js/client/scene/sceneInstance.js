import * as THREE from 'three'

let scene = new THREE.Scene();
let color = 0xffffff;
//scene.fog = new THREE.Fog( color, 60, 90); // this should match far in CameraInstance
scene.background = new THREE.Color( color );


export function updateScene(config) {
    if (config.fog !== undefined) scene.fog = config.fog;
    if (config.background !== undefined) scene.background = config.background;
}

export function getScene() {
    return scene;
}

export function addVirtualObject(object3d) {

}

export function addPhysicalObject(object3d) {

}
