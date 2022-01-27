import React from 'react'
import useTranslator from '../../hooks/useTranslator'
import './tool-tip.css'

function ToolTip(props) {

    return (
        <div className='tool-tip'>
            {useTranslator(props.text)}
        </div>
    )
}
export default ToolTip;
