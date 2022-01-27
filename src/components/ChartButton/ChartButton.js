import React from "react";
import { FaChartLine } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../Redux/dialectSlice";
import "./chart-button.css";

function ChartButton() {
    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.dialect.themeMode);

    return (
        <span className={`chart-button-box-${themeMode}`}>
            <FaChartLine
                className={`chart-button-${themeMode}`}
                onClick={() => dispatch(showModal(true))}
            />
        </span>
    );
}
export default ChartButton;
