import React, { useState } from "react"
import { FaChartLine } from "react-icons/fa"
import { useSelector } from "react-redux"
import Modal from './Modal'
import TopChartsPanel from './TopChartsPanel'
import ChartsContainer from './ChartsContainer'
import RangeBox from './RangeBox'
import Histogram from './Histogram'
import "../CSS/show-charts.less"

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
