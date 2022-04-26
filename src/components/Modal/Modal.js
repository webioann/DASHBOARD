import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { showModal } from '../../Redux/dialectSlice'
import { ImCross } from "react-icons/im"
import './modal.less'

function Modal(props) {

    const dispatch = useDispatch()
    const active = useSelector(state => state.dialect.modalVisibility) 

    return (
        <div  className={ active ? 'modal-container active-modal' : 'modal-container' }>
            <div className={ active ? 'modal-window active-modal-window' : 'modal-window'}>
                <div className="close-modal">
                    <i className="cross">
                        <ImCross onClick={() => {dispatch(showModal(false))}}/>
                    </i>
                </div>
                { props.children }
            </div>
        </div>
    )
}
export default Modal;
