import React from "react"
import { FaChartLine } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { show_chart_modal } from "../../Redux/dialectSlice"
import { tool_tip_chartButton } from "../../data/textContent"
import ToolTip from "../ToolTip/ToolTip"
import "./chart-button.css"

function ChartButton() {

    const dispatch = useDispatch()
    const themeMode = useSelector((state) => state.dialect.themeMode)
    
    return (
        <ToolTip text={tool_tip_chartButton}>
            <span className={`chart-button-box-${themeMode}`}>
                <FaChartLine
                    className={`chart-button-${themeMode}`}
                    onClick={() => dispatch(show_chart_modal(true))}
                />
            </span>
        </ToolTip>
    )
}

export default ChartButton;
