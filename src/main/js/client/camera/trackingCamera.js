import * as THREE from 'three'
//import * as container from '../scene/container';
import * as sceneInstance from '../scene/sceneInstance';

var debug = false;
var camera = new THREE.PerspectiveCamera();
camera.position.z = 5;
camera.far = 1;
var debugCamera = debug ? new THREE.PerspectiveCamera() : null;
// vertical field of view
var fov= 45;
// angle towards horizontal plane
var highAngle = 12;
// camera to look at this object, in the direction this object is facing
var center = debug ? new THREE.AxisHelper(25) : new THREE.Object3D();
// objects within this distance of center should be visible in camera view
var centerRadius = 30;
// camera tilt input, comes from mouse or dev orientation
var tiltInput = new THREE.Vector2();
// max tilt in degrees
var tiltRange = 10;
// new proposed center the camera should fly to
var newCenter = null;
var maxSpeed = 2.6;
var maxRotate = 1.0 * Math.PI / 180;
//var flyControls;
if (debugCamera) {
    debugCamera.far = 20000;
//    var containerElem = container.getDomElement();
//    flyControls = new THREE.FlyControls(debugCamera, containerElem);
}

camera.onBeforeRender = updateCamera;

if (debug) {
    sceneInstance.getScene().add(center);
//    sceneInstance.getScene().add(new THREE.CameraHelper(camera));
}

export function getGameCamera() {
    return camera;
}

export function getCamera() {
    if (debug) {
        return debugCamera;
    } else {
        return camera;
    }
}
export function updateCamera() {
    if (newCenter) {
        if (false) {
            //// move center towards newCenter
            //var delta = this.newCenter.position.clone().sub(this.center.position);
            //var move = delta.clone().multiplyScalar(0.05);
            //this.center.position.add(move);
            //// rotate to align to newCenter
            //var qdiff = this.newCenter.quaternion.clone().multiply(this.center.quaternion.clone().conjugate());
            //var qmove = new THREE.Quaternion().slerp(qdiff, 0.05);
            //this.center.quaternion.multiply(qmove).normalize();
            //if (this.newCenter.position.equals(this.center.position)) this.newCenter = null;
        } else {
            center.position.copy(newCenter.position);
            center.quaternion.copy(newCenter.quaternion);
            newCenter = null;
        }
    }
    var aspect = window.innerWidth / window.innerHeight;
    camera.fov = fov;
    camera.aspect = aspect;
    camera.far = 9000; // this should match far in fog used in SceneInstance
    camera.updateProjectionMatrix();
    var distV = centerRadius /  Math.atan(fov * THREE.Math.DEG2RAD * 0.5);
    var distH = centerRadius / aspect /  Math.atan(fov * THREE.Math.DEG2RAD * 0.5);
    var dist = Math.max(distV, distH);
    camera.position.copy(center.position);
    camera.quaternion.copy(center.quaternion);
    camera.updateMatrix();
    camera.rotateY(180 * THREE.Math.DEG2RAD);  // the center is actually in opposite direction to camera, so reverse it now
    var tiltX = tiltInput.y * tiltRange / 2;
    var tiltY = tiltInput.x * tiltRange / 2;
    camera.rotateX(- (highAngle + tiltX)* THREE.Math.DEG2RAD);
    camera.rotateY(tiltY * THREE.Math.DEG2RAD);
    var offset = new THREE.Vector3(0, 0, dist);     // and back-away from center by dist
    offset.applyQuaternion(camera.getWorldQuaternion());
    camera.position.add(offset);
    // the following is needed if we want the camera to be valid even though we don't use it for rendering
    camera.updateMatrixWorld();
    camera.matrixWorldInverse.getInverse( camera.matrixWorld );
    // update the debug camera to trail the actual camera
    if (debugCamera) {
        debugCamera.copy(camera);
        debugCamera.position.add(debugCamera.getWorldDirection().multiplyScalar(-200));
//        flyControls.update(1);
    }
}

export function doCameraUpdate(data) {
    //for (var param in data) this[param] = data[param];
    updateCamera();
}

export function getRenderData() {
    var data = [];
    if (debug) {
        data.push(center);
        data.push(new THREE.CameraHelper(camera));
    }
    return data;
}
