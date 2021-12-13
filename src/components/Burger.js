import React from 'react'
import { BsFilterSquare } from "react-icons/bs"
import { useDispatch,useSelector } from "react-redux"
import { panelShow } from '../Redux/reduxSlice'

import './burger.css'

function Burger() {

    const dispatch = useDispatch()
    const panel = useSelector(state => state.redux.panel)

    const showPanel = () => {
        dispatch(panelShow())
        console.log(panel) //TODO: delete soon
    }
    console.log(panel)
    return (
        <span className="burger-box" >
            <BsFilterSquare 
                className="burger"
                onClick={showPanel}
                />
        </span>
    )
}

export default Burger;
