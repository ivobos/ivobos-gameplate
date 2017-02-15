import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";
import * as threeDsl from "../dsl/threedsl";
import * as sceneRenderer from "../scene/sceneRenderer";
import * as object3dEdges from "./object3dEdges";

export function onTextFieldChange(event) {
    //console.log(event.target.value);
    updatePackman(event.target.value);
}

//var recipe = "gms5lc833+0+0+0ms1lc034-2+1+4ms1lc034+2+1+4mblc084+0-4+0";
var components = [];
var center3d = null;

var recipe = `
 default Color#fff
 default Lambert Color#fff
 Group 
    Mesh Sphere radius=5 Lambert Color#800
    Mesh Sphere radius=3 Toon Color#280 translate -3,3,3
    Mesh Sphere radius=2 Lambert Color#008 translate 8,0,0
`;

function updatePackman(newRecipe) {
    var newobject3d = threeDsl.parseAndExecute(newRecipe);
    //var newobject3d = objectGenerator.create(newRecipe);
    if (newobject3d) {
        removeComponentsFromScene();
        if (center3d) newobject3d.position.copy(center3d);
        rememberComponents(newobject3d);
        recipe = newRecipe;
        object3dEdges.highlightObject(newobject3d);
        sceneInstance.getScene().add(newobject3d);
        sceneRenderer.setRenderRequired();
    }
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

export function addPacman(center, textarea) {
    textarea.value = recipe;
    center3d = center;
    updatePackman(recipe);
    //var object3d = objectGenerator.create();
    ////var x = "Mesh(Sphere(Radius=5)Toon(Color=ff0)"
    //object3d.position.copy(center);
    //sceneInstance.getScene().add(object3d);

//    var points = [];
//    points.push(new THREE.Vector2(5, 10));
//    points.push(new THREE.Vector2(10, 5));
//    points.push(new THREE.Vector2(15, 10));
//    points.push(new THREE.Vector2(10, 15));
//    points.push(new THREE.Vector2(5, 10));
//
//    var geometry = new THREE.LatheBufferGeometry(points, 10, 0, Math.PI);
//
//    //var material = new THREE.MeshToonMaterial({
//    //    color: 0xf33a3f,
//    //    shading: THREE.SmoothShading,
//    //    side: THREE.DoubleSide
//    //});
//    var material = new THREE.MeshPhongMaterial({ color: 0x444444});
////    geometry.vertices
//    var mesh = new THREE.Mesh(geometry, material);
//    mesh.position.copy(center);
//    //mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0));
//    sceneInstance.getScene().add(mesh);
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

