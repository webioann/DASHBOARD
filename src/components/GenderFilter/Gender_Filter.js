import React from 'react'
import { useDispatch,useSelector } from "react-redux"
import { getGender } from '../../Redux/reduxSlice'
import { multyLang } from '../../data/multiLang'
import useTranslator from '../../hooks/useTranslator'
import { ImCheckboxChecked,ImCheckboxUnchecked } from "react-icons/im"
import './gender-filter.css'

function Gender_Filter({ type }) {

    const buttonId = type
    let text = ''
    const dispatch = useDispatch()
    const gender = useSelector(state => state.redux.gender)
    const themeMode = useSelector(state => state.dialect.themeMode)

    if( type === 'both-sex' ) {
        text = useTranslator(multyLang.boothGender)
    }
    else if( type === 'female' ) {
        text = useTranslator(multyLang.femaleGender)
    }
    else if( type === 'male' ) {
        text = useTranslator(multyLang.maleGender)
    }
    return (
        <div className="row">
            <div className={(gender === buttonId) 
                ? `button-${themeMode} active-${themeMode}` : `button-${themeMode}`}
                onClick={() => {dispatch(getGender(buttonId))}}>
                <i className={`checkbox-${themeMode}`}>
                    {gender === buttonId ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                </i>
                { text }
            </div>
        </div>
    )
}
export default Gender_Filter;
