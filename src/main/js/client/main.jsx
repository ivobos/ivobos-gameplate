import "../../css/material-icons.css";
import "../../css/main.css";
import * as THREE from 'three'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as gameLoop from "./gameLoop";
import * as simpleObject from "./entities/simpleObject";
import * as sceneRenderer from "./scene/sceneRenderer";
import * as cameraManager from "./camera/cameraManager";
import * as fixedCamera from "./camera/fixedCamera";
import * as trackingCamera from "./camera/trackingCamera";
import * as pacman from "./entities/pacman";
import * as threedsl from "./dsl/threedsl";

//injectTapEventPlugin();
module.exports.run = function() {
    var reactContainer = document.createElement('div');
    reactContainer.id = "appContainer";
    document.body.appendChild(reactContainer);

    const App = () => (
        <div id="app">
            <div id="rendererContainer" ref={node => {
                node.appendChild(sceneRenderer.getRendererElement());
                }}>
            </div>
            <div id="hudOverlayTop">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--1-col" style={{ textAlign: "center"}}>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={cameraManager.selectNextCamera}>
                            <i className="material-icons">visibility</i>
                        </button>
                    </div>
                    <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone">
                    </div>
                    <div className="mdl-cell mdl-cell--1-col" style={{ textAlign: "center"}}>
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                            <i className="material-icons">settings</i>
                        </button>
                    </div>
                </div>
            </div>
            <div id="hudOverlayBottom">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                         style={{ textAlign: "center"}}>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable" style={{ width:'100%'}}>
                            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="pacman_recipe">
                                <i className="material-icons">code</i>
                            </label>
                            <div className="mdl-textfield__expandable-holder" style={{ width:'100%'}}>
                                <input className="mdl-textfield__input" type="text" id="pacman_recipe"
                                    onChange={pacman.onTextFieldChange}/>
                                <label className="mdl-textfield__label" htmlFor="pacman_recipe">Code</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    ReactDOM.render(<App />, reactContainer);

    var splash = document.getElementById('splash');
    splash.parentNode.removeChild(splash);

    componentHandler.upgradeDom();

    cameraManager.addCamera(fixedCamera.getCamera());
    fixedCamera.getCamera().position.set(35, 35, 35);
    fixedCamera.getCamera().lookAt(new THREE.Vector3());

    cameraManager.addCamera(trackingCamera.getCamera());

    const facetSize = 20;
    const blocksPerFacet = 5;
    const blockSize = facetSize / blocksPerFacet;
    const normal = new THREE.Vector3(0, 1, 0);
    for (var x = 0; x < blocksPerFacet ; x++) {
        for (var z = 0; z < blocksPerFacet; z++) {
            var c = 0.5 + (x+z) / blocksPerFacet / 4;
            var color = new THREE.Color(c,c,c);
            var center = new THREE.Vector3(
                (x - (blocksPerFacet - 1) / 2) * facetSize / blocksPerFacet,
                0,
                (z - (blocksPerFacet - 1) / 2) * facetSize / blocksPerFacet
            );
            simpleObject.addSquare(center, blockSize, normal, color);
        }
    }
    //simpleObject.addSphere(new THREE.Vector3(-2, 1, 2), 1, 0xffff00);
    //simpleObject.addOrigin();
    simpleObject.addDirectionalLight();
    simpleObject.addAmbientLight();
    pacman.addPacman(new THREE.Vector3(0, 8, 0), document.getElementById('pacman_recipe'));
    gameLoop.start();

};



