import React from 'react'
import ToolTip from './ToolTip'
import {useDispatch,useSelector} from "react-redux"
import { setRequestSize } from '../Redux/paginSlice'
import { showModal,getToolTipId } from '../Redux/dialectSlice'
import { ImCross } from "react-icons/im"
import { tool_tip_reqestSise } from '../data/multiLang'
import './style/requestSize.css'

function RequestSize() {

    const dispatch = useDispatch()
    const requestSize = useSelector(state => state.pagin.requestSize)
    const themeMode = useSelector(state => state.dialect.themeMode)

    const setSize = (event) =>{
        dispatch(setRequestSize(Number(event.target.id)))
        dispatch(event.target.id)
    }
    const small = 50
    const medium = 150
    const big = 250

    return (
        <div className="requst-size">
                {/* FIXME: delete this */}
                <ImCross onClick={() => {dispatch(showModal(true))}}/>  

            <div className={requestSize === small 
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={small}
                onClick={setSize}>
                {small}
                <ToolTip text={tool_tip_reqestSise}/>
            </div>
            <div className={requestSize === medium
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={medium}
                onClick={setSize}>
                {medium}
                <ToolTip text={tool_tip_reqestSise}/>
            </div>
            <div className={requestSize === big 
                ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                id={big}
                onClick={setSize}>
                {big}
                <ToolTip text={tool_tip_reqestSise}/>
            </div>
        </div>
    )
}
export default RequestSize;

