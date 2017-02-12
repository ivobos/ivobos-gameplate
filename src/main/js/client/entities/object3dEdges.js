import * as THREE from 'three';

export function addEdges(object3d) {
    if (object3d.isMesh) {
        var geometry = object3d.geometry;
        var edges = new THREE.EdgesGeometry( geometry );
        var material = new THREE.LineBasicMaterial({
            color: 0xff0000,
            depthTest: false,
            opacity: 0.05,
            transparent: true,
            blending: THREE.CustomBlending,
            blendSrc: THREE.OneMinusDstColorFactor,
            blendEquation: THREE.AddEquation,
            blendDst: THREE.OneMinusDstAlphaFactor
        } );
        var line = new THREE.LineSegments( edges, material );
        object3d.add( line );
    } else {
        for (var i = 0; i < object3d.children.length; i++) {
            addEdges(object3d.children[i]);
        }
    }
}

