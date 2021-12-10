import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { setRequestSize } from '../Redux/reduxSlice'
import './requstSize.css'

function RequestSize() {

    const dispatch = useDispatch()
    const requestSize = useSelector(state => state.redux.requestSize)

    const setSize = (event) =>{
        dispatch(setRequestSize(Number(event.target.id)))
    }
    const small = 50
    const medium = 140
    const big = 550

    return (
        <div className="requst-size">
                <div className={requestSize === small ? 'sizer active' : 'sizer'}
                    id={small}
                    onClick={setSize}>
                        {small} 
                </div>
                <div className={requestSize === medium ? 'sizer active' : 'sizer'}
                    id={medium} 
                    onClick={setSize}>
                        { medium }
                </div>
                <div className={requestSize === big ? 'sizer active' : 'sizer'}
                    id={big} 
                    onClick={setSize}>
                        {big} 
                </div>
        </div>
    )
}
export default RequestSize;

