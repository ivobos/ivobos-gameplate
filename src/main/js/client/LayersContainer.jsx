import React from "react";
import RenderLayer from './scene/RenderLayer.jsx'
import CursorLayer from './hud/CursorLayer.jsx';
import ControlsLayer from './hud/ControlsLayer.jsx';

class LayersContainer extends React.Component {
    render() {
        return (
            <div id="app" style={{ height:"100%" }}>
                <RenderLayer/>
                <CursorLayer/>
                <ControlsLayer/>
            </div>
        )
    }
}

export default LayersContainer;
