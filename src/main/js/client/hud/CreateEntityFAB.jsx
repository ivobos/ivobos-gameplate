import React from "react";

class CreateEntityFAB extends React.Component {
    render() {
        return (
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
                    onClick={ () => this.props.onClick() }>
                <i className="material-icons">add</i>
            </button>
        );
    }
}

export default CreateEntityFAB;
