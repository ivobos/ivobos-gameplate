
let target = undefined;

export function getSubject() {
    return target;
}

export function setSubject(object3d) {
    target = object3d;
}

export function setTarget(position, quaternion) {
    target.userData.controller.moveTo(position, quaternion);
}
