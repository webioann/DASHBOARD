import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {bigAction,mediumAction,smallAction,xsmallAction} from '../REDUX/Reducers/paginatReducer.js'

import './app.scss'

function Paginat() {

    const dispatch = useDispatch()
    const paginat = useSelector(state => state.paginator.paginat)
    const[value,setValue] = useState(5)

    function select (event,paginat) {
        setValue(Number(event.target.value))
        console.log(`first value ===> ${value}`);
        if( value === 20 )
            { paginat = value 
            dispatch(bigAction(20)) 
            setValue(event.target.value)}
        else if( value === 15 )
            { paginat = value
            dispatch(mediumAction(15)) 
            setValue(event.target.value)}
        else if( value === 10 )
            { paginat = value
            dispatch(smallAction(10)) 
            setValue(event.target.value)}
        else if( value === 5 )
            { paginat = value
            dispatch(xsmallAction(5)) 
            setValue(event.target.value)}           
    };

    useEffect(() => {
        console.log(`value RESTART===> ${value}`);
    },[paginat]);

     console.log(`paginat ===> ${paginat}`);
    console.log(`value ===> ${value}`);
    return ( 
        <form className="paginator col-3" >
            <select onChange={select} value={value}>
                <option value ={5} >5 users on page</option>
                <option value ={10} >10 users on page</option>
                <option value ={15} >15 users on page</option>
                <option value ={20} >20 users on page</option>
            </select>              
        </form>
    )
}

export default Paginat;

{/* <option value={value}>5 users on page</option>
<option value={value}>10 users on page</option>
<option value={value}>15 users on page</option>
<option value={value}>20 users on page</option> */}


// if( value === big ) {  }
// else if( pagin === "15 users on page" ) { medium() }
// else if( pagin === "10 users on page" ) { small() }
// console.log(`paginat after Click => ${paginat}`);

// {optio.map( (item) => (  
//     <option key={item} value={item}>{item}</option>))}

// if( value === "20 users on page") { big() }
// else if( value === "15 users on page" ) { medium() }
// else if( value === "10 users on page" ) { small() }
// else if( value === "5 users on page" ) { xsmall() }


    // const optio = ["5 users on page",
    //     "10 users on page",
    //     "15 users on page",
    //     "20 users on page"];

    
    // useEffect(( ) => {
    //     const xsmall = () => { dispatch(xsmallAction(pag)) }
    //     xsmall()
    // },[]);

    
    // const medium = () => { dispatch(mediumAction(paginat)) }
    // const small = () => { dispatch(smallAction(paginat)) }
    // const xsmall = () => { dispatch(xsmallAction(paginat)) }
    // const big = () => { dispatch(bigAction(paginat)) }






