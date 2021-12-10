import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {chooseNatioAction} from '../REDUX/Reducers/natioReducer.js'
import './app.scss'

function Restarter() {
    const dispatch = useDispatch()
    const natio = useSelector(state => state.natio.natio)
    const[restart,setRestart] = useState(false);

    function restarter() {
        setRestart(!restart);
        ( natio === "ALL") ? (
            dispatch(chooseNatioAction("CA"))
        )
        :(dispatch(chooseNatioAction("ALL")))
        console.log(natio);
    }

    return (
        <div className="btn-box restart row" onClick={restarter}>
            <div className="btn col">restart</div>
        </div>
    )
}

export default Restarter;
