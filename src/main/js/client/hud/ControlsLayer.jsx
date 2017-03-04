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
            </div>
        );
    }
}

export default ControlsLayer;
