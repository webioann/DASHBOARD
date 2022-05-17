import React from "react"
import { FiFilter } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { sideBarShow, sideBarHide } from "../../Redux/dialectSlice"
import "./filters-button.css"

function FiltersButton() {

    const dispatch = useDispatch()
    const themeMode = useSelector((state) => state.dialect.themeMode)
    const sideBarStatus = useSelector((state) => state.dialect.sideBarStatus)

    const showSideBar = () => {
        sideBarStatus === "hide" ? dispatch(sideBarShow()) : dispatch(sideBarHide())
    }

    return (
        <span className={`filters-button-box-${themeMode}`}>
            <FiFilter
                className={`filters-button-${themeMode}`}
                onClick={showSideBar}
            />
        </span>
    )
}

export default FiltersButton;
