import React from 'react'
import { useDispatch,useSelector } from "react-redux"
import User from './User.jsx'

import './main.css'

function Main() {

    let gender = useSelector(state => state.redux.gender)
    return (
        <div className='main'>
            <User/>
        </div>
    )
}

export default Main;
