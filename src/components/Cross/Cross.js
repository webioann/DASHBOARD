import React from 'react'
import { ImCross } from "react-icons/im"
import { useDispatch,useSelector } from "react-redux"
import { sideBarHide } from '../../Redux/dialectSlice'
import './cross.css'

function Cross() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)

    return (
        <span className={`cross-box-${themeMode}`}>
            <ImCross 
                className={`cross-${themeMode}`}
                onClick={() => dispatch(sideBarHide())}/>
        </span>
    )
}
export default Cross;
