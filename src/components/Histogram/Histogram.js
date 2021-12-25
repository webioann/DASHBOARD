import React,{useState,useEffect} from 'react';
import './histogram.css'
import  nations  from '../../data/nations'

function Histogram() {

    nations.map(item => { Object.assign( item , { size: 200 } )})

    return (
        <ul className="chart">
            { nations.map( unit  => { if (unit.code !== 'ALL') {
                return <li className="chart-item" key={unit.code} >
                    <span className="chart-title">{unit.nameEng}</span>
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