import React from 'react'
import { useSelector} from 'react-redux'

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
    letterSpacing: '2px'
}

function EmptyList() {
    
    const lang = useSelector((state) => state.dialect.lang)

    return (
        <div style={box}>
            <h3 style={massage}>{lang.emptyListMessage}</h3>
        </div>
    )
}

export default EmptyList;
