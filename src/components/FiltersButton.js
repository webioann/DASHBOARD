import React from 'react'
import { FiFilter } from "react-icons/fi"
import { useDispatch,useSelector } from "react-redux"
import { panelShow,panelHide } from '../Redux/reduxSlice'
import './style/filtersButton.css'


export function FiltersButton() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)
    const panel = useSelector(state => state.redux.panel)

    const showPanel = () => {
        panel === 'hide' ? dispatch(panelShow()) : dispatch(panelHide())
        
    }

    return (
        <span className={`filters-button-box-${themeMode}`}>
            <FiFilter className={`filters-button-${themeMode}`} onClick={showPanel}/>
        </span>
    )
};
