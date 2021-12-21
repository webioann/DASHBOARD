import React from 'react'
import useTranslator from '../hooks/useTranslator'

function Title(props) {
    
    const styles = {
        textAlign: 'center',
        marginBottom: '10px',
    }
    
    return (
        <p style={styles}>
            {useTranslator(props.text)}
        </p>
    )
}
export default Title;
