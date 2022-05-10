import React from 'react'
import './tool-tip.css'

function ToolTip(props) {

    return (
        <span className='tool-tip'>
            {props.text}
        </span>
    )
}
export default ToolTip;
