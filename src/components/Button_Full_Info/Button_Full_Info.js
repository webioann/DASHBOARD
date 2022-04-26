import React from 'react'
import { useDispatch } from 'react-redux'
import { showModal } from "../../Redux/dialectSlice"
import { getUuid } from '../../Redux/reduxSlice.js'
import { GrContactInfo } from 'react-icons/gr'
import './button_full_info.css'

function Button_Full_Info({ uuid }) {

    const dispatch = useDispatch()

    const viewModal = () => {
        dispatch(getUuid(uuid))
        dispatch(showModal(true))
    }

    return (
        <button onClick={ viewModal }>
            Full info
            <GrContactInfo className='full-info-icon'/>
        </button>
)
}

export default Button_Full_Info;