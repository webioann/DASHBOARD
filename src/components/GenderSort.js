import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {femaleAction,maleAction,allSexAction} from '../REDUX/Reducers/genderReducer.js'

import './app.scss'

function GenderSort() {
    
    const dispatch = useDispatch()
    const gender = useSelector(state => state.gender.gender)
    const [switchClass,setSwitch] = useState("all-sex")

    const bothSexs = () => {dispatch(allSexAction(gender)); setSwitch("all-sex")}
    const onlyWomen = () => {dispatch(femaleAction(gender)); setSwitch("female")}
    const onlyMen = () => {dispatch(maleAction(gender)); setSwitch("male")}

    return (
        <div className="btn-box gender-sort row">
            <div className={switchClass === "all-sex" ? 'btn col-4 active-btn' : 'btn col-4'}
                onClick={bothSexs}>both sexs</div>
            <div className={switchClass === "male" ? 'btn col-4 active-btn' : 'btn col-4'}
                onClick={onlyMen}>only men</div>
            <div className={switchClass === "female" ? 'btn col-4 active-btn' : 'btn col-4'} 
                onClick={onlyWomen}>only women</div>
        </div>
    )
}

export default GenderSort;
