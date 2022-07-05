import React from 'react'
import '../CSS/main.less'

function Main(props) {

    return (
        <div className='main'>
            {props.children}
        </div>
    )
}

export default Main;
