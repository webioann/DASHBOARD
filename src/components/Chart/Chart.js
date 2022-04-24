import React from 'react'
import { useSelector } from "react-redux"
import  nations  from '../../data/nations'
import './chart.less'

function Chart(props) {

    const lang = useSelector((state) => state.dialect.lang)
    const requestSize = useSelector(state => state.redux.requestSize) 

    return (
        <div className="chart">
            <header>
                <h3>
                    { lang === 'eng' ? nations[0].chartTitleEng : nations[0].chartTitleRus }
                </h3>
                <span>{requestSize}</span>
            </header>
            {props.children}
        </div>
    )
}

export default Chart;