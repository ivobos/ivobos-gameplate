import * as THREE from 'three';

const mouseWindowPos = new THREE.Vector2();
const normalizedPosition = new THREE.Vector2();
export let clicked = false;

export function init() {
    document.addEventListener('mousemove', mouseMoveCb, false);
    document.addEventListener('mousedown', mouseDownCb, false);
    document.addEventListener('click', clickCb, false);
}

export function getNormalizedPosition() {
    return normalizedPosition;
}

function mouseMoveCb(event) {
    event.preventDefault();
    mouseWindowPos.x = event.clientX;
    mouseWindowPos.y = event.clientY;
    normalizedPosition.set(( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1);
}

function mouseDownCb(event) {
    mouseWindowPos.x = event.clientX;
    mouseWindowPos.y = event.clientY;
    normalizedPosition.set(( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1);
    clicked = true;
}

function clickCb(event) {
    event.preventDefault();
}