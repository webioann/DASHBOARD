import React from 'react'
import { FaRandom,FaSortAmountUp,FaSortAmountDownAlt } from 'react-icons/fa'
import { sort_random,sort_up,sort_down } from '../../Redux/filterSlice'
import './sorter.scss'

function Sorter() {

    return (
        <div className='sorter'>
            <i className="sort-random">
                <FaRandom onClick={() => dispatch(sort_random())}/>
            </i>
            <i className="sort-up">
                <FaSortAmountUp onClick={() => dispatch(sort_up())}/>
            </i>
            <i className="sort-down">
                <FaSortAmountDownAlt onClick={() => dispatch(sort_down())}/>
            </i>
        </div>
    )
}

export default Sorter;