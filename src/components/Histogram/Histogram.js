import React from 'react'
import { useSelector } from "react-redux"
import  nations  from '../../data/nations'
import useHistogramData from '../../hooks/useHistogramData'
import useGenderHistogram from '../../hooks/useGenderHistogram'
import './histogram.css'

function Histogram() {

    const lang = useSelector((state) => state.dialect.lang)
    const requestSize = useSelector(state => state.pagin.requestSize)
    // const active = useSelector(state => state.dialect.modalVisibility)
    const fraction = useHistogramData()
    const { totalMen,totalWomen } = useGenderHistogram()
    
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
            <div className="range-box">
                <header className="header">
                    <h3>
                        { lang === 'eng' ? nations[0].rangeTitleEng : nations[0].rangeTitleRus }
                    </h3>
                </header>
                <div className="range">
                    <div style={{width: `${totalMen}%`}} className="range-men">
                        {`men  ${totalMen}%`}
                    </div>
                    <div style={{width: `${totalWomen}%`}} className="range-women">
                        {`women  ${totalWomen}%`}
                    </div>
                </div>
            </div>
        </ul>
    )
}
export default Histogram;

