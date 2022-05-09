import React from "react"
import { FaChartLine } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { showModal,showChart, show_chart_modal } from "../../Redux/dialectSlice"
import "./chart-button.css"

function ChartButton() {
    const dispatch = useDispatch()
    const themeMode = useSelector((state) => state.dialect.themeMode)

    const show_chart = () => {
        dispatch(showModal(true))
        dispatch(showChart(true))

        dispatch(show_chart_modal(true))
    }
    
    return (
        <span className={`chart-button-box-${themeMode}`}>
            <FaChartLine
                className={`chart-button-${themeMode}`}
                onClick={ show_chart }
            />
        </span>
    )
}
export default ChartButton;
