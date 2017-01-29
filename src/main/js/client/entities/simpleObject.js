import * as THREE from 'three'
import * as sceneInstance from "../scene/sceneInstance";

export function addToScene(center, blockSize, color) {
    var geometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize);
    var material = new THREE.MeshBasicMaterial({color: color});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.copy(center);
    sceneInstance.getScene().add(cube);
}


