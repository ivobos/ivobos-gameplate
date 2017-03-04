
let target = undefined;
let focusOffset = undefined;

export function getSubject() {
    return target;
}

export function getFocusPoint() {
    return target.position.clone().add(focusOffset.clone().applyQuaternion(target.quaternion));
}

export function setSubject(object3d, offset) {
    target = object3d;
    focusOffset = offset;
}

export function setTarget(position, quaternion) {
    target.userData.controller.moveTo(position, quaternion);
}

export function setFocus(position, quaternion) {
    let targetPosition = position.clone().sub(focusOffset.clone().applyQuaternion(quaternion));
    setTarget(targetPosition, quaternion);
}
