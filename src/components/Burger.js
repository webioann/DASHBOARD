import React from 'react'
import { FiFilter } from "react-icons/fi"
import { useDispatch,useSelector } from "react-redux"
import { panelShow } from '../Redux/reduxSlice'
import './style/burger.css'

function Burger() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)

    const showPanel = () => {
        dispatch(panelShow())
    }
    return (
        <span className={`burger-box-${themeMode}`}>
            <FiFilter className={`burger-${themeMode}`} onClick={showPanel}/>
        </span>
    )
}
export default Burger;
