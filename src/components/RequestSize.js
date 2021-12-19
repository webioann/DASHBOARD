import React from 'react'
import ToolTip from './ToolTip'
import {useDispatch,useSelector} from "react-redux"
import { setRequestSize } from '../Redux/paginSlice'
import './requestSize.css'

import { tool_tip_reqestSise } from '../data/multiLang'


function RequestSize() {

    const dispatch = useDispatch()
    const requestSize = useSelector(state => state.pagin.requestSize)
    const themeMode = useSelector(state => state.dialect.themeMode)

    const setSize = (event) =>{
        dispatch(setRequestSize(Number(event.target.id)))
    }
    const small = 50
    const medium = 140
    const big = 550

    return (
        <div className="requst-size">
            <div className="empty">
                <ToolTip text={tool_tip_reqestSise}/>
                <div className={requestSize === small 
                    ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                    id={small}
                    onClick={setSize}>
                    {small}
                </div>
            </div>
            <div className="empty">
                <div className={requestSize === medium
                    ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                    id={medium}
                    onClick={setSize}>
                    {medium}
                </div>
                <ToolTip text={tool_tip_reqestSise}/>
            </div>
            <div className="empty">
                <div className={requestSize === big 
                    ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                    id={big}
                    onClick={setSize}>
                    {big}
                </div>
                <ToolTip text={tool_tip_reqestSise}/>
            </div>

            {/* <div className={requestSize === medium 
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={medium} 
                onClick={setSize}>
                    { medium }
            </div>
            <div className={requestSize === big 
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={big} 
                onClick={setSize}>
                    {big} 
            </div> */}
        </div>
    )
}
export default RequestSize;

