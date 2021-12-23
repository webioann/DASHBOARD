import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { showModal } from '../Redux/dialectSlice.js'
import { ImCross } from "react-icons/im"

import './style/chartModal.css'

function ChartModal() {
    let color_1 = 'red'
    let color_2 = 'orange'
    let color_3 = 'cian'
    let end_1 = 130
    let end_2 = 180
    let startPoint = 0
    let forward = `from ${startPoint}deg,`
    let field_1 = `${color_1} ${startPoint}deg ${end_1}deg,`
    let breakLine_1 = `transparent ${end_1}deg ${end_1 + 2}deg,`
    let field_2 = `${color_2} ${end_1 + 2}deg ${end_2}deg,`
    let breakLine_2 = `transparent ${end_2}deg ${end_2 + 2}deg,`

    let field_3 = `${color_3} ${end_2 + 2}deg ${startPoint -2}deg`
    let breakLine_3 = `transparent ${startPoint -2}deg ${startPoint}deg,`

    let start = 90
    let conic = {
        // background: `conic-gradient(${forward} ${field_1} ${breakLine_1} ${field_2} ${breakLine_2} ${field_3} ${breakLine_3})`
        background: `conic-gradient(red 36deg, orange 36deg 180deg, yellow 180deg)`
    }
    return (
        <div className="chart-container">
            <div className="chart-box" style={conic}>
                <div className="inset-circle">

                </div>
            </div>
        </div>
    )
}

export default ChartModal;
