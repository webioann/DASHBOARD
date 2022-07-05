import React from 'react'
import ToolTip from './ToolTip'
import {useDispatch,useSelector} from "react-redux"
import { setRequestSize } from '../Redux/reduxSlice'
import { tool_tip_reqestSise } from '../data/textContent'
import '../CSS/request-size.less'

function RequestSize() {

    const dispatch = useDispatch()
    const requestSize = useSelector(state => state.redux.requestSize)
    const themeMode = useSelector(state => state.dialect.themeMode)

    const setSize = (event) => {dispatch(setRequestSize(Number(event.target.id)))}
    
    const small = 50
    const medium = 180
    const big = 543

    return (
        <ToolTip text={tool_tip_reqestSise}>
            <div className="request-size">
                <div className={requestSize === small ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                    id={small}
                    onClick={setSize}>
                    {small}
                </div>
                <div className={requestSize === medium ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                    id={medium}
                    onClick={setSize}>
                    {medium}
                </div>
                <div className={requestSize === big ? `sizer-${themeMode} active-${themeMode}` : `sizer-${themeMode}`}
                    id={big}
                    onClick={setSize}>
                    {big}
                </div>
            </div>
        </ToolTip>
    )
}

export default RequestSize;

