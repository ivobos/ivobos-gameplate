import React from "react";

class CursorIcon extends React.Component {
    constructor() {
        super();
        this.cursorClicked = this.cursorClicked.bind(this);
    }
    render() {
        return (
            <i className="material-icons mdl-color-text--primary"
               style={{ zIndex: 2, alignSelf: "center", fontSize: "24px", opacity: 0.5}}>change_history</i>
        );
    }
    cursorClicked() {
    }
}

export default CursorIcon;
