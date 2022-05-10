import React from 'react'
import './tooltip.css'

function ToolTip({ text,children }) {

    return (
        <div className='tooltip-wraper'>
            <span className='tooltip'>
                { text }
            </span>
            { children }
        </div>
    )
}
export default ToolTip;
