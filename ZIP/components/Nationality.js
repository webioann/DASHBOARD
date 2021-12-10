import React from 'react';
import nations from '../CONSTANTS/nations'
import './app.css'

function Nationality(props) {

    let currentNation = nations.filter(nation => nation.code === props.user.nat)
    let nationality = currentNation[0].name

    return (
        <div className='nation col'>
            {nationality}
        </div>
    )
}
export default Nationality;