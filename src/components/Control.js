import React from 'react'
import './app.scss'
import {useDispatch,useSelector} from "react-redux";

function Control() {

    const dispatch = useDispatch()
    const control = useSelector( state => state.control.control)
    const user = useSelector( state => state.control.user)
    const age = useSelector( state => state.control.age)

    
    const types = ["STEP1", "STEP2", "STEP3"];

    function step1() {
        for( let i = 0; i < types.length; i++ ) {
            dispatch({type: types[i], payload: {}})
        }
        
    }
    return (
        <div className="control">
            <p>Control</p>
            <p>{`control => ${control}`}</p>
            <p>{`user => ${user}`}</p>
            <p>{`age => ${age}`}</p>
            <button onClick={step1}>STEP</button>
        </div>
    )
}

export default Control;
