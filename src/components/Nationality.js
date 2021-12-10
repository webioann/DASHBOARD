import React from 'react';
import national from './national.js'
import './app.scss'

function Nationality(props) {

    const nation = props.user.nat;
    const result = national[nation]; 
    
    return (
        <div className='nation col'>
            {result}
        </div>
    )
}

export default Nationality;