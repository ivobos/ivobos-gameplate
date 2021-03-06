import * as sceneRenderer from "./scene/sceneRenderer";
import * as infiniteFloor from "./physics/infiniteFloor";
import * as momentum from "./physics/momentum";
import * as uniformGravity from "./physics/uniformGravity";
import * as simpleDrag from "./physics/simpleDrag";
import * as cohesion from "./physics/cohesion";
import * as sceneInstance from "./scene/sceneInstance";
import * as object3dUtils from "./scene/object3dUtils";
import * as serverConnection from "./network/serverConnection";


const updatesPerSec = 60;
const stepSec = 1 / updatesPerSec;
let dtSec;
let lastMsec;
let frameReq;


function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

export function start() {
    dtSec = 0;
    lastMsec = timestamp();
    frameReq = requestAnimationFrame(frame);
}

function frame() {
    //stats.begin();
    for (let object3d of sceneInstance.getScene().children) {
        object3dUtils.processCallbacks(object3d, object3dUtils.PRE_RENDER);
    }
    sceneRenderer.doRender();
    for (let object3d of sceneInstance.getScene().children) {
        object3dUtils.processCallbacks(object3d, object3dUtils.POST_RENDER);
    }
    //this.callMethodsWithData("getInputData", "doInput");
    let nowMsec = timestamp();
    dtSec = dtSec + Math.min(1, (nowMsec - lastMsec) / 1000);
    while(dtSec > stepSec) {
        dtSec = dtSec - stepSec;
        for (let object3d of sceneInstance.getScene().children) {
            object3dUtils.processCallbacks(object3d, object3dUtils.ON_TICK);
        }
        //this.callMethodsWithData("getPhysicsData", "doPhysics");
        // cohesion.process();
        // uniformGravity.process();
        // simpleDrag.process();
        // momentum.process();
        // infiniteFloor.process();
        sceneRenderer.setRenderRequired();
    }
    lastMsec = nowMsec;
    // replicate objects to server
    serverConnection.replicateObjects();
    //this.callMethod("doAnimation");
    //this.callMethodsWithData("getCameraData", "doCameraUpdate");
    //cameraInstance.doCameraUpdate();
    //stats.end();
    frameReq = requestAnimationFrame(frame);
}
