import * as THREE from 'three';

let selectedComponents = undefined;
let highlights = [];
let enabled = false;

export function toggleEnabled(event) {
    if (event.target.checked) {
        enabled = true;
        highlightComponents();
    } else {
        enabled = false;
        removeHighlights();
    }
}

export function isEnabled() {
    return enabled;
}

export function setEnabled(newState) {
    enabled = newState;
    if (enabled) {
        highlightComponents();
    } else {
        removeHighlights();
    }
}

export function selectComponents(components) {
    selectedComponents = components;
    if (enabled) {
        removeHighlights();
        highlightComponents();
    }
}

function highlightComponents() {
    if (!selectedComponents) return;
    for (var object3d of selectedComponents) {
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
            object3d.add(line);
            highlights.push(line);
        }
    }
}

function removeHighlights() {
    for (var highlight of highlights) {
        highlight.parent.remove(highlight);
    }
    highlights = [];
}

function addEdges(object3d) {
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
        object3d.add(line);
        highlights.push(line);
    } else {
        for (var i = 0; i < object3d.children.length; i++) {
            addEdges(object3d.children[i]);
        }
    }
}


