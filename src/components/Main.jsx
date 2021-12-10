import React from 'react'
import { useDispatch,useSelector } from "react-redux"

import './main.css'

function Main() {

    let gender = useSelector(state => state.redux.gender)
    return (
        <div className='main'>
            <h3 className="main-title">
                main = {gender}
            </h3>
        </div>
    )
}

export default Main;
