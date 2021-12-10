import React from 'react'
import { useDispatch,useSelector } from "react-redux"

import './main.css'

function Main() {

    let gender = useSelector(state => state.redux.gender)
    return (
        <div className='main'>
            <div className="title">
                <h3 className='test'>main = {gender}</h3>
            </div>
        </div>
    )
}

export default Main
