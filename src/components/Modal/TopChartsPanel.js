import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ImCross } from "react-icons/im"
import { FaRandom,FaSortAmountUp,FaSortAmountDownAlt } from 'react-icons/fa'
import { sort_random,sort_up,sort_down } from '../../Redux/filterSlice'
import ToolTip from '../ToolTip/ToolTip'
import './top-charts-panel.less'

function TopChartsPanel({ closeModal }) {

    const dispatch = useDispatch()
    const active_sorter = useSelector((state) => state.filter.sort_by)

    return (
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
                <ImCross onClick={ closeModal }/>
            </i>
        </div>
    )
}
export default TopChartsPanel;
