import React from 'react'
import useGenderHistogram from '../../hooks/useGenderHistogram'


function RangeBox() {

    const { totalMen,totalWomen } = useGenderHistogram()

    return (
        <div className="range-box">
            <header className="header">
                <h3>
                    { lang === 'eng' ? nations[0].rangeTitleEng : nations[0].rangeTitleRus }
                </h3>
            </header>
            <div className="range">
                <div style={{width: `${totalMen}%`}} className="range-men">
                    {`${ lang === 'eng' ? 'men' : 'чоловіки'}  ${totalMen}%`}
                </div>
                <div style={{width: `${totalWomen}%`}} className="range-women">
                    {`${ lang === 'eng' ? 'women' : 'жінки'} ${totalWomen}%`}
                </div>
            </div>
        </div>
    )
}

export default RangeBox;