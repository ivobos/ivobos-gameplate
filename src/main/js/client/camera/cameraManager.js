var currentCameraIdx = 0;
var cameras = [];

export function addCamera(camera) {
    cameras.push(camera);
}

export function getCurrentCamera() {
    return cameras[currentCameraIdx];
}

export function selectNextCamera() {
    currentCameraIdx = (currentCameraIdx + 1) % cameras.length;
}
