import "../../css/material-icons.css";
import "../../css/main.css";
import * as THREE from 'three'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as gameLoop from "./gameLoop";
import * as simpleObject from "./entities/simpleObject";
import * as cameraManager from "./camera/cameraManager";
import * as fixedCamera from "./camera/fixedCamera";
import * as trackingCamera from "./camera/trackingCamera";
import * as pacman from "./entities/pacman";

import RenderContainer from './hud/RenderContainer.jsx'
import ToolBar from './hud/ToolBar.jsx';
import ActionBar from './hud/ActionBar.jsx';

//injectTapEventPlugin();
module.exports.run = function() {
    let reactContainer = document.createElement('div');
    reactContainer.id = "appContainer";
    document.body.appendChild(reactContainer);

    const App = () => (
        <div id="app">
            <RenderContainer/>
            <ToolBar/>
            <ActionBar/>
        </div>
    );

    ReactDOM.render(<App />, reactContainer);

    let splash = document.getElementById('splash');
    splash.parentNode.removeChild(splash);

    componentHandler.upgradeDom();

    cameraManager.addCamera(fixedCamera.getCamera());
    fixedCamera.getCamera().position.set(35, 35, 35);
    fixedCamera.getCamera().lookAt(new THREE.Vector3());

    cameraManager.addCamera(trackingCamera.getCamera());

    simpleObject.addOrigin();
    simpleObject.addDirectionalLight();
    simpleObject.addAmbientLight();
    simpleObject.addGridHelper();
    simpleObject.addRecipe(`Mesh Sphere radius=5 Lambert Color#888 translate -15,5,0`);
    pacman.addPacman(new THREE.Vector3(0, 10, 0));
    gameLoop.start();

};



