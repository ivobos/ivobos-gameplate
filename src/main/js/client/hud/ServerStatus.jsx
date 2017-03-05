import React from "react";
import * as serverConnection from "../network/serverConnection";

class ServerStatus extends React.Component {
    constructor() {
        super();
        this.state = this.createStateObject();
        serverConnection.setChangeListener(() => this.onServerConnectionChange());
    }
    render() {
        return (
            <label className="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect"
                   htmlFor="serverStatus"
                   style={{ }}>
                <input type="checkbox" id="serverStatus" className="mdl-icon-toggle__input"
                       checked={this.state.enabled} onChange={ () => this.toggleEnabled() }/>
                <i className="mdl-icon-toggle__label material-icons">
                    { this.getCloudIcon() }
                </i>
            </label>
        );
    }
    getCloudIcon() {
        if (!this.state.enabled) return "cloud_off";
        if (this.state.connected) return "cloud";
        return "cloud_queue";
    }
    toggleEnabled() {
        let newValue = !this.state.enabled;
        this.setState({ enabled: newValue });
        serverConnection.setEnabled(newValue);
    }
    onServerConnectionChange() {
        this.setState(this.createStateObject());
    }
    createStateObject() {
        return {
            enabled: serverConnection.isEnabled(),
            connected: serverConnection.isConnected()
        }
    }
}

export default ServerStatus;
