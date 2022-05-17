import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { show_user_modal } from '../../Redux/dialectSlice'
import { ImCross } from "react-icons/im"
import './modal.less'

function Modal_for_user({ children }) {

    const dispatch = useDispatch()
    const active = useSelector(state => state.dialect.user_modal) 

    return (
        <div  className={ active ? 'modal-container active-modal' : 'modal-container' }>
            <div className={ active ? 'modal-window active-modal-window' : 'modal-window'}>
                <div className="top">
                    <i className="close-cross">
                        <ImCross onClick={() => dispatch(show_user_modal(false))}/>
                    </i>
                </div>
                { children }
            </div>
        </div>
    )
}

export default Modal_for_user;
