import React from "react";
import * as sceneRenderer from "../scene/sceneRenderer";

class RenderContainer extends React.Component {
    render() {
        return (
            <div id="rendererContainer"
                 ref={node => { node.appendChild(sceneRenderer.getRendererElement()); }}
                 style={{ position:'absolute' }}
            >
            </div>
        );
    }
}

export default RenderContainer;
