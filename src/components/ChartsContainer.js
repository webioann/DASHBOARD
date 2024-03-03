import React from 'react';
import { useSelector } from 'react-redux';
import { chartTitle } from '../data/textContent';
import '../less/charts-container.less';

function ChartsContainer(props) {
    const lang = useSelector((state) => state.dialect.lang);
    const requestSize = useSelector((state) => state.redux.requestSize);

    return (
        <div className="chart-container">
            <header>
                <h2>
                    {lang === 'eng' ? chartTitle.eng : chartTitle.ukr}{' '}
                    {requestSize}
                </h2>
            </header>
            {props.children}
        </div>
    );
}

export default ChartsContainer;
