import * as THREE from 'three';
import * as keyboardHandler from "../../input/keyboardHandler";
import ControllerInterface from "./ControllerInterface";
import * as object3dUtils from "../../scene/object3dUtils";

class SimpleController extends ControllerInterface {

    constructor(object3d) {
        super();
        this.controlee = object3d;
        this.newTarget = new THREE.Object3D();
        this.oldTarget = new THREE.Object3D();
        this.isNewTargetValid = false;
        this.interpolationFactor = 0;
        this.interpolationStep = 0.05;
        object3dUtils.addCallbacks(this.controlee, object3dUtils.ON_TICK, [ () => this.tickCb() ]);

    }

    moveTo(position, quaternion) {
        this.oldTarget.position.copy(this.controlee.position);
        this.oldTarget.quaternion.copy(this.controlee.quaternion);
        this.newTarget.position.copy(position);
        this.newTarget.quaternion.copy(quaternion);
        this.interpolationFactor = this.interpolationStep;
        this.isNewTargetValid = true;
    }

    tickCb() {
        if (this.isNewTargetValid) {
            if (this.interpolationFactor < 1) {
                this.controlee.position.copy(this.oldTarget.position.clone().lerp(this.newTarget.position, this.interpolationFactor));
                this.controlee.quaternion.copy(this.oldTarget.quaternion.clone().slerp(this.newTarget.quaternion, this.interpolationFactor));
                this.interpolationFactor += this.interpolationStep;
            } else {
                this.controlee.position.copy(this.newTarget.position);
                this.isNewTargetValid = false;
            }
        }
        let forward = this.controlee.getWorldDirection();
        let up = this.controlee.up;
        let left = up.clone().cross(forward).normalize();
        if (keyboardHandler.isKeyDown('w')) {
            this.controlee.position.add(forward);
        }
        if (keyboardHandler.isKeyDown('s')) {
            this.controlee.position.sub(forward);
        }
        if (keyboardHandler.isKeyDown('d')) {
            this.controlee.position.sub(left);
        }
        if (keyboardHandler.isKeyDown('a')) {
            this.controlee.position.add(left);
        }
        let leftRotate = new THREE.Quaternion();
        leftRotate.setFromAxisAngle(up, 1 * THREE.Math.DEG2RAD);
        if (keyboardHandler.isKeyDown('ArrowLeft')) {
            // camera.quaternion.multiply(leftRotate).normalize();
            this.controlee.quaternion.copy(leftRotate.clone().multiply(this.controlee.quaternion).normalize());
        }
        if (keyboardHandler.isKeyDown('ArrowRight')) {
            this.controlee.quaternion.copy(leftRotate.clone().inverse().multiply(this.controlee.quaternion).normalize());
        }
    }

}

export default SimpleController;

