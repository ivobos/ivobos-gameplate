import React from "react";
import CameraSelector from "./CameraSelector.jsx";
import HighlightToggle from "./HighlightToggle.jsx";
import ServerStatus from "./ServerStatus.jsx";

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
                </div>
            </div>
        );
    }
}

export default ToolBar;