import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux"
import  nations  from '../../data/nations'
import './histogram.css'

function Histogram() {

    const lang = useSelector((state) => state.dialect.lang)
    nations.map(item => { Object.assign( item , { size: 200 } )})

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
                        style={{ backgroundColor: unit.color, width: `${unit.size}px`}}>
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

// onClick={() => { console.log(`DATA --> ${data} == ${JSON.stringify(nations)}`) }}


// (<li className="chart-item" key={unit.code} ></li>))}