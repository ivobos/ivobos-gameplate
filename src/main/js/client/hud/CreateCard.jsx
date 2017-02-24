import React from "react";
import * as pacman from "../entities/pacman";

class CreateCard extends React.Component {
    constructor() {
        super();
        this.state = {
            recipe: pacman.getRecipe()
        };
        pacman.updatePacman(this.state.recipe);
    }
    handleChange(event) {
        let newValue = event.target.value;
        this.setState({recipe: newValue});
        pacman.updatePacman(newValue);
    }
    handleCreate(event) {
        pacman.create();
        this.props.onCardClosed();
    }
    handleClear(event) {
        pacman.clear();
        this.props.onCardClosed();
    }
    render() {
        return (
            <div className="recipe mdl-card mdl-shadow--4dp" style={{width: '100%'}}>
                <div style={{paddingLeft: '16px',paddingRight: '16px'}}>
                    <div className="mdl-textfield mdl-js-textfield"
                         style={{width: '100%'}}>
                        <textarea className="mdl-textfield__input" type="text" rows= "7" id="pacman_recipe"
                                  value={this.state.recipe} onChange={ (e) => this.handleChange(e) }></textarea>
                    </div>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                        onClick={ (e) => this.handleCreate(e) } >
                        Create
                    </a>
                    <a className="mdl-button mdl-js-button mdl-button--colored"
                        style={{ float:"right"}}
                        onClick={ (e) => this.handleClear(e) } >
                        <i className="material-icons">clear</i>
                    </a>
                </div>
            </div>
        );
    }
}

export default CreateCard;
