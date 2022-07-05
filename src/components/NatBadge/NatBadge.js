import React from 'react'
import nations from '../../data/nations'

function NatBadge({ userNat }) {

    let currentNation = nations.find(nation => nation.code === userNat)
    
    const cell = {
        paddingTop: '5px',
        paddingLeft: '15px', 
        marginRight: '5px',
    }
    const bg = {
        backgroundColor: currentNation.color,
        borderRadius: '3px',
        padding: '0 5px 3px 5px',
        color: 'beige',
    }

    return (
        <p style={cell}>
            <span style={bg}>
                {currentNation.nameEng}
            </span>
        </p>
    )
}

export default NatBadge;