import React from "react";

import * as geolocation from "../player/geolocation";

class LocationControl extends React.Component {
    constructor() {
        super();
        this.state = this.createStateObject();
        geolocation.setChangeListener(() => this.onStateChange());
    }
    render() {
        return (
            <label className="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect"
                   htmlFor="locationControl"
                   style={{ }}>
                <input type="checkbox" id="locationControl" className="mdl-icon-toggle__input"
                       checked={this.state.enabled} onChange={ () => this.toggleEnabled() }/>
                <i className="mdl-icon-toggle__label material-icons" style={this.getStyle()}>
                    { this.getIcon() }
                </i>
            </label>
        );
    }
    getIcon() {
        if (!this.state.enabled) return "location_disabled";
        if (this.state.searching) return "location_searching";
        if (this.state.error) return "location_disabled";
        return "gps_fixed";
    }
    getStyle() {
        if (this.state.enabled && this.state.error) {
            return  { color:"red"};
        } else {
            return {};
        }
    }
    toggleEnabled() {
        let newValue = !this.state.enabled;
        this.setState({ enabled: newValue });
        geolocation.setEnabled(newValue);
    }
    createStateObject() {
        return {
            enabled: geolocation.isEnabled(),
            searching: geolocation.isSearching(),
            error: geolocation.hasError()
        }
    }
    onStateChange() {
        this.setState(this.createStateObject());
    }
}

export default LocationControl;
