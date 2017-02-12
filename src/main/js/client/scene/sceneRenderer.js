import * as THREE from 'three'
//import * as container from "./container";
import * as cameraManager from "../camera/cameraManager";
import * as sceneInstance from "./sceneInstance";

var renderer = new THREE.WebGLRenderer( { antialias: false } );
//renderer.setClearColor( 0xf2f7ff );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
var windowResizeHandler = onWindowResize;
var renderRequired = true;

//var containerDomElem = container.getDomElement();
//containerDomElem.appendChild( renderer.domElement );
window.addEventListener('resize', windowResizeHandler, false );

export function getRendererElement() {
    return renderer.domElement;
}

export function setRenderRequired() {
    renderRequired = true;
}

function onWindowResize() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderRequired = true;
}

export function doRender() {
    if (renderRequired) {
        renderRequired = false;
        var camera = cameraManager.getCurrentCamera();
        camera.onBeforeRender();
        var scene = sceneInstance.getScene();
        //var children = scene.children;
        //var toDelete = children.slice().filter(function(i) { return data.indexOf(i) < 0; });
        //for (var i = 0; i < data.length; i++) {
        //    var obj = data[i];
        //    if (children.indexOf(obj) === -1) scene.add(obj);
        //}
        //toDelete.forEach(function(o) { scene.remove(o); });
        renderer.render(scene, camera);
    }
}
