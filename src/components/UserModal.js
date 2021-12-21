import React from 'react'
import { ImCross } from "react-icons/im"

import './style/userModal.css'

function UserModal() {
    return (
        <div className="user-modal">
            <div className="modal-window">
                <ImCross size='1.5rem' color='red'/>
                MODAL
            </div>
            
        </div>
    )
}

export default UserModal;
