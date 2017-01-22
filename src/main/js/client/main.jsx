import "../../css/material-icons.css";
import "../../css/main.css";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as gameLoop from "./gameLoop";
import * as simpleObject from "./entities/simpleObject";
import * as container from "./scene/container";

//injectTapEventPlugin();
module.exports.run = function() {
    var rootElem = document.createElement('div');
    document.body.appendChild(rootElem);

    const App = () => (
        <div>
            <div ref={node => {
                node.appendChild(container.getDomElement());
                }}>
            </div>
            <div className="hud_overlay">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col">
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" style={{ display: "table"}}>
                            <i className="material-icons">home</i>
                        </button>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" style={{ display: "table"}}>
                            <i className="material-icons">settings</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    ReactDOM.render(<App />, rootElem);

    var splash = document.getElementById('splash')
    document.body.removeChild(splash);

    for (var i = 0; i < 10; i++) {
        simpleObject.addToScene();
    }
    gameLoop.start();

};



