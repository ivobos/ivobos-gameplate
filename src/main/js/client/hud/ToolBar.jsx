import React from "react";
import CameraSelector from "./CameraSelector.jsx";
import HighlightToggle from "./HighlightToggle.jsx";

class ToolBar extends React.Component {
    render() {
        return (
            <div>
                <CameraSelector />
                <HighlightToggle/>
            </div>
        );
    }
    renderOld() {
        return (
            <div className="mdl-grid" style={{ maxWidth:"640px" }}>
                <div className="mdl-cell mdl-cell--1-col mdl-cell--11-offset-desktop">
                    <CameraSelector />
                </div>
                <div className="mdl-cell mdl-cell--1-col  mdl-cell--10-offset-desktop">
                    <HighlightToggle/>
                </div>
            </div>
        );
    }
}

export default ToolBar;
