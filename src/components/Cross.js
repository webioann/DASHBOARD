import React from 'react'
import { ImCross } from "react-icons/im"
import { useDispatch,useSelector } from "react-redux"
import { panelHide } from '../Redux/reduxSlice'
import './cross.css'

function Cross() {

    const dispatch = useDispatch()
    const panel = useSelector(state => state.redux.panel)
    const themeMode = useSelector(state => state.dialect.themeMode)

    const hidePanel = () => {
        dispatch(panelHide())
        console.log(panel)//TODO: delete soon
    }

    return (
        <span className={`cross-box-${themeMode}`}>
            <ImCross className={`cross-${themeMode}`}
                onClick={hidePanel}/>
        </span>
    )
}

export default Cross;
