import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from '../Redux/reduxSlice';
import { boothGender, femaleGender, maleGender } from '../data/textContent';
import useTranslator from '../hooks/useTranslator';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import '../LESS/gender-filter.less';

function GenderFilter({ buttonId }) {
    let text = '';
    const dispatch = useDispatch();
    const gender = useSelector((state) => state.redux.gender);
    const theme = useSelector((state) => state.dialect.themeMode);

    if (buttonId === 'both-sex') {
        text = useTranslator(boothGender);
    } else if (buttonId === 'female') {
        text = useTranslator(femaleGender);
    } else if (buttonId === 'male') {
        text = useTranslator(maleGender);
    }

    return (
        <div className="row">
            <div
                className={
                    gender === buttonId
                        ? `button-${theme} active-${theme}`
                        : `button-${theme}`
                }
                onClick={() => {
                    dispatch(setGender(buttonId));
                }}
            >
                <i className={`checkbox-${theme}`}>
                    {gender === buttonId ? (
                        <ImCheckboxChecked />
                    ) : (
                        <ImCheckboxUnchecked />
                    )}
                </i>
                {text}
            </div>
        </div>
    );
}

export default GenderFilter;
