import React from 'react'
import { useSelector } from "react-redux"
import './sideBar.css'

function SideBar(props) {

    const panel = useSelector(state => state.redux.panel)
    const themeMode = useSelector(state => state.dialect.themeMode)

    return (
        <div className={`side-bar-${themeMode} ${panel}`}>
            {props.children}
        </div>
    )
}
export default SideBar;
