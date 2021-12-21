import React from 'react'
import useTranslator from '../hooks/useTranslator'

function Title(props) {
    return (
        <p className="title">
            {useTranslator(props.text)}
        </p>
    )
}
export default Title;
