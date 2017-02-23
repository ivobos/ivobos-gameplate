import React from "react";
import * as cameraManager from "../camera/cameraManager";

class CameraSelector extends React.Component {
    render() {
        return (
            <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                    onClick={cameraManager.selectNextCamera}>
                <i className="material-icons">visibility</i>
            </button>
        );
    }
}

export default CameraSelector;
