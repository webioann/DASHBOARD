import React,{ useState,useEffect } from 'react'
import { useSelector } from "react-redux"
import  nations  from '../../data/nations'
import useChartDataCreator from '../../hooks/useChartDataCreator'
import './histogram.css'

function Histogram() {

    const lang = useSelector((state) => state.dialect.lang)
    const requestSize = useSelector(state => state.pagin.requestSize)
    const active = useSelector(state => state.dialect.modalVisibility)
    const [menPercent,setMenPercent] = useState('')
    const [womenPercent,setWomenPercent] = useState('')
    

    const { totalMen,totalWomen } = useChartDataCreator()

    useEffect(() => {
        let onePercentage = (totalMen + totalWomen) / 100
        let men = Math.round( onePercentage * totalMen )
        let women = 100 - men
        setMenPercent(`${men}%`)
        setWomenPercent(`${women}%`)
    },[totalMen,totalWomen])
    
    let fraction = ''
    if( requestSize === 50 ) { fraction = 80 }
    if( requestSize === 150 ) { fraction = 40 }
    if( requestSize === 250 ) { fraction = 25 }
    let uni = fraction / 1500

    return (
        <ul className="chart">
            <header className="header">
                <h4>
                    { lang === 'eng' ? nations[0].chartTitleEng : nations[0].chartTitleRus }
                </h4>
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
                <div className="range">
                    <div style={{width: menPercent,backgroundColor: 'blue'}} className="range-men">
                        men
                    </div>
                    <div style={{width: womenPercent,backgroundColor: 'pink'}} className="range-women">
                        women
                    </div>
                </div>
            </div>
        </ul>
    )
}
export default Histogram;

