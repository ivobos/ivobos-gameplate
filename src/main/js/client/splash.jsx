import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardText from 'material-ui/Card/CardText';
import CircularProgress from 'material-ui/CircularProgress';
import "../../css/stylesheet.css";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var rootElem = document.createElement('div');
rootElem.id = "splash";
document.body.appendChild(rootElem);

ReactDOM.render(
    <MuiThemeProvider>
        <CardText style={{position: 'relative', height: '100%', margin: '0'}}>
            <CircularProgress size={40} style={{left: '50%', top: '50%', marginLeft: '-20px', marginTop: '-20px'}} />
        </CardText>
    </MuiThemeProvider>,
    rootElem
);
