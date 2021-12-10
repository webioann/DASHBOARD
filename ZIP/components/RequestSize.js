import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { setRequestSize } from '../Redux-toolkit/reduxSlice'
import './requstSize.scss'

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
        <div className="requst-size row">
                <div className={requestSize === small ? 'button active col-4' : 'button col-4'}
                    id={small}
                    onClick={setSize}>
                        {small} 
                </div>
                <div className={requestSize === medium ? 'button active col-4' : 'button col-4'}
                    id={medium} 
                    onClick={setSize}>
                        { medium }
                </div>
                <div className={requestSize === big ? 'button active col-4' : 'button col-4'}
                    id={big} 
                    onClick={setSize}>
                        {big} 
                </div>
        </div>
    )
}
export default RequestSize;

