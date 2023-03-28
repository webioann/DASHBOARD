import React from 'react';
import { useSelector } from 'react-redux';
import { rangeTitle } from '../data/textContent';
import useGenderHistogram from '../hooks/useGenderHistogram';
import '../LESS/range-box.less';

function RangeBox() {
    const lang = useSelector((state) => state.dialect.lang);
    const { totalMen, totalWomen } = useGenderHistogram();

    return (
        <div className="range-box">
            <div className="header">
                <p>{lang === 'eng' ? rangeTitle.eng : rangeTitle.ukr}</p>
            </div>
            <div className="range">
                <div style={{ width: `${totalMen}%` }} className="range-men">
                    {`${lang === 'eng' ? 'men' : 'чоловіки'}  ${totalMen}%`}
                </div>
                <div
                    style={{ width: `${totalWomen}%` }}
                    className="range-women"
                >
                    {`${lang === 'eng' ? 'women' : 'жінки'} ${totalWomen}%`}
                </div>
            </div>
        </div>
    );
}

export default RangeBox;
