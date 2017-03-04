import * as THREE from 'three'

import * as cameraSubject from "./cameraSubject";
import CameraStrategyInterface from "./CameraStrategyInterface";

class TrackingCameraStrategy extends CameraStrategyInterface {

    updatePosAndQuat(camera3d, subject) {
        let focusPoint = cameraSubject.getFocusPoint();
        camera3d.position.copy(focusPoint);
        let offset = this.config.followOffset.clone().applyQuaternion(subject.quaternion);
        camera3d.position.add(offset);
        camera3d.quaternion.copy(subject.quaternion);
        camera3d.rotateY(180 * THREE.Math.DEG2RAD);
        camera3d.lookAt(focusPoint);
    }

}

export default TrackingCameraStrategy;
