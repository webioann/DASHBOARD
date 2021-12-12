import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux"
import { getGender } from '../Redux/reduxSlice'
import { ImCheckboxChecked,ImCheckboxUnchecked } from "react-icons/im"
import './genderButton.css'

function GenderButton(props) {

    const dispatch = useDispatch()
    const id = props.id
    const activeGender = useSelector(state => state.redux.gender)
    const[btnText,setBtnText] = useState('')

    useEffect(() => {
        if( id === 'both-sex') {setBtnText('both sex')}
        else if( id === 'male') {setBtnText('only men')}
        else if( id === 'female') {setBtnText('only women')}
    },[])

    return (
        <div className="row">
            <div className={(activeGender === id) ? 'button active' : 'button'}
                onClick={() => {dispatch(getGender(id))}}>
                <i>{(activeGender === id) ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}</i>
                {btnText}
            </div>
        </div>
    )
}
export default GenderButton;


