import React from 'react'
import './main.css'

function Main(props) {

    return (
        <div className='main'>
            {props.children}
        </div>
    )
}
export default Main;
