import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux"
import { getGender } from '../Redux/reduxSlice'
import { multyLang } from '../data/multiLang'
import useTranslator from '../hooks/useTranslator'
import { ImCheckboxChecked,ImCheckboxUnchecked } from "react-icons/im"
import './genderButton.css'

function FemaleGender() {

    const dispatch = useDispatch()
    const activeGender = useSelector(state => state.redux.gender)
    const themeMode = useSelector(state => state.dialect.themeMode)
    const buttonId = 'female'
    
    return (
        <div className="row">
            <div className={(activeGender === buttonId) 
                ? `button-${themeMode} active-${themeMode}` : `button-${themeMode}`}
                onClick={() => {dispatch(getGender(buttonId))}}>
                <i className={`icon-${themeMode}`}>
                    {(activeGender === buttonId) ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                </i>
                { useTranslator(multyLang.femaleGender) }
            </div>
        </div>
    )
}
export default FemaleGender;


