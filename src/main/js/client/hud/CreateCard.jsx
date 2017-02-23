import React from "react";
import * as pacman from "../entities/pacman";

class CreateCard extends React.Component {
    constructor() {
        super();
        this.state = {
            recipe: pacman.getRecipe()
        };
        this.handleChange = this.handleChange.bind(this);
        pacman.updatePacman(this.state.recipe);
    }
    handleChange(event) {
        let newValue = event.target.value;
        this.setState({recipe: newValue});
        pacman.updatePacman(newValue);
    }
    render() {
        return (
            <div className="recipe mdl-card mdl-shadow--4dp" style={{width: '100%'}}>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Create</h2>
                </div>
                <div style={{paddingLeft: '16px',paddingRight: '16px'}}>
                    <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label"
                         style={{width: '100%'}}>
                        <textarea className="mdl-textfield__input" type="text" rows= "7" id="pacman_recipe"
                                  value={this.state.recipe} onChange={this.handleChange}></textarea>
                        <label className="mdl-textfield__label" htmlFor="pacman_recipe">Code</label>
                    </div>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                        onClick={ this.props.handleCreate } >
                        Create
                    </a>
                </div>
            </div>
        );
    }
}

export default CreateCard;
