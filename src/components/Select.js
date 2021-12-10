import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {bigAction,mediumAction,smallAction,xsmallAction} from '../REDUX/Reducers/paginatReducer.js'

import './app.scss'

function Select() {
    /**List for custom select-form */
    const list = [
        {key: 1, text: "10 users on page"},
        {key: 2, text: "15 users on page"},
        {key: 3, text: "20 users on page"},
        {key: 4, text: "5 users on page"},
    ]
    const dispatch = useDispatch()
    const[value,setValue] = useState(list[0].text)
    // const[id,setId] = useState(5)

    function select(event){
        console.log(`event.target.value <=> ${event.target.value}`);
        if( event.target.value === "20 users on page") {
            dispatch(bigAction(20))
            setValue(event.target.value)
        }
        else if( event.target.value === "15 users on page") {
            dispatch(mediumAction(15))
            setValue(event.target.value)
        }
        else if( event.target.value === "10 users on page") {
            dispatch(smallAction(10))
            setValue(event.target.value)
        }
        else if( event.target.value === "5 users on page") {
            dispatch(xsmallAction(5))
            setValue(event.target.value)
        }
    }
    console.log(`value ====> ${value}`);
    return (
        <div className="btn-box row">
            <select className="btn select" onChange={select} >
                {list.map((list) => {
                    return <option className="option" key={list.key} id={list.id} value={list.text}>{list.text}</option>
                })}
            </select>
        </div>
    )
}

export default Select;
