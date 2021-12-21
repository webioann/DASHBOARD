import React from 'react'
import './style/box.css'

function Box(props) {
    return (
        <div className="box">
            {props.children} 
        </div>
    )
}

export default Box
