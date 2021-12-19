import React from 'react'
import useTranslator from '../hooks/useTranslator'
import './toolTip.css'


function ToolTip(props) {
    return (
        <div className="tool-tip">
            <span className="tail"></span>
            {useTranslator(props.text)}
        </div>
    )
}
export default ToolTip;
