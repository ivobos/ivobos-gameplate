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
            <div id="hudOverlay">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--1-col" style={{ textAlign: "center"}}>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={cameraManager.selectNextCamera}>
                            <i className="material-icons">visibility</i>
                        </button>
                    </div>
                    <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--N-col-phone">
                    </div>
                    <div className="mdl-cell mdl-cell--1-col" style={{ textAlign: "center"}}>
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                            <i className="material-icons">settings</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    ReactDOM.render(<App />, reactContainer);

    var splash = document.getElementById('splash');
    splash.parentNode.removeChild(splash);

    cameraManager.addCamera(fixedCamera.getCamera());
    cameraManager.addCamera(trackingCamera.getCamera());

    const facetSize = 200;
    const blocksPerFacet = 5;
    for (var x = 0; x < blocksPerFacet ; x++) {
        for (var y = 0; y < blocksPerFacet; y++) {
            for (var z = 0; z < blocksPerFacet; z++) {
                var color = new THREE.Color(x / blocksPerFacet, y / blocksPerFacet, z / blocksPerFacet);
                var center = new THREE.Vector3(
                    (x - (blocksPerFacet - 1) / 2) * facetSize / blocksPerFacet,
                    (y - (blocksPerFacet - 1) / 2) * facetSize / blocksPerFacet,
                    (z - (blocksPerFacet - 1) / 2) * facetSize / blocksPerFacet
                );
                simpleObject.addToScene(center, facetSize / blocksPerFacet - 1, color);
            }
        }
    }
    gameLoop.start();

};



