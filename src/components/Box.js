import React from "react"
import "../CSS/box.less"

function Box(props) {
    
    return (
        <div className="box">
            {props.children}
        </div>
    )
}

export default Box;
