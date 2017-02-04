import * as THREE from 'three'
import * as sceneInstance from "../scene/sceneInstance";
import image1 from "./ground_sandy_564x564.png";

var texture = new THREE.TextureLoader().load(image1);

export function addDirectionalLight() {
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    sceneInstance.getScene().add(light);
}

export function addAmbientLight() {
    var light = new THREE.AmbientLight( 0xf0f0f0 );
    sceneInstance.getScene().add(light);
}

export function addSquare(center, size, normal, color) {
    var geometry = new THREE.PlaneBufferGeometry( size, size, 1, 1);
    var material = new THREE.MeshBasicMaterial( {color: color, side: THREE.DoubleSide} );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.copy(center);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
    sceneInstance.getScene().add( mesh );
}

export function addBox(center, width, height, depth, color) {
    var geometry = new THREE.BoxGeometry(width, height, depth);
    var material = new THREE.MeshBasicMaterial({color: color});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(center);
    sceneInstance.getScene().add(mesh);
}


export function addSphere(center, radius, color) {
    var geometry = new THREE.SphereGeometry(radius, 20, 10);
    var diffuseColor = new THREE.Color(.5,.5,.5);
    var specularColor = new THREE.Color(.5,.5,.5);
    var material = new THREE.MeshToonMaterial({
        color: 0xf33a3f,
        shading: THREE.SmoothShading
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(center);
    sceneInstance.getScene().add(mesh);
}

export function addOrigin() {
    sceneInstance.getScene().add(new THREE.AxisHelper(10));
}
