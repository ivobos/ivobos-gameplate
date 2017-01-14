import * as sceneRenderer from './scene/sceneRenderer';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import "../../css/stylesheet.css";

injectTapEventPlugin();

var rootElem = document.createElement('div');
document.body.appendChild(rootElem);

const App = () => (
    <MuiThemeProvider>
        <div>
            <div ref={node => {
                node.appendChild(sceneRenderer.getRendererElement());
                }}>
            </div>
            <div style={{ position: 'absolute', top: 0}}>
                <div>
                    <FontIcon className="material-icons">home</FontIcon>
                </div>
            </div>
        </div>
    </MuiThemeProvider>
);

sceneRenderer.createScene();

ReactDOM.render(<App />, rootElem);

var splash = document.getElementById('splash')
document.body.removeChild(splash);


