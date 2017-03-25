import React from "react";
import CameraSelector from "./CameraSelector.jsx";
import HighlightToggle from "./HighlightToggle.jsx";
import ServerStatus from "./ServerStatus.jsx";
import LocationControl from "./LocationControl.jsx";

class ToolBar extends React.Component {
    render() {
        return (
            <div style={{ display:"flex", justifyContent:"space-between", margin:"8px"}}>
                <div style={{ display:"flex"}}>
                    <CameraSelector />
                    <HighlightToggle/>
                </div>
                <div style={{ display:"flex", flexDirection:"row-reverse"}}>
                    <ServerStatus/>
                    <LocationControl/>
                </div>
            </div>
        );
    }
}

export default ToolBar;