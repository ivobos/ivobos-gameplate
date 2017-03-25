import * as THREE from 'three'

let enabled = false;
let searching = false;
let location = undefined;
let changeListener = undefined;

export function isEnabled() {
    return enabled;
}

export function isSearching() {
    return enabled && searching;
}

export function hasError() {
    return enabled && !searching && location == undefined;
}

export function setChangeListener(newChangeListener) {
    changeListener = newChangeListener;
}

export function setEnabled(newEnabled) {
    if (enabled !== newEnabled) {
        enabled = newEnabled;
        if (enabled) {
            updateGeo();
        } else {
            notifyStateChange();
        }
    }
}

export function updateGeo() {
    searching = true;
    location = undefined;
    notifyStateChange();
    navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, { enableHighAccuracy: true });
}

function onLocationSuccess(position) {
    location = new THREE.Vector2(position.coords.latitude, position.coords.longitude);
    console.log("letlong="+location);
    searching = false;
    notifyStateChange();
}

function onLocationError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    searching = false;
    notifyStateChange();
}

function notifyStateChange() {
    if (changeListener) changeListener();
}
