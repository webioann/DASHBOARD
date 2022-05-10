import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { show_chart_modal } from '../../Redux/dialectSlice'
import { ImCross } from "react-icons/im"
import { FaRandom,FaSortAmountUp,FaSortAmountDownAlt } from 'react-icons/fa'
import { sort_random,sort_up,sort_down } from '../../Redux/filterSlice'
import ToolTip from '../ToolTip/ToolTip'
import './modal.less'

function Modal_for_chart({ children }) {

    const dispatch = useDispatch()
    const active = useSelector((state) => state.dialect.chart_modal)
    const active_sorter = useSelector((state) => state.filter.sort_by)

    return (
        <div  className={ active ? 'modal-container active-modal' : 'modal-container' }>
            <div className={ active ? 'modal-window active-modal-window' : 'modal-window'}>
                <div className="top for-chart">
                    <ToolTip text='default sorting'>
                        <i className={ active_sorter === 'sort random' 
                            ? 'sort-random active-sorter'
                            : 'sort-random'}>
                            <FaRandom onClick={() => dispatch(sort_random())}/>
                        </i>
                    </ToolTip>
                    <i className={ active_sorter === 'sort up' 
                        ? 'sort-up active-sorter'
                        : 'sort-up'}>
                        <FaSortAmountUp onClick={() => dispatch(sort_up())}/>
                    </i>
                    <i className={ active_sorter === 'sort down' 
                        ? 'sort-down active-sorter'
                        : 'sort-down'}>
                        <FaSortAmountDownAlt onClick={() => dispatch(sort_down())}/>
                    </i>
                    <i className="close-cross">
                        <ImCross onClick={() => {
                            dispatch(show_chart_modal(false))
                            dispatch(sort_random())
                        }}/>
                    </i>
                </div>
                { children }
            </div>
        </div>
    )
}
export default Modal_for_chart;
