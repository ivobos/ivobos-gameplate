import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";
import * as threeDsl from "../dsl/threedsl";
import * as sceneRenderer from "../scene/sceneRenderer";
import * as object3dEdges from "./object3dEdges";
import * as cameraSubject from "../camera/cameraSubject";

let components = [];
let center3d = null;

let recipe =
`default Color#fff
default Lambert Color#fff
Group 
    Mesh Sphere radius=1 Lambert Color#080
    Mesh Sphere radius=1 Toon Color#280 translate -1,1,1
    Mesh Sphere radius=1 Lambert Color#008 translate 1,0,0`;

export function getRecipe() {
    return recipe;
}

export function startCreation() {
    center3d = cameraSubject.getSubject().position.clone();
}

export function updatePacman(newRecipe) {
    let newobject3d = threeDsl.parseAndExecute(newRecipe);
    //var newobject3d = objectGenerator.create(newRecipe);
    if (newobject3d) {
        removeComponentsFromScene();
        if (center3d) newobject3d.position.copy(center3d);
        rememberComponents(newobject3d);
        recipe = newRecipe;
        object3dEdges.selectComponents(components);
        sceneInstance.getScene().add(newobject3d);
        sceneRenderer.setRenderRequired();
    }
}

export function create() {
    for (let object3d of components) {
        object3d.userData.velocity = new THREE.Vector3();
    }
    components = [];
}

export function clear() {
    removeComponentsFromScene();
}

function removeComponentsFromScene() {
    // remove all parts of old object
    for (var object3d of components) {
        if (object3d.parent == null) {
            sceneInstance.getScene().remove(object3d);
        } else {
            sceneInstance.getScene().remove(object3d.parent);
        }
    }
    components = [];
}

function rememberComponents(object3d) {
    components.push(object3d);
    for (var i = 0; i < object3d.children.length; i++) {
        rememberComponents(object3d.children[i]);
    }
}

export function addPacman(center) {
    center3d = center;
}

export function addHeart(center, radius, color) {

    var x = 0, y = 0;

    var heartShape = new THREE.Shape();

    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

    var geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );

    var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial() );
    //var geometry = new THREE.SphereGeometry(radius, 20, 10);
    var material = new THREE.MeshToonMaterial({
        color: 0xf33a3f,
        shading: THREE.SmoothShading
    });
//    geometry.vertices
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(center);
    //mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0));
    //sceneInstance.getScene().add(mesh);
}

