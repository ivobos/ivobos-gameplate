import React from "react";
import CursorIcon from "./CursorIcon.jsx";

class CursorLayer extends React.Component {
    render() {
        return (
            <div id="CursorLayer" style={{ position: "absolute", width: "100%", height:"100%",
                display:"flex", justifyContent:"center", pointerEvents: "none"}}>
                <CursorIcon/>
            </div>
        );
    }
}

export default CursorLayer;
