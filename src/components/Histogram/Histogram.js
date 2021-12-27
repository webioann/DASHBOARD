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

    // active ? (

    // ) : console.log(`HISTOGRAM IS HIDDEN`)
    // useEffect(() => {
    //     let sum = 0
    //     for( let i = 0; i <= 1500; i++) {
    //         setTimeout(() => { i + uni },1)
    //     }
    //     setPart(sum)
    // },[])

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

