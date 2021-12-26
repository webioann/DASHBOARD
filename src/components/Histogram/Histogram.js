import React from 'react'
import { useSelector } from "react-redux"
import  nations  from '../../data/nations'
import useChartDataCreator from '../../hooks/useChartDataCreator'
import './histogram.css'

function Histogram() {

    const lang = useSelector((state) => state.dialect.lang)
    const requestSize = useSelector(state => state.pagin.requestSize)

    let fraction = ''
    if( requestSize === 50 ) { fraction = 100 }
    if( requestSize === 150 ) { fraction = 33 }
    if( requestSize === 250 ) { fraction = 20 }

    const wrong = useChartDataCreator()

    // console.log(`Histog ==> ${JSON.stringify(nations)}`)

    return (
        <ul className="chart">
            <div className="title-for">
                { lang === 'eng' ? nations[0].nameEng : nations[0].nameRus }
            </div>
            { nations.map( unit  => { if (unit.code !== 'ALL') {
                return <li className="chart-item" key={unit.code} >
                    <span className="chart-title">
                        { lang === 'eng' ? unit.nameEng : unit.nameRus }
                    </span>
                    <div className="histogram" 
                        style={{ backgroundColor: unit.color, width: `${unit.dataVolum * fraction}px`}}>
                            {unit.dataVolum}
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

