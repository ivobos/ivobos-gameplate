import * as THREE from 'three'

var renderer;

export function createScene() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var bgColor = 0;
    var bgColorDelta = 0.01;
    var render = function () {
        requestAnimationFrame( render );

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        bgColor += bgColorDelta;
        if (bgColor <= 0 || bgColor >= 1) {
            bgColorDelta = -bgColorDelta;
        }
        scene.background = new THREE.Color(bgColor, bgColor, bgColor);
        renderer.render(scene, camera);
    };

    render();
}

export function getRendererElement() {
    return renderer.domElement;
}

