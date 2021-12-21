import React from 'react'
import { ImCross } from "react-icons/im"
import { useDispatch,useSelector } from "react-redux"
import { panelHide } from '../Redux/reduxSlice'
import './style/cross.css'

function Cross() {

    const dispatch = useDispatch()
    const panel = useSelector(state => state.redux.panel)
    const themeMode = useSelector(state => state.dialect.themeMode)

    const hidePanel = () => {
        dispatch(panelHide())
    }

    return (
        <span className={`cross-box-${themeMode}`}>
            <ImCross className={`cross-${themeMode}`}
                onClick={hidePanel}/>
        </span>
    )
}
export default Cross;
