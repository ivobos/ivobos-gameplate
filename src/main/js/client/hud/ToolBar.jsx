import React from "react";
import CameraSelector from "./CameraSelector.jsx";
import HighlightToggle from "./HighlightToggle.jsx";

class ToolBar extends React.Component {
    render() {
        return (
            <div className="hudOverlayTop">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--1-col">
                        <CameraSelector />
                    </div>
                    <div className="mdl-cell mdl-cell--1-col">
                        <HighlightToggle/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToolBar;
