import React,{ useState,useEffect } from 'react'
import { useSelector } from "react-redux"
import  nations  from '../../data/nations'
import useChartDataCreator from '../../hooks/useChartDataCreator'
import './histogram.css'

function Histogram() {

    const lang = useSelector((state) => state.dialect.lang)
    const requestSize = useSelector(state => state.pagin.requestSize)
    const active = useSelector(state => state.dialect.modalVisibility) 

    const wrong = useChartDataCreator()
    const [part,setPart] = useState(0)
    let fraction = ''
    if( requestSize === 50 ) { fraction = 100 }
    if( requestSize === 150 ) { fraction = 33 }
    if( requestSize === 250 ) { fraction = 20 }
    let uni = fraction / 1500

    return (
        <ul className="chart">
            <header className="header">
                <h3>
                    { lang === 'eng' ? nations[0].chartTitleEng : nations[0].chartTitleRus }
                </h3>
                <span>{requestSize}</span>
            </header>
            { nations.map( unit  => { if (unit.code !== 'ALL') {
                return <li className="chart-item" key={unit.code} >
                    <div className="chart-title">
                        { lang === 'eng' ? unit.nameEng : unit.nameRus }
                    </div>
                    <div className="hist-box">
                        <div className="histogram" 
                            style={{ backgroundColor: unit.color, width: `${unit.dataVolum * fraction}px`}}>
                                {unit.dataVolum}
                        </div> 
                    </div>
                </li>
                }else{
                    return null
                }
            })} 
        </ul>
    )
}
export default Histogram;

