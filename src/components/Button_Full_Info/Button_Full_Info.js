import React from 'react'
import { useDispatch } from 'react-redux'
import { getUuid } from '../../Redux/reduxSlice.js'
import { GrContactInfo } from 'react-icons/gr'
import './Button_Full_Info.css'

function Button_Full_Info({ uuid }) {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {dispatch(getUuid(uuid))}}>
            Full info
            <GrContactInfo className='full-info-icon'/>
        </button>
)
}

export default Button_Full_Info;