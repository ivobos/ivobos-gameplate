import * as THREE from 'three';
import * as sceneRenderer from '../scene/sceneRenderer';

const mouseWindowPos = new THREE.Vector2();
const normalizedPosition = new THREE.Vector2();
export let clicked = false;

export function init() {
    let elem = sceneRenderer.getRendererElement();
    elem.addEventListener('mousemove', mouseMoveCb, false);
    elem.addEventListener('mousedown', mouseDownCb, false);
    elem.addEventListener('click', clickCb, false);
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
    event.preventDefault();
    mouseWindowPos.x = event.clientX;
    mouseWindowPos.y = event.clientY;
    normalizedPosition.set(( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1);
    clicked = true;
}

function clickCb(event) {
    // console.log("mouseHandler.clickCb");
    event.preventDefault();
}