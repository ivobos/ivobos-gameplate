import React from "react";
import * as object3dEdges from "../entities/object3dEdges";

class HighlightToggle extends React.Component {
    constructor() {
        super();
        this.state = {
            highlight: object3dEdges.isEnabled(),
        };
    }
    render() {
        return (
            <label className="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect"
                   htmlFor="highlightToggle"
                   style={{ }}>
                <input type="checkbox" id="highlightToggle" className="mdl-icon-toggle__input"
                       checked={this.state.highlight} onChange={ () => this.toggleState() }/>
                <i className="mdl-icon-toggle__label material-icons">highlight</i>
            </label>
        );
    }
    toggleState() {
        let newValue = !this.state.highlight;
        this.setState({ highlight: newValue });
        object3dEdges.setEnabled(newValue);
    }
}

export default HighlightToggle;
