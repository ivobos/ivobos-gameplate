import * as THREE from 'three'

import CameraStrategyInterface from "./CameraStrategyInterface";

class FpsCameraStrategy extends CameraStrategyInterface {

    updatePosAndQuat(camera3d, subject) {
        camera3d.position.copy(subject.position);
        let offset = this.config.offset.clone().applyQuaternion(subject.quaternion);
        camera3d.position.add(offset);
        camera3d.quaternion.copy(subject.quaternion);
        camera3d.rotateY(180 * THREE.Math.DEG2RAD);
    }
}

export default FpsCameraStrategy;