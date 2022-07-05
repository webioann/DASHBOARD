import React from 'react'
import './modal.less'

function Modal({ children }) {

    return (
        <div  className='modal-container'>
            <div className='modal-window'>
                { children }
            </div>
        </div>
    )
}
export default Modal;
