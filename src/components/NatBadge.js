import React from 'react';
import nations from '../data/nations'
import './user.css'

function NatBadge(props) {

    let currentNation = nations.filter(nation => nation.code === props.user.nat)
    let nationality = currentNation[0].nameEng

    const bg = {
        backgroundColor: currentNation[0].color,
        borderRadius: '3px',
        padding: '0 5px 3px 5px',
        color: 'beige',
    }
    const cell = {
        paddingTop: '5px',
        paddingLeft: '15px', 
        marginRight: '5px',
    }

    return (
        <p className='cell' style={cell}>
            <span style={bg}>
                {nationality}
            </span>
        </p>
    )
}
export default NatBadge;