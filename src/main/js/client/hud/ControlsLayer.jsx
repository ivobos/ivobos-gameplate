import React from "react";
import ToolBar from './ToolBar.jsx';
import ActionBar from './ActionBar.jsx';

class ControlsLayer extends React.Component {
    render() {
        return (
            <div id="ControlsLayer" style={{ width: "100%", height:"100%",
                display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
                <ToolBar/>
                <ActionBar/>
                <div aria-live="assertive" aria-atomic="true" aria-relevant="text" className="mdl-snackbar mdl-js-snackbar">
                    <div className="mdl-snackbar__text"></div>
                    <button type="button" className="mdl-snackbar__action"></button>
                </div>
            </div>
        );
    }
}

export default ControlsLayer;
