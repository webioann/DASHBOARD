import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { langEng, langUkr } from '../redux/dialectSlice';
import '../less/lang-button.less';

function LangButton() {
    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.dialect.themeMode);
    const lang = useSelector((state) => state.dialect.lang);
    const [margin, setMargin] = useState(0); //margin it is half of width "switcher-box"

    const toggler = (event) => {
        let id = event.target.id;
        if (margin === 0 && id === 'ukr') {
            setMargin(40);
            dispatch(langUkr());
        } else if (margin === 40 && id === 'eng') {
            setMargin(0);
            dispatch(langEng());
        }
    };

    return (
        <div className={`lang-button-${themeMode}`}>
            <div className="switcher-box">
                <span
                    className={
                        lang === 'eng'
                            ? `switcher shade-${themeMode}`
                            : 'switcher'
                    }
                    id="eng"
                    onClick={toggler}
                >
                    eng
                </span>
                <span
                    className={
                        lang === 'ukr'
                            ? `switcher shade-${themeMode}`
                            : 'switcher'
                    }
                    id="ukr"
                    onClick={toggler}
                >
                    ukr
                </span>
            </div>
            <div className="slider-box">
                <span
                    className={`slider-${themeMode}`}
                    style={{ marginLeft: `${margin}px` }}
                ></span>
            </div>
        </div>
    );
}

export default LangButton;
