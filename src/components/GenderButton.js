import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux"
import { getGender } from '../Redux/reduxSlice'
import { ImCheckboxChecked,ImCheckboxUnchecked } from "react-icons/im"
import './genderButton.css'

function GenderButton(props) {

    const dispatch = useDispatch()
    const buttonId = props.id
    const activeGender = useSelector(state => state.redux.gender)
    const themeMode = useSelector(state => state.dialect.themeMode)
    const lang = useSelector((state) => state.dialect.lang)

    const[btnText,setBtnText] = useState('')

    useEffect(() => {
        if( buttonId === 'both-sex') {setBtnText('оба пола')}
        else if( buttonId === 'male') {setBtnText('только мужчины')}
        else if( buttonId === 'female') {setBtnText('только женщины')}
    },[])

    return (
        <div className="row">
            <div className={(activeGender === buttonId) 
                ? `button-${themeMode} active-${themeMode}` : `button-${themeMode}`}
                onClick={() => {dispatch(getGender(buttonId))}}>
                <i className={`icon-${themeMode}`}>{(activeGender === buttonId) ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}</i>
                { lang === 'eng' ? buttonId : btnText }
            </div>
        </div>
    )
}
export default GenderButton;


