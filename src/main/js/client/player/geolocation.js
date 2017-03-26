import * as THREE from 'three'

let enabled = false;
let searching = false;
let location = undefined;
let changeListener = undefined;
let subject = undefined;

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

export function setSubject(newSubject) {
    subject = newSubject;
}

function onLocationSuccess(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    location = new THREE.Vector3(
        (long > 210 ? long - 360 : long) * 45,  // should be 45000 not 45
        0,
        lat * 111); // should be 111000 not 111 
    console.log("letlong="+lat+","+long);
    searching = false;
    console.log("setting new position "+location.x+","+location.y+","+location.z);
    subject.position.copy(location);
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
