import * as THREE from 'three'

var scene = new THREE.Scene();
var color = 0x888888;
//scene.fog = new THREE.Fog( color, 60, 90); // this should match far in CameraInstance
scene.background = new THREE.Color( color );


export function updateScene(config) {
    if (config.fog !== undefined) scene.fog = config.fog;
    if (config.background !== undefined) scene.background = config.background;
}

export function getScene() {
    return scene;
}
