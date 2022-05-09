import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { show_chart_modal } from '../../Redux/dialectSlice'
import { ImCross } from "react-icons/im"
import { FaRandom,FaSortAmountUp,FaSortAmountDownAlt } from 'react-icons/fa'
import { sort_random,sort_up,sort_down } from '../../Redux/filterSlice'

// import Sorter from '../Sorter/Sorter'
import './modal.less'

function Modal_for_chart({ children }) {

    const dispatch = useDispatch()
    const active = useSelector((state) => state.dialect.chart_modal)

    return (
        <div  className={ active ? 'modal-container active-modal' : 'modal-container' }>
            <div className={ active ? 'modal-window active-modal-window' : 'modal-window'}>
                <div className="top for-chart">
                    <i className="sort-random">
                        <FaRandom onClick={() => dispatch(sort_random())}/>
                    </i>
                    <i className="sort-up">
                        <FaSortAmountUp onClick={() => dispatch(sort_up())}/>
                    </i>
                    <i className="sort-down">
                        <FaSortAmountDownAlt onClick={() => dispatch(sort_down())}/>
                    </i>
                    <i className="close-cross">
                        <ImCross onClick={() => dispatch(show_chart_modal(false))}/>
                    </i>
                </div>
                { children }
            </div>
        </div>
    )
}
export default Modal_for_chart;
