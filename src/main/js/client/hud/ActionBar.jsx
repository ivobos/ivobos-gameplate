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
    }
    render() {
        return (
            <div style={{ bottom:"0px", width:"100%"}}>
                { this.renderContent() }
            </div>
        );
    }
    renderContent() {
        switch(this.state.display) {
            case 'create':
                return (
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-mobile">
                            <CreateCard onCardClosed={ () => this.createCardClosed() }/>
                        </div>
                    </div>
                );
            case 'CreateEntityFAB':
                return (
                    <div style={{ float:"right"}}>
                        <CreateEntityFAB onClick={ this.createClicked } />
                    </div>
                );
        }
    }
    createClicked() {
        this.setState({ display: "create" });
    }
    createCardClosed() {
        this.setState({ display: "CreateEntityFAB" });
    }
}

export default ActionBar;
