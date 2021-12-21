import React from 'react'
import './style/main.css'

function Main(props) {

    return (
        <div className='main'>
            {props.children}
        </div>
    )
}
export default Main;
