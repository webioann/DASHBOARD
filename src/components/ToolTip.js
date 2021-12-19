import React from 'react'
import useTranslator from '../hooks/useTranslator'
import './toolTip.css'


function ToolTip(props) {
    return (
        <div className="tool-tip">
            <i className="tail"></i>
            {useTranslator(props.text)}
        </div>
    )
}
export default ToolTip;
