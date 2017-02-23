import React from "react";
import CreateEntityFAB from './CreateEntityFAB.jsx';
import CreateCard from './CreateCard.jsx';

class ActionBar extends React.Component {
    constructor() {
        super();
        this.state = {
            display: "CreateEntityFAB"
        };
        this.createClicked = this.createClicked.bind(this);
        this.createDialogDone = this.createDialogDone.bind(this);
    }
    render() {
        return (
            <div className="hudOverlayBottom">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--1-offset mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone"
                        style={{ textAlign: 'center'}}>
                        { this.renderContent() }
                    </div>
                </div>
            </div>
        );
    }
    renderContent() {
        switch(this.state.display) {
            case 'status':
                return this.renderStatus();
            case 'create':
                return ( <CreateCard handleCreate={ this.createDialogDone }/> );
            case 'CreateEntityFAB':
                return ( <CreateEntityFAB onClick={ this.createClicked }/> );
        }
    }
    createClicked() {
        this.setState({ display: "create" });
    }
    createDialogDone() {
        this.setState({ display: "CreateEntityFAB" });
    }
    renderStatus() {
        return (
            <div className="recipe mdl-card mdl-shadow--4dp" style={{width: '100%'}}>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Object 1234</h2>
                </div>
                <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label"
                     style={{width: '100%', padding: '16px'}}>
                    <textarea className="mdl-textfield__input" type="text" rows= "6" id="pacman_recipe" ></textarea>
                    <label className="mdl-textfield__label" htmlFor="pacman_recipe">Text lines...</label>
                </div>
                <div className="mdl-card__actions">
                    <a href="(URL or function)">Create</a>
                </div>
            </div>
        );
    }
}

export default ActionBar;
