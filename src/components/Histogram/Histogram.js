import React from 'react';
import './histogram.css'
import { dataJson } from './dataJson'

function Histogram() {
    return (
        <ul className="chart">
            { dataJson.map(( cartUnit) => (<li className="chart-item" key={cartUnit.code} >
            <span className="chart-title">{cartUnit.nameEng}</span>
            <div className="histogram" 
                style={{ backgroundColor: cartUnit.color, width: `${cartUnit.size}px`}}>
            </div>
            </li>))}
        </ul>
    )
}
export default Histogram;
