import React from 'react'
import ToolTip from '../ToolTip/ToolTip'
import {useDispatch,useSelector} from "react-redux"
import { setRequestSize } from '../../Redux/reduxSlice'
// import { tool_tip_reqestSise } from '../../data/multiLang'
import './request-size.css'

function RequestSize() {

    const dispatch = useDispatch()
    const requestSize = useSelector(state => state.redux.requestSize)
    const themeMode = useSelector(state => state.dialect.themeMode)

    const setSize = (event) =>{
        dispatch(setRequestSize(Number(event.target.id)))
    }
    
    const small = 50
    const medium = 180
    const big = 543

    return (
        <div className="request-size">
            <div  style={{position: 'relative'}}
                className={requestSize === small 
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={small}
                onClick={setSize}>
                {small}
                <ToolTip text={'text'}/>
            </div>
            <div style={{position: 'relative'}}
                className={requestSize === medium
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={medium}
                onClick={setSize}>
                {medium}
                <ToolTip text={'text'}/>
            </div>
            <div  style={{position: 'relative'}}
                className={requestSize === big 
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={big}
                onClick={setSize}>
                {big}
                <ToolTip text={'text'}/>
            </div>
        </div>
    )
}
export default RequestSize;

