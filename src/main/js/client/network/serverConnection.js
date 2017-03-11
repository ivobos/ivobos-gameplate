import * as THREE from 'three'

import TransportHandler from "../../common/TransportHandler";
import ObjectReplicator from "../../common/ObjectReplicator";
import * as sceneInstance from "../scene/sceneInstance";
import LoginHandler from './LoginHandler';
import WsStateHandler from '../../common/WsStateHandler';
import * as simpleObject from "../entities/simpleObject";

let ws = undefined;
let enabled = true;
let changeListener = undefined;
let transportHandler = undefined;
let objectReplicator = undefined;
let loginHandler = undefined;
let wsStateHandler = undefined;

export function init() {
    setImmediate(checkConnection);
}

export function setEnabled(newValue) {
    enabled = newValue;
}

export function isEnabled() {
    return enabled;
}

export function isConnected() {
    return (ws && ws.readyState == 1);
}

export function isLoggedIn() {
    return (loginHandler && loginHandler.isLoggedIn());
}
export function setChangeListener(newChangeListener) {
    changeListener = newChangeListener;
}

export function replicateObjects() {
    if (objectReplicator !== undefined) {
        for (let object3d of sceneInstance.getScene().children) {
            if (object3d.userData.recipe != undefined) {
                objectReplicator.pushObject(
                    {
                        uuid: object3d.uuid,
                        data: {
                            position: object3d.position,
                            recipe: object3d.userData.recipe
                        }
                    }
                );
            }
        }
    }
}

function checkConnection() {
    if (ws && !enabled) {
        console.log("disconnecting");
        ws.close();
    }
    if (ws && ws.readyState == 3) {
        ws = undefined;
    }
    if (!ws && enabled) {
        console.log("connecting to server");
        // let hostname = "node.aptive.net";
        let hostname = "localhost";
        ws = new WebSocket('ws://'+hostname+':8088/');
        ws.onopen = onopen;
    }
    notifyStateChange();
    setTimeout(checkConnection, 1000);
}

function onopen(event) {
    console.log("rx connected");
    transportHandler = new TransportHandler(ws, defaultRxHandler);
    wsStateHandler = new WsStateHandler(ws, disconnectionHandler);
    loginHandler = new LoginHandler(transportHandler, onloginsuccess);
}

function onloginsuccess() {
    objectReplicator = new ObjectReplicator(transportHandler, rxObjectHandler);
}

function defaultRxHandler(data) {
    console.log("default handler rx "+JSON.stringify(data));
}

function rxObjectHandler(uuid, data) {
    console.log("rx rep for uuid:"+uuid+" data:"+data);
    for (let object3d of sceneInstance.getScene().children) {
        if (object3d.uuid === uuid) {
            object3d.position.set(data.position.x, data.position.y, data.position.z);
            // console.log("current pos="+JSON.stringify(object3d.position)+" should update to "+
            //     JSON.stringify(data.position));
            return;
        }
    }
    let position = new THREE.Vector3(data.position.x, data.position.y, data.position.z);
    simpleObject.addRecipe(uuid, data.recipe, position);
}

function disconnectionHandler(event) {
    console.log("disconnected");
    ws = undefined;
    transportHandler = undefined;
    objectReplicator = undefined;
    loginHandler = undefined;
}

function notifyStateChange() {
    if (changeListener) changeListener();
}
