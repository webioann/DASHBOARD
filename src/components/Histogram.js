import React from 'react';
import { useSelector } from 'react-redux';
import useChartDataCreator from '../hooks/useChartDataCreator';
import '../LESS/histogram.less';

function Histogram() {
    const lang = useSelector((state) => state.dialect.lang);
    const { fraction, array } = useChartDataCreator();

    return (
        <ul className="histogram">
            {array.map((unit) => {
                if (unit.code !== 'ALL') {
                    // ignored first unit with key 'ALL'
                    return (
                        <li className="chart-item" key={unit.code}>
                            <div className="chart-title">
                                {lang === 'eng' ? unit.nameEng : unit.nameUkr}
                            </div>
                            <div className="hist-box">
                                <div
                                    className="histogram-item"
                                    style={{
                                        backgroundColor: unit.color,
                                        width: `${unit.dataVolum * fraction}px`,
                                    }}
                                >
                                    {unit.dataVolum}
                                </div>
                            </div>
                        </li>
                    );
                } else {
                    return null;
                }
            })}
        </ul>
    );
}

export default Histogram;
