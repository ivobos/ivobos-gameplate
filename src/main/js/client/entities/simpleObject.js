import * as THREE from 'three'
import * as sceneInstance from "../scene/sceneInstance";

export function addToScene() {
    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = (Math.random() - 0.5) * 1000;
    cube.position.y = (Math.random() - 0.5) * 1000;
    cube.position.z = (Math.random() - 0.5) * 1000;
    sceneInstance.getScene().add(cube);
}


