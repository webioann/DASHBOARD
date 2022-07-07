import React from "react"
import { FaChartLine } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import {  showChartsModal } from '../Redux/dialectSlice'
import "../CSS/show-charts.less"

function ShowCharts() {

    const themeMode = useSelector((state) => state.dialect.themeMode)
    const dispatch = useDispatch()

    return (
        <span className={`chart-button-box-${themeMode}`}>
            <FaChartLine className={`chart-button-${themeMode}`}
                onClick={() => dispatch(showChartsModal())}
            />
        </span>
    )
}

export default ShowCharts;
