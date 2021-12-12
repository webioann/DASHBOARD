import React from 'react'

const box = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
}
const massage = {
    textTransform: 'uppercase',
    // color: 'darkblue',
    letterSpacing: '2px'
}

function EmptyList() {
    return (
        <div style={box}>
            <h2 style={massage}> no users found by these parameters </h2>
        </div>
    )
}

export default EmptyList
