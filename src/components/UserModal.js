import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { showModal } from '../Redux/dialectSlice.js'
import { ImCross } from "react-icons/im"
import './style/userModal.css'

function UserModal() {

    const dispatch = useDispatch()
    const modalVisibility = useSelector(state => state.dialect.modalVisibility) 

    return (
        <div  className={ modalVisibility ? 'user-modal active-modal' : 'user-modal' }>
            <div className={modalVisibility ? 'modal-window active-modal-window' : 'modal-window'}>
                <header className="modal-header">
                    <div className="main-info">
                        <div className="foto"></div>
                        <div className="row">
                            <h1 className="name">Patric Newman</h1>
                            <h3 className="age">45 years 7/12/1987</h3>
                        </div>
                    </div>
                    <i className="close-modal">
                        <ImCross onClick={() => { dispatch(showModal(false))}}/>
                    </i>
                </header>

            </div>
        </div>
    )
}

export default UserModal;

