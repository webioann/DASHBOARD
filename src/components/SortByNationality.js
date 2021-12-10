import React,{useState} from 'react'
import national from './national.js'
import {useDispatch} from "react-redux";
import {chooseNatioAction} from '../REDUX/Reducers/natioReducer.js'
import './app.scss'

function SortByNationality(props) {
    
    const dispatch = useDispatch();
    let nationalityList = [];
    let nationalityCode = [];

    for(let key in national) {
        nationalityList.push(national[key]);
        nationalityCode.push(key);
    }
    const[clicky,setClicky] = useState(false);
    const[show,setShow] = useState("list hidden");
    const [activeNatio,setAciveNatio] = useState("nationality")

    function showList(event) {
        if(show === "list hidden" && !clicky) {
            setShow("list show");
            setClicky( true );
        }
        else if (show === "list show" && clicky) {
            setShow("list hidden");
            setAciveNatio(national[event.target.type])
            dispatch(chooseNatioAction(event.target.type));
            setTimeout(() => { setClicky(false); },300 );
            console.log(`event.target.type => ${event.target.type}`);
            console.log(`nationality ==> ${activeNatio}`);
        }
    }
    if(clicky) {
        return (
            <div className='btn-box nationality-sort row'>
                <div onClick={showList} className="btn">{activeNatio}</div>
                <ul className= {show}>
                    {nationalityCode.map((code,key) =>(<li 
                    onClick={showList} key={key} type={code} >
                    {nationalityList[key]} </li>))}
                </ul>
            </div>
            )
    } else {
        return (
            <div className='btn-box nationality-sort row'>
                <div onClick={showList} className="btn">{activeNatio}</div>
            </div>
        )
    }
}
export default SortByNationality;







