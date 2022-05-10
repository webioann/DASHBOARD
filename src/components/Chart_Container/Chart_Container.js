import React from 'react'
import { useSelector } from "react-redux"
import { chartTitle } from '../../data/textContent'
import './chart_container.less'

function Chart_Container(props) {

    const lang = useSelector((state) => state.dialect.lang)
    const requestSize = useSelector(state => state.redux.requestSize) 

    return (
        <div className="chart-container">
            <header>
                <h3>
                    { lang === 'eng' ? chartTitle.eng : chartTitle.ukr }
                </h3>
                <span>{requestSize}</span>
            </header>
            {props.children}
        </div>
    )
}
export default Chart_Container;