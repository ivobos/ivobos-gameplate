import * as THREE from 'three';
import * as sceneInstance from "../scene/sceneInstance";

export function process() {
    var scene = sceneInstance.getScene();
    for (var i = 0; i < scene.children.length; i++) {
        var child = scene.children[i];
        if (child.type == "Group") {
            processGroup(child);
        }
    }
}

var aabbBox3s;
var aabbMemberLists;

function processGroup(group) {
    aabbBox3s = [];
    aabbMemberLists = [];
    for (var i = 0; i < group.children.length; i++) {
        var child = group.children[i];
        processObject3d(child);
    }
    if (aabbMemberLists.length > 1) {
        // so the group is not cohesive, lets split it
        sceneInstance.getScene().remove(group);
        for (var i = 0; i < aabbMemberLists.length; i++) {
            var newGroup = new THREE.Group();
            // calculate group center
            newGroup.position.copy(aabbBox3s[i].getCenter());
            newGroup.position.add(group.position);
            // add objects to the new group
            for (var object3d of aabbMemberLists[i]) {
                newGroup.add(object3d);
                // todo: is this right or wrong?
                object3d.position.sub(aabbBox3s[i].getCenter()).add(group.position);
            }
            sceneInstance.getScene().add(newGroup);
        }
    }
}

function processObject3d(object3d) {
    var aabb = new THREE.Box3();
    aabb.setFromObject(object3d);
    for (var i = 0; i < aabbBox3s.length; i++) {
        if (aabbBox3s[i].intersectsBox(aabb)) {
            aabbBox3s[i].union(aabb);
            aabbMemberLists[i].push(object3d);
            fastMergeGroups();
            return;
        }
    }
    aabbBox3s.push(aabb);
    aabbMemberLists.push([object3d]);
}

// this function assumes that the groups are mostly merged and only 1 merge is required to get them into a good state
function fastMergeGroups() {
    for (var i = 0; i < aabbBox3s.length - 1; i++) {
        for (var j = i + 1; j < aabbBox3s.length; j++) {
            if (aabbBox3s[i].intersectsBox(aabbBox3s[j])) {
                // absorb group j into i
                aabbBox3s[i].union(aabbBox3s[j]);
                aabbMemberLists[i].concat(aabbMemberLists[j]);
                // remove group j
                aabbBox3s.splice(j, 1);
                aabbMemberLists.splice(j, 1);
                return;
            }
        }
    }
}
