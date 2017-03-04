import React from "react";
import * as sceneRenderer from "./sceneRenderer";

class RenderLayer extends React.Component {
    render() {
        return (
            <div id="RenderLayer"
                 ref={node => { node.appendChild(sceneRenderer.getRendererElement()); }}
                 style={{ position:'absolute' }}
            >
            </div>
        );
    }
}

export default RenderLayer;
