import "../../css/material-icons.css";
import "../../css/main.css";
import * as THREE from 'three'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as gameLoop from "./gameLoop";
import * as simpleObject from "./entities/simpleObject";
import * as cameraManager from "./camera/cameraManager";
import * as pacman from "./entities/pacman";
import * as browserState from "./browserState";
import * as keyboardHandler from "./input/keyboardHandler";
import * as mouse3dCursor from "./input/mouse3dCursor";
import * as mouseHandler from "./input/mouseHandler";
import SimpleController from "./entities/controllers/SimpleController";
import * as cameraSubject from "./camera/cameraSubject";
import RenderContainer from './hud/RenderContainer.jsx'
import ToolBar from './hud/ToolBar.jsx';
import ActionBar from './hud/ActionBar.jsx';

//injectTapEventPlugin();
module.exports.run = function() {
    browserState.init();
    keyboardHandler.init();
    mouseHandler.init();

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

    cameraManager.init();

    // simpleObject.addOrigin();
    mouse3dCursor.init();
    simpleObject.addDirectionalLight();
    simpleObject.addAmbientLight();
    simpleObject.addGridHelper();
    let player = simpleObject.addRecipe(`Mesh Sphere radius=1 Lambert Color#888 translate -6,1,0`);
    player.userData.controller = new SimpleController(player);
    cameraSubject.setSubject(player);
    pacman.addPacman(new THREE.Vector3(0, 1, 0));
    gameLoop.start();

};



