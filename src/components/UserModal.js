import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { showModal } from '../Redux/dialectSlice.js'

import { ImCross } from "react-icons/im"
import './style/userModal.css'

function UserModal() {

    const dispatch = useDispatch()
    const showMod = useSelector(state => state.dialect.showModal) 
    const [showHide,setSH] = useState({display: 'none'})

    useEffect(() => {
        showMod ? setSH({display: 'flex'}) : setSH({display: 'none'})
    },[showMod])

    return (
        <div style={showHide} className="user-modal">
            <div className="modal-window">
                <div className="full-info">
                    MODAL
                </div>
                <ImCross size='1.5rem' color='red'
                    onClick={() => { dispatch(showModal(false))} }
                />
            </div>
        </div>
    )
}

export default UserModal;
