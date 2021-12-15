import React from 'react';
import nations from '../data/nations'
import './user.css'

function Nationality(props) {

    let currentNation = nations.filter(nation => nation.code === props.user.nat)
    let nationality = currentNation[0].nameEng

    const bg = {
        backgroundColor: currentNation[0].color,
        borderRadius: '3px',
        padding: '0 5px 3px 5px',
        color: 'beige',
        }

    return (
        <p className='cell'>
            <span style={bg}>
                {nationality}
            </span>
        </p>
    )
}
export default Nationality;