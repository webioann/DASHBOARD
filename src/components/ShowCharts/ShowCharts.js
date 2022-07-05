import React, { useState } from "react"
import { FaChartLine } from "react-icons/fa"
import { useSelector } from "react-redux"
import { tool_tip_chartButton } from "../../data/textContent"
import ToolTip from "../ToolTip/ToolTip"
import Modal from '../Modal/Modal'
import TopChartsPanel from '../Modal/TopChartsPanel'
import ChartsContainer from '../ChartsContainer/ChartsContainer'
import RangeBox from '../RangeBox/RangeBox'
import Histogram from '../Histogram/Histogram'
import "./show-charts.css"

function ShowCharts() {

    const themeMode = useSelector((state) => state.dialect.themeMode)
    const [modal,setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    return (
        <span className={`chart-button-box-${themeMode}`}>
            {modal ? (
                <Modal modal={modal}>
                    <TopChartsPanel closeModal={closeModal}/>
                    <ChartsContainer>
                        <Histogram/>
                        <RangeBox/>
                    </ChartsContainer>
                </Modal>) 
                : null
            }
            <FaChartLine
                className={`chart-button-${themeMode}`}
                onClick={ setModal(true) }
            />
        </span>
    )
}

export default ShowCharts;
