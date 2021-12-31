import React from 'react'
import { FiFilter } from "react-icons/fi"
import { useDispatch,useSelector } from "react-redux"
import { panelShow,panelHide } from '../Redux/dialectSlice'
import './style/filtersButton.css'


function FiltersButton() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)
    const panel = useSelector(state => state.dialect.panel)

    const showPanel = () => {
        panel === 'hide' ? dispatch(panelShow()) : dispatch(panelHide())
        
    }

    return (
        <span className={`filters-button-box-${themeMode}`}>
            <FiFilter className={`filters-button-${themeMode}`} onClick={showPanel}/>
        </span>
    )
}
export default FiltersButton;
